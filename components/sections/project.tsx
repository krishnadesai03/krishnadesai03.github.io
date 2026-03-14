"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"

type Project = {
  id: number
  title: string
  image: string
  description: string | ReactNode
  tags: string[]
  links?: {
    github?: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "SHMAS project",
    image: "/shmas.png",
    description: "AI-powered agents optimizing hospital workflows in real time.",
    tags: ["AI", "Agents", "Real-time"],
    links: { github: "https://github.com/krishnadesai03/AIvengers" }
  },
  {
    id: 2,
    title: "Global Superstore Analytics",
    image: "/superstore.png",
    description: "AWS-powered retail analytics platform with ML-driven insights.",
    tags: ["AWS", "Machine Learning", "Analytics"],
    links: { github: "https://github.com/krishnadesai03/Global_Superstore_Analytics" }
  },
  {
    id: 3,
    title: "SOFI",
    image: "/sofi.png",
    description: (
      <>
        Contributed visual analytics to the SoFI project, earning an <a href="https://www.millennium-project.org/state-of-the-future-index/" target="_blank" rel="noopener noreferrer" className="text-[#9bab80] hover:underline font-semibold">Honorable Mention</a> for impactful insights.
      </>
    ),
    tags: ["Power BI", "Data Analytics"],
    links: { github: "https://app.powerbi.com/view?r=eyJrIjoiYzNkMTJiNzItOGZmZS00NmVkLThjMzMtZmM0ZjIzZmJmYjkzIiwidCI6IjExMTNiZTM0LWFlZDEtNGQwMC1hYjRiLWNkZDAyNTEwYmU5MSIsImMiOjN9" }
  },
  {
    id: 4,
    title: "Tweet Analytics using AWS",
    image: "/twitter.png",
    description: "Analyzing social media conversations to uncover trends and insights.",
    tags: ["AWS", "Data Analysis", "Social Media"],
    links: { github: "https://github.com/krishnadesai03/twitter-data-analytics" }
  },
  {
    id: 5,
    title: "Financial Risk Monitoring System",
    image: "/banking_analytics.png",
    description: "Data-driven dashboard uncovering banking risk and customer financial patterns.",
    tags: ["Data Dashboard", "Risk Analytics"],
    links: { github: "https://github.com/krishnadesai03/Banking_Risk_Analytics_Platform" }
  },
  {
    id: 6,
    title: "IMDB EmoAnalysis",
    image: "/imdb.png",
    description: "NLP model analyzing IMDb movie review sentiment with RNN architectures.",
    tags: ["Python", "NLP", "RNN", "Deep Learning"],
    links: { github: "https://github.com/krishnadesai03/IMDB_EmoAnalysis_using_Deep_Learning" }
  }
]

export function ProjectSection() {
  return (
    <section id="projects" className="bg-white min-h-screen py-24 px-4 sm:px-6 lg:px-12 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-3xl lg:text-4xl font-medium text-[#1C2314] mb-4 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            A glimpse into the work I’ve built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 border border-gray-200 p-4 shadow-sm hover:shadow-md hover:border-[#9bab80] transition-colors transition-shadow duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-full relative h-[200px] md:h-[220px] mb-4 bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#1C2314] leading-tight">{project.title}</h3>
                  {project.links?.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1C2314] transition-colors shrink-0 ml-2 mt-1">
                      <FaGithub size={22} />
                    </a>
                  )}
                </div>
                <div className="text-sm text-gray-600 mb-4 h-auto min-h-[40px] line-clamp-3">
                  {project.description}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white border border-gray-200 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
