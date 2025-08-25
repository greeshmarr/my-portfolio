import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Sparkles, Target, Layers } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Smart TV & Web Apps',
    description: 'Built production-ready OTT apps for Samsung & LG Smart TVs using React, Redux, and spatial navigation.',
  },
  {
    icon: Sparkles,
    title: 'UI/UX & Innovation',
    description: 'Delivered intuitive remote-based UIs, optimized rendering, and automated Figma-to-React workflows with Generative AI.',
  },
  {
    icon: Target,
    title: 'Full Stack Expertise',
    description: 'Experience across React, Node.js, Python, and AWS serverless stack for scalable applications.',
  },
  {
    icon: Layers,
    title: 'Research & Problem Solving',
    description: 'Published ML research on Network Slicing (IIT Patna), bridging applied research and real-world systems.',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Frontend-focused full stack engineer passionate about building high-performance OTT and web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              My Journey in Development
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I started my career at <strong className="text-foreground">TCS</strong>, 
                working on backend systems with Python and REST APIs for credential management. 
                This gave me a strong foundation in scalable server-side development.
              </p>
              
              <p className="leading-relaxed">
                At <strong className="text-foreground">Synamedia</strong>, I grew into a full stack role, 
                building an internal Admin Console using React, Node.js, and MongoDB. 
                I also integrated secure authentication with Auth0 and migrated workloads 
                to AWS serverless (Lambda, API Gateway, DynamoDB).
              </p>
              
              <p className="leading-relaxed">
                As a <strong className="text-foreground">Senior Frontend Engineer</strong>, 
                I specialized in Smart TV development — creating production OTT apps for 
                Samsung and LG TVs. I worked on carousels, search, settings, and video player overlays, 
                while optimizing rendering, state management with Redux, and navigation using spatial logic.
              </p>
              
              <p className="leading-relaxed">
                More recently, I’ve explored <strong className="text-foreground">Generative AI</strong> to 
                accelerate frontend delivery, automating Figma-to-React conversions and building 
                POCs on the Senza streaming platform.
              </p>

              <p className="leading-relaxed">
                Beyond industry, my <strong className="text-foreground">research</strong> on 
                ML-based Network Slicing at IIT Patna, published in Springer, reflects my drive 
                to connect research with practical innovation.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 pt-4"
            >
             {[
                'Smart TV Development',
                'Frontend Engineering',
                'Full Stack Experience',
                'Cloud & Serverless',
                'Generative AI Innovation',
                'Research & Problem Solving'
                ].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <highlight.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '3+', label: 'Smart TV & Web Apps Delivered' },
            { number: '25%', label: 'Performance Improvement' },
            { number: '1', label: 'Research Publication' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
