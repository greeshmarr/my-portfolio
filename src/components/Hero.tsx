import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/greeshmarr', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/greeshmarr', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:greeshmarr@example.com', label: 'Email' },
]

const quickInfo = [
  { label: 'Current Role', value: 'Senior Frontend Engineer' },
  { label: 'Company', value: 'Synamedia' },
  { label: 'Experience', value: '4+ Years' },
  { label: 'Specialization', value: 'Smart TV & Web Apps' },
]

export function Hero() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 dark:from-blue-800/30 dark:to-indigo-700/30 rounded-2xl backdrop-blur-sm border border-white/20"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-emerald-200/30 to-green-300/30 dark:from-emerald-800/30 dark:to-green-700/30 rounded-xl backdrop-blur-sm border border-white/20"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-pink-200/30 to-rose-300/30 dark:from-pink-800/30 dark:to-rose-700/30 rounded-full backdrop-blur-sm border border-white/20"
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12">
          
          {/* Main Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
          >
            <motion.div
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 dark:border-slate-700/50"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                  Senior Frontend Engineer
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
                    Greeshma
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Building high-performance <strong>Smart TV applications</strong> and modern web experiences with React, TypeScript, and cutting-edge frontend technologies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <motion.a
                  href="#projects"
                  className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  className="group inline-flex items-center gap-2 bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl font-medium border border-slate-200 dark:border-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  Resume
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white/60 dark:bg-slate-700/60 hover:bg-white dark:hover:bg-slate-700 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 dark:border-slate-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon size={20} className="text-slate-600 dark:text-slate-300" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating Info Cards */}
          <div className="flex-1 relative max-w-lg">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 50, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8, 
                    rotate: 2,
                    scale: 1.05
                  }}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">
                    {info.label}
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {info.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Tech Stack Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 lg:mt-12 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-400/10 dark:to-blue-400/10 backdrop-blur-xl rounded-2xl p-6 border border-indigo-200/30 dark:border-indigo-700/30"
            >
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Currently Working With
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Smart TV', 'Redux', 'AWS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="px-3 py-1.5 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-slate-600/50"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}