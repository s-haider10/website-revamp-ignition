import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin,
  Calendar,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(
          "4dc34bd5134f77391904c57a3829b587"
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _template: "table",
            _captcha: "false",
            _replyto: formData.email, // Auto-reply to sender
          }),
        }
      );

      const data = await response.json();

      if (data.success === "true") {
        toast({
          title: "Message sent successfully!",
          description:
            "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Message failed to send. Please email me directly at saad.haider@nyu.edu",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interested in collaborating on cutting-edge research, discussing
            innovative projects, or exploring opportunities at the intersection
            of technology and impact? Let's talk.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-medium">
                    Email
                  </p>
                  <a
                    href="mailto:saad.haider@nyu.edu"
                    className="text-primary hover:underline font-mono text-lg"
                  >
                    sh6070@nyu.edu
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-medium">
                    Location
                  </p>
                  <div className="flex items-center text-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    New York, NY
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-medium">
                    Response Time
                  </p>
                  <div className="flex items-center text-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Within 24 hours
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Socials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/s-haider10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 mr-3" />
                      GitHub - @s-haider10
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/haider-tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 mr-3" />
                      LinkedIn - Connect
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start"
                    asChild
                  >
                    <a
                      href="https://twitter.com/s__haider1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-flex items-center">
                        <Twitter className="h-5 w-5 mr-3" />X (Twitter) -
                        @s__haider1
                      </span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Whether it's about research collaboration, startup
                  opportunities, or technical discussions.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="your.email@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Tell me about your project, research interest, or how we can collaborate..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 text-base font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
