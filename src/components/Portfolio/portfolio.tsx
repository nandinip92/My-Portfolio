import React from "react"
import { AboutMeSection } from "../AboutMeSection/about_me_section"
import { ProjectsSection } from "../ProjectsSection/projects_section"

export const Protfolio: React.FC = () => {
  return (
    <main>
      <AboutMeSection />
      <ProjectsSection />
    </main>
  )
}
