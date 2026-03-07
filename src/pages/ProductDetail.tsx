import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, ArrowLeft, CheckCircle, ShoppingCart, Package, Truck, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { productImages } from "@/lib/productImages";
import SEO from "@/components/SEO";

interface Product {
  id: string;
  name: string;
  category: string;
  short_description: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  benefits: string[];
  usage: string[];
  isPopular?: boolean;
  imageUrl?: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  // Comprehensive product data for all products
  const productData: Record<string, Product> = {
    // ── Organic Fertilizers ──
    "vermi-compost": {
      id: "vermi-compost",
      name: "Vermi Compost",
      category: "Organic Fertilizers",
      short_description: "Premium quality earthworm processed organic fertilizer for enhanced soil fertility and plant growth.",
      description: "Our Vermi Compost is produced through the natural process of vermiculture, where earthworms decompose organic waste materials into nutrient-rich compost. This creates a superior organic fertilizer rich in essential nutrients, beneficial microorganisms, and enzymes that promote healthy plant growth.",
      features: ["100% organic", "Rich in nutrients", "Improves soil structure", "Eco-friendly", "Slow release nutrients", "Contains beneficial microbes"],
      specifications: { "Organic Matter": "35-40%", "Nitrogen": "1.5-2.0%", "Phosphorus": "1.0-1.5%", "Potassium": "1.0-1.5%", "pH Level": "6.5-7.5", "Moisture Content": "25-35%" },
      benefits: ["Increases soil fertility naturally", "Improves water retention capacity", "Enhances root development", "Boosts plant immunity", "Reduces need for chemical fertilizers"],
      usage: ["Mix 1-2 kg per square meter of soil", "Apply during soil preparation", "Can be used for all types of crops", "Suitable for organic farming"],
      isPopular: true,
    },
    "cow-dung-compost": {
      id: "cow-dung-compost",
      name: "Cow-Dung Compost",
      category: "Organic Fertilizers",
      short_description: "Traditional organic fertilizer made from well-decomposed cow dung, perfect for all crop types.",
      description: "Our Cow-Dung Compost is prepared using traditional composting methods with well-aged cow dung. This time-tested organic fertilizer provides slow-release nutrients and improves soil organic matter content, making it an excellent choice for sustainable agriculture.",
      features: ["Natural fertilizer", "Slow release nutrients", "Improves soil health", "Chemical-free", "Traditional method", "Rich in organic matter"],
      specifications: { "Organic Matter": "45-50%", "Nitrogen": "0.8-1.2%", "Phosphorus": "0.6-1.0%", "Potassium": "0.8-1.2%", "pH Level": "7.0-8.0", "Moisture Content": "20-30%" },
      benefits: ["Traditional and proven method", "Improves soil structure", "Adds beneficial microorganisms", "Long-lasting soil improvement", "Cost-effective solution"],
      usage: ["Apply 2-3 kg per square meter", "Mix well with soil before planting", "Ideal for vegetable gardens", "Perfect for fruit trees"],
    },
    "coco-peat": {
      id: "coco-peat",
      name: "Coco Peat",
      category: "Organic Fertilizers",
      short_description: "Excellent growing medium with superior water retention and aeration properties.",
      description: "Our Coco Peat is made from coconut coir fiber, providing an excellent growing medium that retains moisture while ensuring proper aeration. It's completely natural, renewable, and perfect for both indoor and outdoor gardening.",
      features: ["Water retention", "Good drainage", "pH neutral", "Renewable resource", "Disease resistant", "Long lasting"],
      specifications: { "pH Level": "5.5-6.5", "EC Value": "< 1.0 mS/cm", "Water Holding Capacity": "8-10 times its weight", "Expansion Ratio": "1:5 to 1:7", "Fiber Content": "15-20%", "Moisture Content": "15-20%" },
      benefits: ["Excellent water retention", "Provides good drainage", "Lightweight growing medium", "Pest and disease resistant", "Sustainable and eco-friendly"],
      usage: ["Soak in water before use", "Mix with soil 1:1 ratio", "Perfect for seed starting", "Ideal for container gardening"],
    },
    "neem-powder": {
      id: "neem-powder",
      name: "Neem Powder",
      category: "Organic Fertilizers",
      short_description: "Natural pest deterrent and soil conditioner made from pure neem leaves and bark.",
      description: "Our Neem Powder is made from pure neem leaves and bark, providing natural pest control properties while also acting as an excellent soil conditioner. It's completely organic and safe for all types of plants.",
      features: ["Natural pesticide", "Soil conditioner", "Antimicrobial", "Safe for plants", "Organic pest control", "Soil health improver"],
      specifications: { "Azadirachtin Content": "300-500 ppm", "Organic Matter": "85-90%", "Nitrogen": "2.0-3.0%", "pH Level": "6.0-7.0", "Particle Size": "100-200 mesh", "Moisture Content": "8-12%" },
      benefits: ["Natural pest and disease control", "Improves soil structure", "Enhances plant immunity", "Safe for beneficial insects", "Environmentally friendly"],
      usage: ["Mix 50-100g per square meter", "Apply monthly for pest control", "Can be mixed with water for spray", "Use as soil amendment"],
    },
    "rice-husk": {
      id: "rice-husk",
      name: "Rice Husk",
      category: "Organic Fertilizers",
      short_description: "Natural soil amendment that improves drainage and provides silica for stronger plants.",
      description: "Our Rice Husk is a natural byproduct of rice processing that serves as an excellent soil amendment. It improves soil drainage, provides silica for plant strength, and is completely organic and sustainable.",
      features: ["Improves drainage", "Rich in silica", "Lightweight", "Natural amendment", "Pest deterrent", "Long-lasting"],
      specifications: { "Silica Content": "18-20%", "Carbon Content": "35-40%", "Ash Content": "15-20%", "Bulk Density": "100-150 kg/m³", "pH Level": "6.0-7.0", "Moisture Content": "8-12%" },
      benefits: ["Improves soil aeration", "Enhances drainage", "Provides plant strength", "Reduces soil compaction", "Natural pest deterrent"],
      usage: ["Mix 10-20% with soil", "Use as mulch layer", "Add to compost pile", "Mix with potting soil"],
    },
    "steam-bone-meal": {
      id: "steam-bone-meal",
      name: "Steam Bone Meal Granules",
      category: "Organic Fertilizers",
      short_description: "High phosphorus organic fertilizer from steam-processed animal bones for root and flower development.",
      description: "Our Steam Bone Meal Granules are produced from animal bones processed under high-pressure steam to create a slow-release phosphorus fertilizer. Ideal for root development, flowering, and fruiting, this product provides essential calcium and phosphorus for healthy plant growth.",
      features: ["High phosphorus", "Slow release", "Root development", "Organic certified", "Granule form", "Rich in calcium"],
      specifications: { "Phosphorus (P2O5)": "20-24%", "Calcium": "28-32%", "Nitrogen": "3-4%", "Granule Size": "1-4 mm", "pH Level": "6.5-7.5", "Moisture Content": "< 5%" },
      benefits: ["Promotes strong root growth", "Enhances flowering and fruiting", "Provides long-lasting phosphorus", "Improves calcium availability", "Organic and chemical-free"],
      usage: ["Apply 200-400g per square meter", "Mix into soil before planting", "Ideal for bulbs, tubers, and root crops", "Apply once per growing season"],
      isPopular: true,
    },

    // ── Compostable Bioplastics ──
    "compostable-dcut-bags": {
      id: "compostable-dcut-bags",
      name: "Compostable D-Cut Carry Bags",
      category: "Compostable Bioplastics",
      short_description: "CPCB certified D-cut carry bags made from compostable bioplastic, ideal for retail and grocery stores.",
      description: "Our Compostable D-Cut Carry Bags are manufactured from plant-based biopolymers and are fully CPCB certified. The D-cut handle design provides comfortable carrying and these bags decompose completely within composting conditions, leaving zero toxic residue.",
      features: ["CPCB Certified", "100% compostable", "D-cut design", "Retail ready", "Plant-based", "Zero toxic residue"],
      specifications: { "Certification": "CPCB Approved", "Material": "PLA / PBAT blend", "Thickness": "20-50 microns", "Composting Time": "90-180 days", "Sizes": "Small / Medium / Large", "Min. Order": "10,000 pcs" },
      benefits: ["Replaces single-use plastic bags", "Certified compostable", "Excellent print quality", "Strong and tear resistant", "Reduces carbon footprint"],
      usage: ["Retail checkout counter", "Grocery stores", "General shopping", "Takeaway packaging"],
      isPopular: true,
    },
    "compostable-wcut-bags": {
      id: "compostable-wcut-bags",
      name: "Compostable W-Cut Carry Bags",
      category: "Compostable Bioplastics",
      short_description: "W-cut compostable carry bags offering enhanced strength and wider opening for easy packing.",
      description: "Our W-Cut Carry Bags feature a wider opening and flat bottom for easy packing. Made from compostable bioplastic resins, they offer excellent load-bearing capacity while being fully biodegradable in composting conditions.",
      features: ["W-cut design", "Enhanced strength", "Compostable", "Eco-friendly", "Wide opening", "Flat bottom"],
      specifications: { "Certification": "CPCB / EN 13432", "Material": "PLA / PBAT blend", "Thickness": "25-60 microns", "Composting Time": "90-180 days", "Sizes": "Multiple options", "Weight Capacity": "Up to 8 kg" },
      benefits: ["Wider opening for easy loading", "Flat bottom stands upright", "Fully compostable", "Excellent tensile strength", "Suitable for heavy items"],
      usage: ["Supermarket packing", "Vegetable and fruit stores", "Bakery and deli shops", "General retail"],
    },
    "compostable-garbage-bags": {
      id: "compostable-garbage-bags",
      name: "Compostable Garbage Bags",
      category: "Compostable Bioplastics",
      short_description: "Biodegradable garbage bags that break down naturally, perfect for responsible waste management.",
      description: "Our Compostable Garbage Bags are designed for responsible waste disposal. Made from plant-based bioplastics, they break down completely in industrial and home composting environments, making them perfect for organic waste collection.",
      features: ["Biodegradable", "Leak-proof", "Multiple sizes", "Home compostable", "Strong seals", "Odor control"],
      specifications: { "Material": "Cornstarch / PBAT", "Thickness": "15-30 microns", "Sizes": "Small / Medium / Large / XL", "Composting Time": "90-180 days", "Color": "Green / Black", "Packing": "Roll of 15/30 bags" },
      benefits: ["Eliminates plastic waste", "Suitable for wet waste", "Home and industrial compostable", "Strong enough for daily use", "Supports segregation practices"],
      usage: ["Kitchen wet waste collection", "Garden waste disposal", "Office waste management", "Municipal composting programs"],
    },
    "compostable-garment-bags": {
      id: "compostable-garment-bags",
      name: "Compostable Garment Bags",
      category: "Compostable Bioplastics",
      short_description: "Transparent compostable garment covers for fashion and textile packaging needs.",
      description: "Our Compostable Garment Bags provide a sustainable alternative to polybags used in the fashion industry. Transparent and smooth, they protect garments during transit and storage while being fully compostable at end of life.",
      features: ["Transparent", "Garment safe", "Compostable", "Dust protection", "Smooth finish", "Custom sizes"],
      specifications: { "Material": "PLA film", "Transparency": "High clarity", "Thickness": "20-40 microns", "Composting Time": "90-120 days", "Sizes": "Custom to garment", "Sealing": "Self-adhesive strip" },
      benefits: ["Protects garments from dust", "High clarity display", "Sustainable brand image", "Fully compostable", "Custom branding available"],
      usage: ["Apparel packaging", "Textile shipping", "Wardrobe storage", "Retail garment display"],
    },
    "compostable-grocery-rolls": {
      id: "compostable-grocery-rolls",
      name: "Compostable Grocery Rolls",
      category: "Compostable Bioplastics",
      short_description: "Roll-format compostable bags for grocery stores, supermarkets, and food packaging.",
      description: "Our Compostable Grocery Rolls provide a convenient tear-off bag solution for produce sections and food counters. Each bag is made from plant-based material and will fully compost, reducing plastic waste in the food supply chain.",
      features: ["Roll format", "Easy tear", "Food safe", "Compostable", "Perforated", "Lightweight"],
      specifications: { "Material": "PLA / PBAT", "Bags per Roll": "200-500", "Thickness": "10-20 microns", "Composting Time": "90-180 days", "Core Diameter": "76 mm", "Food Contact": "Yes" },
      benefits: ["Convenient roll dispenser format", "Easy tear perforations", "Food contact approved", "Reduces plastic use at checkout", "Compatible with existing dispensers"],
      usage: ["Supermarket produce section", "Bakery counters", "Deli and meat counters", "Bulk food stores"],
    },
    "compostable-shrink-film": {
      id: "compostable-shrink-film",
      name: "Compostable Shrink Film",
      category: "Compostable Bioplastics",
      short_description: "Eco-friendly shrink wrap film that fully composts, replacing traditional plastic shrink wrap.",
      description: "Our Compostable Shrink Film is a drop-in replacement for conventional PVC and polyolefin shrink wrap. It shrinks cleanly when heated, conforms tightly to products, and fully biodegrades in composting conditions.",
      features: ["Shrink wrap", "Compostable", "Clear finish", "Industrial use", "Heat shrink", "Tamper evident"],
      specifications: { "Material": "PLA blend film", "Shrink Ratio": "40-60%", "Thickness": "15-40 microns", "Composting Time": "120-180 days", "Heat Range": "80-120°C", "Clarity": "High gloss" },
      benefits: ["Direct replacement for plastic shrink wrap", "Clean shrink finish", "Fully compostable end of life", "High clarity and gloss", "Tamper-evident seal"],
      usage: ["Product bundling", "Bottle and can multipacks", "Gift basket wrapping", "Industrial pallet wrap"],
    },

    // ── Plant Based ──
    "areca-palm-tableware": {
      id: "areca-palm-tableware",
      name: "Areca Palm Tableware",
      category: "Plant Based",
      short_description: "Natural tableware made from fallen areca palm leaves — sturdy, elegant, and fully biodegradable.",
      description: "Our Areca Palm Tableware is crafted from naturally fallen areca palm leaves. Each piece is heat-pressed into plates, bowls, and trays without any chemicals or additives. Sturdy enough for hot and cold foods, they add an elegant, rustic appeal to any dining setting.",
      features: ["100% natural", "Biodegradable", "Microwave safe", "Chemical-free", "Leak-proof", "Elegant finish"],
      specifications: { "Material": "Areca palm leaf", "Shapes": "Plates / Bowls / Trays", "Sizes": "4\" to 12\"", "Temperature": "-20°C to +180°C", "Decomposition": "45-60 days", "Chemical Free": "Yes" },
      benefits: ["Zero chemicals or coatings", "Handles hot and oily foods", "Unique natural appearance", "Compostable within 60 days", "Supports rural livelihoods"],
      usage: ["Catering and events", "Restaurants and cafés", "Picnics and outdoor dining", "Eco-conscious food service"],
      isPopular: true,
    },
    "bagasse-tableware": {
      id: "bagasse-tableware",
      name: "Bagasse Tableware",
      category: "Plant Based",
      short_description: "Sugarcane bagasse plates, bowls, and containers — strong, compostable, and food safe.",
      description: "Our Bagasse Tableware is made from sugarcane fiber remaining after juice extraction. Molded under heat and pressure, these products are strong, waterproof, and suitable for both hot and cold foods. They fully compost within weeks.",
      features: ["Sugarcane fiber", "Compostable", "Oil resistant", "Microwave safe", "Waterproof", "Stackable"],
      specifications: { "Material": "Sugarcane bagasse", "Products": "Plates / Bowls / Containers / Trays", "Sizes": "6\" to 12\"", "Temperature": "-20°C to +120°C", "Decomposition": "30-60 days", "Microwave Safe": "Yes" },
      benefits: ["Uses agricultural waste", "Oil and water resistant", "Microwave and freezer safe", "Fully compostable", "Strong and sturdy"],
      usage: ["Food takeaway containers", "Event and party supplies", "Corporate catering", "Quick-service restaurants"],
    },
    "bamboo-products": {
      id: "bamboo-products",
      name: "Bamboo Products",
      category: "Plant Based",
      short_description: "Sustainable bamboo-based products including cutlery, straws, and kitchen essentials.",
      description: "Our Bamboo Products range includes cutlery sets, straws, toothbrushes, and kitchen essentials. Bamboo grows rapidly without pesticides, making it one of the most sustainable materials available. Each product is durable, reusable, and naturally antibacterial.",
      features: ["Bamboo material", "Reusable", "Biodegradable", "Antibacterial", "Durable", "Chemical-free"],
      specifications: { "Material": "Moso bamboo", "Products": "Cutlery / Straws / Brushes / Skewers", "Treatment": "Carbonized / Natural", "Durability": "Reusable 100+ times", "Finish": "Smooth sanded", "Packaging": "Plastic-free" },
      benefits: ["Rapidly renewable resource", "Naturally antibacterial", "Reusable many times", "Decomposes naturally", "Lightweight and strong"],
      usage: ["Restaurant and café use", "Travel cutlery kits", "Kitchen essentials", "Hospitality amenities"],
    },
    "kraft-paper-products": {
      id: "kraft-paper-products",
      name: "Kraft Paper Products",
      category: "Plant Based",
      short_description: "Recyclable kraft paper packaging, bags, and food containers for eco-conscious businesses.",
      description: "Our Kraft Paper Products include bags, food containers, wrapping paper, and custom packaging. Made from sustainably sourced kraft paper, they are recyclable, biodegradable, and offer excellent printability for branding.",
      features: ["Recyclable", "Biodegradable", "Grease resistant", "Customizable", "FSC certified", "Food safe"],
      specifications: { "Material": "FSC kraft paper", "GSM Range": "80-350", "Products": "Bags / Boxes / Wraps / Containers", "Coating": "Grease-resistant options", "Printing": "Flexo / Offset", "Customization": "Size, print, finish" },
      benefits: ["Widely recyclable", "Biodegrades quickly", "Good print surface", "Cost-effective", "Consumer-preferred packaging"],
      usage: ["Food delivery packaging", "Retail shopping bags", "Gift wrapping", "Product packaging and boxes"],
    },

    // ── 100% Cotton Towels ──
    "bath-towels": {
      id: "bath-towels",
      name: "Bath Towels",
      category: "100% Cotton Towels",
      short_description: "Premium 100% cotton bath towels with superior absorbency and luxurious softness.",
      description: "Our Bath Towels are woven from 100% premium long-staple cotton fibers, providing exceptional absorbency, softness, and durability. Available in a range of weights and colors, they are suitable for hospitality, retail, and personal use.",
      features: ["100% cotton", "Highly absorbent", "Soft texture", "Durable", "Multiple colors", "Combed cotton"],
      specifications: { "Material": "100% cotton", "GSM": "400-700", "Size": "70×140 cm / 76×152 cm", "Colors": "White and custom colors", "Weave": "Terry / Dobby border", "Packing": "Bulk / Sets" },
      benefits: ["Luxurious softness", "Quick moisture absorption", "Withstands industrial laundering", "Retains shape after washing", "Skin-friendly and hypoallergenic"],
      usage: ["Hotels and resorts", "Home use", "Retail and gifting", "Hospitality bulk orders"],
      isPopular: true,
    },
    "hand-face-spa-towels": {
      id: "hand-face-spa-towels",
      name: "Hand / Face / Spa Towels",
      category: "100% Cotton Towels",
      short_description: "Soft cotton towels sized for hand, face, and spa use — ideal for hospitality and wellness.",
      description: "Our Hand, Face, and Spa Towels are crafted from fine 100% cotton in compact sizes ideal for guest bathrooms, spa treatments, and salon use. Ultra-soft and lint-free, they provide a premium touch across hospitality environments.",
      features: ["Compact size", "Ultra soft", "Quick dry", "Lint-free", "Spa grade", "Multiple colors"],
      specifications: { "Material": "100% cotton", "GSM": "300-500", "Sizes": "30×50 / 40×70 / 50×100 cm", "Colors": "White and pastels", "Weave": "Terry / Waffle", "Packing": "Dozen / Bulk" },
      benefits: ["Ideal spa and salon quality", "Quick-drying fabric", "Lint-free experience", "Gentle on skin", "Easy to launder"],
      usage: ["Spas and wellness centers", "Hotel guest bathrooms", "Salons and barbershops", "Personal care kits"],
    },
    "pool-towels": {
      id: "pool-towels",
      name: "Pool Towels",
      category: "100% Cotton Towels",
      short_description: "Large, quick-drying cotton pool towels with vibrant colors and chlorine-resistant fabric.",
      description: "Our Pool Towels are oversized 100% cotton towels designed for poolside use. Treated for chlorine resistance and color fastness, they maintain vibrant colors and softness even after repeated washing and sun exposure.",
      features: ["Oversized", "Quick dry", "Chlorine resistant", "Fade resistant", "Vibrant colors", "Durable"],
      specifications: { "Material": "100% cotton", "GSM": "350-500", "Size": "80×160 cm / 90×180 cm", "Treatment": "Chlorine-resistant dye", "Colors": "Bright stripes and solids", "Packing": "Bulk" },
      benefits: ["Withstands chlorine exposure", "Fade-resistant colors", "Quick absorption and drying", "Oversized for full coverage", "Low-lint construction"],
      usage: ["Hotels and resorts", "Swimming clubs", "Beach clubs", "Residential pools"],
    },
    "salon-towels": {
      id: "salon-towels",
      name: "Salon Towels",
      category: "100% Cotton Towels",
      short_description: "Bleach-safe cotton towels designed for salon and barbershop daily use.",
      description: "Our Salon Towels are built to withstand daily bleach use and frequent washings. Lightweight yet absorbent, they come in dark and bleach-proof colors suitable for hair salons, barbershops, and beauty parlors.",
      features: ["Bleach safe", "Color fast", "Lightweight", "Economical", "Quick dry", "Bulk packs"],
      specifications: { "Material": "100% cotton / cotton-poly blend", "GSM": "250-400", "Size": "40×70 cm", "Colors": "Black, white, dark tones", "Treatment": "Bleach-resistant dye", "Packing": "Dozen / Bulk" },
      benefits: ["Withstands bleach and chemicals", "Retains color after many washes", "Lightweight and easy to fold", "Economical bulk pricing", "Quick-drying design"],
      usage: ["Hair salons", "Barbershops", "Beauty parlors", "Nail and spa studios"],
    },
    "hotel-towels": {
      id: "hotel-towels",
      name: "Hotel Towels",
      category: "100% Cotton Towels",
      short_description: "Luxury hotel-grade cotton towels with reinforced edges for commercial laundering.",
      description: "Our Hotel Towels are manufactured to hospitality-grade standards with double-stitched hems and reinforced edges. Available in classic white and neutral tones, they deliver a five-star guest experience while surviving thousands of commercial laundry cycles.",
      features: ["Hotel grade", "Reinforced edges", "Premium cotton", "Long lasting", "Commercial wash rated", "Classic white"],
      specifications: { "Material": "100% ring-spun cotton", "GSM": "500-700", "Sizes": "Bath / Hand / Face sets", "Color": "White / Ivory", "Hem": "Double-stitched dobby", "Packing": "Sets / Bulk" },
      benefits: ["Commercial laundry durable", "Consistently soft hand-feel", "Classic hotel aesthetic", "Sets available (bath/hand/face)", "Eco-friendly manufacturing"],
      usage: ["Hotels and resorts", "Serviced apartments", "Cruise lines", "Hospitality supply chains"],
    },

    // ── Jute Bags ──
    "jute-different-size-bags": {
      id: "jute-different-size-bags",
      name: "Different Size Jute Bags",
      category: "Jute Bags",
      short_description: "Jute bags available in multiple sizes for shopping, gifting, and promotional use.",
      description: "Our Different Size Jute Bags come in a wide range — from small gift pouches to large shopping carriers. Made from 100% natural jute fiber, each size is stitched with reinforced handles and can be customized with prints or labels.",
      features: ["Multiple sizes", "Eco-friendly", "Sturdy handles", "Reusable", "Customizable", "Natural jute"],
      specifications: { "Material": "100% jute", "Sizes": "Small (20×15) to XL (45×35×15 cm)", "Handle": "Self-handle / Rope / Cotton tape", "Lining": "Optional lamination", "Printing": "Screen / Jute print", "MOQ": "500 pcs" },
      benefits: ["Size for every need", "Strong and tear resistant", "Fully biodegradable", "Good branding surface", "Reusable hundreds of times"],
      usage: ["Shopping bags", "Corporate gifts", "Promotional giveaways", "Retail packaging"],
      isPopular: true,
    },
    "jute-regular-bag": {
      id: "jute-regular-bag",
      name: "Regular Jute Bag",
      category: "Jute Bags",
      short_description: "Classic regular jute shopping bag — simple, strong, and sustainable.",
      description: "The Regular Jute Bag is a classic all-purpose carrier made from natural jute hessian. With a simple, functional design this bag is a staple for daily shopping and promotional purposes.",
      features: ["Classic design", "Strong build", "Sustainable", "Affordable", "Sturdy base", "Reinforced handle"],
      specifications: { "Material": "Jute hessian", "Size": "35×40×15 cm (standard)", "Handle": "Self-jute flat handle", "Weight Capacity": "8-10 kg", "Lamination": "Optional inner", "MOQ": "500 pcs" },
      benefits: ["Everyday use bag", "Strong natural fiber", "Biodegradable", "Great for branding", "Economical pricing"],
      usage: ["Daily shopping", "Grocery runs", "Exhibition bags", "Promotional handouts"],
    },
    "jute-bottle-bags": {
      id: "jute-bottle-bags",
      name: "Jute Bottle Bags",
      category: "Jute Bags",
      short_description: "Specially designed jute bags for carrying bottles safely — perfect for wine and beverages.",
      description: "Our Jute Bottle Bags are designed with single and multi-bottle compartments for safe transport. Padded options are available for wine and spirits. Strong dividers and a sturdy base keep bottles secure.",
      features: ["Bottle fit", "Padded option", "Gift ready", "Reusable", "Divider options", "Strong base"],
      specifications: { "Material": "Jute fiber", "Variants": "1-bottle / 2-bottle / 4-bottle", "Padding": "Optional foam insert", "Handle": "Rope / Cotton", "Base": "Reinforced cardboard", "MOQ": "300 pcs" },
      benefits: ["Safe bottle transport", "Premium gift appearance", "Reusable many times", "Custom branding", "Eco-friendly alternative to paper wine bags"],
      usage: ["Wine and spirits stores", "Corporate gifting", "Wedding favors", "Retail beverage packaging"],
    },
    "jute-flap-bag": {
      id: "jute-flap-bag",
      name: "Jute Flap Bag",
      category: "Jute Bags",
      short_description: "Jute bag with a stylish flap closure for secure and elegant carrying.",
      description: "Our Jute Flap Bag features a fold-over flap with button or magnetic closure, combining security with style. Ideal for files, iPads, documents, and everyday carry.",
      features: ["Flap closure", "Secure", "Stylish", "Durable", "Magnetic clasp", "Inner pocket"],
      specifications: { "Material": "Jute with cotton lining", "Closure": "Magnetic / Button flap", "Size": "30×35 cm (standard)", "Pocket": "Inner slip pocket", "Handle": "Shoulder strap", "MOQ": "300 pcs" },
      benefits: ["Contents stay secure", "Elegant professional look", "Suitable for files and devices", "Customize with logo", "Reusable and biodegradable"],
      usage: ["Corporate gifting", "Conference bags", "Document carriers", "Fashion accessory"],
    },
    "jute-plain-carry-bag": {
      id: "jute-plain-carry-bag",
      name: "Jute Plain Carry Bag",
      category: "Jute Bags",
      short_description: "Plain jute carry bag — lightweight, printable, and ideal for branding.",
      description: "The Jute Plain Carry Bag is a blank-canvas jute bag ready for your brand's identity. Lightweight yet strong, it is the most popular style for promotional activities and retail handouts.",
      features: ["Printable", "Lightweight", "Carry handles", "Brandable", "Flat fold", "Cost-effective"],
      specifications: { "Material": "Natural jute", "Size": "Custom sizes available", "Handle": "Self-jute / Cotton tape", "Print Area": "Full front and back", "Lamination": "Optional", "MOQ": "500 pcs" },
      benefits: ["Large print area for branding", "Affordable per-unit cost", "Lightweight for events", "Flat-fold for shipping", "Sustainable material"],
      usage: ["Exhibition giveaways", "Retail bags", "Brand awareness campaigns", "Eco-friendly packaging"],
    },
    "jute-plain-pouch-bag": {
      id: "jute-plain-pouch-bag",
      name: "Jute Plain Pouch Bag",
      category: "Jute Bags",
      short_description: "Compact jute pouch bag for small items, cosmetics, and gifts.",
      description: "Our Jute Plain Pouch Bag is a compact drawstring pouch made from natural jute. Perfect for packaging small gifts, cosmetics, jewelry, and dry foods. Can be customized with prints or tags.",
      features: ["Compact", "Drawstring", "Gift use", "Natural jute", "Printable", "Eco-friendly"],
      specifications: { "Material": "Natural jute", "Sizes": "10×15 to 25×30 cm", "Closure": "Drawstring / Velcro", "Lining": "Optional cotton", "Print": "Screen print / Tag", "MOQ": "500 pcs" },
      benefits: ["Charming rustic look", "Ideal for small gifts", "Reusable pouch", "Low-cost branding option", "Biodegradable"],
      usage: ["Wedding favors", "Cosmetic packaging", "Jewelry pouches", "Dry food packaging"],
    },
    "jute-plain-tote-bags": {
      id: "jute-plain-tote-bags",
      name: "Jute Plain Tote Bags",
      category: "Jute Bags",
      short_description: "Spacious jute tote bags with flat bottom — perfect for everyday shopping.",
      description: "Our Jute Plain Tote Bags feature a wide flat bottom and reinforced stitching for heavy loads. The open-top tote design makes them ideal for everyday grocery shopping and retail use.",
      features: ["Tote style", "Flat bottom", "Spacious", "Everyday use", "Strong stitching", "Open top"],
      specifications: { "Material": "Jute fabric", "Size": "35×40×15 cm (standard)", "Handle": "Cotton / Self-jute", "Capacity": "10-12 kg", "Base": "Reinforced flat bottom", "MOQ": "500 pcs" },
      benefits: ["Stands upright when filled", "Spacious for groceries", "Strong construction", "Easy to carry", "Printable surface"],
      usage: ["Grocery shopping", "Farmers markets", "Retail tote bags", "Everyday carry"],
    },
    "jute-pouch-bags": {
      id: "jute-pouch-bags",
      name: "Jute Pouch Bags",
      category: "Jute Bags",
      short_description: "Small jute pouch bags ideal for packaging, return gifts, and accessories.",
      description: "Our Jute Pouch Bags are small-format bags ideal for return gifts, accessory packaging, and dry food items. Available with drawstring, button, or plain open-top closures.",
      features: ["Pouch style", "Gift packaging", "Compact", "Versatile", "Multiple closures", "Natural look"],
      specifications: { "Material": "Natural jute", "Sizes": "12×15 to 20×25 cm", "Closure": "Drawstring / Button / Open", "Lining": "Optional", "Customization": "Print / Embroidery", "MOQ": "500 pcs" },
      benefits: ["Perfect for return gifts", "Unique natural texture", "Lightweight and compact", "Cost-effective packaging", "Custom branding options"],
      usage: ["Return gifts", "Accessory packaging", "Dry fruit packaging", "Event giveaways"],
    },
    "jute-zipper-bag": {
      id: "jute-zipper-bag",
      name: "Jute Zipper Bag",
      category: "Jute Bags",
      short_description: "Jute bag with a zip closure for added security — great for documents and valuables.",
      description: "Our Jute Zipper Bag features a full-length zipper for content security. Lined with cotton or laminated inside, it is ideal for carrying documents, laptops, and valuables with a sustainable style.",
      features: ["Zip closure", "Secure", "Professional look", "Durable", "Lined interior", "Versatile"],
      specifications: { "Material": "Jute with cotton lining", "Closure": "Full-length zipper", "Sizes": "A4 / A3 / Custom", "Interior": "Laminated / Cotton lined", "Handle": "Short / Shoulder", "MOQ": "300 pcs" },
      benefits: ["Contents stay secure", "Professional appearance", "Protects documents", "Reusable and sustainable", "Custom sizes available"],
      usage: ["Document folders", "Laptop sleeves", "Conference carry bags", "Secure shopping bags"],
    },
    "jute-window-bag": {
      id: "jute-window-bag",
      name: "Jute Window Bag",
      category: "Jute Bags",
      short_description: "Jute bag with a transparent window for product visibility — ideal for retail display.",
      description: "Our Jute Window Bag features a clear PVC or PLA window that lets buyers see the product inside without opening the bag. Perfect for food products, gift hampers, and retail displays.",
      features: ["Window panel", "Product display", "Retail ready", "Attractive", "Clear window", "Custom shapes"],
      specifications: { "Material": "Jute with PVC/PLA window", "Window": "Clear panel (various shapes)", "Sizes": "Custom available", "Handle": "Rope / Cotton tape", "Closure": "Drawstring / Zip / Open", "MOQ": "300 pcs" },
      benefits: ["Product visible without opening", "Attractive shelf presence", "Premium gift packaging", "Reusable by customer", "Natural and sustainable"],
      usage: ["Gift hampers", "Dry food packaging", "Retail shelf display", "Festive gift bags"],
    },

    // ── Cotton Bags ──
    "brown-drawstring-cotton-bag": {
      id: "brown-drawstring-cotton-bag",
      name: "Brown Drawstring Cotton Bag",
      category: "Cotton Bags",
      short_description: "Natural brown cotton drawstring bag — versatile for packaging, gifting, and storage.",
      description: "Our Brown Drawstring Cotton Bag is made from natural unbleached cotton in a warm brown tone. The drawstring closure makes it versatile for jewelry, cosmetics, dry foods, and return gift packaging.",
      features: ["Drawstring closure", "Brown cotton", "Versatile", "Eco-friendly", "Unbleached", "Washable"],
      specifications: { "Material": "100% unbleached cotton", "Color": "Natural brown", "Sizes": "10×15 to 30×40 cm", "Closure": "Cotton drawstring", "GSM": "140-200", "MOQ": "500 pcs" },
      benefits: ["Natural un-dyed color", "Reusable many times", "Washable and durable", "Biodegradable", "Economical for bulk orders"],
      usage: ["Gift packaging", "Jewelry pouches", "Dry food bags", "Storage and travel pouches"],
    },
    "cotton-loop-handle-bag": {
      id: "cotton-loop-handle-bag",
      name: "Cotton Loop Handle Bag",
      category: "Cotton Bags",
      short_description: "Sturdy cotton bag with loop handles for comfortable carrying and daily shopping.",
      description: "Our Cotton Loop Handle Bag features reinforced loop handles for easy carrying. Made from durable cotton canvas, it is well suited for grocery shopping, retail, and everyday errands.",
      features: ["Loop handles", "Sturdy build", "Comfortable carry", "Reusable", "Wide opening", "Flat base"],
      specifications: { "Material": "Cotton canvas", "GSM": "180-300", "Size": "35×40 cm (standard)", "Handle": "Self-fabric loop, 25 cm drop", "Base": "Gusseted flat base", "MOQ": "500 pcs" },
      benefits: ["Comfortable long handles", "Stands upright when loaded", "Strong cotton canvas", "Easy to print and customize", "Machine washable"],
      usage: ["Grocery shopping", "Retail packaging", "Trade shows", "Daily errands"],
    },
    "printed-pouch-cotton-bags": {
      id: "printed-pouch-cotton-bags",
      name: "Printed Pouch Cotton Bags",
      category: "Cotton Bags",
      short_description: "Custom-printed cotton pouch bags — perfect for brand promotion and retail packaging.",
      description: "Our Printed Pouch Cotton Bags feature vibrant custom prints on soft cotton pouches. Ideal for cosmetic brands, jewelry lines, and event organizers who want sustainable branded packaging.",
      features: ["Custom prints", "Pouch style", "Brand promotion", "Premium cotton", "Vibrant colors", "Soft hand-feel"],
      specifications: { "Material": "100% cotton", "GSM": "140-220", "Sizes": "12×18 to 25×35 cm", "Print": "Screen / Digital / DTG", "Closure": "Drawstring / Zip", "MOQ": "300 pcs" },
      benefits: ["Premium print quality", "Excellent brand visibility", "Soft and luxurious feel", "Reusable by end customer", "Multiple closure options"],
      usage: ["Cosmetic packaging", "Jewelry brand pouches", "Event goodie bags", "Boutique retail packaging"],
      isPopular: true,
    },
    "eco-friendly-cotton-bag": {
      id: "eco-friendly-cotton-bag",
      name: "Eco-Friendly Cotton Bag",
      category: "Cotton Bags",
      short_description: "100% eco-friendly cotton bag — a sustainable alternative to single-use plastic bags.",
      description: "Our Eco-Friendly Cotton Bag is made from 100% natural cotton, GOTS-certifiable, and designed as a direct replacement for single-use plastic bags. Lightweight, washable, and long-lasting.",
      features: ["Eco-friendly", "100% cotton", "Plastic alternative", "Washable", "GOTS certifiable", "Lightweight"],
      specifications: { "Material": "100% organic cotton", "GSM": "120-180", "Size": "38×42 cm (standard)", "Handle": "Long shoulder strap", "Color": "Natural / Bleached white", "MOQ": "500 pcs" },
      benefits: ["Replaces single-use plastic", "Washable and reusable", "Lightweight to carry", "Organic cotton option", "Biodegradable at end of life"],
      usage: ["Everyday shopping", "Promotional bags", "Farmers markets", "Eco-conscious retail"],
    },
    "printed-shopping-cotton-bags": {
      id: "printed-shopping-cotton-bags",
      name: "Printed Shopping Cotton Bags",
      category: "Cotton Bags",
      short_description: "Vibrant printed cotton shopping bags for retail stores and brand merchandise.",
      description: "Our Printed Shopping Cotton Bags are designed for retail and merchandise use. Full-color printing on sturdy cotton creates a walking billboard for your brand while offering customers a reusable bag they'll keep.",
      features: ["Printed design", "Shopping size", "Brand ready", "Durable", "Full color", "Reinforced bottom"],
      specifications: { "Material": "Cotton canvas", "GSM": "180-280", "Size": "38×42×12 cm (standard)", "Print": "Full-color screen / Digital", "Handle": "Short / Long", "MOQ": "500 pcs" },
      benefits: ["Full-surface branding", "Walking billboard effect", "Durable reusable bag", "Customers keep and reuse", "Available in custom sizes"],
      usage: ["Retail shopping bags", "Brand merchandise", "Store packaging", "Event and expo bags"],
    },
    "printed-drawstring-bag": {
      id: "printed-drawstring-bag",
      name: "Printed Drawstring Bag",
      category: "Cotton Bags",
      short_description: "Printed cotton drawstring bags for gifting, events, and promotional giveaways.",
      description: "Our Printed Drawstring Bags combine the functionality of a drawstring closure with branded prints. Lightweight and compact, they are popular for event giveaways, gym kits, and school bags.",
      features: ["Drawstring", "Printed", "Event ready", "Lightweight", "Backpack style", "Compact"],
      specifications: { "Material": "Cotton / Cotton-poly", "GSM": "120-200", "Size": "35×42 cm (standard)", "Print": "Screen / Heat transfer", "Style": "Backpack drawstring", "MOQ": "300 pcs" },
      benefits: ["Lightweight and portable", "Popular event giveaway", "Doubles as backpack", "Custom full-color print", "Economical per-unit cost"],
      usage: ["Event giveaways", "Gymwear bags", "School and college bags", "Promotional campaigns"],
    },
    "cotton-bags-size-options": {
      id: "cotton-bags-size-options",
      name: "Cotton Bags with Size Options",
      category: "Cotton Bags",
      short_description: "Cotton bags available in multiple sizes to suit different needs and applications.",
      description: "We offer cotton bags in a full range of sizes — from small 15 cm pouches to extra-large 50 cm shopping carriers. All sizes can be customized with prints, handles, closures, and gussets to match your requirements.",
      features: ["Multiple sizes", "Customizable", "Versatile", "Bulk order", "Various handles", "Full range"],
      specifications: { "Material": "100% cotton", "GSM": "120-300", "Sizes": "15×20 cm to 50×40×15 cm", "Handle Options": "Short / Long / Rope / Loop", "Closure Options": "Open / Drawstring / Zip / Button", "MOQ": "500 pcs" },
      benefits: ["One supplier for all sizes", "Consistent quality across range", "Fully customizable", "Bulk pricing available", "Mixed-size orders accepted"],
      usage: ["Multi-product retail packaging", "Corporate gift sets", "Hospitality amenity kits", "E-commerce packaging"],
    },

    // ── Canvas Bags ──
    "loop-handle-plant-canvas-tote": {
      id: "loop-handle-plant-canvas-tote",
      name: "Loop Handle Plant Canvas Tote Bags",
      category: "Canvas Bags",
      short_description: "Trendy canvas tote bags with plant-themed designs and sturdy loop handles.",
      description: "Our Loop Handle Plant Canvas Tote Bags feature nature-inspired plant and leaf designs printed on heavy-duty canvas. The reinforced loop handles and gusseted bottom make them functional for shopping and stylish as everyday accessories.",
      features: ["Plant design", "Loop handles", "Trendy", "Heavy duty", "Gusseted base", "Premium canvas"],
      specifications: { "Material": "12 oz cotton canvas", "Size": "38×42×10 cm", "Handle": "Reinforced loop, 30 cm drop", "Print": "Screen / DTG plant designs", "Base": "Gusseted", "MOQ": "300 pcs" },
      benefits: ["Trendy nature designs", "Heavy-duty construction", "Functional gusseted base", "Popular retail item", "Reusable and sustainable"],
      usage: ["Retail product", "Gift shops", "Eco boutiques", "Personal everyday use"],
    },
    "premium-canvas-tote-bags": {
      id: "premium-canvas-tote-bags",
      name: "Premium Canvas Tote Bags",
      category: "Canvas Bags",
      short_description: "Premium-quality canvas tote bags with refined stitching and elegant finish.",
      description: "Our Premium Canvas Tote Bags are crafted from heavy 14-16 oz canvas with double-stitched seams and reinforced stress points. An elegant, minimalist design makes them perfect for upscale retail, corporate gifting, and personal use.",
      features: ["Premium quality", "Elegant finish", "Durable canvas", "Versatile", "Double-stitched", "Reinforced stress points"],
      specifications: { "Material": "14-16 oz cotton canvas", "Size": "40×45×12 cm", "Handle": "Leather / Cotton webbing", "Stitching": "Double-reinforced", "Interior": "Optional zip pocket", "MOQ": "200 pcs" },
      benefits: ["Upscale look and feel", "Extremely durable", "Suitable for heavy loads", "Premium branding surface", "Long product lifespan"],
      usage: ["Corporate gifts", "High-end retail bags", "Personal everyday tote", "Branded merchandise"],
      isPopular: true,
    },
    "loop-handle-promotional-canvas-tote": {
      id: "loop-handle-promotional-canvas-tote",
      name: "Loop Handle Promotional Canvas Tote Bag",
      category: "Canvas Bags",
      short_description: "Promotional canvas tote bags with loop handles — ideal for corporate gifting and events.",
      description: "Our Promotional Canvas Tote Bags are designed for brand exposure. The large flat surface is ideal for logo printing, while sturdy construction ensures the bag is reused long after the event.",
      features: ["Promotional", "Corporate gifts", "Custom print", "Loop handles", "Large print area", "Event ready"],
      specifications: { "Material": "10-12 oz cotton canvas", "Size": "38×42 cm (standard)", "Handle": "Loop handles, 25 cm drop", "Print": "Screen / Digital full color", "Colors": "Natural / Custom", "MOQ": "300 pcs" },
      benefits: ["Maximum brand exposure", "Reused by recipients", "Strong and long-lasting", "Cost-effective marketing", "Eco-friendly brand image"],
      usage: ["Corporate events", "Trade shows", "Product launches", "Employee gift kits"],
    },
    "multi-color-canvas-shopping-bag": {
      id: "multi-color-canvas-shopping-bag",
      name: "Multi Color Canvas Shopping Bag",
      category: "Canvas Bags",
      short_description: "Colorful multi-tone canvas shopping bags that combine style with sustainability.",
      description: "Our Multi Color Canvas Shopping Bags feature vibrant color-block or multi-tone designs on durable canvas. A stylish alternative to plain bags, they appeal to fashion-conscious and eco-conscious shoppers alike.",
      features: ["Multi color", "Shopping size", "Stylish", "Sustainable", "Color-block design", "Durable"],
      specifications: { "Material": "10-12 oz dyed cotton canvas", "Size": "40×38×12 cm", "Handle": "Self-fabric or contrast", "Colors": "Multi-tone / Color-block", "Base": "Gusseted", "MOQ": "300 pcs" },
      benefits: ["Eye-catching design", "Fashion-forward style", "Strong and functional", "Reusable many times", "Great retail appeal"],
      usage: ["Fashion retail bags", "Lifestyle stores", "Gift bags", "Personal shopping"],
    },
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      setTimeout(() => {
        const productDetails = productData[id];
        if (productDetails) {
          setProduct(productDetails);
        }
        setLoading(false);
      }, 300);
    }
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return Object.values(productData)
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Product not found</p>
          <Link to="/products">
            <Button className="bg-green-600 hover:bg-green-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO
        title={`${product.name} - ${product.category}`}
        description={product.description}
        keywords={`${product.name}, ${product.category}, sustainable products, HEGDE Resources`}
        canonicalPath={`/products/${id}`}
        ogImage={productImages[product.image]}
      />
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pt-20 md:pt-24">
          <div className="flex items-center gap-2 text-sm text-gray-400 overflow-hidden">
            <Link to="/" className="hover:text-green-700 transition-colors shrink-0">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link to="/products" className="hover:text-green-700 transition-colors shrink-0">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="hover:text-green-700 transition-colors shrink-0 max-w-[120px] sm:max-w-none truncate">{product.category}</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-gray-700 font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <div className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                <img
                  src={productImages[product.id]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.isPopular && (
                  <span className="bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div>
                <p className="text-sm text-green-700 font-medium mb-2">{product.category}</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-gray-500 leading-relaxed">{product.short_description}</p>
              </div>

              {/* Quick Features */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Specs Preview */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-xs text-gray-400 uppercase tracking-wide">{key}</dt>
                      <dd className="text-sm font-medium text-gray-800">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Button
                  className="w-full bg-green-700 hover:bg-green-800 text-white h-12 text-base"
                  onClick={() => setIsEnquiryOpen(true)}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Send Enquiry
                </Button>
                <div className="flex gap-3">
                  <Link to="/products" className="flex-1">
                    <Button variant="outline" className="w-full text-sm border-gray-200 hover:border-green-600 hover:text-green-700">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      All Products
                    </Button>
                  </Link>
                  <Link to="/contact" className="flex-1">
                    <Button variant="outline" className="w-full text-sm border-gray-200 hover:border-green-600 hover:text-green-700">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex flex-col items-center text-center gap-1.5 p-3 bg-green-50 rounded-lg">
                  <Truck className="w-5 h-5 text-green-700" />
                  <span className="text-xs text-gray-600">Global Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5 p-3 bg-green-50 rounded-lg">
                  <Shield className="w-5 h-5 text-green-700" />
                  <span className="text-xs text-gray-600">Quality Assured</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5 p-3 bg-green-50 rounded-lg">
                  <Package className="w-5 h-5 text-green-700" />
                  <span className="text-xs text-gray-600">Bulk Orders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Product Description</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-green-50/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Applications</h2>
              <div className="flex flex-wrap gap-2">
                {product.usage.map((use, index) => (
                  <span key={index} className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Full Specifications */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Specifications</h2>
              <dl className="divide-y divide-gray-100">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 first:pt-0 last:pb-0">
                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                    <dd className="text-sm text-gray-900 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Need Help Card */}
            <div className="bg-green-800 text-white rounded-xl p-6">
              <h3 className="font-bold mb-2">Need Custom Specifications?</h3>
              <p className="text-green-100 text-sm mb-4">We offer custom sizes, prints, and materials. Get in touch for a tailored solution.</p>
              <Link to="/contact">
                <Button className="w-full bg-white text-green-800 hover:bg-green-50 text-sm font-semibold">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">More in {product.category}</h2>
              <Link to="/products">
                <Button variant="outline" className="text-sm border-gray-200 hover:border-green-600 hover:text-green-700">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/products/${rp.id}`} className="group">
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={productImages[rp.id]}
                        alt={rp.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-1">{rp.name}</h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{rp.short_description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        productId={product.id}
        productName={product.name}
      />
    </div>
  );
};

export default ProductDetail;
