import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Leaf, Package, ArrowLeft, CheckCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EnquiryModal from "@/components/EnquiryModal";

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
    // Organic Fertilizers
    "vermi-compost": {
      id: "vermi-compost",
      name: "Vermi-Compost",
      category: "Organic Fertilizers",
      short_description: "Premium quality earthworm processed organic fertilizer for enhanced soil fertility and plant growth.",
      description: "Our Vermi-Compost is produced through the natural process of vermiculture, where earthworms decompose organic waste materials into nutrient-rich compost. This process creates a superior organic fertilizer that is rich in essential nutrients, beneficial microorganisms, and enzymes that promote healthy plant growth and soil structure improvement.",
      features: ["100% organic", "Rich in nutrients", "Improves soil structure", "Eco-friendly", "Slow release nutrients", "Contains beneficial microbes"],
      specifications: {
        "Organic Matter": "35-40%",
        "Nitrogen": "1.5-2.0%",
        "Phosphorus": "1.0-1.5%",
        "Potassium": "1.0-1.5%",
        "pH Level": "6.5-7.5",
        "Moisture Content": "25-35%"
      },
      benefits: [
        "Increases soil fertility naturally",
        "Improves water retention capacity",
        "Enhances root development",
        "Boosts plant immunity",
        "Reduces need for chemical fertilizers"
      ],
      usage: [
        "Mix 1-2 kg per square meter of soil",
        "Apply during soil preparation",
        "Can be used for all types of crops",
        "Suitable for organic farming"
      ],
      isPopular: true,
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center"
    },
    "cow-dung-compost": {
      id: "cow-dung-compost",
      name: "Cow-Dung Compost",
      category: "Organic Fertilizers",
      short_description: "Traditional organic fertilizer made from well-decomposed cow dung, perfect for all crop types.",
      description: "Our Cow-Dung Compost is prepared using traditional composting methods with well-aged cow dung. This time-tested organic fertilizer provides slow-release nutrients and improves soil organic matter content, making it an excellent choice for sustainable agriculture.",
      features: ["Natural fertilizer", "Slow release nutrients", "Improves soil health", "Chemical-free", "Traditional method", "Rich in organic matter"],
      specifications: {
        "Organic Matter": "45-50%",
        "Nitrogen": "0.8-1.2%",
        "Phosphorus": "0.6-1.0%",
        "Potassium": "0.8-1.2%",
        "pH Level": "7.0-8.0",
        "Moisture Content": "20-30%"
      },
      benefits: [
        "Traditional and proven method",
        "Improves soil structure",
        "Adds beneficial microorganisms",
        "Long-lasting soil improvement",
        "Cost-effective solution"
      ],
      usage: [
        "Apply 2-3 kg per square meter",
        "Mix well with soil before planting",
        "Ideal for vegetable gardens",
        "Perfect for fruit trees"
      ],
      imageUrl: "https://images.unsplash.com/photo-1574924162449-3a5b88d6d47e?w=600&h=400&fit=crop&crop=center"
    },
    "organic-mix-fertilizer": {
      id: "organic-mix-fertilizer",
      name: "Organic Mix Fertilizer",
      category: "Organic Fertilizers",
      short_description: "Balanced blend of organic materials providing complete nutrition for optimal plant development.",
      description: "Our Organic Mix Fertilizer is a carefully balanced blend of various organic materials including compost, vermicompost, and natural minerals. This comprehensive fertilizer provides all essential nutrients needed for healthy plant growth while maintaining soil health.",
      features: ["Complete nutrition", "Balanced NPK", "Organic blend", "Enhanced growth", "Soil conditioning", "Micronutrient rich"],
      specifications: {
        "Organic Matter": "40-45%",
        "Nitrogen": "2.0-2.5%",
        "Phosphorus": "1.5-2.0%",
        "Potassium": "1.5-2.0%",
        "pH Level": "6.5-7.0",
        "Moisture Content": "25-30%"
      },
      benefits: [
        "Complete plant nutrition",
        "Balanced nutrient release",
        "Improves soil fertility",
        "Enhances plant resistance",
        "Supports beneficial soil microbes"
      ],
      usage: [
        "Apply 1.5-2 kg per square meter",
        "Mix with soil during transplanting",
        "Suitable for all crop types",
        "Apply every 2-3 months"
      ],
      isPopular: true,
      imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=600&h=400&fit=crop&crop=center"
    },
    "neem-powder": {
      id: "neem-powder",
      name: "Neem Powder",
      category: "Organic Fertilizers",
      short_description: "Natural pest deterrent and soil conditioner made from pure neem leaves and bark.",
      description: "Our Neem Powder is made from pure neem leaves and bark, providing natural pest control properties while also acting as an excellent soil conditioner. It's completely organic and safe for all types of plants.",
      features: ["Natural pesticide", "Soil conditioner", "Antimicrobial properties", "Safe for plants", "Organic pest control", "Soil health improver"],
      specifications: {
        "Azadirachtin Content": "300-500 ppm",
        "Organic Matter": "85-90%",
        "Nitrogen": "2.0-3.0%",
        "pH Level": "6.0-7.0",
        "Particle Size": "100-200 mesh",
        "Moisture Content": "8-12%"
      },
      benefits: [
        "Natural pest and disease control",
        "Improves soil structure",
        "Enhances plant immunity",
        "Safe for beneficial insects",
        "Environmentally friendly"
      ],
      usage: [
        "Mix 50-100g per square meter",
        "Apply monthly for pest control",
        "Can be mixed with water for spray",
        "Use as soil amendment"
      ],
      imageUrl: "https://images.unsplash.com/photo-1609501676725-7186f06ac4f0?w=600&h=400&fit=crop&crop=center"
    },
    "coco-peat": {
      id: "coco-peat",
      name: "Coco-Peat",
      category: "Organic Fertilizers",
      short_description: "Excellent growing medium with superior water retention and aeration properties.",
      description: "Our Coco-Peat is made from coconut coir fiber, providing an excellent growing medium that retains moisture while ensuring proper aeration. It's completely natural, renewable, and perfect for both indoor and outdoor gardening.",
      features: ["Water retention", "Good drainage", "pH neutral", "Renewable resource", "Disease resistant", "Long lasting"],
      specifications: {
        "pH Level": "5.5-6.5",
        "EC Value": "< 1.0 mS/cm",
        "Water Holding Capacity": "8-10 times its weight",
        "Expansion Ratio": "1:5 to 1:7",
        "Fiber Content": "15-20%",
        "Moisture Content": "15-20%"
      },
      benefits: [
        "Excellent water retention",
        "Provides good drainage",
        "Lightweight growing medium",
        "Pest and disease resistant",
        "Sustainable and eco-friendly"
      ],
      usage: [
        "Soak in water before use",
        "Mix with soil 1:1 ratio",
        "Perfect for seed starting",
        "Ideal for container gardening"
      ],
      imageUrl: "https://images.unsplash.com/photo-1583479648924-06e28d86b49e?w=600&h=400&fit=crop&crop=center"
    },
    "potting-mixture": {
      id: "potting-mixture",
      name: "Potting Mixture",
      category: "Organic Fertilizers",
      short_description: "Ready-to-use potting mix with perfect blend of organic materials for container gardening.",
      description: "Our Ready-to-use Potting Mixture is a carefully formulated blend of organic compost, coco-peat, vermicompost, and essential nutrients. It's specifically designed for container gardening and potted plants.",
      features: ["Ready to use", "Perfect blend", "Container friendly", "Nutrient rich", "Well-draining", "Organic certified"],
      specifications: {
        "Organic Matter": "55-60%",
        "Nitrogen": "1.2-1.8%",
        "Phosphorus": "0.8-1.2%",
        "Potassium": "1.0-1.5%",
        "pH Level": "6.0-7.0",
        "Moisture Content": "25-35%"
      },
      benefits: [
        "No mixing required",
        "Perfect for container plants",
        "Excellent drainage properties",
        "Rich in organic nutrients",
        "Promotes healthy root growth"
      ],
      usage: [
        "Use directly from the bag",
        "Fill containers and plant",
        "Ideal for indoor plants",
        "Perfect for balcony gardens"
      ],
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center"
    },
    "rice-husk": {
      id: "rice-husk",
      name: "Rice Husk",
      category: "Organic Fertilizers",
      short_description: "Natural soil amendment that improves drainage and provides silica for stronger plants.",
      description: "Our Rice Husk is a natural byproduct of rice processing that serves as an excellent soil amendment. It improves soil drainage, provides silica for plant strength, and is completely organic and sustainable.",
      features: ["Improves drainage", "Rich in silica", "Lightweight", "Natural amendment", "Pest deterrent", "Long-lasting"],
      specifications: {
        "Silica Content": "18-20%",
        "Carbon Content": "35-40%",
        "Ash Content": "15-20%",
        "Bulk Density": "100-150 kg/m³",
        "pH Level": "6.0-7.0",
        "Moisture Content": "8-12%"
      },
      benefits: [
        "Improves soil aeration",
        "Enhances drainage",
        "Provides plant strength",
        "Reduces soil compaction",
        "Natural pest deterrent"
      ],
      usage: [
        "Mix 10-20% with soil",
        "Use as mulch layer",
        "Add to compost pile",
        "Mix with potting soil"
      ],
      imageUrl: "https://images.unsplash.com/photo-1574323359862-bc5bb2c31c4d?w=600&h=400&fit=crop&crop=center"
    },
    "fish-meal-manure": {
      id: "fish-meal-manure",
      name: "Fish-Meal Manure",
      category: "Organic Fertilizers",
      short_description: "High protein organic fertilizer providing essential amino acids and nutrients for plants.",
      description: "Our Fish-Meal Manure is made from processed fish waste, providing high levels of nitrogen, phosphorus, and essential amino acids. It's an excellent organic fertilizer that promotes vigorous plant growth and improves soil biology.",
      features: ["High protein", "Amino acids", "Slow release", "Marine nutrients", "Organic certified", "Soil biology enhancer"],
      specifications: {
        "Protein Content": "60-65%",
        "Nitrogen": "8-10%",
        "Phosphorus": "4-6%",
        "Calcium": "5-7%",
        "pH Level": "6.5-7.5",
        "Moisture Content": "8-12%"
      },
      benefits: [
        "High nutrient content",
        "Provides essential amino acids",
        "Improves plant vigor",
        "Enhances soil microbiology",
        "Long-lasting nutrition"
      ],
      usage: [
        "Apply 100-200g per square meter",
        "Mix with soil before planting",
        "Apply 2-3 times per season",
        "Ideal for flowering plants"
      ],
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&crop=center"
    },
    "goat-dung-manure": {
      id: "goat-dung-manure",
      name: "Goat Dung Manure",
      category: "Organic Fertilizers",
      short_description: "Premium organic manure with high nutrient content, ideal for vegetable and fruit cultivation.",
      description: "Our Goat Dung Manure is collected from healthy goats and properly composted to create a premium organic fertilizer. It has higher nutrient content compared to other animal manures and is particularly effective for vegetable and fruit crops.",
      features: ["High nutrients", "Quick acting", "Ideal for vegetables", "Organic matter", "Disease suppressing", "Soil conditioning"],
      specifications: {
        "Organic Matter": "50-55%",
        "Nitrogen": "2.5-3.0%",
        "Phosphorus": "1.5-2.0%",
        "Potassium": "2.0-2.5%",
        "pH Level": "7.0-8.0",
        "Moisture Content": "25-30%"
      },
      benefits: [
        "Higher nutrient density",
        "Quick nutrient release",
        "Excellent for vegetables",
        "Improves soil structure",
        "Natural disease suppression"
      ],
      usage: [
        "Apply 1.5-2 kg per square meter",
        "Mix well with soil",
        "Perfect for kitchen gardens",
        "Apply before planting season"
      ],
      imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=600&h=400&fit=crop&crop=center"
    },
    "neem-oil": {
      id: "neem-oil",
      name: "Neem Oil",
      category: "Organic Fertilizers",
      short_description: "Pure neem oil extract for natural pest control and plant health management.",
      description: "Our Pure Neem Oil is extracted from neem seeds using cold-pressed methods. It's a natural bio-pesticide and plant health enhancer that provides effective pest control while being safe for beneficial insects and the environment.",
      features: ["Natural pest control", "Plant health", "Pure extract", "Multi-purpose", "Systemic action", "Organic certified"],
      specifications: {
        "Azadirachtin Content": "1500-3000 ppm",
        "Nimbin Content": "2000-4000 ppm",
        "Purity": "99%+",
        "Specific Gravity": "0.915-0.925",
        "Acid Value": "< 10 mg KOH/g",
        "Shelf Life": "2 years"
      },
      benefits: [
        "Effective pest control",
        "Safe for beneficial insects",
        "Improves plant immunity",
        "Systemic plant protection",
        "Environmentally safe"
      ],
      usage: [
        "Dilute 5-10ml per liter water",
        "Spray early morning or evening",
        "Apply every 7-10 days",
        "Use as soil drench for systemic action"
      ],
      isPopular: true,
      imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=400&fit=crop&crop=center"
    },

    // Sustainable Packaging Materials
    "compostable-bioplastics": {
      id: "compostable-bioplastics",
      name: "100% Compostable Bioplastics (CPCB Certified)",
      category: "Sustainable Packaging",
      short_description: "Certified compostable bioplastic packaging solutions that break down naturally in composting conditions.",
      description: "Our CPCB certified compostable bioplastics are made from renewable plant-based materials including corn starch, sugarcane bagasse, and other biodegradable polymers. These innovative packaging solutions break down completely in industrial and home composting conditions, leaving no harmful residues.",
      features: ["CPCB Certified", "100% compostable", "Eco-friendly", "Biodegradable", "Plant-based", "Zero toxic residue"],
      specifications: {
        "Certification": "CPCB Approved, EN 13432, ASTM D6400",
        "Composting Time": "90-180 days",
        "Raw Material": "Plant-based polymers (PLA, PHA, PBAT)",
        "Temperature Resistance": "-20°C to +60°C",
        "Thickness Range": "10-100 microns",
        "Tensile Strength": "20-40 MPa"
      },
      benefits: [
        "Certified environmental safety",
        "Complete biodegradation",
        "Reduces plastic pollution",
        "Supports circular economy",
        "Carbon footprint reduction"
      ],
      usage: [
        "Food packaging applications",
        "Agricultural mulch films",
        "Shopping bags and carriers",
        "Industrial packaging solutions"
      ],
      isPopular: true,
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&crop=center"
    },
    "bagasse-packaging": {
      id: "bagasse-packaging",
      name: "Bagasse Packaging Material",
      category: "Sustainable Packaging",
      short_description: "Sustainable packaging made from sugarcane bagasse, a renewable agricultural waste product.",
      description: "Our Bagasse Packaging is made from sugarcane bagasse, the fibrous pulp that remains after extracting juice from sugarcane. This agricultural waste is transformed into strong, biodegradable packaging materials that are perfect for food service and retail applications.",
      features: ["Made from bagasse", "Renewable source", "Compostable", "Strong & durable", "Food safe", "Heat resistant"],
      specifications: {
        "Raw Material": "100% Sugarcane Bagasse",
        "Density": "0.2-0.3 g/cm³",
        "Temperature Resistance": "-20°C to +100°C",
        "Moisture Resistance": "Good for 4-6 hours",
        "Biodegradation Time": "30-60 days",
        "Microwave Safe": "Yes"
      },
      benefits: [
        "Utilizes agricultural waste",
        "Fully biodegradable",
        "Strong and durable",
        "Microwave and freezer safe",
        "Chemical-free production"
      ],
      usage: [
        "Food containers and plates",
        "Takeaway packaging",
        "Disposable tableware",
        "Retail packaging solutions"
      ],
      imageUrl: "https://images.unsplash.com/photo-1586281010293-7c8005b2e3e7?w=600&h=400&fit=crop&crop=center"
    },
    "paper-packaging": {
      id: "paper-packaging",
      name: "Paper Packaging Material",
      category: "Sustainable Packaging",
      short_description: "Recyclable and biodegradable paper-based packaging solutions for various applications.",
      description: "Our Paper Packaging Materials are made from sustainably sourced paper and cardboard. These recyclable and biodegradable solutions offer excellent protection for products while being environmentally responsible and cost-effective.",
      features: ["Recyclable", "Biodegradable", "Versatile", "Sustainable", "Cost-effective", "Customizable"],
      specifications: {
        "Paper Grade": "FSC Certified",
        "GSM Range": "150-400 GSM",
        "Biodegradation Time": "2-6 months",
        "Recycling Rate": "85-90%",
        "Moisture Resistance": "Basic coating available",
        "Print Quality": "High-quality offset printing"
      },
      benefits: [
        "Widely recyclable",
        "Fast biodegradation",
        "Cost-effective solution",
        "Excellent printability",
        "Consumer preferred"
      ],
      usage: [
        "Shipping boxes and mailers",
        "Product packaging",
        "Gift wrapping solutions",
        "Promotional materials"
      ],
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop&crop=center"
    },
    "cotton-jute-canvas-bags": {
      id: "cotton-jute-canvas-bags",
      name: "Cotton, Jute & Canvas Bags",
      category: "Sustainable Packaging",
      short_description: "Reusable bags made from natural fibers, perfect alternative to plastic bags.",
      description: "Our collection of Cotton, Jute, and Canvas Bags provides durable, reusable alternatives to single-use plastic bags. Made from natural fibers, these bags are strong, washable, and can be used hundreds of times, making them perfect for shopping, storage, and promotional purposes.",
      features: ["Reusable", "Natural fibers", "Durable", "Plastic alternative", "Washable", "Customizable"],
      specifications: {
        "Material Options": "100% Cotton, Jute, Canvas",
        "Weight Capacity": "5-25 kg depending on size",
        "Handle Options": "Short, Long, or Reinforced handles",
        "Sizes Available": "Small to XXL",
        "Printing Options": "Screen print, Digital print, Embroidery",
        "Color Options": "Natural and custom colors"
      },
      benefits: [
        "Hundreds of uses per bag",
        "Strong and durable",
        "Machine washable",
        "Biodegradable at end of life",
        "Great for branding"
      ],
      usage: [
        "Shopping bags",
        "Promotional merchandise",
        "Gift bags",
        "Storage solutions"
      ],
      isPopular: true,
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop&crop=center"
    }
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
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-green-600 transition-colors">
            Products
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = `aspect-square rounded-2xl overflow-hidden shadow-xl ${
                        product.category === "Organic Fertilizers" 
                          ? "bg-gradient-to-br from-green-100 to-green-200" 
                          : "bg-gradient-to-br from-blue-100 to-blue-200"
                      }`;
                      const icon = document.createElement('div');
                      icon.className = 'absolute inset-0 flex items-center justify-center';
                      icon.innerHTML = product.category === "Organic Fertilizers" 
                        ? '<svg class="w-32 h-32 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>'
                        : '<svg class="w-32 h-32 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>';
                      parent.appendChild(icon);
                    }
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  {product.category === "Organic Fertilizers" ? (
                    <Leaf className="w-32 h-32 text-green-500" />
                  ) : (
                    <Package className="w-32 h-32 text-blue-500" />
                  )}
                </div>
              )}
            </div>
            
            {/* Badges */}
            <div className="absolute top-6 left-6 flex gap-2">
              <Badge className={`${
                product.category === "Organic Fertilizers" 
                  ? "bg-green-500" 
                  : "bg-blue-500"
              } text-white px-3 py-1`}>
                {product.category}
              </Badge>
              {product.isPopular && (
                <Badge className="bg-yellow-500 text-white px-3 py-1">
                  Popular
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                {product.name}
              </h1>
              <p className="text-base text-gray-600">
                {product.short_description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-black mb-3 text-gray-900">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-3"
                onClick={() => setIsEnquiryOpen(true)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Request Enquiry
              </Button>
              
              <div className="flex gap-4">
                <Link to="/products" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Products
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description & Benefits */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Product Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>
              
              <h3 className="text-xl font-black mb-3 text-gray-900">Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-black mb-3 mt-6 text-gray-900">Usage Instructions</h3>
              <ol className="space-y-2">
                {product.usage.map((instruction, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Specifications */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-black mb-4 text-gray-900">Specifications</h2>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-2 last:border-0">
                    <dt className="font-bold text-gray-900 text-sm">
                      {key}
                    </dt>
                    <dd className="text-gray-600 text-sm">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>

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
