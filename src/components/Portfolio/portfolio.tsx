import React from "react"
import { AboutMeSection } from "../AboutMeSection/about_me_section"
import { ProjectsSection } from "../ProjectsSection/projects_section"
// import ProjectsContainer from "../ProjectsContainer/projects_container"

export const Protfolio: React.FC = () => {
  return (
    <main>
      <AboutMeSection />
      <ProjectsSection />
      {/* <ProjectsContainer/> ---> Compenent to use onWheel event*/}
    </main>
  )
}
