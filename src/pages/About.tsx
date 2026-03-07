import { Target, Eye, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-green-900 via-green-800 to-green-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=1080&fit=crop&crop=center"
            alt="Team working in sustainable agriculture"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center hero-text">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              About <span className="text-green-300">HEGDE Resources</span>
            </h1>
            <p className="text-base md:text-lg text-green-100 max-w-4xl mx-auto leading-relaxed">
              Transforming the way the world consumes and produces, one sustainable product at a time
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <p className="text-green-200 font-medium">Since 2020 • Made in India • Exported Globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-20 text-black-content">
        <div className="container mx-auto px-4">

        {/* Company Story */}
        <section className="mb-20 pt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to create a sustainable future, HEGDE
                Resources has emerged as a leading Indian exporter of
                eco-friendly products. Our journey began with a simple question:
                What if every purchase could contribute to a healthier planet?
              </p>
              <p>
                Today, we specialize in two key areas: organic fertilizers that
                nurture the soil and enhance agricultural productivity, and
                sustainable packaging solutions that reduce plastic waste and
                environmental impact. Our products are the result of extensive
                research, innovation, and a deep commitment to environmental
                stewardship.
              </p>
              <p>
                We work closely with local farmers and communities, ensuring
                that our operations support not just environmental
                sustainability but also economic growth and social development.
                Through our products, we're helping businesses worldwide make
                the transition to more sustainable practices.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a global leader in sustainable products, creating a
                  positive environmental impact while supporting local
                  communities and farming practices. We envision a world where
                  sustainability is not a choice but a way of life.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality, eco-friendly products that reduce
                  environmental footprint while promoting sustainable
                  agriculture and responsible consumption. We foster conscious
                  consumption and empower individuals to make a difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Community First
              </h3>
              <p className="text-muted-foreground">
                Supporting local farmers and communities in their journey
                towards sustainable practices and economic growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Quality Excellence
              </h3>
              <p className="text-muted-foreground">
                Maintaining the highest standards in product quality and
                environmental compliance across all our offerings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                Continuously researching and developing new sustainable
                solutions that meet the evolving needs of our planet.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-secondary/10 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Certifications & Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="text-xl font-bold text-primary mb-2">CPCB</div>
              <p className="text-sm text-muted-foreground">
                Pollution Control
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="text-xl font-bold text-primary mb-2">ISO</div>
              <p className="text-sm text-muted-foreground">
                Quality Management
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="text-xl font-bold text-primary mb-2">
                Organic
              </div>
              <p className="text-sm text-muted-foreground">
                Certified Organic
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="text-xl font-bold text-primary mb-2">Export</div>
              <p className="text-sm text-muted-foreground">
                Export Quality
              </p>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default About;
