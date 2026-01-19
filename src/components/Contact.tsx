import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            Ready to <span className="gradient-text">start</span> your project?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Let's discuss how we can help bring your vision to life. Schedule a free consultation with our team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl">
              Schedule a Call
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl">
              Send a Message
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, label: "Email Us", value: "hello@nexus.dev" },
              { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Visit Us", value: "San Francisco, CA" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">{item.label}</span>
                <span className="text-foreground font-medium mt-1">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
