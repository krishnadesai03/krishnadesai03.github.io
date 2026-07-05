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
    role: "AI & Data Engineer",
    company: "AI & Data Engineer @ Project 990",
    duration: "August 2025 – Present",
    details: [
      "Architected an XGBoost-based entity matching system for a 13M+ record dataset, reducing processing time by 42% and candidate search space by 50% through scalable entity resolution and candidate generation",
      "Built a RoBERTa NLP pipeline for 175K+ nonprofit records, improving tagging consistency by 30% through GPU-accelerated inference.",
      "Built a hybrid retrieval framework combining BM25 and FAISS vector search, enhancing answer relevance and attaining an MRR of 0.919 to improve nonprofit search and discovery.",
      "Developed an LLM-based classification pipeline using few-shot learning and rule-based prompt engineering to map 60K+ nonprofit mission statements to 17 UN SDGs, leveraging transformer-based topic extraction and relevance scoring to improve categorization."
    ]
  },
  {
    id: 2,
    role: "Gen AI Engineer",
    company: "Gen AI Engineer @ IUB",
    duration: "January 2026 – May 2026",
    details: [
      "Built a Pix2Pix-based generative AI system to create museum-style architectural floorplans from spatial room-block constraints, using PyTorch, OpenCV, OCR, and conditional image-to-image translation.",
      "Designed a 5-channel conditioning pipeline combining RGB overlays, room polygon masks, and centroid heatmaps, improving the model’s ability to learn wall geometry, room boundaries, corridors, and interior partitions.",
      "Optimized a 7-level U-Net generator and spectral-normalized PatchGAN discriminator with hinge GAN loss, L1 reconstruction loss, InstanceNorm, gradient clipping, and CPU-based training across 300 epochs on 1000 floorplan pairs."
    ]
  },
  {
    id: 3,
    role: "Data Analyst",
    company: "Data Analyst @ Project 990",
    duration: "May 2025 – August 2025",
    details: [
      "Refactored a large-scale extraction pipeline for 2M+ nonprofit records, building a scalable Python-based migration framework to convert unstructured IRS Form 990 filings into structured datasets, improving pipeline efficiency by 20%.",
      "Discovered and resolved thousands of critical duplicate records during pipeline refactoring, implementing robust deduplication logic that reduced duplicate records by 10%.",
      "Designed the “U.S. Education Philanthropy Desert” from scratch by preprocessing 3.6M records and developing layered geospatial visualizations in Tableau, enabling interactive analysis across 3,000+ U.S. counties."
    ]
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "Data Science Intern @ TCR Innovation",
    duration: "January 2022 – April 2022",
    details: [
      "Orchestrated ETL pipelines with Airflow and PostgreSQL, enabling scalable ingestion and transformation of 300K+ employee records.",
      "Engineered feature pipelines and trained PySpark models for attrition prediction, achieving 85% accuracy with enhanced data flow.",
      "Deployed Power BI dashboards and monitoring tools, cutting reporting latency by 30% and enabling real-time HR insights."
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