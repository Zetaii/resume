import React from "react"
import { Home, Github, Linkedin, Mail, FileText, Code } from "lucide-react"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center space-x-8">
          {/* Home Link */}
          <a
            href="/"
            className="text-white flex items-center hover:text-gray-300 transition-colors duration-200"
          >
            <Home className="mr-2" />
            Home
          </a>

          {/* Github Link */}
          <a
            href="https://github.com/Zetaii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center hover:text-gray-300 transition-colors duration-200"
          >
            <Github className="mr-2" />
            Github
          </a>

          {/* LeetCode Link */}
          <a
            href="https://leetcode.com/u/Zetai556/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center hover:text-gray-300 transition-colors duration-200"
          >
            <Code className="mr-2" />
            LeetCode
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/steven-nguyen-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center hover:text-gray-300 transition-colors duration-200"
          >
            <Linkedin className="mr-2" />
            LinkedIn
          </a>

          {/* Resume Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-white flex items-center hover:text-gray-300 transition-colors duration-200"
          >
            <FileText className="mr-2" />
            Resume
          </a>

          {/* Email Link */}
          <a
            href="mailto:youremail@example.com"
            className="text-white flex items-center hover:text-gray-300 transition-colors duration-200"
          >
            <Mail className="mr-2" />
            Email
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
