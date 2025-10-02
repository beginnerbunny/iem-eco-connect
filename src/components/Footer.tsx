import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Institute for Environmental Management
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Leading environmental consultancy firm providing comprehensive solutions 
              for regulatory compliance and sustainable development across India.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-primary-light px-3 py-1 rounded-full">ISO 9001:2015 Certified</span>
              <span className="bg-primary-light px-3 py-1 rounded-full">OHSAS 45001:2018</span>
              <span className="bg-primary-light px-3 py-1 rounded-full">NABET/QCI Accredited</span>
              <span className="bg-primary-light px-3 py-1 rounded-full">NABL Accredited</span>
              <span className="bg-primary-light px-3 py-1 rounded-full">JSPCB Recognized</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-primary-foreground transition-colors">
                  Credentials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div>8407804251</div>
                  <div>8407804255</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div>iem2012@rediffmail.com</div>
                  <div>rch.jainsc58@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div>
              © {currentYear} Institute for Environmental Management. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <span>Serving industries across India with environmental excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;