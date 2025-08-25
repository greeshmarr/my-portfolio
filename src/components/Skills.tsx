import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, TestTube, Palette, Globe } from 'lucide-react'

// Clean skill categories with icons
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'from-indigo-500 to-blue-500',
    skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'JavaScript ES6+', 'HTML5/CSS3']
  },
  {
    title: 'Styling & Animation',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    skills: ['Tailwind CSS', 'Framer Motion', 'CSS3 Animation', 'Responsive Design', 'Figma Integration', 'SCSS/SASS']
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    color: 'from-emerald-500 to-green-500',
    skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-orange-500 to-amber-500',
    skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Docker', 'CI/CD', 'Serverless']
  },
  {
    title: 'Testing & Quality',
    icon: TestTube,
    color: 'from-purple-500 to-violet-500',
    skills: ['Jest', 'React Testing Library', 'PyTest', 'Unit Testing', 'Integration Testing', 'Accessibility']
  },
  {
    title: 'Smart TV & OTT',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Spatial Navigation', 'Video Players', 'OTT Platforms', 'Performance Optimization', 'Cross-platform', 'Remote Controls']
  }
]

// Featured technologies with modern icons
const featuredTechs = [
  { name: 'React', emoji: '⚛️', color: '#61DAFB' },
  { name: 'TypeScript', emoji: '🔷', color: '#3178C6' },
  { name: 'Next.js', emoji: '▲', color: '#000000' },
  { name: 'Tailwind', emoji: '🎨', color: '#06B6D4' },
  { name: 'Framer Motion', emoji: '🎭', color: '#0055FF' },
  { name: 'Three.js', emoji: '🎲', color: '#000000' },
  { name: 'Node.js', emoji: '🟢', color: '#339933' },
  { name: 'AWS', emoji: '☁️', color: '#FF9900' },
  { name: 'MongoDB', emoji: '🍃', color: '#47A248' },
  { name: 'Python', emoji: '🐍', color: '#3776AB' },
  { name: 'Jest', emoji: '🃏', color: '#C21325' },
  { name: 'Figma', emoji: '🎯', color: '#F24E1E' }
]

export function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background matching other sections */}
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
            Technical <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Expertise across modern web technologies and development practices
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-50/80 dark:bg-slate-700/50 rounded-lg p-3 text-center border border-slate-200/50 dark:border-slate-600/50 hover:border-indigo-300 dark:hover:border-indigo-600/50 transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Core technologies I work with daily to build exceptional digital experiences
          </p>
          
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
            {featuredTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  rotateY: 15
                }}
                className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-2">
                  <motion.div 
                    className="text-3xl group-hover:scale-110 transition-transform"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1
                    }}
                  >
                    {tech.emoji}
                  </motion.div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center leading-tight">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-white/80 to-indigo-50/80 dark:from-slate-800/80 dark:to-indigo-900/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-200/50 dark:border-indigo-700/30 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Ready to bring your ideas to life with modern web technologies
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}