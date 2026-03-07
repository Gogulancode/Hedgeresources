import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Leaf, Recycle, CheckCircle, ArrowRight, Handshake, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sustainable.webp";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div>
      <SEO
        title="About Us - Our Story & Mission"
        description="Learn about HEGDE Resources — India-based exporter of organic fertilizers and sustainable packaging. Our mission, values, and commitment to a greener planet."
        keywords="HEGDE Resources, about us, sustainable company India, organic fertilizer exporter, eco-friendly mission"
        canonicalPath="/about"
      />
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sustainable agriculture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-label text-green-300 mb-3">About Us</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Our Story,<br />Rooted in India
            </h1>
            <p className="text-white/80 leading-relaxed mb-6 max-w-xl">
              From a small initiative to a global exporter — learn how we're transforming agriculture and packaging, one eco-friendly product at a time.
            </p>
            <div className="flex items-center gap-6 text-sm text-green-300">
              <span>Since 2020</span>
              <span className="w-1 h-1 rounded-full bg-green-400"></span>
              <span>Made in India</span>
              <span className="w-1 h-1 rounded-full bg-green-400"></span>
              <span>Exported Globally</span>
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

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-2">Our Journey</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">The HEGDE Story</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
                <p>
                  Founded with a vision to create a sustainable future, HEGDE
                  Resources has emerged as a leading Indian exporter of
                  eco-friendly products. Our journey began with a simple question:
                  What if every purchase could contribute to a healthier planet?
                </p>
                <p>
                  Today, we specialize in organic fertilizers that nurture the soil
                  and enhance agricultural productivity, and sustainable packaging
                  solutions that reduce plastic waste and environmental impact. Our
                  products are the result of extensive research, innovation, and a
                  deep commitment to environmental stewardship.
                </p>
                <p>
                  We work closely with local farmers and communities, ensuring
                  that our operations support not just environmental sustainability
                  but also economic growth and social development. Through our
                  products, we're helping businesses worldwide make the transition
                  to more sustainable practices.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-6">
                <Leaf className="w-7 h-7 text-green-700 mb-3" />
                <h3 className="text-sm font-semibold mb-1">Organic Roots</h3>
                <p className="text-xs text-gray-500">Started with organic fertilizers sourced from local farming communities</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <Recycle className="w-7 h-7 text-green-700 mb-3" />
                <h3 className="text-sm font-semibold mb-1">Eco Expansion</h3>
                <p className="text-xs text-gray-500">Expanded into sustainable packaging — jute, cotton, canvas & bioplastics</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <TrendingUp className="w-7 h-7 text-green-700 mb-3" />
                <h3 className="text-sm font-semibold mb-1">Rapid Growth</h3>
                <p className="text-xs text-gray-500">Scaled to 42 products across 7 categories in just a few years</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <Handshake className="w-7 h-7 text-green-700 mb-3" />
                <h3 className="text-sm font-semibold mb-1">Global Partners</h3>
                <p className="text-xs text-gray-500">Trusted by 100+ clients across 10+ countries worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label text-green-300 mb-2">Our Purpose</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Our Vision</h3>
              <p className="text-green-200 text-sm leading-relaxed">
                To be a global leader in sustainable products, creating a
                positive environmental impact while supporting local
                communities and farming practices. We envision a world where
                sustainability is not a choice but a way of life.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Our Mission</h3>
              <p className="text-green-200 text-sm leading-relaxed">
                To provide high-quality, eco-friendly products that reduce
                environmental footprint while promoting sustainable
                agriculture and responsible consumption. We foster conscious
                consumption and empower individuals to make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label mb-2">What Drives Us</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Our Core Values</h2>
            <p className="text-gray-500 max-w-2xl">
              The principles that guide every decision we make and every product we deliver
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, title: "Community First", desc: "Supporting local farmers and communities towards sustainable practices and economic growth" },
              { icon: <Target className="w-6 h-6" />, title: "Quality Excellence", desc: "Maintaining the highest standards in product quality and environmental compliance" },
              { icon: <Award className="w-6 h-6" />, title: "Innovation", desc: "Continuously researching and developing sustainable solutions for evolving needs" },
              { icon: <Leaf className="w-6 h-6" />, title: "Sustainability", desc: "Every product we create is designed to minimize environmental impact" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-700">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <p className="section-label mb-2">Why HEGDE Resources</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">What Sets Us Apart</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                From sourcing to shipping, we control every step to ensure quality, consistency, and reliability for our global partners.
              </p>
              <div className="space-y-3">
                {[
                  "Direct sourcing from local farmers and manufacturers",
                  "CPCB certified, ISO compliant production standards",
                  "Complete export documentation and compliance support",
                  "Custom branding, sizing and packaging options",
                  "Flexible MOQ for first-time buyers",
                  "Dedicated account manager for each client",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "CPCB", desc: "Pollution Control Board Certified" },
                { label: "ISO", desc: "Quality Management System" },
                { label: "Organic", desc: "Certified Organic Products" },
                { label: "Export", desc: "Export Quality Standards" },
              ].map((cert) => (
                <div key={cert.label} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                  <div className="text-2xl font-bold text-green-800 mb-1">{cert.label}</div>
                  <p className="text-xs text-gray-500">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">
            Let's work together to build a greener future — explore our products or get in touch today.
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
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
