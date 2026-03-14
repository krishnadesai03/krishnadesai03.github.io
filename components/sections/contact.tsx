"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="bg-white pt-24 flex flex-col justify-between">
      {/* Main Content Container */}
      <div className="container mx-auto px-6 sm:px-12 max-w-7xl flex-grow mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column: Form & Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col max-w-lg"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-[#1C2314] mb-2 tracking-tight">
              Connect with me..
            </h2>
            <p className="text-gray-600 text-base mb-6">
              Let&apos;s Collaborate, Build, Celebrate.
            </p>

            {/* Form */}
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-[#1C2314] transition-colors bg-transparent placeholder:text-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-[#1C2314] transition-colors bg-transparent placeholder:text-gray-400"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-[#1C2314] transition-colors bg-transparent placeholder:text-gray-400"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full border-b border-gray-300 py-3 text-gray-700 focus:outline-none focus:border-[#1C2314] transition-colors bg-transparent placeholder:text-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-[#1C2314] text-white py-4 rounded-full font-medium text-lg hover:bg-black transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-[350px] lg:h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-lg"
          >
            <Image
              src="/contactme.jpeg"
              alt="Connect With Me"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>

      {/* Footer Area */}
      <footer className="w-full bg-[#1C2314] text-white py-6 px-6 sm:px-12 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-1">
          <a href="mailto:desaikri@iu.edu" className="flex items-center gap-2 hover:text-[#d5dec5] transition-colors group">
            <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">desaikri@iu.edu</span>
          </a>
          <div className="flex items-center gap-2 text-white group cursor-default">
            <FaPhoneAlt className="text-xl" />
            <span className="text-sm font-medium">+1(930) 904-5193</span>
          </div>
          <a href="https://www.linkedin.com/in/desaikri/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#d5dec5] transition-colors group">
            <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a href="https://github.com/krishnadesai03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#d5dec5] transition-colors group">
            <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>

        <div className="w-full max-w-4xl h-px bg-white/20"></div>

        <p className="text-sm text-gray-300 text-center">
          © 2025 Krishna Mineshkumar Desai. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
