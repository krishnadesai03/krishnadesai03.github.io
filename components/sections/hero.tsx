"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Download } from "lucide-react"

export function HeroSection() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-end justify-center overflow-hidden pb-32 pt-40 lg:pt-0 lg:pb-36"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="/home_background.jpeg"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      <div className="container mx-auto px-6 sm:px-12 z-10 w-full max-w-7xl pb-16 lg:pb-0">
        <div className="flex flex-col items-start lg:items-end justify-end h-full w-full">
          <div className="max-w-3xl flex flex-col items-start lg:items-end text-left lg:text-right w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-6 justify-start lg:justify-end"
            >
              {["Data", "AI", "Cloud"].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium border border-white/20 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-10"
            >
              Turning Data Into Insights and Intelligent Systems
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a href="https://drive.google.com/drive/folders/1frWDEdi_-nHmfuijre32-p3BghkCj_eF?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#1C2314] hover:bg-gray-100 rounded-full px-8 py-6 text-base font-bold transition-all shadow-lg hover:shadow-xl group">
                  Resume
                  <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          delay: 1.2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </motion.section>
  )
}
