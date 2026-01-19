import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Meridian Finance",
    category: "Web Application",
    description: "A comprehensive financial management platform with intuitive analytics and reporting.",
  },
  {
    title: "Artisan Market",
    category: "E-Commerce",
    description: "A curated marketplace connecting artisans with discerning customers worldwide.",
  },
  {
    title: "Wellness Hub",
    category: "Mobile Application",
    description: "A holistic health platform enabling telehealth consultations and wellness tracking.",
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 text-foreground">
              Selected Work
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md mt-6 md:mt-0 leading-relaxed">
            A curated selection of our recent projects showcasing our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-secondary rounded-md overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-secondary" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-lg">
                    <ArrowUpRight size={20} className="text-foreground" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <span className="text-sm text-accent font-medium tracking-wide">{project.category}</span>
                <h3 className="text-xl font-serif font-medium mt-2 mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
