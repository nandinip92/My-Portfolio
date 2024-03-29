import React from "react"

export const AboutMeSection: React.FC = () => {
  const aboutMe =
    "In the ever-evolving realm of technology, I'm a passionate explorer, driven by a childhood fascination with computers and the alchemy of code. With a robust background in Computer Science and Technology, my journey led me through the intricate landscapes of data warehousing and software engineering, enriched by certifications in Hadoop, Spark, and AWS. Though briefly diverted by the joys of motherhood, my drive to innovate blazes with renewed intensity. Equipped with a formidable arsenal of problem-solving skills and a collaborative mindset, I stand ready to revolutionize the landscape of software development. Driven by an unwavering passion for coding and an insatiable thirst for perfection, I am primed to leave an indelible mark on the tech world."
  return (
    <div className="about-me">
      <div className="name-section">
        <h1>Nandini Polavarapu</h1>
        <h3> Software Developer</h3>
        <p className="statement-section">{aboutMe}</p>
      </div>
      <div className="picture-section">
        <img src ="./src/assets/NandiniPolavarapu.jpeg" alt="profile-pic"/>
      </div>
    </div>
  )
}
