import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Shield, 
  Activity, 
  Search, 
  MapPin, 
  TreePine,
  Users,
  Settings
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "EC/EIA/EMP/DMP/PFR",
      description: "Environmental Clearance for Mining, Thermal Power Plants, Steel Plants, Cement Plants, and Building Construction projects.",
      details: ["Mining EC (O/C & UG)", "Thermal Power Plant", "Steel & Cement Plants", "Building Construction"]
    },
    {
      icon: Shield,
      title: "NOC from SPCB & CGWA",
      description: "Comprehensive consent and authorization services for regulatory compliance.",
      details: ["CTE/CTO Consents", "Hazardous Waste Authorization", "Biomedical Waste NOC", "CGWA Approvals"]
    },
    {
      icon: Activity,
      title: "Pollution Monitoring",
      description: "Complete environmental monitoring and testing services for all parameters.",
      details: ["Air & Water Quality", "Soil Testing", "Stack Emission", "Baseline Data Generation"]
    },
    {
      icon: Search,
      title: "Audit & Compliance",
      description: "Environmental audits and compliance reporting for regulatory requirements.",
      details: ["Environmental Audit", "Water & Energy Audit", "Carbon Footprint", "GHG Calculations"]
    },
    {
      icon: MapPin,
      title: "Mine Planning",
      description: "Comprehensive mine planning and geological assessment services.",
      details: ["Major & Minor Mine Plans", "Hydrogeological Reports", "Geological Surveys", "Land Use Planning"]
    },
    {
      icon: TreePine,
      title: "Forest & Wildlife",
      description: "Forest diversion and wildlife management planning services.",
      details: ["Forest Diversion Plan", "Wildlife Management", "Flora & Fauna Survey", "Baseline Studies"]
    },
    {
      icon: Users,
      title: "Socio-Economic Studies",
      description: "Comprehensive social impact assessments and CSR planning.",
      details: ["Socio-Economic Survey", "CSR Planning", "R&R Studies", "PAP & PAF Assessment"]
    },
    {
      icon: Settings,
      title: "ETP/STP/WTP Services",
      description: "Design, installation, and maintenance of water treatment systems.",
      details: ["System Design", "Installation Services", "Operation & Maintenance", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Environmental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From environmental clearances to pollution monitoring, we provide end-to-end 
            solutions for industries across India with our certified expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary group hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need a specific service not listed above?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary-darker font-semibold"
          >
            Contact us for custom solutions
            <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;