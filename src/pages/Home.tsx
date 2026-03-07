import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Globe, Shield, Truck, Award, Recycle, CheckCircle, Star, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sustainable.webp";
import { categoryImages, productImages } from "@/lib/productImages";
import SEO from "@/components/SEO";

const Home = () => {
  return (
    <div>
      <SEO
        title="Sustainable Products & Eco-Friendly Solutions"
        description="Leading Indian exporter of organic fertilizers, compostable bioplastics, eco-friendly bags, and sustainable packaging. Trusted across 10+ countries."
        keywords="organic fertilizers, sustainable packaging, eco-friendly products, vermicompost, compostable bags, jute bags, cotton bags, Indian exporter"
        canonicalPath="/"
      />
      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[85vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sustainable agriculture and eco-friendly practices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="section-label text-green-300 mb-4">Sustainable Solutions from India</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Empowering Agriculture with Eco-Friendly Products
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Leading Indian exporter of organic fertilizers, eco-friendly
              packaging, and premium textiles — trusted across 10+ countries.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products">
                <Button className="bg-white text-green-800 hover:bg-gray-100 font-medium px-6 rounded-md">
                  Explore Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-green-800 font-medium px-6 rounded-md">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">100+</div>
              <div className="text-sm text-green-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">500T+</div>
              <div className="text-sm text-green-200">Organic Compost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">1M+</div>
              <div className="text-sm text-green-200">Eco Packages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">10+</div>
              <div className="text-sm text-green-200">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <p className="section-label mb-3">Who We Are</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">Sustainable Solutions,<br />Rooted in India</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                HEGDE Resources is a leading Indian exporter of eco-friendly products — from organic fertilizers
                that enrich the soil to sustainable packaging that replaces single-use plastics. We work directly with
                local farmers and communities, turning India's agricultural heritage into world-class green products.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our mission is simple: high-quality products that reduce environmental footprint while empowering
                communities and promoting responsible consumption worldwide.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-medium px-6 rounded-md">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-green-50 rounded-lg p-4 md:p-6 text-center">
                <Leaf className="w-7 h-7 text-green-700 mx-auto mb-3" />
                <h3 className="text-sm font-semibold mb-1">100% Organic</h3>
                <p className="text-xs text-gray-500">Certified organic fertilizers & natural inputs</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 md:p-6 text-center">
                <Recycle className="w-7 h-7 text-green-700 mx-auto mb-3" />
                <h3 className="text-sm font-semibold mb-1">Eco Packaging</h3>
                <p className="text-xs text-gray-500">Biodegradable & compostable alternatives</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 md:p-6 text-center">
                <Globe className="w-7 h-7 text-green-700 mx-auto mb-3" />
                <h3 className="text-sm font-semibold mb-1">Global Reach</h3>
                <p className="text-xs text-gray-500">Exporting to 10+ countries across continents</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 md:p-6 text-center">
                <Shield className="w-7 h-7 text-green-700 mx-auto mb-3" />
                <h3 className="text-sm font-semibold mb-1">Quality Assured</h3>
                <p className="text-xs text-gray-500">CPCB certified, ISO compliant standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="section-label text-green-300 mb-2">Why Hedge Resources</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Why Partner With Us
            </h2>
            <p className="text-green-200 max-w-2xl">
              We combine quality, sustainability, and reliability to deliver products that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Shield className="w-6 h-6" />, title: "Certified Quality", desc: "CPCB certified, ISO compliant products meeting international quality standards" },
              { icon: <Recycle className="w-6 h-6" />, title: "100% Sustainable", desc: "Every product is biodegradable, compostable, or made from renewable resources" },
              { icon: <Truck className="w-6 h-6" />, title: "Global Export", desc: "Reliable shipping to 10+ countries with proper export documentation" },
              { icon: <Award className="w-6 h-6" />, title: "Custom Solutions", desc: "Custom branding, sizing, and packaging tailored to your business needs" },
            ].map((item) => (
              <div key={item.title} className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center mx-auto mb-3 text-green-200">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="section-label mb-2">What We Offer</p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Our Product Categories
              </h2>
            </div>
            <Link to="/products" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-medium px-5 rounded-md text-sm">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Top row: 3 featured categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { name: "Organic Fertilizers", desc: "Vermi compost, neem powder, coco peat and more", count: "6 Products" },
              { name: "Compostable Bioplastics", desc: "CPCB certified D-cut, W-cut, garbage bags and films", count: "6 Products" },
              { name: "Jute Bags", desc: "Tote, pouch, bottle, zipper and window bags", count: "10 Products" },
            ].map((cat) => (
              <Link to={`/products?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="group relative rounded-xl overflow-hidden h-48 md:h-64">
                <img
                  src={categoryImages[cat.name]}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-medium text-green-300 bg-green-900/50 px-2 py-0.5 rounded-full">{cat.count}</span>
                  <h3 className="text-white font-semibold text-lg mt-2">{cat.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row: 4 secondary categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Plant Based", desc: "Areca palm, bagasse, bamboo & kraft paper", count: "4 Products" },
              { name: "100% Cotton Towels", desc: "Bath, spa, pool, salon & hotel towels", count: "5 Products" },
              { name: "Cotton Bags", desc: "Drawstring, loop-handle & printed bags", count: "7 Products" },
              { name: "Canvas Bags", desc: "Premium totes & promotional bags", count: "4 Products" },
            ].map((cat) => (
              <Link to={`/products?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="group relative rounded-xl overflow-hidden h-40 md:h-48">
                <img
                  src={categoryImages[cat.name]}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] font-medium text-green-300 bg-green-900/50 px-2 py-0.5 rounded-full">{cat.count}</span>
                  <h3 className="text-white font-semibold text-sm mt-1.5">{cat.name}</h3>
                  <p className="text-white/70 text-xs mt-0.5 hidden md:block">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label mb-2">Best Sellers</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Featured Products
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Our most popular products trusted by businesses across the globe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { id: "vermi-compost", name: "Vermi Compost", category: "Organic Fertilizers" },
              { id: "compostable-dcut-bags", name: "Compostable D-Cut Bags", category: "Compostable Bioplastics" },
              { id: "areca-palm-tableware", name: "Areca Palm Tableware", category: "Plant Based" },
              { id: "bath-towels", name: "Bath Towels", category: "100% Cotton Towels" },
              { id: "jute-different-size-bags", name: "Different Size Jute Bags", category: "Jute Bags" },
              { id: "printed-pouch-cotton-bags", name: "Printed Pouch Cotton Bags", category: "Cotton Bags" },
              { id: "premium-canvas-tote-bags", name: "Premium Canvas Tote Bags", category: "Canvas Bags" },
              { id: "steam-bone-meal", name: "Steam Bone Meal Granules", category: "Organic Fertilizers" },
            ].map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={productImages[product.id]}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-green-700 font-medium mb-0.5">{product.category}</p>
                    <h3 className="text-sm font-semibold group-hover:text-green-700 transition-colors leading-tight">{product.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products">
              <Button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 rounded-md">
                View All 42 Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works / Process */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label mb-2">Simple Process</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              How to Order
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Getting started is easy — from enquiry to delivery, we handle everything
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Enquire", desc: "Browse our catalog and send us an enquiry for the products you need" },
              { step: "02", title: "Customize", desc: "Tell us your branding, sizing, and quantity requirements" },
              { step: "03", title: "Sample", desc: "Receive samples for approval before bulk production begins" },
              { step: "04", title: "Deliver", desc: "We handle production, quality checks, and global shipping" },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-green-700 text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] border-t-2 border-dashed border-green-200" />
                )}
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Export Worldwide</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Trusted by Businesses Across the Globe
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                From organic fertilizers to sustainable packaging, our products reach businesses in over 10 countries.
                We provide end-to-end export support including documentation, compliance, and logistics.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Complete export documentation & compliance",
                  "Flexible MOQ for first-time buyers",
                  "Quality assurance with batch certifications",
                  "Dedicated account manager for each client",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 rounded-md">
                  Get Export Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-semibold mb-6 text-center">Regions We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { region: "Middle East", countries: "UAE, Saudi Arabia, Oman, Qatar" },
                  { region: "Southeast Asia", countries: "Malaysia, Singapore, Thailand" },
                  { region: "Africa", countries: "Kenya, Tanzania, South Africa" },
                  { region: "Europe", countries: "UK, Germany, Netherlands" },
                  { region: "North America", countries: "USA, Canada" },
                  { region: "South Asia", countries: "Sri Lanka, Bangladesh, Nepal" },
                ].map((r) => (
                  <div key={r.region} className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{r.region}</p>
                      <p className="text-xs text-gray-500">{r.countries}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label mb-2">Client Feedback</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Hedge Resources has been our go-to supplier for organic fertilizers. The quality of their vermi compost is consistently excellent, and their export documentation is always smooth.",
                name: "Ahmed Al-Rashid",
                role: "Agricultural Imports, Dubai",
                stars: 5,
              },
              {
                quote: "We switched to their compostable bioplastic bags for our retail chain. Customers love the eco-friendly packaging, and the CPCB certification gives us complete confidence.",
                name: "Sarah Thompson",
                role: "Sustainability Manager, UK",
                stars: 5,
              },
              {
                quote: "Their jute and cotton bags are perfect for our corporate gifting needs. Excellent print quality, timely delivery, and the team is always responsive to custom requirements.",
                name: "Rajesh Menon",
                role: "Procurement Head, Singapore",
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-lg p-6 border border-gray-100">
                <Quote className="w-8 h-8 text-green-200 mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Let's Build a Greener Future Together
          </h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">
            Partner with us to make sustainable choices that benefit your
            business and the planet.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-green-800 hover:bg-gray-100 font-medium px-8 rounded-md">
              Partner With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
