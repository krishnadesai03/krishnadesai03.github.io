"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    role: "Data Engineer",
    company: "Data Engineer @ Project 990",
    duration: "August 2025 – Present",
    details: [
      "Optimized an Entity Name Matching model to match incoming records against a 13M+ ground-truth set, migrating from Pandas/XGBoost to Spark for scale.",
      "Built entity-resolution features (Soundex, Double Metaphone, etc.) and used cosine similarity + SNI to generate high-quality candidate pairs.",
      "Enhanced the core data-matching engine powering Project 990, significantly increasing match precision for grant seekers and grant givers and improving the reliability of downstream analytics and reporting."
    ]
  },
  {
    id: 2,
    role: "Gen AI Engineer",
    company: "Gen AI Engineer @ IUB",
    duration: "January 2026 – Present",
    details: [
      "Participating in a generative AI research project on generating museum floorplan layouts from user-defined constraints, assisting with dataset organization, preparation, and research documentation while gaining exposure to structured AI research workflows.",
      "Supporting training workflows for generative models that translate textual descriptions into spatial layouts while contributing to literature reviews, team discussions, and analysis of spatial constraints to understand model behavior and evaluation."
    ]
  },
  {
    id: 3,
    role: "Data Analyst",
    company: "Data Analyst @ Project 990",
    duration: "May 2025 – August 2025",
    details: [
      "Refactored a large-scale extraction pipeline for 2M+ nonprofit records, building a scalable Python-based migration framework to convert unstructured IRS Form 990 filings into structured, queryable datasets.",
      "Discovered and resolved thousands of critical duplicate records during pipeline refactoring, escalating the issue to leadership and implementing robust deduplication logic that improved data integrity and downstream model accuracy.",
      "Built the “U.S. Education Philanthropy Desert” from scratch by preprocessing millions of records, performing advanced EDA, and developing layered geospatial visualizations in Tableau with dynamic filters and drill-down capabilities."
    ]
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "Data Science Intern @ TCR Innovation",
    duration: "January 2022 – April 2022",
    details: [
      "Developed ETL pipelines with Airflow and PostgreSQL, enabling scalable ingestion and transformation of 300K+ employee records.",
      "Engineered feature pipelines and trained PySpark models, achieving 85% accuracy with optimized data flow and performance.",
      "Deployed dashboards and monitoring tools using Docker and Power BI, ensuring real-time insights and reliable HR data operations."
    ]
  }
]

export function WorkExSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeExp = workExperienceData[activeIndex]

  return (
    <section id="work-experience" className="bg-[#e6ecdf] min-h-screen py-24 px-4 sm:px-6 lg:px-12 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl md:text-4xl lg:text-4xl font-normal text-[#1C2314] mb-3 tracking-tight"
        >
          Work Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="text-[#1C2314]/80 text-xl md:text-2xl mb-6"
        >
          Where I’ve made an impact.
        </motion.p>

        {/* Selection Buttons */}
        <div className="flex flex-nowrap overflow-x-auto justify-start lg:justify-center gap-3 mb-6 pb-4 sm:pb-2 scrollbar-hide">
          {workExperienceData.map((exp, index) => (
            <motion.button
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap px-4 py-2.5 md:px-5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex-shrink-0 ${activeIndex === index
                ? "bg-white text-[#1C2314] shadow-md border border-white"
                : "bg-white/50 text-[#1C2314]/80 hover:bg-white hover:text-[#1C2314] shadow-sm hover:shadow"
                }`}
            >
              {exp.company}
            </motion.button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-white p-6 md:p-10 lg:p-12 rounded-3xl shadow-xl text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  {activeExp.id === 1 && (
                    <span className="block text-sm italic text-[#1C2314]/70 mb-1 font-medium tracking-wide">(promoted)</span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-medium text-[#1C2314] tracking-tight leading-snug">
                    {activeExp.role}
                  </h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-[#f0f2e9] text-[#1C2314]/80 text-sm font-semibold shadow-sm w-fit shrink-0"
                >
                  {activeExp.duration}
                </motion.div>
              </div>

              <ul className="space-y-4 md:space-y-5">
                {activeExp.details.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start text-[#1C2314]/90 text-[1.05rem] md:text-lg leading-relaxed"
                  >
                    <span className="min-w-[6px] h-1.5 w-1.5 mt-2.5 mr-4 rounded-full bg-[#1C2314]/50 flex-shrink-0 shadow-sm" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}