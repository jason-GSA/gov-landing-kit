import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Benefits & Financial Assistance",
      description: "Apply for government benefits, financial aid, and assistance programs for individuals and families.",
      icon: "💰",
      link: "#benefits"
    },
    {
      title: "Business Services",
      description: "Resources for starting, running, and growing a business, including permits, licenses, and contracts.",
      icon: "🏢",
      link: "#business"
    },
    {
      title: "Immigration & Citizenship",
      description: "Information and services related to immigration, visas, citizenship, and permanent residency.",
      icon: "🗽",
      link: "#immigration"
    },
    {
      title: "Health & Safety",
      description: "Public health information, safety guidelines, and emergency preparedness resources.",
      icon: "🏥",
      link: "#health"
    },
    {
      title: "Education & Training",
      description: "Educational resources, student aid, training programs, and career development opportunities.",
      icon: "🎓",
      link: "#education"
    },
    {
      title: "Veterans Services",
      description: "Comprehensive services and benefits for veterans, active military, and their families.",
      icon: "🎖️",
      link: "#veterans"
    }
  ];

  return (
    <section id="services" className="gov-section bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Government Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the government services and information you need to achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-3">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;