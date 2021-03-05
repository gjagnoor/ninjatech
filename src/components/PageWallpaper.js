import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import homeBackground from "../images/home-background-bright.png"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import VisibilitySensor from "react-visibility-sensor"
import Carousel from "react-material-ui-carousel"
import Home from "./Home.js"
import { Button } from "@material-ui/core"

const PagesWallpaper = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }

  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div id="wallpaper">
        <Container maxWidth="xl">
          <Slide in={isVisible} timeout={{ enter: 3000 }}>
            <p id="wallpaperp">
              Snapdragon 821|128 GB ROM, 14.48 cm (5.7 inch) Display| 23MP Rear
              Camera|8MP Front Camera| 3300 mAh Polymer Battery
              <span>
                              <br />
                              <br />
                <span>
                  {" "}
                  <Button variant="contained">Learn More</Button>
                </span>
              </span>
            </p>
          </Slide>
        </Container>
      </div>
    </VisibilitySensor>
  )
}

export default PagesWallpaper
