"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Card } from "@/components/ui/card"
import Image from "next/image"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Achievement 1 images in the specified order
const achievement1Images = [
  "/certificate.jpeg",
  "/krishna_with_certificate.jpeg",
  "/team_group.jpeg",
  "/shmas-img.png"
]

// Achievement 2 images in the specified order
const achievement2Images = [
  "/Data Engineering Professional Certificate by DeepLearning.AI.jpg",
  "/deep-learning_ai_aws_logo.png",
  "/joe_reis.webp"
]

// Achievement 4 images (Fraud Detection)
const achievement4Images = [
  "/Fraud Detection.png"
]

// Achievement 5 images (Object Detection)
const achievement5Images = [
  "/Object Detection.png"
]

// Achievement 6 images (Power BI)
const achievement6Images = [
  "/PowerBI Certificate.png"
]

export function AchievementsSection() {
  // State for image carousel in first achievement
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0)
  // State for image carousel in second achievement
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0)
  // State for image carousel in fourth achievement
  const [currentImageIndex4, setCurrentImageIndex4] = useState(0)
  // State for image carousel in fifth achievement
  const [currentImageIndex5, setCurrentImageIndex5] = useState(0)
  // State for image carousel in sixth achievement
  const [currentImageIndex6, setCurrentImageIndex6] = useState(0)
  
  const nextImage1 = () => {
    setCurrentImageIndex1((prev) => (prev + 1) % achievement1Images.length)
  }
  
  const prevImage1 = () => {
    setCurrentImageIndex1((prev) => (prev - 1 + achievement1Images.length) % achievement1Images.length)
  }
  
  const nextImage2 = () => {
    setCurrentImageIndex2((prev) => (prev + 1) % achievement2Images.length)
  }
  
  const prevImage2 = () => {
    setCurrentImageIndex2((prev) => (prev - 1 + achievement2Images.length) % achievement2Images.length)
  }
  
  const nextImage4 = () => {
    setCurrentImageIndex4((prev) => (prev + 1) % achievement4Images.length)
  }
  
  const prevImage4 = () => {
    setCurrentImageIndex4((prev) => (prev - 1 + achievement4Images.length) % achievement4Images.length)
  }
  
  const nextImage5 = () => {
    setCurrentImageIndex5((prev) => (prev + 1) % achievement5Images.length)
  }
  
  const prevImage5 = () => {
    setCurrentImageIndex5((prev) => (prev - 1 + achievement5Images.length) % achievement5Images.length)
  }
  
  const nextImage6 = () => {
    setCurrentImageIndex6((prev) => (prev + 1) % achievement6Images.length)
  }
  
  const prevImage6 = () => {
    setCurrentImageIndex6((prev) => (prev - 1 + achievement6Images.length) % achievement6Images.length)
  }

  return (
    <section id="achievements" className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Professional Achievements
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              My notable professional accomplishments
            </motion.p>
          </div>

          {/* Achievements Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="w-full flex flex-col"
              >
                <Card
                  className="p-6 bg-secondary/30 shadow-md rounded-lg h-64 flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  {/* Image carousel for first achievement */}
                  {index === 1 && achievement1Images.length > 0 ? (
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex1}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={achievement1Images[currentImageIndex1]}
                              alt={`Achievement 1 - Image ${currentImageIndex1 + 1}`}
                              width={400}
                              height={400}
                              className="object-contain max-w-full max-h-full"
                              onError={(e) => {
                                console.error('Image failed to load:', achievement1Images[currentImageIndex1])
                              }}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Navigation arrows */}
                      {achievement1Images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage1}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Previous image"
                          >
                            <FaChevronLeft />
                          </button>
                          <button
                            onClick={nextImage1}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Next image"
                          >
                            <FaChevronRight />
                          </button>
                          
                          {/* Image indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {achievement1Images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentImageIndex1(i)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  i === currentImageIndex1 ? 'bg-white' : 'bg-white/50'
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : index === 2 && achievement2Images.length > 0 ? (
                    /* Image carousel for second achievement */
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex2}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={achievement2Images[currentImageIndex2]}
                              alt={`Achievement 2 - Image ${currentImageIndex2 + 1}`}
                              width={400}
                              height={400}
                              className="object-contain max-w-full max-h-full"
                              onError={(e) => {
                                console.error('Image failed to load:', achievement2Images[currentImageIndex2])
                              }}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Navigation arrows */}
                      {achievement2Images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage2}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Previous image"
                          >
                            <FaChevronLeft />
                          </button>
                          <button
                            onClick={nextImage2}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Next image"
                          >
                            <FaChevronRight />
                          </button>
                          
                          {/* Image indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {achievement2Images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentImageIndex2(i)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  i === currentImageIndex2 ? 'bg-white' : 'bg-white/50'
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : index === 4 && achievement4Images.length > 0 ? (
                    /* Image carousel for fourth achievement */
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex4}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={achievement4Images[currentImageIndex4]}
                              alt={`Achievement 4 - Image ${currentImageIndex4 + 1}`}
                              width={400}
                              height={400}
                              className="object-contain max-w-full max-h-full"
                              onError={(e) => {
                                console.error('Image failed to load:', achievement4Images[currentImageIndex4])
                              }}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Navigation arrows */}
                      {achievement4Images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage4}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Previous image"
                          >
                            <FaChevronLeft />
                          </button>
                          <button
                            onClick={nextImage4}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Next image"
                          >
                            <FaChevronRight />
                          </button>
                          
                          {/* Image indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {achievement4Images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentImageIndex4(i)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  i === currentImageIndex4 ? 'bg-white' : 'bg-white/50'
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : index === 5 && achievement5Images.length > 0 ? (
                    /* Image carousel for fifth achievement */
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex5}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={achievement5Images[currentImageIndex5]}
                              alt={`Achievement 5 - Image ${currentImageIndex5 + 1}`}
                              width={400}
                              height={400}
                              className="object-contain max-w-full max-h-full"
                              onError={(e) => {
                                console.error('Image failed to load:', achievement5Images[currentImageIndex5])
                              }}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Navigation arrows */}
                      {achievement5Images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage5}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Previous image"
                          >
                            <FaChevronLeft />
                          </button>
                          <button
                            onClick={nextImage5}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Next image"
                          >
                            <FaChevronRight />
                          </button>
                          
                          {/* Image indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {achievement5Images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentImageIndex5(i)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  i === currentImageIndex5 ? 'bg-white' : 'bg-white/50'
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : index === 6 && achievement6Images.length > 0 ? (
                    /* Image carousel for sixth achievement */
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex6}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={achievement6Images[currentImageIndex6]}
                              alt={`Achievement 6 - Image ${currentImageIndex6 + 1}`}
                              width={400}
                              height={400}
                              className="object-contain max-w-full max-h-full"
                              onError={(e) => {
                                console.error('Image failed to load:', achievement6Images[currentImageIndex6])
                              }}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Navigation arrows */}
                      {achievement6Images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage6}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Previous image"
                          >
                            <FaChevronLeft />
                          </button>
                          <button
                            onClick={nextImage6}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Next image"
                          >
                            <FaChevronRight />
                          </button>
                          
                          {/* Image indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {achievement6Images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentImageIndex6(i)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  i === currentImageIndex6 ? 'bg-white' : 'bg-white/50'
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    /* Empty container for other achievements */
                    null
                  )}
                </Card>
                <motion.div
                  className="mt-4 p-3 bg-secondary/20 rounded-md text-sm text-muted-foreground"
                >
                  {index === 1 && (
                    <>
                      Developed <strong>Smart Hospital MAS</strong>, a multi-agent AI system for mood analysis, triage, scheduling, and bed allocation; improved hospital workflow efficiency. <strong>2nd Runner-Up</strong>.
                    </>
                  )}
                  {index === 2 && (
                    <>
                      Completed the <strong>DeepLearning.AI Data Engineering Professional Certificate</strong> (in collaboration with AWS), covering data ingestion, storage, modeling, and pipeline orchestration—building scalable, cloud-based data solutions on AWS.
                    </>
                  )}
                  {index === 4 && (
                    <>
                      Conducted research on <strong>AI and ML-based fraud detection</strong>, comparing techniques like SVM, ANN, and HMM to improve accuracy across financial and digital fraud domains.
                    </>
                  )}  
                  {index === 5 && (
                    <>
                      Conducted research on <strong>deep learning–based object detection</strong>, comparing CNN architectures like R-CNN, Fast R-CNN, and YOLO to improve accuracy and speed in real-world applications such as healthcare, autonomous vehicles, and surveillance.
                    </>
                  )}
                  {index === 6 && (
                    <>
                      Completed the <strong>Power BI Fundamentals</strong> course, gaining hands-on experience in <strong>data preparation, DAX, visualization design, and a customer churn case study</strong>, strengthening end-to-end business analytics skills.
                    </>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

