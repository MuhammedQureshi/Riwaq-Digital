import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial management platform with real-time analytics and AI-powered insights.",
    gradient: "from-primary/40 to-accent/40",
  },
  {
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description: "A high-converting online marketplace with seamless checkout and inventory management.",
    gradient: "from-accent/40 to-primary/40",
  },
  {
    title: "Healthcare App",
    category: "Mobile Application",
    description: "A patient-centric healthcare app enabling telehealth consultations and health tracking.",
    gradient: "from-primary/40 to-accent/40",
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Featured <span className="gradient-text">projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md mt-4 md:mt-0">
            A selection of our recent work that showcases our expertise in creating impactful digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border card-hover cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-background/20 backdrop-blur-sm border border-white/10" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-display font-semibold mt-2 mb-3 flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
