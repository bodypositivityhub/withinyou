import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Brain, Users, Sparkles, BookOpen, Wrench } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            <span>You are not alone in this journey</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Welcome to Within
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-balance">
            A safe, supportive space for understanding eating disorders and body dysmorphia. 
            Find resources, tools, and a community that cares.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/tools#grounding">
                <Sparkles className="h-5 w-5" />
                Ground Yourself
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/learn">
                <BookOpen className="h-5 w-5" />
                Learn About BDD & ED
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Brain,
    title: "Understand",
    description: "Learn about body dysmorphia and eating disorders with compassionate, evidence-based information.",
    link: "/learn",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Wrench,
    title: "Coping Tools",
    description: "Access interactive tools like grounding exercises, mood tracking, and affirmation generators.",
    link: "/tools",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with others who understand. Share experiences and find support in a safe space.",
    link: "/community",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Can Help
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're seeking understanding, coping strategies, or connection, we're here for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group p-8 rounded-2xl bg-card gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-7 w-7 ${feature.color}`} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const quickTools = [
  {
    title: "5-4-3-2-1 Grounding",
    description: "A sensory exercise to bring you back to the present moment.",
    action: "Start Exercise",
    link: "/tools#grounding",
  },
  {
    title: "Daily Affirmations",
    description: "Generate personalized affirmations for self-compassion.",
    action: "Get Affirmation",
    link: "/tools#affirmations",
  },
  {
    title: "Mood Check-In",
    description: "Track how you're feeling and notice patterns over time.",
    action: "Check In",
    link: "/tools#mood",
  },
];

export function QuickToolsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quick Access Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Need support right now? Try one of these helpful exercises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {quickTools.map((tool) => (
            <div
              key={tool.title}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {tool.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {tool.description}
              </p>
              <Button variant="cta" size="sm" asChild>
                <Link to={tool.link}>{tool.action}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 gradient-hero">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            You're Not Alone in This
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join our supportive community where you can share your experiences, ask questions, 
            and connect with others who understand what you're going through.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/community">
                <Users className="h-5 w-5" />
                Join the Community
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/help">Get Professional Help</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}