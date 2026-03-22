import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, MessageCircle, ExternalLink, Mail } from "lucide-react";

const faqs = [
  {
    question: "What is body dysmorphic disorder (BDD)?",
    answer: "Body Dysmorphic Disorder is a mental health condition where a person obsessively focuses on perceived flaws in their appearance that are often unnoticeable to others. It can significantly impact daily life and is treatable with proper support.",
  },
  {
    question: "What are eating disorders?",
    answer: "Eating disorders are serious mental health conditions characterized by persistent disturbances in eating behaviors. They include anorexia nervosa, bulimia nervosa, binge eating disorder, and others. Recovery is possible with appropriate treatment.",
  },
  {
    question: "How can I support someone with an eating disorder or BDD?",
    answer: "Listen without judgment, educate yourself about their condition, avoid commenting on appearance or food choices, encourage professional help, and be patient. Your support matters more than you know.",
  },
  {
    question: "When should I seek professional help?",
    answer: "If your thoughts about your body or eating are affecting your daily life, relationships, work, or physical health, it's time to seek help. There's no threshold too low - reaching out early can prevent escalation.",
  },
  {
    question: "Are these conditions treatable?",
    answer: "Yes! With proper treatment, including therapy (such as CBT), medical care, and support, many people make full recoveries. Treatment works, and recovery is absolutely possible.",
  },
  {
    question: "Is this website a substitute for therapy?",
    answer: "No. This website provides educational resources and coping tools, but it's not a replacement for professional treatment. If you're struggling, please reach out to a healthcare provider.",
  },
];

const resources = [
  {
    name: "National Eating Disorders Association (NEDA)",
    description: "Information, treatment referrals, and support groups.",
    url: "https://www.nationaleatingdisorders.org",
    phone: "1-800-931-2237",
  },
  {
    name: "NEDA Crisis Text Line",
    description: "Text support for those in crisis.",
    action: "Text 'NEDA' to 741741",
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    description: "24/7 support for mental health crises.",
    phone: "988",
  },
  {
    name: "International OCD Foundation",
    description: "Resources for BDD, which is related to OCD.",
    url: "https://iocdf.org/about-bdd",
  },
];

const HelpPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Can We Help You?
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions, discover resources, or reach out for personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Banner */}
      <section className="py-6 bg-primary/5 border-y border-primary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <span className="font-medium text-foreground">In crisis right now?</span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:988"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call 988
              </a>
              <a
                href="sms:741741&body=NEDA"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Text NEDA to 741741
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-16 scroll-mt-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-10">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 animate-fade-in">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-10">
              Additional Support & Resources
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">{resource.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Visit Website
                      </a>
                    )}
                    {resource.phone && (
                      <a
                        href={`tel:${resource.phone}`}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <Phone className="h-3 w-3" />
                        {resource.phone}
                      </a>
                    )}
                    {resource.action && (
                      <span className="text-sm text-primary">{resource.action}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 scroll-mt-24">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Have a question or need guidance? Reach out and we'll get back to you.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full p-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                <Mail className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HelpPage;