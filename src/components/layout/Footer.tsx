import { Link } from "react-router-dom";
import { Heart, Phone, MessageCircle } from "lucide-react";

const footerLinks = {
  resources: [
    { name: "Understanding BDD", path: "/learn#bdd" },
    { name: "About Eating Disorders", path: "/learn#ed" },
    { name: "Coping Strategies", path: "/learn#coping" },
  ],
  tools: [
    { name: "Grounding Exercise", path: "/tools#grounding" },
    { name: "Mood Tracker", path: "/tools#mood" },
    { name: "Affirmations", path: "/tools#affirmations" },
  ],
  support: [
    { name: "Community", path: "/community" },
    { name: "FAQs", path: "/help#faq" },
    { name: "Contact Us", path: "/help#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12">
        {/* Crisis Support Banner */}
        <div className="mb-10 rounded-2xl bg-primary/5 border border-primary/20 p-6">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
            Need immediate support?
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:988"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">988 Suicide & Crisis Lifeline</span>
            </a>
            <a
              href="sms:741741"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Text HOME to 741741</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Heart className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-serif text-lg font-semibold text-foreground">Within</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A safe space for understanding and healing from eating disorders and body dysmorphia.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Within. This website is for educational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
