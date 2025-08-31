import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Sparkles, Code, Zap } from 'lucide-react'

const projects = [
    // {
    //   id: 1,
    //   title: 'Smart TV OTT Applications',
    //   description: 'Production-ready OTT apps for Samsung & LG Smart TVs with remote navigation. Implemented carousels, search, video player overlays, and optimized rendering for large screens.',
    //   image: '/api/placeholder/600/400',
    //   category: 'OTT / Smart TV',
    //   technologies: ['React', 'Redux', 'Spatial Navigation', 'JavaScript'],
    //   features: ['Content Carousels', 'Search & Settings', 'Video Player Overlays', 'Remote Navigation', 'Frontend performance Optimizations'],
    //   status: 'Production',
    //   impact: 'Improved engagement across multiple Smart TV models'
    // },
    // {
    //   id: 2,
    //   title: 'Admin Console (Full Stack)',
    //   description: 'Internal web console for managing product configurations and analytics. Integrated secure authentication with Auth0 and migrated workloads to AWS Lambda.',
    //   image: '/api/placeholder/600/400',
    //   category: 'Web Application',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Auth0', 'AWS Lambda'],
    //   features: ['User & Role Management', 'Config Dashboard', 'Real-time Analytics', 'Serverless Backend'],
    //   status: 'Production',
    //   impact: 'Reduced operational overhead by 60%'
    // },
    // {
    //   id: 3,
    //   title: 'Figma → React Automation',
    //   description: 'Generative AI workflow to auto-convert Figma designs into React components, leveraging Copilot & automation tools to speed up frontend delivery.',
    //   image: '/api/placeholder/600/400',
    //   category: 'AI Tool',
    //   technologies: ['React', 'OpenAI API', 'Figma API', 'Python'],
    //   features: ['Design Token Extraction', 'Component Generation', 'Automated Styling', 'Reduced Manual Coding'],
    //   status: 'Beta',
    //   impact: '70% faster frontend delivery'
    // },    
    {
        id: 1,
        title: 'Code generator using LLM',
        description: 'A code generator that uses LLM to generates server code and testcases in Node.Js. This was part of a hacakthon we participated in.',
        image: '/api/placeholder/600/400',
        category: 'Hackathon',
        technologies: ['Node.js', 'OpenAi (LLM)', 'JavaScript'],
        features: ['Animations', 'Responsive UI', 'Dark/Light Mode', 'Performance Optimized'],
        github: 'https://github.com/greeshmarr/hackathon_repo',
        status: 'Live',
        impact: 'Showcases innovative use of LLM in code generation',
        demo: null,
      },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing modern frontend practices with Framer Motion, animations, and responsive design.',
      image: '/api/placeholder/600/400',
      category: 'Portfolio',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Animations', 'Responsive UI', 'Dark/Light Mode', 'Performance Optimized'],
      github: 'https://github.com/greeshmarr/my-portfolio',
      demo: 'https://greeshmarr.github.io/my-portfolio/',
      status: 'Live',
      impact: 'Demonstrates personal brand & modern frontend skills'
    },
    {
      id: 3,
      title: 'Network Slicing ML Research',
      description: 'Research on ML-based network slicing for 5G at IIT Patna, focused on resource allocation for EVs. Published in Springer and indexed on Google Scholar.',
      image: '/api/placeholder/600/400',
      category: 'Research',
      technologies: ['Python', 'TensorFlow', 'ML Algorithms', 'Data Visualization'],
      features: ['Resource Allocation', 'ML Models', 'Performance Analysis', 'Research Dashboard'],
      github: null,
      demo: null,
      status: 'Published',
      impact: 'Springer publication, Google Scholar indexed'
    },
    {
      id: 4,
      title: 'Omnifood - AI Powered Meal Subscription',
      description: 'Built a fully responsive landing page for Omnifood, a modern AI-powered meal subscription service. Implemented mobile-first design, reusable components, and smooth animations to deliver a polished user experience.',
      image: '/projects/omnifood/omnifood-preview.png',
      category: 'Frontend Project',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid', 'Netlify'],
      features: [
        'Responsive multi-section landing page',
        'Reusable UI components',
        'Sticky navigation and smooth scrolling',
        'Mobile-first layout with CSS Grid & Flexbox',
        'Deployed on Netlify'
      ],
      status: 'Live',
      impact: 'Improved frontend skills in responsive design and modern layout techniques',
      demo: 'https://omnifood-greeshma.netlify.app/',
      github: 'https://github.com/greeshmarr/omnifood',
    }
    
  ]
  

const categories = ['All', 'Web Application', 'Dashboard', 'AI Tool', 'Research', 'Portfolio']

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions and cutting-edge implementations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {project.category === 'AI Tool' ? '🤖' : 
                       project.category === 'Dashboard' ? '📊' :
                       project.category === 'Research' ? '🔬' :
                       project.category === 'Portfolio' ? '💼' : '🚀'}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Production' ? 'bg-green-500 text-white' :
                      project.status === 'Live' ? 'bg-blue-500 text-white' :
                      project.status === 'Beta' ? 'bg-yellow-500 text-white' :
                      project.status === 'Research' ? 'bg-purple-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Impact */}
                  <div className="flex items-center text-sm text-accent font-medium">
                    <Sparkles size={14} className="mr-1" />
                    {project.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-card rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                    <p className="text-primary font-medium">{selectedProject.category}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.features.map((feature: string) => (
                      <div key={feature} className="flex items-center text-sm">
                        <Zap size={14} className="text-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </motion.a>
                  )}
                  {selectedProject.demo && (
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={18} className="mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}