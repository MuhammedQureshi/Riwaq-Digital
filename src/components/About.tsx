import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Agile development methodology",
  "Transparent communication",
  "Dedicated project managers",
  "Post-launch support & maintenance",
  "Performance-focused development",
  "Security-first approach",
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Why choose <span className="gradient-text">Nexus</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're not just developers – we're partners in your digital journey. Our team combines technical excellence with creative thinking to deliver solutions that not only meet but exceed expectations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 8 years of experience and a portfolio of 150+ successful projects, we've honed our process to ensure every project is delivered on time, on budget, and beyond expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gradient-border p-8 bg-card"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">What sets us apart</h3>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
