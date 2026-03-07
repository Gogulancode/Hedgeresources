import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { initEmailJS, sendEmail } from "@/lib/emailjs";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sustainable.webp";
import SEO from "@/components/SEO";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20).regex(/^[+]?[\d\s()-]+$/, "Phone number can only contain digits, spaces, +, -, (, )"),
  productInterest: z.string().trim().min(1, "Please select your product interest").max(100),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactSchema.parse(formData);
      
      setLoading(true);
      setErrors({});

      // Send email via EmailJS
      try {
        await sendEmail({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          message: validatedData.message,
          product_name: validatedData.productInterest,
        });

        toast({
          title: "Message sent successfully!",
          description: "We received your message and will get back to you soon.",
        });
      } catch (emailError) {
        console.error("EmailJS error:", emailError);
        throw new Error("Email service is currently unavailable. Please try again later or contact us directly at hegde.resources@gmail.com");
      }

      setFormData({ name: "", email: "", phone: "", productInterest: "", message: "" });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check all fields and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error sending message",
          description: error instanceof Error ? error.message : "There was an issue sending your message. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact HEGDE Resources for inquiries about organic fertilizers, sustainable packaging, and eco-friendly products. Email, phone, or visit us in India."
        keywords="contact HEGDE Resources, sustainable products inquiry, organic fertilizer supplier, eco-friendly products India"
        canonicalPath="/contact"
      />
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[50vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact Hedge Resources"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="section-label text-green-300 mb-4">Reach Out</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
              Your sustainable journey starts here. Get in touch for product inquiries, bulk orders, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Row */}
      <section className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Mail, label: "Email Us", value: "hegde.resources@gmail.com" },
              { icon: Phone, label: "Call Us", value: "+91 96191 11045" },
              { icon: Clock, label: "Business Hours", value: "Mon—Sat, 9 AM — 6 PM" },
              { icon: Globe, label: "Serving", value: "10+ Countries Globally" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <div className="text-xs text-green-300">{item.label}</div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
            {/* Contact Info - Left */}
            <div className="lg:col-span-2">
              <p className="section-label mb-3">Get in Touch</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">We&apos;d love to hear from you</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Have questions about our products or want to partner with us? Our team is ready to help you make sustainable choices.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-500 text-sm">hegde.resources@gmail.com</p>
                    <p className="text-gray-500 text-sm">sales@hegderesources.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-500 text-sm">+91 96191 11045</p>
                    <p className="text-gray-500 text-sm">WhatsApp: +91 96191 11045</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-500 text-sm">
                      HEGDE Resources<br />
                      Upper Govind Nagar, Malad East, Mumbai.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  title="Hedge Resources Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3!2d72.86!3d19.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMalad%20East%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form - Right */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-500 text-sm mb-6">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className={`mt-1.5 bg-white ${errors.name ? "border-destructive" : "border-gray-200"}`}
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className={`mt-1.5 bg-white ${errors.email ? "border-destructive" : "border-gray-200"}`}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        required
                        className={`mt-1.5 bg-white ${errors.phone ? "border-destructive" : "border-gray-200"}`}
                      />
                      {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <Label htmlFor="productInterest" className="text-sm font-medium text-gray-700">Product Interest *</Label>
                      <Select name="productInterest" value={formData.productInterest} onValueChange={(value) => setFormData(prev => ({ ...prev, productInterest: value }))}>
                        <SelectTrigger className={`mt-1.5 bg-white ${errors.productInterest ? "border-destructive" : "border-gray-200"}`}>
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          <SelectItem value="Organic Fertilizers">Organic Fertilizers</SelectItem>
                          <SelectItem value="Compostable Bioplastics">Compostable Bioplastics</SelectItem>
                          <SelectItem value="Plant Based Products">Plant Based Products</SelectItem>
                          <SelectItem value="100% Cotton Towels">100% Cotton Towels</SelectItem>
                          <SelectItem value="Jute Bags">Jute Bags</SelectItem>
                          <SelectItem value="Cotton Bags">Cotton Bags</SelectItem>
                          <SelectItem value="Canvas Bags">Canvas Bags</SelectItem>
                          <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                          <SelectItem value="Export Inquiry">Export Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.productInterest && <p className="text-xs text-destructive mt-1">{errors.productInterest}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      className={`mt-1.5 bg-white ${errors.message ? "border-destructive" : "border-gray-200"}`}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 h-12 text-base" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Go Sustainable?
          </h2>
          <p className="text-green-100/80 max-w-2xl mx-auto mb-8">
            Explore our complete range of eco-friendly products or learn more about our sustainability commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/products">
              <Button className="bg-white text-green-800 hover:bg-gray-100 font-medium px-6 rounded-md">
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/sustainability">
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-green-800 font-medium px-6 rounded-md">
                Our Sustainability
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
