import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'GrainPalette',
    subtitle: 'Rice Grain Classification System',
    description:
      'A deep learning-based classification system for different rice grain types including Arborio, Basmati, Ipsala, Jasmine, and Karacadag. Built with TensorFlow and CNNs with a Streamlit-based user interface.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    tags: ['Python', 'TensorFlow', 'Streamlit', 'CNN', 'Deep Learning'],
    stats: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Models', value: '5' },
      { label: 'Datasets', value: '1K+' },
    ],
    github: 'https://github.com/siva1511/GrainPalette',
    features: [
      'Multi-class rice grain classification',
      'Deep learning CNN architecture',
      'Interactive Streamlit web interface',
      'Real-time prediction capabilities',
    ],
  },
  {
    title: 'Weather App',
    subtitle: 'Real-time Weather Application',
    description:
      'A clean weather application that fetches real-time weather data and displays temperature, humidity, and weather conditions for any location worldwide.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    stats: [
      { label: 'API', value: 'OpenWeather' },
      { label: 'Design', value: 'Responsive' },
    ],
    github: 'https://github.com/siva1511/Weather-app',
    features: [
      'Search weather by city name',
      'Displays temperature, humidity, and conditions',
      'Responsive design using CSS',
      'Real-time data using OpenWeatherMap API',
    ],
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Work</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/10" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-xs uppercase tracking-wider font-medium">
                  {project.subtitle}
                </span>
                <h3 className="font-display text-xl font-semibold mt-1 mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-display font-bold text-lg gradient-text">{stat.value}</p>
                      <p className="text-xs text-muted-foreground uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <span className="text-primary text-xs uppercase tracking-wider font-medium">
                {selectedProject.subtitle}
              </span>
              <h3 className="font-display text-2xl font-semibold mt-1 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="w-full gap-2" asChild>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
