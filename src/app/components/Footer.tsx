import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Icons Section */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/Zetaii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:nguyens556@gmail.com"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Steven Nguyen. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
