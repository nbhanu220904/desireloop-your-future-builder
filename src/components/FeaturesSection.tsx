import { motion } from "framer-motion";
import { Briefcase, User, Users, ClipboardList } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Opportunity Feed",
    description: "Discover internships, jobs, events, and gigs tailored to your interests and skills.",
  },
  {
    icon: User,
    title: "Action-Based Profiles",
    description: "Showcase your projects, skills, and achievements — not just selfies.",
  },
  {
    icon: Users,
    title: "Peer Circles",
    description: "Join interest-based communities. Share opportunities, collaborate, and grow together.",
  },
  {
    icon: ClipboardList,
    title: "Application Tracker",
    description: "Track every opportunity you apply to with real-time status updates.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to <span className="gradient-text">level up</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Built for ambitious young people who refuse to settle for the scroll.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gradient-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
