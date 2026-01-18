const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border">
      <div className="container container-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <img 
              src="/crewreadylogo-cropped.png" 
              alt="CrewReady - Hire Smarter" 
              className="w-80 md:w-96 h-auto"
            />
          </div>

          <div className="text-center md:text-right">
            <a
              href="mailto:hello@crewready.com"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              hello@crewready.com
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} CrewReady. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
