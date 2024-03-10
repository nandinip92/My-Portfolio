import "./App.css"
import { AboutMeSection } from "./components/AboutMeSection/about_me_section"
import { ProjectTile } from "./components/ProjectTile/project_tile"
import { projects } from "./data/projects_list"
import { useRef, useState } from "react"

function App() {
  const myProjectsInner = useRef<HTMLDivElement>(null)
  const [myProjectsInnerScrollLeft, setMyProjectsInnerScrollLeft] = useState(
    myProjectsInner.current?.scrollLeft ?? 0
  )

  const getUpperBound = () => {
    return (
      (myProjectsInner.current?.scrollWidth ?? 0) -
      (myProjectsInner.current?.offsetWidth ?? 0)
    )
  }

  const leftArrowClickHandle = () => {
    const newValue = (myProjectsInner.current?.scrollLeft ?? 0) - 300
    const lowerBound = 0
    setMyProjectsInnerScrollLeft(Math.max(newValue, lowerBound))
    myProjectsInner.current?.scrollTo(newValue, 0)
  }

  const rightArrowClickHandle = () => {
    const newValue = (myProjectsInner.current?.scrollLeft ?? 0) + 300
    const upperBound = getUpperBound()
    setMyProjectsInnerScrollLeft(Math.min(newValue, upperBound))
    myProjectsInner.current?.scrollTo(newValue, 0)
    console.log(myProjectsInner.current?.scrollLeft)
  }

  window.addEventListener("resize", () => {
    const lowerBound = 0
    const upperBound = getUpperBound()

    const value = myProjectsInner.current?.scrollLeft ?? 0

    setMyProjectsInnerScrollLeft(
      Math.min(Math.max(value, lowerBound), upperBound)
    )
  })

  return (
    <main>
      <AboutMeSection />
      <div className="my-projects">
        <button
          className={`before ${myProjectsInnerScrollLeft < 1 ? "hidden" : ""}`}
          onClick={leftArrowClickHandle}
        >
          &lt;
        </button>
        <div className="my-projects-inner" ref={myProjectsInner}>
          {projects.map((project) => (
            <ProjectTile project={project} />
          ))}
        </div>
        <button
          className={`after  ${
            myProjectsInner.current &&
            myProjectsInnerScrollLeft > getUpperBound() - 1
              ? "hidden"
              : ""
          }`}
          onClick={rightArrowClickHandle}
        >
          &gt;
        </button>
      </div>
    </main>
  )
}

export default App
