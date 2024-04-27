import { WheelEvent } from "react"
import { projects } from "../../data/projects_list"
import { ProjectTile } from "../ProjectTile/project_tile"
import "./styles.css"

const ProjectsContainer: React.FC = () => {
  const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
    // here im handling the horizontal scroll inline, without the use of hooks
    const strength = Math.abs(e.deltaY)
    if (e.deltaY === 0) return
    const el = e.currentTarget
    if (
      !(el.scrollLeft === 0 && e.deltaY < 0) &&
      !(
        el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
        e.deltaY > 0
      )
    ) {
      e.preventDefault()
    }
    el.scrollTo({
      left: el.scrollLeft + e.deltaY,
      // large scrolls with smooth animation behavior will lag, so switch to auto
      behavior: strength > 70 ? "auto" : "smooth",
    })
  }

  return (
    <div className="projects-container">
      <div className="projects" onWheel={handleScroll}>
        {projects.map((project) => (
          <ProjectTile project={project} />
        ))}
      </div>
    </div>
  )
}
export default ProjectsContainer
