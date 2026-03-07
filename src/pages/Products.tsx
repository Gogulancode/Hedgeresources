import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EnquiryModal from "@/components/EnquiryModal";
import { productImages } from "@/lib/productImages";
import heroImage from "@/assets/hero-sustainable.webp";
import SEO from "@/components/SEO";

interface Product {
  id: string;
  name: string;
  category: string;
  short_description: string;
  features: string[];
  isPopular?: boolean;
}

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || "All"
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const categories = [
    "All",
    "Organic Fertilizers",
    "Compostable Bioplastics",
    "Plant Based",
    "100% Cotton Towels",
    "Jute Bags",
    "Cotton Bags",
    "Canvas Bags",
  ];

  const products: Product[] = [
    // ── Organic Fertilizers ──
    {
      id: "vermi-compost",
      name: "Vermi Compost",
      category: "Organic Fertilizers",
      short_description: "Premium quality earthworm processed organic fertilizer for enhanced soil fertility and plant growth.",
      features: ["100% organic", "Rich in nutrients", "Improves soil structure", "Eco-friendly"],
      isPopular: true,
    },
    {
      id: "cow-dung-compost",
      name: "Cow-Dung Compost",
      category: "Organic Fertilizers",
      short_description: "Traditional organic fertilizer made from well-decomposed cow dung, perfect for all crop types.",
      features: ["Natural fertilizer", "Slow release nutrients", "Improves soil health", "Chemical-free"],
    },
    {
      id: "coco-peat",
      name: "Coco Peat",
      category: "Organic Fertilizers",
      short_description: "Excellent growing medium with superior water retention and aeration properties.",
      features: ["Water retention", "Good drainage", "pH neutral", "Renewable resource"],
    },
    {
      id: "neem-powder",
      name: "Neem Powder",
      category: "Organic Fertilizers",
      short_description: "Natural pest deterrent and soil conditioner made from pure neem leaves and bark.",
      features: ["Natural pesticide", "Soil conditioner", "Antimicrobial", "Safe for plants"],
    },
    {
      id: "rice-husk",
      name: "Rice Husk",
      category: "Organic Fertilizers",
      short_description: "Natural soil amendment that improves drainage and provides silica for stronger plants.",
      features: ["Improves drainage", "Rich in silica", "Lightweight", "Natural amendment"],
    },
    {
      id: "steam-bone-meal",
      name: "Steam Bone Meal Granules",
      category: "Organic Fertilizers",
      short_description: "High phosphorus organic fertilizer from steam-processed animal bones for root and flower development.",
      features: ["High phosphorus", "Slow release", "Root development", "Organic certified"],
      isPopular: true,
    },

    // ── Compostable Bioplastics ──
    {
      id: "compostable-dcut-bags",
      name: "Compostable D-Cut Carry Bags",
      category: "Compostable Bioplastics",
      short_description: "CPCB certified D-cut carry bags made from compostable bioplastic, ideal for retail and grocery stores.",
      features: ["CPCB Certified", "100% compostable", "D-cut design", "Retail ready"],
      isPopular: true,
    },
    {
      id: "compostable-wcut-bags",
      name: "Compostable W-Cut Carry Bags",
      category: "Compostable Bioplastics",
      short_description: "W-cut compostable carry bags offering enhanced strength and wider opening for easy packing.",
      features: ["W-cut design", "Enhanced strength", "Compostable", "Eco-friendly"],
    },
    {
      id: "compostable-garbage-bags",
      name: "Compostable Garbage Bags",
      category: "Compostable Bioplastics",
      short_description: "Biodegradable garbage bags that break down naturally, perfect for responsible waste management.",
      features: ["Biodegradable", "Leak-proof", "Multiple sizes", "Home compostable"],
    },
    {
      id: "compostable-garment-bags",
      name: "Compostable Garment Bags",
      category: "Compostable Bioplastics",
      short_description: "Transparent compostable garment covers for fashion and textile packaging needs.",
      features: ["Transparent", "Garment safe", "Compostable", "Dust protection"],
    },
    {
      id: "compostable-grocery-rolls",
      name: "Compostable Grocery Rolls",
      category: "Compostable Bioplastics",
      short_description: "Roll-format compostable bags for grocery stores, supermarkets, and food packaging.",
      features: ["Roll format", "Easy tear", "Food safe", "Compostable"],
    },
    {
      id: "compostable-shrink-film",
      name: "Compostable Shrink Film",
      category: "Compostable Bioplastics",
      short_description: "Eco-friendly shrink wrap film that fully composts, replacing traditional plastic shrink wrap.",
      features: ["Shrink wrap", "Compostable", "Clear finish", "Industrial use"],
    },

    // ── Plant Based ──
    {
      id: "areca-palm-tableware",
      name: "Areca Palm Tableware",
      category: "Plant Based",
      short_description: "Natural tableware made from fallen areca palm leaves — sturdy, elegant, and fully biodegradable.",
      features: ["100% natural", "Biodegradable", "Microwave safe", "Chemical-free"],
      isPopular: true,
    },
    {
      id: "bagasse-tableware",
      name: "Bagasse Tableware",
      category: "Plant Based",
      short_description: "Sugarcane bagasse plates, bowls, and containers — strong, compostable, and food safe.",
      features: ["Sugarcane fiber", "Compostable", "Oil resistant", "Microwave safe"],
    },
    {
      id: "bamboo-products",
      name: "Bamboo Products",
      category: "Plant Based",
      short_description: "Sustainable bamboo-based products including cutlery, straws, and kitchen essentials.",
      features: ["Bamboo material", "Reusable", "Biodegradable", "Antibacterial"],
    },
    {
      id: "kraft-paper-products",
      name: "Kraft Paper Products",
      category: "Plant Based",
      short_description: "Recyclable kraft paper packaging, bags, and food containers for eco-conscious businesses.",
      features: ["Recyclable", "Biodegradable", "Grease resistant", "Customizable"],
    },

    // ── 100% Cotton Towels ──
    {
      id: "bath-towels",
      name: "Bath Towels",
      category: "100% Cotton Towels",
      short_description: "Premium 100% cotton bath towels with superior absorbency and luxurious softness.",
      features: ["100% cotton", "Highly absorbent", "Soft texture", "Durable"],
      isPopular: true,
    },
    {
      id: "hand-face-spa-towels",
      name: "Hand / Face / Spa Towels",
      category: "100% Cotton Towels",
      short_description: "Soft cotton towels sized for hand, face, and spa use — ideal for hospitality and wellness.",
      features: ["Compact size", "Ultra soft", "Quick dry", "Lint-free"],
    },
    {
      id: "pool-towels",
      name: "Pool Towels",
      category: "100% Cotton Towels",
      short_description: "Large, quick-drying cotton pool towels with vibrant colors and chlorine-resistant fabric.",
      features: ["Oversized", "Quick dry", "Chlorine resistant", "Fade resistant"],
    },
    {
      id: "salon-towels",
      name: "Salon Towels",
      category: "100% Cotton Towels",
      short_description: "Bleach-safe cotton towels designed for salon and barbershop daily use.",
      features: ["Bleach safe", "Color fast", "Lightweight", "Economical"],
    },
    {
      id: "hotel-towels",
      name: "Hotel Towels",
      category: "100% Cotton Towels",
      short_description: "Luxury hotel-grade cotton towels with reinforced edges for commercial laundering.",
      features: ["Hotel grade", "Reinforced edges", "Premium cotton", "Long lasting"],
    },

    // ── Jute Bags ──
    {
      id: "jute-different-size-bags",
      name: "Different Size Jute Bags",
      category: "Jute Bags",
      short_description: "Jute bags available in multiple sizes for shopping, gifting, and promotional use.",
      features: ["Multiple sizes", "Eco-friendly", "Sturdy handles", "Reusable"],
      isPopular: true,
    },
    {
      id: "jute-regular-bag",
      name: "Regular Jute Bag",
      category: "Jute Bags",
      short_description: "Classic regular jute shopping bag — simple, strong, and sustainable.",
      features: ["Classic design", "Strong build", "Sustainable", "Affordable"],
    },
    {
      id: "jute-bottle-bags",
      name: "Jute Bottle Bags",
      category: "Jute Bags",
      short_description: "Specially designed jute bags for carrying bottles safely — perfect for wine and beverages.",
      features: ["Bottle fit", "Padded option", "Gift ready", "Reusable"],
    },
    {
      id: "jute-flap-bag",
      name: "Jute Flap Bag",
      category: "Jute Bags",
      short_description: "Jute bag with a stylish flap closure for secure and elegant carrying.",
      features: ["Flap closure", "Secure", "Stylish", "Durable"],
    },
    {
      id: "jute-plain-carry-bag",
      name: "Jute Plain Carry Bag",
      category: "Jute Bags",
      short_description: "Plain jute carry bag — lightweight, printable, and ideal for branding.",
      features: ["Printable", "Lightweight", "Carry handles", "Brandable"],
    },
    {
      id: "jute-plain-pouch-bag",
      name: "Jute Plain Pouch Bag",
      category: "Jute Bags",
      short_description: "Compact jute pouch bag for small items, cosmetics, and gifts.",
      features: ["Compact", "Drawstring", "Gift use", "Natural jute"],
    },
    {
      id: "jute-plain-tote-bags",
      name: "Jute Plain Tote Bags",
      category: "Jute Bags",
      short_description: "Spacious jute tote bags with flat bottom — perfect for everyday shopping.",
      features: ["Tote style", "Flat bottom", "Spacious", "Everyday use"],
    },
    {
      id: "jute-pouch-bags",
      name: "Jute Pouch Bags",
      category: "Jute Bags",
      short_description: "Small jute pouch bags ideal for packaging, return gifts, and accessories.",
      features: ["Pouch style", "Gift packaging", "Compact", "Versatile"],
    },
    {
      id: "jute-zipper-bag",
      name: "Jute Zipper Bag",
      category: "Jute Bags",
      short_description: "Jute bag with a zip closure for added security — great for documents and valuables.",
      features: ["Zip closure", "Secure", "Professional look", "Durable"],
    },
    {
      id: "jute-window-bag",
      name: "Jute Window Bag",
      category: "Jute Bags",
      short_description: "Jute bag with a transparent window for product visibility — ideal for retail display.",
      features: ["Window panel", "Product display", "Retail ready", "Attractive"],
    },

    // ── Cotton Bags ──
    {
      id: "brown-drawstring-cotton-bag",
      name: "Brown Drawstring Cotton Bag",
      category: "Cotton Bags",
      short_description: "Natural brown cotton drawstring bag — versatile for packaging, gifting, and storage.",
      features: ["Drawstring closure", "Brown cotton", "Versatile", "Eco-friendly"],
    },
    {
      id: "cotton-loop-handle-bag",
      name: "Cotton Loop Handle Bag",
      category: "Cotton Bags",
      short_description: "Sturdy cotton bag with loop handles for comfortable carrying and daily shopping.",
      features: ["Loop handles", "Sturdy build", "Comfortable carry", "Reusable"],
    },
    {
      id: "printed-pouch-cotton-bags",
      name: "Printed Pouch Cotton Bags",
      category: "Cotton Bags",
      short_description: "Custom-printed cotton pouch bags — perfect for brand promotion and retail packaging.",
      features: ["Custom prints", "Pouch style", "Brand promotion", "Premium cotton"],
      isPopular: true,
    },
    {
      id: "eco-friendly-cotton-bag",
      name: "Eco-Friendly Cotton Bag",
      category: "Cotton Bags",
      short_description: "100% eco-friendly cotton bag — a sustainable alternative to single-use plastic bags.",
      features: ["Eco-friendly", "100% cotton", "Plastic alternative", "Washable"],
    },
    {
      id: "printed-shopping-cotton-bags",
      name: "Printed Shopping Cotton Bags",
      category: "Cotton Bags",
      short_description: "Vibrant printed cotton shopping bags for retail stores and brand merchandise.",
      features: ["Printed design", "Shopping size", "Brand ready", "Durable"],
    },
    {
      id: "printed-drawstring-bag",
      name: "Printed Drawstring Bag",
      category: "Cotton Bags",
      short_description: "Printed cotton drawstring bags for gifting, events, and promotional giveaways.",
      features: ["Drawstring", "Printed", "Event ready", "Lightweight"],
    },
    {
      id: "cotton-bags-size-options",
      name: "Cotton Bags with Size Options",
      category: "Cotton Bags",
      short_description: "Cotton bags available in multiple sizes to suit different needs and applications.",
      features: ["Multiple sizes", "Customizable", "Versatile", "Bulk order"],
    },

    // ── Canvas Bags ──
    {
      id: "loop-handle-plant-canvas-tote",
      name: "Loop Handle Plant Canvas Tote Bags",
      category: "Canvas Bags",
      short_description: "Trendy canvas tote bags with plant-themed designs and sturdy loop handles.",
      features: ["Plant design", "Loop handles", "Trendy", "Heavy duty"],
    },
    {
      id: "premium-canvas-tote-bags",
      name: "Premium Canvas Tote Bags",
      category: "Canvas Bags",
      short_description: "Premium-quality canvas tote bags with refined stitching and elegant finish.",
      features: ["Premium quality", "Elegant finish", "Durable canvas", "Versatile"],
      isPopular: true,
    },
    {
      id: "loop-handle-promotional-canvas-tote",
      name: "Loop Handle Promotional Canvas Tote Bag",
      category: "Canvas Bags",
      short_description: "Promotional canvas tote bags with loop handles — ideal for corporate gifting and events.",
      features: ["Promotional", "Corporate gifts", "Custom print", "Loop handles"],
    },
    {
      id: "multi-color-canvas-shopping-bag",
      name: "Multi Color Canvas Shopping Bag",
      category: "Canvas Bags",
      short_description: "Colorful multi-tone canvas shopping bags that combine style with sustainability.",
      features: ["Multi color", "Shopping size", "Stylish", "Sustainable"],
    },
  ];

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      "Organic Fertilizers": "Fertilizer",
      "Compostable Bioplastics": "Bioplastic",
      "Plant Based": "Plant Based",
      "100% Cotton Towels": "Towels",
      "Jute Bags": "Jute",
      "Cotton Bags": "Cotton",
      "Canvas Bags": "Canvas",
    };
    return labels[category] || category;
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.short_description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category !== "All") {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handleEnquiry = (product: Product) => {
    setSelectedProduct(product);
    setIsEnquiryOpen(true);
  };

  return (
    <div>
      <SEO
        title="Product Catalog - Sustainable & Eco-Friendly Products"
        description="Browse our complete range of organic fertilizers, compostable bioplastics, eco-friendly bags, cotton totes, jute bags, and sustainable packaging solutions."
        keywords="organic fertilizers, compostable bags, jute bags, cotton bags, sustainable packaging, vermicompost, neem cake, bio products"
        canonicalPath="/products"
      />
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[50vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hedge Resources sustainable product catalog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="section-label text-green-300 mb-4">Our Range</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Product Catalog
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
              Browse our complete range of sustainable products — organic fertilizers, eco-packaging, textiles & more
            </p>
          </div>
        </div>
      </section>

      {/* Main Shop Layout */}
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Mobile Search & Filters */}
            <div className="lg:hidden space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-10 text-sm bg-white border-gray-200 focus:border-green-600 rounded-lg"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-green-700 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-green-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar Filters */}
            <aside className="hidden lg:block lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Search */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-10 text-sm bg-white border-gray-200 focus:border-green-600 rounded-lg"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Categories</label>
                  <div className="space-y-1">
                    {categories.map((category) => {
                      const count = category === "All"
                        ? products.length
                        : products.filter(p => p.category === category).length;
                      return (
                        <button
                          key={category}
                          onClick={() => handleCategoryChange(category)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedCategory === category
                              ? "bg-green-700 text-white font-medium"
                              : "text-gray-600 hover:bg-white hover:text-green-700"
                          }`}
                        >
                          <span>{category}</span>
                          <span className={`text-xs ${selectedCategory === category ? "text-green-200" : "text-gray-400"}`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <p className="text-xs font-semibold text-green-800 mb-1">Need bulk orders?</p>
                  <p className="text-xs text-green-700 mb-3">Custom branding, sizing & packaging available for all products.</p>
                  <Link to="/contact">
                    <Button size="sm" className="w-full bg-green-700 hover:bg-green-800 text-white text-xs">
                      Get Custom Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Product Grid Area */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-semibold text-gray-700">{filteredProducts.length}</span>
                  {selectedCategory !== "All" && <> in <span className="font-semibold text-green-700">{selectedCategory}</span></>}
                  {searchTerm && <> matching &ldquo;<span className="font-semibold text-gray-700">{searchTerm}</span>&rdquo;</>}                </p>
                {(searchTerm || selectedCategory !== "All") && (
                  <button
                    onClick={() => { setSearchTerm(""); handleCategoryChange("All"); }}
                    className="text-xs text-green-700 hover:text-green-800 font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                  <Search className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Products Found</h3>
                  <p className="text-gray-500 text-sm mb-4">Try a different search or category.</p>
                  <Button
                    size="sm"
                    onClick={() => { setSearchTerm(""); handleCategoryChange("All"); }}
                    className="bg-green-700 hover:bg-green-800 text-white"
                  >
                    View All Products
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-200"
                    >
                      {/* Product Image */}
                      <Link to={`/products/${product.id}`} className="block relative aspect-square bg-gray-50 overflow-hidden">
                        <img
                          src={productImages[product.id]}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Badges */}
                        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
                          {product.isPopular && (
                            <span className="bg-amber-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                              Bestseller
                            </span>
                          )}
                        </div>
                        {/* Quick Enquiry overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                        <button
                          onClick={(e) => { e.preventDefault(); handleEnquiry(product); }}
                          className="absolute bottom-3 left-3 right-3 bg-green-700 text-white text-xs font-medium py-2.5 rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:bg-green-800"
                        >
                          <ShoppingCart className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                          Send Enquiry
                        </button>
                      </Link>

                      {/* Product Info */}
                      <div className="p-4">
                        <p className="text-[10px] font-medium text-green-700 uppercase tracking-wider mb-1">
                          {getCategoryLabel(product.category)}
                        </p>
                        <Link to={`/products/${product.id}`}>
                          <h3 className="text-sm font-semibold mb-1.5 group-hover:text-green-700 transition-colors leading-tight">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                          {product.short_description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 3).map((feature, i) => (
                            <span key={i} className="text-[10px] px-1.5 py-0.5 bg-gray-50 text-gray-500 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {selectedProduct && (
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => {
            setIsEnquiryOpen(false);
            setSelectedProduct(null);
          }}
          productId={selectedProduct.id}
          productName={selectedProduct.name}
        />
      )}
    </div>
  );
};

export default Products;
