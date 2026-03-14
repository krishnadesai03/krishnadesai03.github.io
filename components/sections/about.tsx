"use client"

import { motion } from "framer-motion"
import { Database, Brain, Cloud } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#d5dec5] overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto grid gap-6 lg:gap-10 md:grid-cols-[40%_60%] lg:grid-cols-[35%_65%] xl:grid-cols-[30%_70%] items-center">

          {/* Left Column: Circles */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Circle 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="absolute left-[10%] md:left-[15%] lg:left-[5%] z-10 w-48 h-48 bg-[#1C2314] rounded-full flex flex-col items-center justify-center text-white shadow-xl"
            >
              <span className="text-5xl font-bold">20+</span>
              <span className="text-base opacity-80 text-center px-4 mt-1">Projects Built</span>
            </motion.div>

            {/* Circle 2 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute right-[5%] md:right-[10%] lg:right-[5%] z-20 w-44 h-44 bg-[#2A3321] rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-[#F0F2E9]"
            >
              <span className="text-4xl font-bold">15+</span>
              <span className="text-base opacity-80 text-center px-2 mt-1">Technologies Used</span>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6 text-center md:text-left lg:pl-6 xl:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >


              <p className="text-3xl md:text-5xl text-[#1C2314] font-medium leading-tight font-sans tracking-tight">
                Passionate about leveraging data <br />
                science and engineering <br />
                to solve real-world problems and <br />
                drive innovation.
              </p>

              {/* Icon / Feature Items: Adjusted size */}
              <div className="flex flex-col md:flex-row flex-nowrap justify-center md:justify-start gap-3 lg:gap-4 xl:gap-8 mt-12 items-center w-full">
                <div className="flex items-center gap-2 text-[#1C2314] whitespace-nowrap">
                  <Database className="w-6 h-6 xl:w-8 xl:h-8 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm lg:text-base xl:text-lg font-medium tracking-tight">50+ Datasets Analyzed</span>
                </div>
                <div className="hidden md:block w-px h-6 xl:h-10 bg-[#1C2314]/20 shrink-0" />
                <div className="flex items-center gap-2 text-[#1C2314] whitespace-nowrap">
                  <Brain className="w-6 h-6 xl:w-8 xl:h-8 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm lg:text-base xl:text-lg font-medium tracking-tight">10+ AI/ML Projects</span>
                </div>
                <div className="hidden md:block w-px h-6 xl:h-10 bg-[#1C2314]/20 shrink-0" />
                <div className="flex items-center gap-2 text-[#1C2314] whitespace-nowrap">
                  <Cloud className="w-6 h-6 xl:w-8 xl:h-8 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm lg:text-base xl:text-lg font-medium tracking-tight">5+ Cloud Data Pipelines</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
