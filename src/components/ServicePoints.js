import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import servicesphone from "../images/HTML USE IMAGE/servicesphone.png"
import line from "../images/HTML USE IMAGE/line-about.png"
import VisibilitySensor from "react-visibility-sensor"

const ServicePoints = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div id="servicepoints">
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <h5 id="servicesheading">NTech Service Points</h5>
          <center>
            <img src={line} id="service-line" />
          </center>
          <Slide
            direction="right"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={3000}
          >
            <center>
              <img src={servicesphone} style={{ width: "50em" }} />
            </center>
          </Slide>
        </Container>
      </div>
    </VisibilitySensor>
  )
}

export default ServicePoints
