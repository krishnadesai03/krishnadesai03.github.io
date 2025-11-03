"use client"

import { motion } from "framer-motion"
import { FaDownload, FaEnvelope } from 'react-icons/fa'
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { FaChevronDown, FaUniversity } from "react-icons/fa"

type Education = {
  id: number
  degree: string
  school: string
  duration: string
  details: string[]
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Data Science",
    school: "Indiana University Bloomington",
    duration: "Aug 2024 – May 2026",
    details: [
      "Relevant Courses: Applied Algorithms, Information Visualization, Data Visualization",
      "Currently working on data engineering projects and machine learning research",
      "GPA: 3.7 / 4.0"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Information Technology",
    school: "University of Mumbai",
    duration: "Jan 2021 – Jul 2024",
    details: [
      "Relevant Courses: Data Structures, Database Management, Software Engineering, Web Development",
      "Final year project: IMDB Sentiment Analysis with Deep Learning (86% accuracy)",
      "Internship: Data Science & Machine Learning Intern at Technical Coding Research Innovation",
      "CGPI: 9.52 / 10.0"
    ]
  }
]

export function AboutSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpanded(prev => (prev === id ? null : id))
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/5 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        {/* Title without fade effect */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">About Me</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Left Column - Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(edu.id)}
                >
                  <div className="flex items-start gap-4">
                    <FaUniversity className="text-blue-600 mt-1" size={24} />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-gray-500 text-sm mt-1">{edu.duration}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === edu.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-gray-500" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expanded === edu.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-4"
                    >
                      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                        {edu.details.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground">
                I'm Krishna Desai, a Data Science Master's student at Indiana University Bloomington, 
                passionate about transforming raw data into actionable insights through advanced analytics and machine learning. 
                With experience in data engineering, ETL pipelines, and predictive modeling, I specialize in building 
                scalable data solutions that drive business value. My journey includes working with 2M+ IRS tax records, 
                developing sentiment analysis models with 86% accuracy, and implementing end-to-end AWS data pipelines. 
                I'm driven by the challenge of solving complex data problems and creating intelligent systems that make a real impact.
              </p>
            </div>

            {/* Seeking Fulltime Position */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-muted-foreground text-lg">
                <span className="font-semibold text-primary">🌟 Currently seeking full-time opportunities</span> in Data Engineering, Analytics, and Machine Learning
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Krishna Desai - RESUME.pdf"
                download
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <FaDownload className="mr-2 h-4 w-4" />
                Download CV
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md"
              >
                <FaEnvelope className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>

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
