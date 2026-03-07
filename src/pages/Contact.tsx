import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { initEmailJS, sendEmail } from "@/lib/emailjs";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&crop=center"
            alt="Customer service and communication"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center hero-text">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Contact <span className="text-blue-300">Us</span>
            </h1>
            <p className="text-base md:text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Let's Build a Greener Future Together - Your sustainable journey starts with a conversation
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <p className="text-blue-200 font-medium">Available 24/7 • Quick Response • Expert Guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-20 text-black-content">
        <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto pt-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our products or want to partner with us?
                We'd love to hear from you. Our team is ready to help you make
                sustainable choices.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        hegde.resources@gmail.com
                      </p>
                      <p className="text-muted-foreground">
                        sales@hegderesources.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 96191 11045</p>
                      <p className="text-muted-foreground">
                        WhatsApp: +91 96191 11045
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        HEGDE Resources
                        <br />
                        Upper Govind Nagar, Malad East, Mumbai.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-large">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      required
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="productInterest">Product Interest *</Label>
                    <Select name="productInterest" value={formData.productInterest} onValueChange={(value) => setFormData(prev => ({ ...prev, productInterest: value }))}>
                      <SelectTrigger className={errors.productInterest ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Organic Fertilizers">Organic Fertilizers</SelectItem>
                        <SelectItem value="Vermi-Compost">Vermi-Compost</SelectItem>
                        <SelectItem value="Cow-Dung Compost">Cow-Dung Compost</SelectItem>
                        <SelectItem value="Organic Mix Fertilizer">Organic Mix Fertilizer</SelectItem>
                        <SelectItem value="Neem Powder">Neem Powder</SelectItem>
                        <SelectItem value="Neem Oil">Neem Oil</SelectItem>
                        <SelectItem value="Sustainable Packaging">Sustainable Packaging</SelectItem>
                        <SelectItem value="Compostable Bioplastics">Compostable Bioplastics</SelectItem>
                        <SelectItem value="Bagasse Packaging">Bagasse Packaging</SelectItem>
                        <SelectItem value="Paper Packaging">Paper Packaging</SelectItem>
                        <SelectItem value="Cotton/Jute/Canvas Bags">Cotton/Jute/Canvas Bags</SelectItem>
                        <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                        <SelectItem value="Export Inquiry">Export Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.productInterest && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.productInterest}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
