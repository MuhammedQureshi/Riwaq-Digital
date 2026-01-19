import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6 text-foreground">
            Let's Create Something
            <br />
            <span className="text-accent-gradient">Exceptional</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="divider-accent" />
          </div>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Ready to elevate your digital presence? We would love to discuss how we can bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button variant="elegant" size="xl">
              Schedule a Consultation
              <ArrowRight size={18} />
            </Button>
            <Button variant="elegantOutline" size="xl">
              Send a Message
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
            {[
              { icon: Mail, label: "Email", value: "hello@nexus.dev" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Location", value: "San Francisco, CA" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-foreground" />
                </div>
                <span className="text-sm text-muted-foreground tracking-wide">{item.label}</span>
                <span className="text-foreground font-medium mt-1">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
