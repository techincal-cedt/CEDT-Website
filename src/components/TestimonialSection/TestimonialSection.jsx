import React, { useState, useEffect } from "react"
import "./TestimonialSection.css"
import AOS from "aos"
import "aos/dist/aos.css"

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO",
      company: "Company 1",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in lacus a mi fermentum vehicula. Mauris auctor, tortor ut ultrices fermentum, justo neque cursus elit, vel efficitur lorem enim id diam",
      image:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    },
    {
      name: "Jane Doe",
      position: "CTO",
      company: "Company 2",
      testimonial:
        "Sed tristique risus eget efficitur ultricies. Fusce in arcu at nisi ultricies luctus. Integer a ligula vel quam feugiat sollicitudin",
      image:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    },
    // Add more testimonials as needed
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    const timer = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)
    }, 10000) // Change every 10 seconds

    return () => clearInterval(timer) // Clean up on unmount
  }, [currentTestimonial, testimonials.length])

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading" data-aos="fade-up">
        Testimonials
      </h2>
      <div className="testimonial-container" data-aos="fade-up">
        <div className="quote-container" key={currentTestimonial}>
          <blockquote>
            "{testimonials[currentTestimonial].testimonial}"
          </blockquote>
          <img
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].name}
            className="testimonial-image"
          />
        </div>
        <cite>
          - {testimonials[currentTestimonial].name},{" "}
          {testimonials[currentTestimonial].position},{" "}
          {testimonials[currentTestimonial].company}
        </cite>
      </div>
    </div>
  )
}

export default TestimonialSection
