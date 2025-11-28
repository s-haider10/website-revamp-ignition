import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Twitter,
} from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-16 sm:pb-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">
            Contact
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Interested in collaborating on research, discussing projects, or exploring opportunities at the intersection of technology and impact.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Contact Information */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-base sm:text-lg font-serif font-semibold">
                <Mail className="h-5 w-5 mr-3 text-foreground" />
                Direct Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 sm:space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">
                  Email
                </p>
                <a
                  href="mailto:sh6070@nyu.edu"
                  className="text-foreground hover:underline font-mono text-sm sm:text-base transition-smooth break-all"
                >
                  sh6070@nyu.edu
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">
                  Location
                </p>
                <div className="flex items-center text-foreground text-sm sm:text-base">
                  <MapPin className="h-4 w-4 mr-2 text-foreground flex-shrink-0" />
                  <span>New York, NY</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">
                  Response Time
                </p>
                <div className="flex items-center text-foreground text-sm sm:text-base">
                  <Calendar className="h-4 w-4 mr-2 text-foreground flex-shrink-0" />
                  <span>Within 24 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-serif font-semibold">Socials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start rounded-sm hover:bg-foreground hover:text-background transition-smooth min-h-[44px] text-sm sm:text-base"
                  asChild
                >
                  <a
                    href="https://github.com/s-haider10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-3" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start rounded-sm hover:bg-foreground hover:text-background transition-smooth min-h-[44px] text-sm sm:text-base"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/haider-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start rounded-sm hover:bg-foreground hover:text-background transition-smooth min-h-[44px] text-sm sm:text-base"
                  asChild
                >
                  <a
                    href="https://twitter.com/s__haider1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5 mr-3" />
                    Twitter
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
