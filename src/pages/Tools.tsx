import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Wind, PenLine, BarChart3, BookHeart, Sparkles, ArrowRight } from "lucide-react";

const tools = [
  {
    id: "grounding",
    icon: Wind,
    title: "5-4-3-2-1 Grounding Exercise",
    description: "A sensory-based exercise to help anchor you in the present moment when feeling overwhelmed or anxious.",
    color: "primary",
  },
  {
    id: "affirmations",
    icon: Sparkles,
    title: "Affirmation Generator",
    description: "Generate personalized positive affirmations to practice self-compassion and challenge negative self-talk.",
    color: "accent",
  },
  {
    id: "vent",
    icon: PenLine,
    title: "Vent Writing Space",
    description: "A private space to write freely about your thoughts and feelings. Express yourself without judgment.",
    color: "primary",
  },
  {
    id: "mood",
    icon: BarChart3,
    title: "Mood Tracker",
    description: "Track your emotions over time to identify patterns and understand your mental health journey better.",
    color: "accent",
  },
  {
    id: "coping",
    icon: BookHeart,
    title: "Coping Skills Library",
    description: "Browse a collection of healthy coping strategies and techniques for managing difficult moments.",
    color: "primary",
  },
];

const groundingSteps = [
  { count: 5, sense: "See", prompt: "Name 5 things you can see around you right now." },
  { count: 4, sense: "Touch", prompt: "Name 4 things you can feel or touch." },
  { count: 3, sense: "Hear", prompt: "Name 3 things you can hear." },
  { count: 2, sense: "Smell", prompt: "Name 2 things you can smell." },
  { count: 1, sense: "Taste", prompt: "Name 1 thing you can taste." },
];

const affirmations = [
  "I am worthy of love and respect, exactly as I am.",
  "My worth is not determined by my appearance.",
  "I choose to treat myself with kindness and compassion.",
  "I am more than my thoughts about my body.",
  "Every step I take toward healing matters.",
  "I deserve to nourish my body and mind.",
  "My feelings are valid and I honor them.",
  "I am learning to accept myself, one day at a time.",
  "I have the strength to face challenges.",
  "I am enough, just as I am right now.",
];

function GroundingExercise() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startExercise = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < groundingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsActive(false);
      setCurrentStep(0);
    }
  };

  if (!isActive) {
    return (
      <div className="text-center p-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-breathe">
          <Wind className="h-10 w-10 text-primary" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
          Ready to Ground Yourself?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          This exercise will guide you through your five senses to help bring you back to the present moment.
        </p>
        <Button variant="cta" size="lg" onClick={startExercise}>
          Start Exercise
        </Button>
      </div>
    );
  }

  const step = groundingSteps[currentStep];
  
  return (
    <div className="text-center p-8">
      <div className="text-6xl font-serif font-bold text-primary mb-4 animate-scale-in">
        {step.count}
      </div>
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
        Things You Can {step.sense}
      </h3>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        {step.prompt}
      </p>
      <div className="flex items-center justify-center gap-2 mb-6">
        {groundingSteps.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentStep ? "bg-primary" : i < currentStep ? "bg-primary/50" : "bg-muted"
            }`}
          />
        ))}
      </div>
      <Button variant="hero" size="lg" onClick={nextStep}>
        {currentStep < groundingSteps.length - 1 ? (
          <>
            Next Step
            <ArrowRight className="h-4 w-4" />
          </>
        ) : (
          "Complete Exercise"
        )}
      </Button>
    </div>
  );
}

function AffirmationGenerator() {
  const [affirmation, setAffirmation] = useState<string | null>(null);

  const generateAffirmation = () => {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    setAffirmation(random);
  };

  return (
    <div className="text-center p-8">
      <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
        <Sparkles className="h-8 w-8 text-accent" />
      </div>
      
      {affirmation ? (
        <div className="animate-fade-in">
          <p className="font-serif text-2xl text-foreground mb-8 max-w-lg mx-auto italic">
            "{affirmation}"
          </p>
          <Button variant="cta" onClick={generateAffirmation}>
            Get Another
          </Button>
        </div>
      ) : (
        <>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
            Daily Affirmation
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Receive a positive affirmation to remind yourself of your worth and strength.
          </p>
          <Button variant="cta" size="lg" onClick={generateAffirmation}>
            Generate Affirmation
          </Button>
        </>
      )}
    </div>
  );
}

function VentSpace() {
  const [text, setText] = useState("");

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <PenLine className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Vent Writing Space
          </h3>
          <p className="text-sm text-muted-foreground">
            This is a private space. Nothing is saved.
          </p>
        </div>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write freely here... Express whatever you're feeling. This is a judgment-free space just for you."
        className="w-full h-48 p-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
      />
      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-muted-foreground">
          {text.length} characters
        </span>
        <Button variant="ghost" size="sm" onClick={() => setText("")}>
          Clear
        </Button>
      </div>
    </div>
  );
}

function MoodTracker() {
  const moods = [
    { emoji: "😔", label: "Struggling", color: "bg-destructive/20" },
    { emoji: "😕", label: "Low", color: "bg-accent/20" },
    { emoji: "😐", label: "Neutral", color: "bg-muted" },
    { emoji: "🙂", label: "Okay", color: "bg-primary/20" },
    { emoji: "😊", label: "Good", color: "bg-primary/30" },
  ];
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  return (
    <div className="p-8 text-center">
      <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
        <BarChart3 className="h-8 w-8 text-accent" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
        How are you feeling?
      </h3>
      <p className="text-muted-foreground mb-6">
        Select the mood that best describes how you're feeling right now.
      </p>
      
      <div className="flex justify-center gap-3 mb-6">
        {moods.map((mood, i) => (
          <button
            key={i}
            onClick={() => setSelectedMood(i)}
            className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all ${
              selectedMood === i 
                ? `${mood.color} ring-2 ring-primary scale-110` 
                : "bg-muted/50 hover:bg-muted"
            }`}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      
      {selectedMood !== null && (
        <div className="animate-fade-in">
          <p className="text-foreground font-medium mb-4">
            You selected: {moods[selectedMood].label}
          </p>
          <p className="text-sm text-muted-foreground">
            Thank you for checking in. Remember, all feelings are valid. 💚
          </p>
        </div>
      )}
    </div>
  );
}

const ToolsPage = () => {
  const [activeTool, setActiveTool] = useState<string>("grounding");

  const renderTool = () => {
    switch (activeTool) {
      case "grounding":
        return <GroundingExercise />;
      case "affirmations":
        return <AffirmationGenerator />;
      case "vent":
        return <VentSpace />;
      case "mood":
        return <MoodTracker />;
      default:
        return <GroundingExercise />;
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tools for Your Healing Journey
            </h1>
            <p className="text-lg text-muted-foreground">
              Interactive resources to help you cope, reflect, and find moments of calm.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Explore Our Tools
            </h2>
            <p className="text-muted-foreground">
              Select a tool to get started
            </p>
          </div>

          {/* Tool Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tools.slice(0, 4).map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTool === tool.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <tool.icon className="h-4 w-4" />
                {tool.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Active Tool */}
          <div className="max-w-2xl mx-auto rounded-2xl bg-card border border-border shadow-card overflow-hidden">
            {renderTool()}
          </div>
        </div>
      </section>

      {/* All Tools Grid */}
      <section id="all-tools" className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-10">
            All Available Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  setActiveTool(tool.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`p-6 rounded-2xl bg-card border text-left transition-all hover:shadow-card ${
                  activeTool === tool.id ? "border-primary" : "border-border"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${tool.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-4`}>
                  <tool.icon className={`h-6 w-6 ${tool.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToolsPage;