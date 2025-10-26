import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Package, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-sustainable.jpg";
import productVermi from "@/assets/product-vermicompost.jpg";
import productPack from "@/assets/product-packaging.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sustainable agriculture and eco-friendly practices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20 md:pt-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in">
            Imagine a world where every purchase
            <br />
            <span className="text-gradient">contributes to a healthier planet</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Leading Indian exporter of eco-friendly and sustainable products
            for a greener tomorrow
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="group text-white">
              Explore Sustainable Solutions
              <ArrowRight className="ml-2 w-5 h-5 transition-smooth group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fostering conscious consumption and empowering individuals to make
              a difference for our planet's future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-medium hover:shadow-large transition-smooth">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Leaf className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Vision</h3>
                <p className="text-muted-foreground">
                  To be a global leader in sustainable products, creating a
                  positive environmental impact while supporting local
                  communities and farming practices.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mission</h3>
                <p className="text-muted-foreground">
                  Provide high-quality, eco-friendly products that reduce
                  environmental footprint while promoting sustainable
                  agriculture and responsible consumption worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sustainable solutions for agriculture and packaging needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-medium hover:shadow-large transition-smooth group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={productVermi}
                  alt="Organic fertilizers"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-3">
                  <Leaf className="w-6 h-6 text-secondary mr-2" />
                  <h3 className="text-2xl font-black">Organic Fertilizers</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Premium vermicompost, bio NPK complex, and enriched compost
                  for sustainable farming and healthier crops
                </p>
                <Link to="/products?category=Organic Fertilizers">
                  <Button variant="outline" className="group/btn">
                    View Products
                    <ArrowRight className="ml-2 w-4 h-4 transition-smooth group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-medium hover:shadow-large transition-smooth group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={productPack}
                  alt="Sustainable packaging"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-3">
                  <Package className="w-6 h-6 text-secondary mr-2" />
                  <h3 className="text-2xl font-black">Sustainable Packaging</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Biodegradable containers, eco-friendly boxes, and compostable
                  bags as alternatives to traditional plastic
                </p>
                <Link to="/products?category=Sustainable Packaging">
                  <Button variant="outline" className="group/btn">
                    View Products
                    <ArrowRight className="ml-2 w-4 h-4 transition-smooth group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating measurable positive change for the environment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-black text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">
                Happy Clients
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-black text-primary mb-2">500T+</div>
              <div className="text-sm text-muted-foreground">
                Organic Compost
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-black text-primary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">
                Eco Packages
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-black text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">
                Countries Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-6">
            Let's Build a Greener Future Together
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Partner with us to make sustainable choices that benefit your
            business and the planet
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-white">
              Partner With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
