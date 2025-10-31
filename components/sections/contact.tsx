"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram} from "react-icons/fa";

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact</h2>
          <p className="text-gray-600 text-lg">Connect with me on LinkedIn or via email :)</p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.linkedin.com/in/krishna-desai-7162b8224/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:text-blue-800" size={32} />
          </a>
          <a href="https://github.com/krishnadesai03" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 hover:text-gray-600" size={32} />
          </a>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-2">Hit me up!</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:desaikri@iu.edu" className="text-blue-600 hover:underline text-lg">
              desaikri@iu.edu
            </a>
            <span className="text-gray-600 text-lg">|</span>
            <span className="text-gray-600 text-lg">+1(930) 904-5193</span>
          </div>
        </div>
      </div>
    </section>
  );
}