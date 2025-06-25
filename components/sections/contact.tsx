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
          <a href="https://www.linkedin.com/in/himani-gulati-958b3119a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:text-blue-800" size={32} />
          </a>
          <a href="https://github.com/himani007" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 hover:text-gray-600" size={32} />
          </a>
          <a href="https://x.com/iinamih" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 hover:text-blue-600" size={32} />
          </a>
          <a href="https://www.instagram.com/iinamih_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:text-pink-700" size={32} />
          </a>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-2">Hit me up!</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:hgmani007@gmail.com" className="text-blue-600 hover:underline text-lg">
              hgmani007@gmail.com
            </a>
            <span className="text-gray-600 text-lg">|</span>
            <a href="mailto:hgulati@iu.edu" className="text-blue-600 hover:underline text-lg">
              hgulati@iu.edu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}