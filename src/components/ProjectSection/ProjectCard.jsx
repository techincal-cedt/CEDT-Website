import React from "react"
import "./ProjectSection.css"

const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={link}>View Project</a>
    </div>
  )
}

export default ProjectCard
