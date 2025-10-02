import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, EmailTemplateParams } from "@/config/email";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your inquiry.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Debug: Check if EmailJS is properly configured
      console.log('Sending email with config:', {
        serviceId: EMAIL_CONFIG.serviceId,
        templateId: EMAIL_CONFIG.templateId,
        publicKey: EMAIL_CONFIG.publicKey ? '***' + EMAIL_CONFIG.publicKey.slice(-4) : 'Not set'
      });

      // Prepare email template parameters
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: EMAIL_CONFIG.companyEmail,
        reply_to: formData.email
      };

      console.log('Template params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        templateParams,
        EMAIL_CONFIG.publicKey
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        toast({
          title: "Inquiry submitted successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        
        // Clear form after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      
      // More specific error messages
      let errorMessage = "Please try again or contact us directly at iem2012@rediffmail.com";
      
      if (error instanceof Error) {
        if (error.message.includes('Invalid email')) {
          errorMessage = "Invalid email configuration. Please check your EmailJS setup.";
        } else if (error.message.includes('Service not found')) {
          errorMessage = "Email service not found. Please check your Service ID.";
        } else if (error.message.includes('Template not found')) {
          errorMessage = "Email template not found. Please check your Template ID.";
        } else if (error.message.includes('Invalid public key')) {
          errorMessage = "Invalid public key. Please check your EmailJS configuration.";
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }
      
      toast({
        title: "Failed to send inquiry",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "8407804251 (Dr. SC Jain, Director)",
        "8407804255 (Mr. Sumil Jain, Director)"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "iem2012@rediffmail.com",
        "rch.jain58@gmail.com"
      ]
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "A-13, Saket Vihar, Harmu Housing Colony,",
        "Near Sohrai Bhawan, Harmu, Ranchi-834002 (JH)"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Environmental Project?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact our expert team for comprehensive environmental consultancy services. 
              We're here to help ensure your project meets all regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const isOfficeLocation = info.title === "Office Location";
                const CardComponent = (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );

                if (isOfficeLocation) {
                  return (
                    <a
                      key={index}
                      href="https://maps.app.goo.gl/NwyEUAZV8QjDNa428"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:transform hover:scale-105 transition-transform duration-200"
                    >
                      {CardComponent}
                    </a>
                  );
                }

                return CardComponent;
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us Your Inquiry</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        Inquiry Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your project requirements, location, and any specific environmental services you need..."
                        rows={6}
                        required
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-darker hover:to-primary"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;