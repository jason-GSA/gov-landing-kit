import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header>
      {/* Official Government Flag */}
      <div className="gov-flag">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center text-xs">
            <span className="mr-2">🇺🇸</span>
            <span>An official website of the United States government</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="gov-header border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold">Government Agency</div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
              <a href="#resources" className="hover:text-blue-200 transition-colors">Resources</a>
              <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;