import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Leaf, Package, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EnquiryModal from "@/components/EnquiryModal";

interface Product {
  id: string;
  name: string;
  category: string;
  short_description: string;
  features: string[];
  isPopular?: boolean;
  imageType?: string;
}

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || "All"
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const categories = ["All", "Organic Fertilizers", "Sustainable Packaging"];

  // Simplified product data
  const products: Product[] = [
    // Organic Fertilizers
    {
      id: "vermi-compost",
      name: "Vermi-Compost",
      category: "Organic Fertilizers",
      short_description: "Premium quality earthworm processed organic fertilizer for enhanced soil fertility and plant growth.",
      features: ["100% organic", "Rich in nutrients", "Improves soil structure", "Eco-friendly"],
      isPopular: true,
      imageType: "vermicompost"
    },
    {
      id: "cow-dung-compost",
      name: "Cow-Dung Compost",
      category: "Organic Fertilizers",
      short_description: "Traditional organic fertilizer made from well-decomposed cow dung, perfect for all crop types.",
      features: ["Natural fertilizer", "Slow release nutrients", "Improves soil health", "Chemical-free"],
      imageType: "cowdung"
    },
    {
      id: "organic-mix-fertilizer",
      name: "Organic Mix Fertilizer",
      category: "Organic Fertilizers",
      short_description: "Balanced blend of organic materials providing complete nutrition for optimal plant development.",
      features: ["Complete nutrition", "Balanced NPK", "Organic blend", "Enhanced growth"],
      isPopular: true,
      imageType: "organicmix"
    },
    {
      id: "neem-powder",
      name: "Neem Powder",
      category: "Organic Fertilizers",
      short_description: "Natural pest deterrent and soil conditioner made from pure neem leaves and bark.",
      features: ["Natural pesticide", "Soil conditioner", "Antimicrobial properties", "Safe for plants"],
      imageType: "neempowder"
    },
    {
      id: "coco-peat",
      name: "Coco-Peat",
      category: "Organic Fertilizers",
      short_description: "Excellent growing medium with superior water retention and aeration properties.",
      features: ["Water retention", "Good drainage", "pH neutral", "Renewable resource"],
      imageType: "cocopeat"
    },
    {
      id: "potting-mixture",
      name: "Potting Mixture",
      category: "Organic Fertilizers",
      short_description: "Ready-to-use potting mix with perfect blend of organic materials for container gardening.",
      features: ["Ready to use", "Perfect blend", "Container friendly", "Nutrient rich"],
      imageType: "pottingmix"
    },
    {
      id: "rice-husk",
      name: "Rice Husk",
      category: "Organic Fertilizers",
      short_description: "Natural soil amendment that improves drainage and provides silica for stronger plants.",
      features: ["Improves drainage", "Rich in silica", "Lightweight", "Natural amendment"],
      imageType: "ricehusk"
    },
    {
      id: "fish-meal-manure",
      name: "Fish-Meal Manure",
      category: "Organic Fertilizers",
      short_description: "High protein organic fertilizer providing essential amino acids and nutrients for plants.",
      features: ["High protein", "Amino acids", "Slow release", "Marine nutrients"],
      imageType: "fishmeal"
    },
    {
      id: "goat-dung-manure",
      name: "Goat Dung Manure",
      category: "Organic Fertilizers",
      short_description: "Premium organic manure with high nutrient content, ideal for vegetable and fruit cultivation.",
      features: ["High nutrients", "Quick acting", "Ideal for vegetables", "Organic matter"],
      imageType: "goatdung"
    },
    {
      id: "neem-oil",
      name: "Neem Oil",
      category: "Organic Fertilizers",
      short_description: "Pure neem oil extract for natural pest control and plant health management.",
      features: ["Natural pest control", "Plant health", "Pure extract", "Multi-purpose"],
      isPopular: true,
      imageType: "neemoil"
    },

    // Sustainable Packaging Materials
    {
      id: "compostable-bioplastics",
      name: "100% Compostable Bioplastics (CPCB Certified)",
      category: "Sustainable Packaging",
      short_description: "Certified compostable bioplastic packaging solutions that break down naturally in composting conditions.",
      features: ["CPCB Certified", "100% compostable", "Eco-friendly", "Biodegradable"],
      isPopular: true,
      imageType: "bioplastics"
    },
    {
      id: "bagasse-packaging",
      name: "Bagasse Packaging Material",
      category: "Sustainable Packaging",
      short_description: "Sustainable packaging made from sugarcane bagasse, a renewable agricultural waste product.",
      features: ["Made from bagasse", "Renewable source", "Compostable", "Strong & durable"],
      imageType: "bagasse"
    },
    {
      id: "paper-packaging",
      name: "Paper Packaging Material",
      category: "Sustainable Packaging",
      short_description: "Recyclable and biodegradable paper-based packaging solutions for various applications.",
      features: ["Recyclable", "Biodegradable", "Versatile", "Sustainable"],
      imageType: "paperpackaging"
    },
    {
      id: "cotton-jute-canvas-bags",
      name: "Cotton, Jute & Canvas Bags",
      category: "Sustainable Packaging",
      short_description: "Reusable bags made from natural fibers, perfect alternative to plastic bags.",
      features: ["Reusable", "Natural fibers", "Durable", "Plastic alternative"],
      isPopular: true,
      imageType: "fabricbags"
    }
  ];

  // Function to get product image
  const getProductImage = (imageType: string, category: string) => {
    const imageMap: Record<string, string> = {
      // Organic Fertilizers
      vermicompost: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      cowdung: "https://images.unsplash.com/photo-1574924162449-3a5b88d6d47e?w=400&h=300&fit=crop&crop=center",
      organicmix: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=300&fit=crop&crop=center",
      neempowder: "https://images.unsplash.com/photo-1609501676725-7186f06ac4f0?w=400&h=300&fit=crop&crop=center",
      cocopeat: "https://images.unsplash.com/photo-1583479648924-06e28d86b49e?w=400&h=300&fit=crop&crop=center",
      pottingmix: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      ricehusk: "https://images.unsplash.com/photo-1574323359862-bc5bb2c31c4d?w=400&h=300&fit=crop&crop=center",
      fishmeal: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
      goatdung: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=300&fit=crop&crop=center",
      neemoil: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop&crop=center",
      
      // Sustainable Packaging
      bioplastics: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop&crop=center",
      bagasse: "https://images.unsplash.com/photo-1586281010293-7c8005b2e3e7?w=400&h=300&fit=crop&crop=center",
      paperpackaging: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center",
      fabricbags: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center"
    };

    return imageMap[imageType] || `https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center`;
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-green-900 via-green-800 to-green-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center hero-text">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Our <span className="text-green-300">Products</span>
            </h1>
            <p className="text-base md:text-lg text-green-100 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of organic fertilizers and sustainable packaging solutions designed for a greener tomorrow
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <p className="text-green-200 font-medium">Premium Quality • Eco-Friendly • Export Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 text-black-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for organic fertilizers, packaging materials..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-12 text-base border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 rounded-lg bg-white shadow-sm transition-all"
                  />
                </div>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => handleCategoryChange(category)}
                    className={`h-10 px-6 rounded-full font-bold transition-all duration-300 ${
                      selectedCategory === category 
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-md" 
                        : "border border-gray-200 hover:border-green-400 hover:text-green-600 bg-white"
                    }`}
                  >
                    {category === "Organic Fertilizers" && <Leaf className="w-4 h-4 mr-2" />}
                    {category === "Sustainable Packaging" && <Package className="w-4 h-4 mr-2" />}
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md mx-auto">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">No Products Found</h3>
                <p className="text-gray-600 text-base mb-6">No products match your current search criteria.</p>
                <Button 
                  onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }} 
                  className="bg-green-600 hover:bg-green-700 h-12 px-8 rounded-xl"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className={`group overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 ${
                    index === 0 ? 'xl:col-span-1' : ''
                  }`}
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={getProductImage(product.imageType || 'default', product.category)}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.className = `relative h-64 overflow-hidden ${
                            product.category === "Organic Fertilizers" 
                              ? "bg-gradient-to-br from-green-100 via-green-200 to-emerald-200" 
                              : "bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200"
                          }`;
                          const icon = document.createElement('div');
                          icon.className = 'absolute inset-0 flex items-center justify-center';
                          icon.innerHTML = product.category === "Organic Fertilizers" 
                            ? '<svg class="w-20 h-20 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>'
                            : '<svg class="w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>';
                          parent.appendChild(icon);
                        }
                      }}
                    />
                    
                    {/* Enhanced Badges */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <Badge className={`${
                        product.category === "Organic Fertilizers" 
                          ? "bg-green-600 hover:bg-green-700" 
                          : "bg-blue-600 hover:bg-blue-700"
                      } text-white shadow-lg backdrop-blur-sm border-0 px-3 py-1`}>
                        {product.category.split(" ")[0]}
                      </Badge>
                      {product.isPopular && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg backdrop-blur-sm border-0 px-3 py-1">
                          ⭐ Popular
                        </Badge>
                      )}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">
                      {product.short_description}
                    </p>
                    
                    {/* Enhanced Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="text-xs px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {product.features.length > 3 && (
                          <Badge 
                            variant="outline" 
                            className="text-xs px-3 py-1 border-gray-300 text-gray-600 hover:border-green-400 hover:text-green-600 transition-colors"
                          >
                            +{product.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-8 pt-0">
                    <div className="flex flex-col gap-4 w-full">
                      <Link to={`/products/${product.id}`} className="w-full">
                        <Button 
                          variant="outline" 
                          className="w-full h-12 border-2 border-gray-200 hover:border-green-500 hover:text-green-600 rounded-xl font-medium transition-all duration-300"
                        >
                          View Detailed Specs
                        </Button>
                      </Link>
                      <Button 
                        onClick={() => handleEnquiry(product)}
                        className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Request Quote
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
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
