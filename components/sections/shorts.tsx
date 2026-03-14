"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaHospitalAlt, FaAws, FaShieldAlt, FaProjectDiagram } from 'react-icons/fa'

const achievementsData = [
  {
    id: 1,
    title: "Smart Hospital MAS",
    description: "Developed a multi-agent AI system for mood analysis, triage, scheduling, and bed allocation; improved hospital workflow efficiency. 2nd Runner-Up.",
    icon: <FaHospitalAlt className="text-gray-700 w-5 h-5" />,
    hoverImage: "/certificate.jpeg", // Using one of the images from before
    link: "https://drive.google.com/file/d/1W0ufOArAAACcHMNx9Wb5TMh_nk4a_fxG/view?usp=drive_link"
  },
  {
    id: 2,
    title: "AWS Certified Professional Data Engineer",
    description: "Completed the Data Engineering Professional Certificate, covering data ingestion, modeling, and pipeline orchestration on AWS.",
    icon: <FaAws className="text-gray-700 w-6 h-6" />,
    hoverImage: "/Data Engineering Professional Certificate by DeepLearning.AI.jpg",
    link: "https://drive.google.com/file/d/1noFerHeHNaofj62aCBDsJNIlZ8wNlo4A/view?usp=sharing"
  },
  {
    id: 3,
    title: "AI Fraud Detection",
    description: "Conducted research on AI and ML-based fraud detection, comparing techniques like SVM, ANN, and HMM to improve accuracy.",
    icon: <FaShieldAlt className="text-gray-700 w-5 h-5" />,
    hoverImage: "/ai_fraud_cert.png",
    link: "https://drive.google.com/file/d/1bTAEg71PpSvg1dV317K9F6HzJfiK5Z7z/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Deep Learning Object Detection",
    description: "Conducted research on deep learning–based object detection, comparing CNN architectures like R-CNN, Fast R-CNN, and YOLO to improve accuracy and speed.",
    icon: <FaProjectDiagram className="text-gray-700 w-5 h-5" />,
    hoverImage: "/dl_object_cert.png",
    link: "https://drive.google.com/file/d/1mHubo7U5b28lZzUoJ1sT-NwHmp60J6FB/view?usp=drive_link"
  }
]

export function ShortsSection() {
  return (
    <section id="shorts" className="bg-white pt-[110px] pb-24 transition-colors duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full"
      >
        <div className="container mx-auto px-6 z-10 w-full max-w-7xl">
          <div className="text-center mb-6">
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-medium mb-3 text-[#1C2314]"
            >
              Achievements
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
            >
              Certifications earned — hover to explore.
            </motion.p>
          </div>

          {/* 4-Container Split Layout matching Hero Image Height */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch lg:h-[500px]">

            {/* Left Column */}
            <div className="flex flex-col gap-8 h-full">
              {[achievementsData[0], achievementsData[1]].map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.2 }}
                  className="group relative bg-[#F6F8F3] p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3 flex-1 overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center mb-1 z-10 transition-opacity duration-300 group-hover:opacity-0">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C2314] z-10 transition-opacity duration-300 group-hover:opacity-0">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-sm z-10 transition-opacity duration-300 group-hover:opacity-0">
                    {item.description}
                  </p>

                  {/* Hover Image Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    {item.hoverImage && (
                      <Image
                        src={item.hoverImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    )}
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-bold text-lg px-4 py-2 border-2 border-white rounded-full backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-colors">View Certificate</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Column: Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative w-full h-[350px] lg:h-full rounded-[2.5rem] overflow-hidden shadow-xl order-first lg:order-none"
            >
              <Image
                src="/krishna_with_certificate.jpeg"
                alt="Krishna Professional Achievement"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>

            {/* Right Column */}
            <div className="flex flex-col gap-8 h-full">
              {[achievementsData[2], achievementsData[3]].map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.2 }}
                  className="group relative bg-[#F6F8F3] p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3 flex-1 overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center mb-1 z-10 transition-opacity duration-300 group-hover:opacity-0">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C2314] z-10 transition-opacity duration-300 group-hover:opacity-0">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-sm z-10 transition-opacity duration-300 group-hover:opacity-0">
                    {item.description}
                  </p>

                  {/* Hover Image Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    {item.hoverImage && (
                      <Image
                        src={item.hoverImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    )}
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-bold text-lg px-4 py-2 border-2 border-white rounded-full backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-colors">View Certificate</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}
