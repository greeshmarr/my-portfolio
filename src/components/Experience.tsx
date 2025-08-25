import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award, TrendingUp, Users, Zap } from 'lucide-react'

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    location: "Remote",
    description: "Leading frontend development for enterprise applications, focusing on React and TypeScript. Built scalable component libraries and improved performance by 40%.",
    achievements: [
      "Architected and implemented micro-frontend architecture serving 100K+ users",
      "Mentored 3 junior developers and established coding standards",
      "Reduced bundle size by 35% through advanced optimization techniques",
      "Led migration from legacy jQuery to modern React ecosystem"
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
    highlights: {
      performance: "40% improvement",
      users: "100K+ users",
      team: "Team of 8"
    }
  },
  {
    company: "StreamingPlatform Inc",
    position: "Frontend Developer",
    period: "2020 - 2022",
    location: "San Francisco, CA",
    description: "Developed and maintained OTT streaming platform serving 2M+ users. Specialized in video playback optimization and real-time features.",
    achievements: [
      "Implemented adaptive video streaming with 99.9% uptime",
      "Built real-time chat system supporting 10K concurrent users",
      "Optimized initial loading times by 50% using code splitting",
      "Developed cross-platform responsive design for TV, mobile, and web"
    ],
    technologies: ["React", "Redux", "WebRTC", "Node.js", "MongoDB"],
    highlights: {
      users: "2M+ users",
      uptime: "99.9% uptime",
      performance: "50% faster"
    }
  },
  {
    company: "StartupXYZ",
    position: "Frontend Developer",
    period: "2019 - 2020",
    location: "New York, NY",
    description: "Full-stack development for early-stage startup. Built MVP from scratch using React, Node.js, and modern development practices.",
    achievements: [
      "Delivered complete MVP in just 3 months with zero technical debt",
      "Established CI/CD pipeline reducing deployment time by 80%",
      "Implemented comprehensive testing strategy achieving 95% coverage",
      "Built scalable architecture supporting rapid feature development"
    ],
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    highlights: {
      delivery: "3 months MVP",
      coverage: "95% test coverage",
      deployment: "80% faster"
    }
  }
]

export function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Updated background to match Projects section */}
      <div className="absolute inset-0 bg-muted/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Work <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Building exceptional digital experiences across diverse industries and scale
          </p>
        </motion.div>

        {/* Clean zig-zag layout without overlapping */}
        <div className="relative max-w-6xl mx-auto">
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: isEven ? -100 : 100,
                    y: 50 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    y: 0 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100 
                  }}
                  viewport={{ once: true }}
                  className={`relative flex ${
                    isEven 
                      ? 'justify-start' 
                      : 'justify-end'
                  }`}
                >
                  {/* Experience card - Clean layout without overlap */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      y: -5
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full lg:w-[65%]"
                  >
                    <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                      {/* Header Section with brand color gradients */}
                      <div className={`p-6 border-b border-slate-200/50 dark:border-slate-700/50 ${
                        isEven 
                          ? 'bg-gradient-to-r from-indigo-50/80 via-blue-50/80 to-purple-50/80 dark:from-indigo-900/20 dark:via-blue-900/20 dark:to-purple-900/20'
                          : 'bg-gradient-to-r from-emerald-50/80 via-pink-50/80 to-indigo-50/80 dark:from-emerald-900/20 dark:via-pink-900/20 dark:to-indigo-900/20'
                      }`}>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-2">
                            <motion.h3 
                              whileHover={{ scale: 1.02 }}
                              className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                            >
                              {exp.position}
                            </motion.h3>
                            <div className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                              {exp.company}
                            </div>
                          </div>
                          
                          <div className="flex flex-col lg:items-end gap-3">
                            <motion.div 
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-slate-700/60 px-4 py-2 rounded-lg border border-indigo-200/50 dark:border-indigo-700/50"
                            >
                              <Calendar size={18} className="text-indigo-600" />
                              <span className="text-lg font-medium">{exp.period}</span>
                            </motion.div>
                            <motion.div 
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-slate-700/60 px-4 py-2 rounded-lg border border-blue-200/50 dark:border-blue-700/50"
                            >
                              <MapPin size={18} className="text-blue-600" />
                              <span className="text-lg">{exp.location}</span>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 space-y-6">
                        {/* Description */}
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
                        >
                          {exp.description}
                        </motion.p>

                        {/* Key Highlights in a single row for compactness */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="grid grid-cols-3 gap-4"
                        >
                          {Object.entries(exp.highlights).map(([key, value], i) => (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                              className={`rounded-xl p-3 text-center border transition-all duration-300 ${
                                i === 0
                                  ? 'bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 border-indigo-200 dark:border-indigo-700/50'
                                  : i === 1
                                  ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 border-emerald-200 dark:border-emerald-700/50'
                                  : 'bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 border-pink-200 dark:border-pink-700/50'
                              }`}
                            >
                              <div className={`text-xl font-bold mb-1 ${
                                i === 0
                                  ? 'text-indigo-600 dark:text-indigo-400'
                                  : i === 1
                                  ? 'text-emerald-600 dark:text-emerald-400'
                                  : 'text-pink-600 dark:text-pink-400'
                              }`}>
                                {value}
                              </div>
                              <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Achievements - Compact grid layout */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="space-y-3"
                        >
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <Award size={18} className="text-indigo-600" />
                            Key Achievements
                          </h4>
                          <div className="grid gap-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 p-3 bg-slate-50/80 dark:bg-slate-700/30 rounded-lg border border-slate-200 dark:border-slate-600/30 hover:border-indigo-300 dark:hover:border-indigo-600/50 transition-colors"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Technologies - Compact layout */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          viewport={{ once: true }}
                          className="space-y-3"
                        >
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <Zap size={18} className="text-blue-600" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Enhanced Call to Action with brand colors */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-white/90 to-indigo-50/90 dark:from-slate-800/90 dark:to-indigo-900/30 backdrop-blur-sm rounded-3xl p-8 border border-indigo-200/50 dark:border-indigo-700/30 max-w-2xl mx-auto shadow-xl"
          >
            <motion.h3 
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text mb-4"
              style={{ backgroundSize: '200% 200%' }}
            >
              Ready to work together?
            </motion.h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Let's build something amazing and push the boundaries of web development
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}