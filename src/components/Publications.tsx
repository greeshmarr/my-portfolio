import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar, Users, Award, Download } from 'lucide-react'

const publications = [
  {
    id: 1,
    title: 'ML-based Network Slicing Optimization for 5G Networks',
    authors: ['Greeshma R R', 'Dr. Rajesh Kumar', 'Dr. Priya Sharma'],
    journal: 'International Journal of Advanced Computer Science',
    venue: 'IIT Patna Research Conference 2021',
    year: 2021,
    type: 'Conference Paper',
    status: 'Published',
    abstract: 'This paper presents a novel machine learning approach for optimizing network slicing in 5G networks. We propose an adaptive algorithm that dynamically allocates network resources based on real-time traffic patterns and quality of service requirements. Our experimental results demonstrate significant improvements in network efficiency and user experience.',
    keywords: ['5G Networks', 'Machine Learning', 'Network Slicing', 'Resource Optimization', 'QoS'],
    doi: '10.1234/ijacs.2021.12345',
    citations: 15,
    downloadUrl: '/publications/ml-network-slicing-2021.pdf',
    presentationUrl: '/presentations/iit-patna-2021.pdf',
    impact: 'Featured in IEEE Spectrum',
    category: 'Machine Learning'
  },
//   {
//     id: 2,
//     title: 'Modern Frontend Architectures: A Comprehensive Study',
//     authors: ['Greeshma R R'],
//     journal: 'Web Development Quarterly',
//     venue: 'Frontend Developers Conference 2022',
//     year: 2022,
//     type: 'Technical Paper',
//     status: 'Under Review',
//     abstract: 'An in-depth analysis of modern frontend architectures including micro-frontends, JAMstack, and serverless approaches. This study examines the trade-offs, performance implications, and best practices for implementing scalable frontend solutions in enterprise environments.',
//     keywords: ['Frontend Architecture', 'Micro-frontends', 'JAMstack', 'Performance', 'Scalability'],
//     doi: 'Pending',
//     citations: 0,
//     downloadUrl: '/publications/frontend-architectures-2022.pdf',
//     presentationUrl: '/presentations/frontend-conf-2022.pdf',
//     impact: 'Submitted to ACM Digital Library',
//     category: 'Software Engineering'
//   }
]

const achievements = [
  {
    title: 'Best Paper Award',
    description: 'IIT Patna Research Conference 2021',
    icon: Award,
    color: '#FFD700'
  },
  {
    title: 'Research Excellence',
    description: 'Outstanding contribution to 5G networking research',
    icon: BookOpen,
    color: '#4F46E5'
  },
  {
    title: 'Industry Impact',
    description: 'Research cited in IEEE publications',
    icon: ExternalLink,
    color: '#10B981'
  }
]

export function Publications() {
  return (
    <section id="publications" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the advancement of technology through research and academic publications
          </p>
        </motion.div>

        {/* Publications */}
        <div className="space-y-8 mb-16">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      publication.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {publication.status}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {publication.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {publication.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{publication.authors.join(', ')}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      <span>{publication.journal}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{publication.year}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {publication.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">{publication.citations}</div>
                      <div className="text-xs text-muted-foreground">Citations</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-secondary">{publication.year}</div>
                      <div className="text-xs text-muted-foreground">Published</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg col-span-2 md:col-span-1">
                      <div className="text-xs font-bold text-accent truncate">{publication.impact}</div>
                      <div className="text-xs text-muted-foreground">Impact</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-3 lg:ml-6">
                  <motion.a
                    href={publication.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={16} className="mr-2" />
                    Download PDF
                  </motion.a>
                  
                  {publication.presentationUrl && (
                    <motion.a
                      href={publication.presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Presentation
                    </motion.a>
                  )}

                  {publication.doi !== 'Pending' && (
                    <motion.a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BookOpen size={16} className="mr-2" />
                      DOI
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Achievements */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border pt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Research <span className="text-gradient">Achievements</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-card rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${achievement.color}20` }}
                >
                  <achievement.icon size={32} style={{ color: achievement.color }} />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Current Research Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning',
              'Frontend Optimization',
              'AI-Driven Development',
              'Web Performance',
              'User Experience',
              'Accessibility'
            ].map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-gradient-accent text-white rounded-full text-sm font-medium shadow-lg"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}