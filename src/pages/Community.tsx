import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Plus, ThumbsUp, Clock, User } from "lucide-react";

const discussionTopics = [
  {
    id: 1,
    title: "How do you handle bad body image days?",
    author: "Anonymous",
    time: "2 hours ago",
    replies: 12,
    likes: 24,
    category: "Coping Strategies",
  },
  {
    id: 2,
    title: "Finding support when family doesn't understand",
    author: "HealingJourney",
    time: "5 hours ago",
    replies: 8,
    likes: 31,
    category: "Support",
  },
  {
    id: 3,
    title: "Small wins thread - share your victories!",
    author: "RecoveryRoad",
    time: "1 day ago",
    replies: 45,
    likes: 89,
    category: "Positivity",
  },
  {
    id: 4,
    title: "Dealing with triggers during the holidays",
    author: "Anonymous",
    time: "2 days ago",
    replies: 19,
    likes: 42,
    category: "Triggers",
  },
  {
    id: 5,
    title: "Resources that have helped in my recovery",
    author: "StrengthDaily",
    time: "3 days ago",
    replies: 27,
    likes: 56,
    category: "Resources",
  },
];

const categories = ["All", "Coping Strategies", "Support", "Positivity", "Triggers", "Resources"];

const CommunityPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showNewPost, setShowNewPost] = useState(false);

  const filteredTopics = selectedCategory === "All" 
    ? discussionTopics 
    : discussionTopics.filter(t => t.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Community
            </h1>
            <p className="text-lg text-muted-foreground">
              A safe, supportive space to share experiences, ask questions, and connect with others 
              who understand what you're going through.
            </p>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">Community Guidelines:</strong> Be kind, respectful, and supportive. 
                No triggering content without warnings. If you're in crisis, please seek professional help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discussions */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Recent Discussions
              </h2>
              <Button variant="cta" onClick={() => setShowNewPost(!showNewPost)}>
                <Plus className="h-4 w-4" />
                Start New Discussion
              </Button>
            </div>

            {/* New Post Form */}
            {showNewPost && (
              <div className="p-6 rounded-2xl bg-card border border-border mb-6 animate-fade-in">
                <h3 className="font-semibold text-foreground mb-4">Create New Discussion</h3>
                <input
                  type="text"
                  placeholder="Discussion title..."
                  className="w-full p-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground mb-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <textarea
                  placeholder="Share your thoughts..."
                  className="w-full p-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground h-24 resize-none mb-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <div className="flex justify-end gap-3">
                  <Button variant="ghost" onClick={() => setShowNewPost(false)}>Cancel</Button>
                  <Button variant="default">Post Discussion</Button>
                </div>
              </div>
            )}

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Discussion List */}
            <div className="space-y-4">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground mb-2">
                        {topic.category}
                      </span>
                      <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {topic.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {topic.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {topic.replies}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {topic.likes}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline">Load More Discussions</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityPage;