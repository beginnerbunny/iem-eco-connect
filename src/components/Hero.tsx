import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-environmental.jpg";

const Hero = () => {
  const highlights = [
    "ISO 9001:2015 Certified",
    "OHSAS 45001:2018 Compliant",
    "20+ Years Experience",
    "Government Approved"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-environmental-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Environmental Excellence Since 2012
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Leading Environmental
              <span className="block text-environmental-light">
                Consultancy Services
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Comprehensive environmental solutions for industries across India. 
              From EIA assessments to pollution monitoring, we ensure regulatory 
              compliance and sustainable development.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center text-white/90">
                <CheckCircle className="h-5 w-5 text-environmental-light mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              Request a callback
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline-light" 
              size="lg"
              className="font-semibold px-8"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;