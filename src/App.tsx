import React from 'react'
import { ThemeProvider } from './components/theme-provider'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Publications } from './components/Publications'
import { Contact } from './components/Contact'
import './index.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="greeshma-portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          {/* <About /> */}
          <Experience />
          <Skills />
          <Projects />
          <Publications />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="bg-muted/30 border-t border-border py-12">
          <div className="container-custom text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground">
                © 2025 Greeshma R R. All rights reserved.
              </div>
              <div className="text-sm text-muted-foreground">
                Built with React, TypeScript, Tailwind CSS, Framer Motion & Three.js
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
