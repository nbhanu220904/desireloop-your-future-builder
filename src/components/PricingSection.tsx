import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for getting started",
    features: ["Opportunity Feed", "Basic Profile", "Join 3 Circles", "Application Tracker"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/mo",
    desc: "For serious builders",
    features: ["Everything in Free", "Unlimited Circles", "Priority Applications", "Portfolio Showcase", "Analytics Dashboard"],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/mo",
    desc: "For organizations & clubs",
    features: ["Everything in Pro", "Team Management", "Bulk Opportunity Posting", "Custom Branding", "Dedicated Support"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">Start free. Upgrade when you're ready.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? "gradient-primary border-transparent shadow-elevated scale-105"
                  : "gradient-card border-border shadow-card"
              }`}
            >
              <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-primary-foreground" : ""}`}>{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{plan.desc}</p>
              <div className={`text-4xl font-bold mb-6 ${plan.highlighted ? "text-primary-foreground" : ""}`}>
                {plan.price}<span className="text-lg font-normal">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    <Check className="h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/auth?signup=true">
                <Button
                  variant={plan.highlighted ? "outline" : "hero"}
                  className={`w-full ${plan.highlighted ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : ""}`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
