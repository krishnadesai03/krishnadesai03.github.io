"use client";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact</h2>
          <p className="text-gray-600 text-lg">Connect with me</p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:text-blue-800" size={32} />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 hover:text-gray-600" size={32} />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 hover:text-blue-600" size={32} />
          </a>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-2">Hit me up!</p>
          <a href="mailto:himani@example.com" className="text-blue-600 hover:underline text-lg">
            himani@example.com
          </a>
        </div>
      </div>
    </section>
  );
}