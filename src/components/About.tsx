const About = () => {
  return (
    <section id="about" className="gov-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Our Agency</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                We are committed to serving the American people by providing accessible, 
                efficient, and transparent government services. Our mission is to ensure 
                that every citizen can easily access the resources and support they need.
              </p>
              <p>
                Through innovation, collaboration, and dedication to public service, 
                we work to build trust between government and citizens while delivering 
                measurable results that improve lives and strengthen communities.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gov-blue-light rounded-lg">
                  <div className="text-3xl font-bold text-primary">2M+</div>
                  <div className="text-sm text-muted-foreground">Citizens Served</div>
                </div>
                <div className="text-center p-4 bg-gov-blue-light rounded-lg">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Services Available</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gov-success mr-3 text-xl">✓</span>
                <span>Transparent and accountable operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-gov-success mr-3 text-xl">✓</span>
                <span>Accessible services for all Americans</span>
              </li>
              <li className="flex items-start">
                <span className="text-gov-success mr-3 text-xl">✓</span>
                <span>Innovation in public service delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-gov-success mr-3 text-xl">✓</span>
                <span>Protection of citizen privacy and data</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;