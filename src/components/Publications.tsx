import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar, Users, Award, Download } from 'lucide-react'

const publications = [
  {
    "id": 1,
    "title": "Machine Learning based Network Slicing and Resource Allocation for Electric Vehicles (EVs)",
    "authors": ["Rohit Kumar Gupta", "Anurag Choubey", "Shlok Jain", "Greeshma R R", "Rajiv Misra"],
    "journal": "Proceedings of the 5th International Conference on Internet of Things and Connected Technologies (ICIoTCT)",
    "venue": "ICIoTCT 2020",
    "year": 2020,
    "type": "Conference Paper",
    "status": "Published",
    "abstract": "This paper employs unsupervised machine learning for clustering EVs into network slices (infotainment, safety, and charge-state) and develops a slice leader–based resource allocation algorithm using RSUs that improves throughput and reduces latency in EV communication networks.",
    "keywords": ["5G Networks", "Machine Learning", "Network Slicing", "Resource Allocation", "Electric Vehicles", "EV", "QoS"],
    "doi": "10.1007/978-3-030-76736-5_31",
    "citations": 11,
    "downloadUrl": "/publications/ml-network-slicing-evs-2020.pdf",
    "presentationUrl": "/presentations/iciotct-2020.pdf",
    "impact": "Presented at ICIoTCT 2020; 11 citations",
    "category": "Machine Learning"
  },  
  {
    "id": 2,
    "title": "Quality Assessment of Crops through Disease Detection using Machine Learning",
    "authors": ["Greeshma R R", "Co-authors (as listed in IJCSE 2020)"],
    "journal": "International Journal of Computer Science and Engineering (IJCSE)",
    "venue": "IJCSE, February 2020",
    "year": 2020,
    "type": "Journal Paper",
    "status": "Published",
    "abstract": "This paper presents a machine learning-based approach for assessing crop quality by detecting plant diseases from image data. Using classification algorithms and image preprocessing techniques, the study improves disease detection accuracy and provides insights for enhancing crop yield and agricultural productivity.",
    "keywords": ["Crop Quality Assessment", "Machine Learning", "Disease Detection", "Agriculture", "Image Classification"],
    "doi": null,
    "citations": 0,
    "downloadUrl": "/publications/crop-disease-detection-2020.pdf",
    "presentationUrl": null,
    "impact": "Published in IJCSE, 2020",
    "category": "Machine Learning"
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
                  
                  {/* {publication.presentationUrl && (
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
                  )} */}

                  {publication.doi !== null && (
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
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  )
}