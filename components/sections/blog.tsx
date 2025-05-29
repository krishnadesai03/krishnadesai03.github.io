"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Card } from "@/components/ui/card"

type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  mediumUrl: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Blog #1",
    description: "A short description for blog 1",
    image: "https://tinyurl.com/226ofh39",
    color: "from-blue-500 to-purple-600",
    textColor: "text-blue-100",
    mediumUrl: "https://himani-gulati.medium.com/understanding-the-gaussian-filter-c2cb4fb4f16b"
  },
  {
    id: 2,
    title: "Blog #2",
    description: "A short description for blog 2",
    image: "https://tinyurl.com/25ydsheu",
    color: "from-green-500 to-yellow-500",
    textColor: "text-green-100",
    mediumUrl: "https://himani-gulati.medium.com/understanding-the-gaussian-filter-c2cb4fb4f16b"
  },
  {
    id: 3,
    title: "Blog #3",
    description: "A short description for blog 3",
    image: "https://tinyurl.com/258xcbsc",
    color: "from-red-500 to-pink-600",
    textColor: "text-red-100",
    mediumUrl: "https://himani-gulati.medium.com/understanding-the-gaussian-filter-c2cb4fb4f16b"
  }
];

export function BlogSection() {
  return (
    <section id="blogs" className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden">
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
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Blogs
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Informative Blogs
            </motion.p>
          </div>

          {/* Blogs Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-gradient-to-br ${project.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                />
                <motion.h3
                  className={`text-2xl font-semibold mt-4 ${project.textColor}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className={`mt-2 ${project.textColor} opacity-90`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="mt-4"
                >
                  <a
                    href={project.mediumUrl} // Make sure this URL exists in your project object
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center rounded-lg bg-white/20 px-4 py-2 text-lg font-medium hover:bg-white/30 ${project.textColor}`}
                  >
                    View Blog
                    <FaChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
