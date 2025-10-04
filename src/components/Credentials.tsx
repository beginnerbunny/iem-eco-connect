import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, Star } from "lucide-react";

const Credentials = () => {
  const certifications = [
    {
      title: "ISO 9001:2015 and 14001:2015",
      description: "Quality Management System certification ensuring consistent service delivery",
      category: "Quality Management",
      status: "Active"
    },
    {
      title: "NABET/QCI Accredited",
      description: "Accredited by NABET/QCI (EIA) for environmental consultancy",
      category: "EIA Accreditation",
      status: "Active"
    },
    {
      title: "NABL Accredited",
      description: "NABL accreditation for laboratory testing and calibration competence",
      category: "Laboratory Accreditation",
      status: "Active"
    },
    {
      title: "JSPCB Recognized",
      description: "Recognition from Jharkhand State Pollution Control Board",
      category: "Regulatory Approval",
      status: "Active"
    },
    {
      title: "OHSAS 45001:2018",
      description: "Occupational Health and Safety Management System certification",
      category: "Safety Management", 
      status: "Active"
    },
    {
      title: "MOEFCC Certified",
      description: "Compliant with the Nvironment Impact Assessment regulations and other Environmental standards",
      category: "Ministry of Environment, Forest and Climate Change", 
      status: "Active"
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: "20+ Years Experience",
      description: "Experts with 20+ of proven expertise in EIA/EMP services"
    },
    {
      icon: Shield,
      title: "Excellent Compliance Record",
      description: "Exemplary track record of regulatory compliance for all our client"
    },
    {
      icon: Award,
      title: "Pan-India Presence",
      description: "Serving clients across all major industrial regions in India"
    }
  ];

  const expertise = [
    "Environmental Impact Assessment",
    "Pollution Control & Monitoring",
    "Environmental Auditing",
    "Regulatory Compliance",
    "Mine Planning & Clearances",
    "Water Treatment Systems",
    "Forest & Wildlife Management",
    "Socio-Economic Studies"
  ];

  return (
    <section id="credentials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Certified Excellence in Environmental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our certifications and achievements demonstrate our commitment to quality, 
            safety, and regulatory compliance in all environmental consultancy services.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Certifications & Accreditations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground mb-2">
                        {cert.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mb-2">
                        {cert.category}
                      </Badge>
                    </div>
                    <Badge 
                      variant={cert.status === "Active" ? "default" : "secondary"}
                      className="bg-success text-white"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {expertise.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;