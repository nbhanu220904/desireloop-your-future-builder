import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Create Your Profile", desc: "Sign up and build your action-based profile with skills, projects, and goals." },
  { num: "02", title: "Discover Opportunities", desc: "Browse a curated feed of internships, gigs, and events matched to your interests." },
  { num: "03", title: "Join Peer Circles", desc: "Connect with like-minded peers in interest-based communities." },
  { num: "04", title: "Apply & Track", desc: "Apply to opportunities and track your progress from one clean dashboard." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Four simple steps to launch your journey.</p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start gradient-card rounded-2xl p-6 shadow-card border border-border"
            >
              <div className="text-4xl font-bold gradient-text shrink-0">{step.num}</div>
              <div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
