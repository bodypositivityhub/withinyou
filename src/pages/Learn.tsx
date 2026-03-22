import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, AlertCircle, Lightbulb } from "lucide-react";

const learnTopics = [
  {
    id: "bdd",
    icon: Brain,
    title: "Understanding Body Dysmorphic Disorder",
    subtitle: "What is BDD?",
    description: "Body Dysmorphic Disorder (BDD) is a mental health condition where a person spends a lot of time worrying about flaws in their appearance that are often unnoticeable to others.",
    symptoms: [
      "Obsessive focus on perceived flaws in appearance",
      "Repeatedly checking mirrors or avoiding them entirely",
      "Excessive grooming or skin picking",
      "Seeking constant reassurance about appearance",
      "Comparing yourself to others frequently",
      "Avoiding social situations due to appearance concerns",
    ],
    color: "primary",
  },
  {
    id: "ed",
    icon: Heart,
    title: "Understanding Eating Disorders",
    subtitle: "What are EDs?",
    description: "Eating disorders are serious mental health conditions characterized by persistent disturbances in eating behaviors and related thoughts and emotions. They affect people of all ages, genders, and backgrounds.",
    types: [
      { name: "Anorexia Nervosa", desc: "Characterized by weight loss and difficulty maintaining appropriate body weight." },
      { name: "Bulimia Nervosa", desc: "Cycles of binge eating followed by compensatory behaviors." },
      { name: "Binge Eating Disorder", desc: "Recurring episodes of eating large quantities of food." },
      { name: "ARFID", desc: "Avoidant/Restrictive Food Intake Disorder - limited food variety or amount." },
      { name: "OSFED", desc: "Other Specified Feeding or Eating Disorders." },
    ],
    color: "accent",
  },
];

const copingStrategies = [
  {
    title: "Challenge Negative Thoughts",
    description: "Practice identifying and questioning distorted thoughts about your body. Ask yourself: 'Is this thought based on facts or feelings?'",
    icon: Lightbulb,
  },
  {
    title: "Practice Self-Compassion",
    description: "Treat yourself with the same kindness you would offer a good friend. Remember that everyone struggles sometimes.",
    icon: Heart,
  },
  {
    title: "Limit Mirror Checking",
    description: "Set boundaries around how often and for how long you check your appearance. This can help break compulsive cycles.",
    icon: AlertCircle,
  },
  {
    title: "Build a Support Network",
    description: "Connect with trusted friends, family, or support groups. You don't have to face this alone.",
    icon: Brain,
  },
];

const LearnPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expand Your Knowledge
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding is the first step toward healing. Learn about body dysmorphia, 
              eating disorders, and evidence-based coping strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Topic Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {learnTopics.map((topic) => (
              <div
                key={topic.id}
                id={topic.id}
                className="p-8 rounded-2xl bg-card border border-border shadow-soft scroll-mt-24"
              >
                <div className={`w-14 h-14 rounded-xl ${topic.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-6`}>
                  <topic.icon className={`h-7 w-7 ${topic.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                
                <span className="text-sm font-medium text-muted-foreground">
                  {topic.subtitle}
                </span>
                <h2 className="font-serif text-2xl font-bold text-foreground mt-1 mb-4">
                  {topic.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {topic.description}
                </p>

                {topic.symptoms && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Common Signs & Symptoms</h3>
                    <ul className="space-y-2">
                      {topic.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {topic.types && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Types of Eating Disorders</h3>
                    <div className="space-y-3">
                      {topic.types.map((type, i) => (
                        <div key={i} className="p-3 rounded-lg bg-muted/50">
                          <span className="font-medium text-foreground text-sm">{type.name}</span>
                          <p className="text-xs text-muted-foreground mt-1">{type.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coping Strategies */}
      <section id="coping" className="py-16 bg-secondary/30 scroll-mt-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coping Strategies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Practical techniques to help manage symptoms and support your recovery journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {copingStrategies.map((strategy, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <strategy.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{strategy.title}</h3>
                <p className="text-sm text-muted-foreground">{strategy.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/tools">
                Explore Coping Tools
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Need More Support */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Need More Support?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you're struggling, please know that professional help is available. 
              Recovery is possible, and you deserve support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" asChild>
                <Link to="/help#contact">Find Resources</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:988">Call 988 Lifeline</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LearnPage;