import { Link } from "react-router-dom";
import { Recycle, Leaf, TrendingUp, Globe, CheckCircle, Droplets, Sun, TreePine, Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/sustainability-impact.webp";
import SEO from "@/components/SEO";

const Sustainability = () => {
  return (
    <div>
      <SEO
        title="Sustainability - Our Environmental Commitment"
        description="Discover HEGDE Resources' sustainability initiatives — reducing waste, lowering emissions, championing circular practices, and our 2030 environmental goals."
        keywords="sustainability, eco-friendly practices, circular economy, carbon reduction, environmental goals, green business India"
        canonicalPath="/sustainability"
      />
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
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
            <p className="section-label text-green-300 mb-4">Our Commitment</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Sustainability at Our Core
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              From nature, for the future — reducing waste, lowering emissions, and championing circular practices across everything we do.
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

      {/* Impact Stats Row */}
      <section className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm text-green-200">Tons Waste Diverted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-green-200">Tons Organic Compost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">10+</div>
              <div className="text-sm text-green-200">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">30%</div>
              <div className="text-sm text-green-200">Carbon Reduction YoY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <p className="section-label mb-3">Our Approach</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Building a Circular Economy
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                At Hedge Resources, sustainability isn't a buzzword — it's the foundation of everything we do. We transform agricultural and organic waste into high-value products, creating a closed-loop system that benefits both businesses and the planet.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our commitment extends across the entire supply chain — from sourcing raw materials locally to manufacturing with minimal emissions, and delivering products that are fully biodegradable or compostable at end of life.
              </p>
              <div className="space-y-3">
                {["Zero-waste manufacturing processes", "100% biodegradable product lines", "Carbon-neutral shipping partnerships", "Local sourcing within 200km radius"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Recycle, title: "Circular Design", desc: "Products designed to return to nature" },
                { icon: Leaf, title: "Organic Inputs", desc: "Chemical-free raw materials only" },
                { icon: Droplets, title: "Water Efficient", desc: "50% less water in production" },
                { icon: Sun, title: "Solar Powered", desc: "Renewable energy in operations" },
              ].map((card) => (
                <div key={card.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                    <card.icon className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-xs text-gray-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Practices - Green Section */}
      <section className="py-10 md:py-16 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-green-300 mb-3">How We Work</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Our Sustainable Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Leaf,
                title: "Organic Waste Management",
                desc: "We transform organic waste into nutrient-rich compost through advanced vermiculture processes, reducing landfill waste while creating valuable agricultural inputs.",
              },
              {
                icon: Recycle,
                title: "Circular Economy Products",
                desc: "Our products are designed with a circular approach, ensuring materials can be composted or recycled, minimizing waste and maximizing resource efficiency.",
              },
              {
                icon: TreePine,
                title: "Local Sourcing & Fair Trade",
                desc: "We partner with local farmers and suppliers within a 200km radius, reducing transportation emissions while supporting community economic development.",
              },
              {
                icon: Factory,
                title: "Clean Manufacturing",
                desc: "Our production facilities use solar energy, rainwater harvesting, and zero-discharge systems to minimize our manufacturing footprint.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-green-100/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Looking Ahead</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Our 2030 Sustainability Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                target: "100%",
                title: "Renewable Energy",
                desc: "Transition all manufacturing operations to 100% renewable energy sources by 2030.",
                progress: 65,
              },
              {
                target: "Zero",
                title: "Landfill Waste",
                desc: "Achieve zero waste to landfill across all facilities through reuse, recycling, and composting.",
                progress: 80,
              },
              {
                target: "50%",
                title: "Carbon Reduction",
                desc: "Reduce carbon emissions by 50% against our 2020 baseline across all operations.",
                progress: 60,
              },
            ].map((goal) => (
              <div key={goal.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-green-700 mb-1">{goal.target}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{goal.desc}</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-700"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">{goal.progress}% achieved</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <p className="section-label mb-3">Worldwide Presence</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Global Export Reach
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our sustainable products reach businesses and communities across continents, helping create a global movement towards environmental responsibility.
              </p>
              <p className="text-gray-500 leading-relaxed">
                With export partnerships in over 10 countries, we're proving that sustainable products can compete on quality, price, and reliability in international markets.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "India", flag: "\u{1F1EE}\u{1F1F3}" },
                  { name: "UAE", flag: "\u{1F1E6}\u{1F1EA}" },
                  { name: "Singapore", flag: "\u{1F1F8}\u{1F1EC}" },
                  { name: "USA", flag: "\u{1F1FA}\u{1F1F8}" },
                  { name: "UK", flag: "\u{1F1EC}\u{1F1E7}" },
                  { name: "Germany", flag: "\u{1F1E9}\u{1F1EA}" },
                  { name: "Australia", flag: "\u{1F1E6}\u{1F1FA}" },
                  { name: "Japan", flag: "\u{1F1EF}\u{1F1F5}" },
                  { name: "South Korea", flag: "\u{1F1F0}\u{1F1F7}" },
                  { name: "Canada", flag: "\u{1F1E8}\u{1F1E6}" },
                ].map((country) => (
                  <span key={country.name} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-50 border border-gray-100 text-gray-700 hover:border-green-200 hover:bg-green-50 transition-colors">
                    <span className="text-lg">{country.flag}</span>
                    {country.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join the Sustainable Revolution
          </h2>
          <p className="text-green-100/80 max-w-2xl mx-auto mb-8">
            Partner with us to access premium eco-friendly products that help your business meet sustainability goals without compromising on quality.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/products">
              <Button className="bg-white text-green-800 hover:bg-gray-100 font-medium px-6 rounded-md">
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-green-800 font-medium px-6 rounded-md">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
