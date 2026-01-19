import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to engage users and elevate your brand's digital presence.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that deliver native-like experiences on iOS and Android.",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Scalable online stores with seamless checkout experiences that convert visitors into customers.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Speed up your existing applications with advanced caching, code splitting, and optimization techniques.",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Robust and secure APIs that power your applications and integrate with third-party services.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Services that <span className="gradient-text">transform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to launch, we provide end-to-end solutions that help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group gradient-border p-8 bg-card card-hover cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
