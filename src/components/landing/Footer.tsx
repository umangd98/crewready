import { Linkedin, Facebook, Mail, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container container-padding">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div className="text-center md:text-left">
            <img 
              src="/logos/optimzied-02.png" 
              alt="CrewReady - Hire Smarter" 
              className="w-64 md:w-80 h-auto"
            />
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-sm font-semibold text-foreground mb-3">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="mailto:joe@crewready.ai"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                joe@crewready.ai
              </a>
              <a
                href="tel:+15673043240"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                567-304-3240
              </a>
            </div>
          </div>

          {/* Social Links & Legal */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold text-foreground mb-3">Follow Us</h3>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
              <a
                href="https://www.linkedin.com/company/crewready/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <FaXTwitter className="h-5 w-5" />
                X
              </a>
              <a
                href="https://www.facebook.com/people/CrewReady/61587608713278/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
            </div>
            <div className="flex flex-col md:items-end gap-1">
              <div className="flex items-center justify-center md:justify-end gap-3 text-xs text-muted-foreground">
                <a href="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="/terms-of-service" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                © {currentYear} CrewReady. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
