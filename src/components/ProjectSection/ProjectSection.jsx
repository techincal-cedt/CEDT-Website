import React from "react"
import "./ProjectSection.css"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  const projects = [
    {
      title: "Project 1",
      image: "https://placehold.co/600x400",
      link: "http://example.com/project1",
    },
    {
      title: "Project 2",
      image: "https://placehold.co/600x400",
      link: "http://example.com/project2",
    },
    {
      title: "Project 3",
      image: "https://placehold.co/600x400",
      link: "http://example.com/project3",
    },
    {
      title: "Project 4",
      image: "https://placehold.co/600x400",
      link: "http://example.com/project4",
    },
  ]

  return (
    <div className="project-container">
      <h2 className="project-heading">Projects</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection
