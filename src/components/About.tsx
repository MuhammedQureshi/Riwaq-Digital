import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Agile development methodology",
  "Transparent communication",
  "Dedicated project management",
  "Ongoing support & maintenance",
  "Performance-focused approach",
  "Security-first development",
];

export const About = () => {
  return (
    <section id="about" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6 text-foreground">
              Why Choose Nexus
            </h2>
            <div className="divider-accent mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are more than developers — we are partners in your digital journey. Our team combines 
              technical excellence with creative thinking to deliver solutions that exceed expectations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over eight years of experience and a portfolio of more than 150 successful projects, 
              we have refined our process to ensure every engagement delivers exceptional results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elegant p-10 rounded-md"
          >
            <h3 className="text-2xl font-serif font-medium mb-8 text-foreground">Our Approach</h3>
            <div className="grid gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 size={20} className="text-accent shrink-0" />
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
