import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import VisibilitySensor from "react-visibility-sensor"

const Touch = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div id="touch">
        <Slide
          direction="right"
          in={isVisible}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
            <Fade
              direction="up"
              in={isVisible}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 7000 }}
            >
              <h5 id="touchheading">Master Touch 2.0</h5>
            </Fade>
            <Fade
              direction="up"
              in={isVisible}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 7000 }}
            >
              <div>
                <p className="touchtext">
                  Master Touch 2.O lets you set a custom touch zone,
                </p>
                <p className="touchtext2">
                  the ninja tech responds to pressure controls even on screen
                  edge.
                </p>
              </div>
            </Fade>
          </Container>
        </Slide>
      </div>
    </VisibilitySensor>
  )
}

export default Touch
