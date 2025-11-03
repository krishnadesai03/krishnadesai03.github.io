"use client";

import { useState } from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

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
    <section id="contact" className="bg-gray-100 py-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Contact</h2>
          <p className="text-gray-600 text-lg">Connect with me on LinkedIn or via email :)</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right side - Single Connect Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {/* Email */}
                <a 
                  href="mailto:desaikri@iu.edu" 
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <FaEnvelope className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">desaikri@iu.edu</span>
                </a>

                {/* Phone */}
                <div className="flex items-center space-x-3 p-3 rounded-lg">
                  <FaPhone className="text-blue-600 scale-x-[-1]" size={24} />
                  <span className="text-gray-700">+1 (930) 904-5193</span>
                </div>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/krishna-desai-7162b8224/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <FaLinkedin className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/krishnadesai03" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <FaGithub className="text-gray-800 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
