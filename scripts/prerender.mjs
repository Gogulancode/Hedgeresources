/**
 * Post-build prerender script.
 *
 * After `vite build` produces dist/, this script:
 * 1. Starts a local static server serving dist/
 * 2. Visits each route with Puppeteer
 * 3. Captures the fully-rendered HTML
 * 4. Writes it to dist/<route>/index.html
 *
 * The result: crawlers see full HTML content. Users get the same SPA experience
 * because React hydrates over the static HTML.
 */
import { launch } from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 45678;

const routes = [
  "/",
  "/about",
  "/products",
  "/sustainability",
  "/contact",
  // Organic Fertilizers
  "/products/vermi-compost",
  "/products/cow-dung-compost",
  "/products/coco-peat",
  "/products/neem-powder",
  "/products/rice-husk",
  "/products/steam-bone-meal",
  // Compostable Bioplastics
  "/products/compostable-dcut-bags",
  "/products/compostable-wcut-bags",
  "/products/compostable-garbage-bags",
  "/products/compostable-garment-bags",
  "/products/compostable-grocery-rolls",
  "/products/compostable-shrink-film",
  // Eco-Friendly Tableware
  "/products/areca-palm-tableware",
  "/products/bagasse-tableware",
  "/products/bamboo-products",
  "/products/kraft-paper-products",
  // Towels
  "/products/bath-towels",
  "/products/hand-face-spa-towels",
  "/products/pool-towels",
  "/products/salon-towels",
  "/products/hotel-towels",
  // Jute Bags
  "/products/jute-different-size-bags",
  "/products/jute-regular-bag",
  "/products/jute-bottle-bags",
  "/products/jute-flap-bag",
  "/products/jute-plain-carry-bag",
  "/products/jute-plain-pouch-bag",
  "/products/jute-plain-tote-bags",
  "/products/jute-pouch-bags",
  "/products/jute-zipper-bag",
  "/products/jute-window-bag",
  // Cotton Bags
  "/products/brown-drawstring-cotton-bag",
  "/products/cotton-loop-handle-bag",
  "/products/printed-pouch-cotton-bags",
  "/products/eco-friendly-cotton-bag",
  "/products/printed-shopping-cotton-bags",
  "/products/printed-drawstring-bag",
  "/products/cotton-bags-size-options",
  // Canvas Tote Bags
  "/products/loop-handle-plant-canvas-tote",
  "/products/premium-canvas-tote-bags",
  "/products/loop-handle-promotional-canvas-tote",
  "/products/multi-color-canvas-shopping-bag",
];

// Simple static file server for dist/
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);

      // SPA fallback: if path doesn't have an extension, serve index.html
      if (!filePath.includes(".")) {
        filePath = join(DIST, "index.html");
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split(".").pop();
        const mimeTypes = {
          html: "text/html",
          js: "application/javascript",
          css: "text/css",
          png: "image/png",
          jpg: "image/jpeg",
          webp: "image/webp",
          svg: "image/svg+xml",
          json: "application/json",
          ico: "image/x-icon",
          woff2: "font/woff2",
          woff: "font/woff",
          ttf: "font/ttf",
          xml: "application/xml",
          txt: "text/plain",
          webmanifest: "application/manifest+json",
        };
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
        res.end(content);
      } catch {
        // Fallback to index.html for SPA routing
        try {
          const fallback = readFileSync(join(DIST, "index.html"));
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(fallback);
        } catch {
          res.writeHead(404);
          res.end("Not found");
        }
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  console.log("Starting prerender...\n");

  const server = await startServer();
  const browser = await launch({ headless: true, args: ["--no-sandbox"] });

  let success = 0;
  let failed = 0;

  // Process routes in batches of 5
  for (let i = 0; i < routes.length; i += 5) {
    const batch = routes.slice(i, i + 5);
    await Promise.all(
      batch.map(async (route) => {
        try {
          const page = await browser.newPage();
          await page.goto(`http://localhost:${PORT}${route}`, {
            waitUntil: "networkidle0",
            timeout: 30000,
          });

          // Wait for React to render content into #root
          await page.waitForFunction(
            () => document.querySelector("#root")?.children.length > 0,
            { timeout: 10000 }
          );

          // For product detail pages, wait for the actual product content to render
          // (ProductDetail has a 300ms setTimeout before loading data)
          const isProductPage = route.startsWith("/products/") && route !== "/products";
          if (isProductPage) {
            await page.waitForFunction(
              () => {
                // Wait until the product name heading is in the DOM
                const h1 = document.querySelector("h1");
                return h1 && h1.textContent && h1.textContent.length > 0;
              },
              { timeout: 10000 }
            );
          }

          // Wait for react-helmet-async to update the <head>
          // Helmet adds data-rh="true" to tags it manages
          await page.waitForFunction(
            () => document.querySelector('meta[data-rh="true"]') !== null,
            { timeout: 5000 }
          ).catch(() => {});

          // For product pages, wait until the title includes the product name
          if (isProductPage) {
            await page.waitForFunction(
              () => {
                const h1 = document.querySelector("h1");
                const title = document.title;
                // Title should contain the product name from the h1
                return h1 && h1.textContent && title.includes(h1.textContent.trim());
              },
              { timeout: 10000 }
            ).catch(() => {
              // Fallback: just wait longer
            });
          }

          // Final settle time for all Helmet updates
          await new Promise((r) => setTimeout(r, 500));

          // Capture DOM and clean up duplicate head tags
          let html = await page.evaluate(() => {
            // Remove the inline app-shell (not needed in prerendered pages)
            const appShell = document.querySelector("#root .app-shell");
            if (appShell) appShell.remove();

            // Remove original (non-Helmet) meta tags that Helmet has overridden
            // Helmet tags have data-rh="true", originals don't
            const head = document.head;

            // Remove original title if Helmet set one
            const helmetTitle = head.querySelector('title[data-rh="true"]');
            if (helmetTitle) {
              const origTitles = head.querySelectorAll('title:not([data-rh])');
              origTitles.forEach((t) => t.remove());
            }

            // For each Helmet meta tag, remove the original with same name/property
            const helmetMetas = head.querySelectorAll('meta[data-rh="true"]');
            helmetMetas.forEach((hm) => {
              const name = hm.getAttribute("name");
              const prop = hm.getAttribute("property");
              if (name) {
                head.querySelectorAll(`meta[name="${name}"]:not([data-rh])`).forEach((m) => m.remove());
              }
              if (prop) {
                head.querySelectorAll(`meta[property="${prop}"]:not([data-rh])`).forEach((m) => m.remove());
              }
            });

            return "<!DOCTYPE html>" + document.documentElement.outerHTML;
          });

          html = html.replace(
            '<div id="root">',
            '<div id="root" data-prerendered="true">'
          );

          // Determine output path
          const outDir =
            route === "/"
              ? DIST
              : join(DIST, ...route.split("/").filter(Boolean));

          mkdirSync(outDir, { recursive: true });
          writeFileSync(join(outDir, "index.html"), html, "utf-8");

          console.log(`  ✓ ${route}`);
          success++;
          await page.close();
        } catch (err) {
          console.error(`  ✗ ${route}: ${err.message}`);
          failed++;
        }
      })
    );
  }

  await browser.close();
  server.close();

  console.log(`\nPrerender complete: ${success} succeeded, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

prerender();
