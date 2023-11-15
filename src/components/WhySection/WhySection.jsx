import React, { useEffect } from "react"
import "./WhySection.css"
import AOS from "aos"
import "aos/dist/aos.css"

const WhySection = () => {
  const cards = [
    {
      title: "Versatility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Innovation Hub",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Mentorship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })

  return (
    <div className="why-container" id="whySection">
      <div className="why-content">
        <h2 className="why-heading" data-aos="fade-up">
          Why CEDT?
        </h2>
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className="card" data-aos="fade-left">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhySection
