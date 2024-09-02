import React from "react"

interface ProjectCardProps {
  title: string
  description: string
  tools: string[]
  githubLink?: string
  projectLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tools,
  githubLink,
  projectLink,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mb-4">
        <h3 className="font-semibold">Tools:</h3>
        <ul className="list-disc list-inside">
          {tools.map((tool, index) => (
            <li key={index} className="text-gray-600">
              {tool}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        )}
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Project
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
