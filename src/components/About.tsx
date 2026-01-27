import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Palette, Music, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in CSE-AI',
    institution: 'G. Pullaiah College of Engineering and Technology, Kurnool',
    year: '2023 - 2026',
  },
  {
    degree: 'Diploma in Mechanical Engineering',
    institution: 'ESC Govt Polytechnic College Nandyal',
    year: '2020 - 2023',
  },
];

const interests = [
  { icon: Palette, label: 'Painting' },
  { icon: Music, label: 'Music' },
  { icon: BookOpen, label: 'Writing' },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Get to know me</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Background Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                📖
              </span>
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate final-year B.Tech student specializing in Computer Science and 
                Engineering with AI at G. Pullaiah College of Engineering and Technology, Kurnool.
              </p>
              <p>
                My journey in technology began with a diploma in Mechanical Engineering, which gave 
                me a strong foundation in problem-solving and analytical thinking. This unique 
                background helps me approach technical challenges from different perspectives.
              </p>
              <p>
                Beyond coding, I express my creativity through painting, music, and writing—hobbies 
                that help me bring innovative and artistic perspectives to my technical work.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Beyond Code</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest.label}
                    className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"
                  >
                    <interest.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </span>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover-lift"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-3xl font-bold gradient-text">2+</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide mt-1">Years Coding</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold gradient-text">5+</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide mt-1">Projects</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold gradient-text">3</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide mt-1">Certifications</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
