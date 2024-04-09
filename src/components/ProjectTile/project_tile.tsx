import React from "react"
import { Project } from "../../models/Project"
interface ProjectTileProps {
  project: Project
}
export const ProjectTile: React.FC<ProjectTileProps> = ({ project }) => {
  const link = project.link
  const name = project.name
  const description = project.description
  const imageUrl = project.image
  return (
    <a href={link}>
      <div className="project-tile">
        <div className="project-image">
          <img src={imageUrl} alt={project.name}/>
        </div>
        <div className="project-details">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </a>
  )
}
