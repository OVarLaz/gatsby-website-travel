import React from "react"
import "./HeroSection.css"
import { Button } from "../ButtonElement"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Travel more</h1>
      <p>Plan your next trip today</p>
      <div className="hero-btns">
        <Button fontBig big primary>
          Get started
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
