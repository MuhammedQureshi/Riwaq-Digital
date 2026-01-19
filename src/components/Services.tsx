import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance and scalability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Thoughtful interfaces designed to engage users and elevate your brand's digital presence.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform mobile experiences that deliver native-like performance on all devices.",
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    description: "Scalable online stores with seamless checkout experiences that drive conversions.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Speed optimization and refinement to ensure your applications run flawlessly.",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Robust and secure APIs that power your applications and enable seamless integrations.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6 text-foreground">
            Services We Offer
          </h2>
          <div className="flex justify-center mb-6">
            <div className="divider-accent" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to launch, we provide comprehensive solutions that help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-elegant p-8 rounded-md cursor-pointer"
            >
              <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                <service.icon size={24} className="text-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
