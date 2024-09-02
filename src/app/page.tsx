import React from "react"
import ProfileSection from "./components/ProfileSection"
import ProjectCard from "./components/ProjectCard"

const projects = [
  {
    id: 1,
    title: "Custom Excel Integration",
    description:
      "A web application designed to streamline the process of integrating and manipulating data from Excel files. It allows users to upload Excel spreadsheets, perform data transformations, and export the processed data back into Excel or other formats as needed.",
    tools: [
      "Backend: Python with Flask",
      "Frontend: HTML and Tailwind CSS",
      "Data Handling: Pandas library",
      "Excel Manipulation: OpenPyXL",
    ],
    githubLink: "https://github.com/Zetaii/customexcel",
    projectLink: "https://zerga556.pythonanywhere.com/",
  },
  {
    id: 2,
    title: "Wordle Recreation",
    description:
      "Developed a fully interactive Wordle game using Python and the Pygame library. This project involves creating a graphical user interface where players can guess a hidden word within a limited number of attempts.",
    tools: ["Frontend: PyGame", "Backend: Python"],
    githubLink: "https://github.com/Zetaii/wordleapp",
    projectLink: "https://replit.com/@zerga556/Python#main.py",
  },
  {
    id: 3,
    title: "Web Development Portfolio",
    description:
      "A showcase of my web development projects and skills, built using modern web technologies and best practices in responsive design.",
    tools: ["Framework: React", "Styling: Tailwind CSS", "Deployment: Vercel"],
    githubLink: "https://github.com/Zetaii/motionresume",
    projectLink: "https://motionresume.vercel.app/",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-8">
      <ProfileSection
        name="Steven Nguyen"
        imageSrc="/Headshot.png"
        description="Hello! I'm a passionate developer with expertise in React and Python, dedicated to crafting innovative and user-centric applications. I thrive on tackling complex problems with creative solutions and enjoy enhancing user experiences through intuitive design. Actively seeking new opportunities to contribute to exciting projects and collaborate with talented professionals."
      />

      <div className="flex flex-col gap-8 w-full max-w-3xl mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
