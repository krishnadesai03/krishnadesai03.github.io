"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Card } from "@/components/ui/card"

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
      "CGPI: 9.52 / 10.0"
    ]
  }
]

export function BlogSection() {
  return (
    <section id="education" className="bg-[#d5dec5] py-20 transition-colors duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center"
      >

        <div className="container mx-auto px-4 z-10 max-w-6xl">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-medium mb-4 text-[#1C2314]"
            >
              Education
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-[#1C2314] mb-8 max-w-2xl mx-auto opacity-80"
            >
              My academic background and specialization
            </motion.p>
          </div>

          {/* Education Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-start"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#1C2314] mb-2">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <p className="text-lg font-semibold text-gray-700">{edu.school}</p>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {edu.details.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-[#1C2314] rounded-full shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
