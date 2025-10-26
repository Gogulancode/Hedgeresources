import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import environment checker for debugging
import "./lib/env-check.ts";

createRoot(document.getElementById("root")!).render(<App />);
