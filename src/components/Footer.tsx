const Footer = () => {
  return (
    <footer className="bg-gov-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Agency Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Leadership</a></li>
              <li><a href="#" className="hover:text-blue-300">Budget & Performance</a></li>
              <li><a href="#" className="hover:text-blue-300">Strategic Plan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300">Benefits</a></li>
              <li><a href="#" className="hover:text-blue-300">Business Services</a></li>
              <li><a href="#" className="hover:text-blue-300">Education</a></li>
              <li><a href="#" className="hover:text-blue-300">Veterans</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300">FOIA Requests</a></li>
              <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300">Accessibility</a></li>
              <li><a href="#" className="hover:text-blue-300">Quality Standards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Office Locations</a></li>
              <li><a href="#" className="hover:text-blue-300">Phone Directory</a></li>
              <li><a href="#" className="hover:text-blue-300">Email Updates</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 U.S. Government Agency. All rights reserved.</p>
          <p className="mt-2">
            This is an official website of the United States government.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;