"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Image from "next/image"

const skills = [
  "Python 3.10.9",
  "R",
  "SQL",
  "Machine Learning",
  "Deep Learning",
  "Data Engineering",
  "TensorFlow",
  "Keras",
  "Power BI",
  "Tableau",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Git",
]

const interests = [
  { icon: "✈️", label: "Travel" },
  { icon: "🏔️", label: "Adventure" },
  { icon: "🍳", label: "Cooking" },
  { icon: "📖", label: "Reading" },
  { icon: "🧩", label: "Puzzle Solving" },
  { icon: "🍕", label: "Eating" },
]

const floatingAnimation = {
  y: ["-10%", "10%"],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

export function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [showBio, setShowBio] = useState(false)

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-secondary/5 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          {/* Image Column */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-6xl font-bold text-white">KD</span>
              </div>
              <motion.div 
                className="absolute bg-gradient-to-t from-transparent to-transparent"
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full"
              animate={floatingAnimation}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full"
              animate={floatingAnimation}
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Data Science Graduate Student & Data Engineering Specialist</h2>
              <AnimatePresence mode="wait">
                {showBio ? (
                  <motion.p
                    key="full-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    I'm Krishna Desai, a Data Science Master's student at Indiana University Bloomington, 
                    passionate about transforming raw data into actionable insights through advanced analytics and machine learning. 
                    With experience in data engineering, ETL pipelines, and predictive modeling, I specialize in building 
                    scalable data solutions that drive business value. My journey includes working with 2M+ IRS tax records, 
                    developing sentiment analysis models with 86% accuracy, and implementing end-to-end AWS data pipelines. 
                    I'm driven by the challenge of solving complex data problems and creating intelligent systems that make a real impact.
  
                  </motion.p>
                ) : (
                  <motion.p
                    key="short-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    Passionate about leveraging data science and engineering to solve real-world problems and drive innovation.  
                  </motion.p>
                )}
              </AnimatePresence>
              <Button 
                variant="link" 
                onClick={() => setShowBio(!showBio)}
                className="mt-2 p-0 h-auto font-semibold text-primary hover:text-primary/80"
              >
                {showBio ? "Read Less" : "Read More"}
              </Button>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.button
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeSkill === skill 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary text-secondary-foreground"
                    }`}
                    onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
              <AnimatePresence>
                {activeSkill && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 p-2 bg-secondary/50 rounded-md text-sm"
                  >
                    {`${activeSkill}: Click to see projects using this skill!`}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-2 bg-secondary/30 rounded-md"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm text-secondary-foreground">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/Krishna Desai - RESUME.pdf"
                download
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground"
              >
                <FaDownload className="mr-2 h-4 w-4" />
                Download CV
              </a>
              <a
                href="mailto:desaikri@iu.edu"
                className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md"
              >
                <FaEnvelope className="mr-2 h-4 w-4" />
                Contact Me
              </a>
              <a
                href="https://github.com/krishnadesai03"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/20"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-desai-7162b8224/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/20"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Glowing orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>
    </section>
  )
}
