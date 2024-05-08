import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

export const AboutMeSection: React.FC = () => {
  return (
    <div className="about-me">
      <div className="picture-section">
        <img src="./assets/NandiniPolavarapu.jpeg" alt="profile-pic" />
        <h1>Nandini Polavarapu</h1>
        <h2> Software Developer</h2>
        <div className="contact-me">
          <FaLinkedin
            className="social-icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nandini-polavarapu-a1470662/"
              )
            }
          />
          <FaGithub
            className="social-icon"
            onClick={() => window.open("https://github.com/nandinip92")}
          />
        </div>
      </div>
      <div className="name-section">
        <p className="statement-section">
          In the ever-evolving realm of technology, I'm a passionate explorer,
          driven by a childhood fascination with computers and the alchemy of
          code.
        </p>
        <p className="statement-section">
          {" "}
          With a robust background in Computer Science and Technology, my
          journey led me through the intricate landscapes of data warehousing
          and software engineering, enriched by certifications in Hadoop, Spark,
          and AWS.
        </p>
        <p className="statement-section">
          Though briefly diverted by the joys of motherhood, my drive to
          innovate blazes with renewed intensity.
        </p>
        <p className="statement-section">
          Equipped with a formidable arsenal of problem-solving skills and a
          collaborative mindset, I stand ready to revolutionize the landscape of
          software development.
        </p>
      </div>
    </div>
  )
}
