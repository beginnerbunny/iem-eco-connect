import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, MapPin, Users, Calendar } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

const About = () => {
  const certifications = [
    "ISO 9001:2015",
    "OHSAS 45001:2018",
    "NABET/QCI Accredited",
    "NABL Accredited",
    "JSPCB Recognized"
  ];

  const keyPoints = [
    {
      icon: MapPin,
      title: "Located in Ranchi, Jharkhand",
      description: "Strategically positioned to serve Eastern India's industrial corridor"
    },
    {
      icon: Calendar,
      title: "Established Excellence",
      description: "Over a decade of proven environmental consultancy expertise"
    },
    {
      icon: Users,
      title: "Expert Leadership",
      description: "Led by experienced directors with deep industry knowledge"
    },
    {
      icon: Award,
      title: "Certified Operations",
      description: "ISO certified quality management and occupational health standards"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              About IEM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Institute for Environmental Management
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based out of Ranchi, Jharkhand, the Institute for Environmental Management (IEM) delivers
              end‑to‑end environmental consulting, monitoring, and accredited laboratory services
              across India. We are ISO 9001:2015 and OHSAS 45001:2018 certified; NABET/QCI
              (Certificate No. NABET/EIA/24-27/IA 0137), NABL, and JSPCB accredited. Every
              engagement is led by a dedicated project manager and supported by a multi‑disciplinary
              team to provide timely, compliant, and business‑ready outcomes—helping clients meet
              regulatory obligations while advancing sustainable performance.
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Certifications & Accreditations</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {keyPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{point.title}</h4>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutImage}
                alt="IEM Office Environment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years of Expertise</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute -top-6 -right-6 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;