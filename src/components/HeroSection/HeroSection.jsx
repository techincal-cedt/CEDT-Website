import React from "react"
import "./HeroSection.css"
import bgVideo from "../../../static/videos/bg-video.mp4"
import { Link } from "react-scroll"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="video-filter"></div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        {" "}
        <h1 className="hero-heading">
          Welcome to <span>CEDT</span>
        </h1>
        <h3 className="hero-subheading">
          Empowering Students to Tinker, Innovate, and Create - Anytime,
          Anywhere.
        </h3>
        <Link
          to="whySection"
          smooth={true}
          offset={-50}
          duration={800}
          className="hero-btn">
          Know More!
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
