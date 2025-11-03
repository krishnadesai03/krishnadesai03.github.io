"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown, FaBriefcase } from "react-icons/fa"

type WorkExperience = {
  id: number
  role: string
  company: string
  duration: string
  details: string[]
}

const workExperienceData: WorkExperience[] = [
    {
    id: 1,
    role: "Data Engineering Intern",
    company: "PROJECT 990",
    duration: "May 2025 – Present",
    details: [
      "Designed and deployed a robust Python-based data migration pipeline that transformed unstructured IRS tax filings into structured, queryable datasets—enhancing data accessibility, reliability, and downstream analytics efficiency.",
      "Queried and examined 2 million+ IRS tax records using advanced SQL techniques, uncovering critical data anomalies, schema mismatches, and reporting gaps, while spearheading initiatives for continuous data-quality improvements and audit readiness.",
      "Defined, tracked, and enforced data-quality KPIs to keep ingested and processed data in sync, giving stakeholders the confidence to make sound, data-driven decisions."
    ]
  },
  {
    id: 2,
    role: "Data Science & Machine Learning with Python Intern",
    company: "Technical Coding Research Innovation",
    duration: "Jan 2022 – Apr 2022",
    details: [
      "Conducted analytics on an employee dataset having 35 attributes, predicting retention using Python and ML.",
      "Designed and implemented ETL data pipelines ensuring high-quality datasets from 2940 entries.",
      "Delivered 8 visualizations (pie charts, column graphs, heatmaps), aligning insights with business performance metrics.",
      "Developed predictive models with 98.15% training accuracy and 85.26% testing accuracy, supporting resource allocation decisions."
    ]
  }
]

export function WorkExSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpanded(prev => (prev === id ? null : id))
  }

  return (
    <section id="work-experience" className="bg-gray-100 py-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Work Experience</h2>
          <p className="text-gray-600 text-lg">My professional journey and contributions</p>
        </div>

        <div className="space-y-6">
          {workExperienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex items-start gap-4">
                  <FaBriefcase className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-gray-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expanded === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4"
                  >
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                      {exp.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}