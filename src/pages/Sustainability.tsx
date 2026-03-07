import { Recycle, Leaf, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Sustainability = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-emerald-900 via-green-800 to-teal-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop&crop=center"
            alt="Sustainability and environmental conservation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center hero-text">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              From <span className="text-emerald-300">Nature</span>. For the <span className="text-teal-300">Future</span>.
            </h1>
            <p className="text-base md:text-lg text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Our commitment to creating a sustainable tomorrow, today - through innovative products and responsible practices
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <p className="text-emerald-200 font-medium">Carbon Neutral • Waste Reduction • Global Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-20 text-black-content">
        <div className="container mx-auto px-4">
        {/* Impact Stats */}
        <section className="mb-20 pt-16">
          <h2 className="text-2xl font-bold mb-12 text-center">
            Our Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-medium">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  1000+ Tons
                </div>
                <p className="text-muted-foreground">
                  Waste Diverted from Landfills
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  500+ Tons
                </div>
                <p className="text-muted-foreground">
                  Organic Compost Created
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  10+ Countries
                </div>
                <p className="text-muted-foreground">
                  Served Globally
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  30% Reduction
                </div>
                <p className="text-muted-foreground">
                  In Carbon Footprint
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sustainability Practices */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-12 text-center">
            Our Sustainable Practices
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Organic Waste Management
                    </h3>
                    <p className="text-muted-foreground">
                      We transform organic waste into nutrient-rich compost
                      through advanced vermiculture processes, reducing landfill
                      waste while creating valuable agricultural inputs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Circular Economy
                    </h3>
                    <p className="text-muted-foreground">
                      Our products are designed with a circular approach,
                      ensuring materials can be composted or recycled,
                      minimizing waste and maximizing resource efficiency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Local Sourcing
                    </h3>
                    <p className="text-muted-foreground">
                      We partner with local farmers and suppliers, reducing
                      transportation emissions while supporting community
                      economic development and sustainable farming practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Continuous Innovation
                    </h3>
                    <p className="text-muted-foreground">
                      We invest in research and development to create new
                      sustainable solutions, constantly improving our products
                      and processes to minimize environmental impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Global Reach */}
        <section className="bg-secondary/10 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Global Export Reach
          </h2>
          <p className="text-base text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Our sustainable products reach businesses and communities across
            continents, helping create a global movement towards environmental
            responsibility and conscious consumption.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "India",
              "UAE",
              "Singapore",
              "USA",
              "UK",
              "Germany",
              "Australia",
              "Japan",
              "South Korea",
              "Canada",
            ].map((country) => (
              <div
                key={country}
                className="bg-card px-6 py-3 rounded-full shadow-soft"
              >
                <span className="font-medium">{country}</span>
              </div>
            ))}
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
