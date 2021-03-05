import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import designphone1 from "../images/HTML USE IMAGE/designphone1.png"
import designphone2 from "../images/HTML USE IMAGE/designphone2.png"
import VisibilitySensor from "react-visibility-sensor"

const Design = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <div id="design">
      <Slide
        direction="right"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <Fade
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 7000 }}
          >
            <h5 id="symmetricaldesign">Symmetrical Design</h5>
          </Fade>
          <Fade
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 7000 }}
          >
            <p id="degree">
              360<span>°</span>
            </p>
          </Fade>
          <Fade
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 7000 }}
          >
            <div>
              <center>
                <p id="designp">
                  Grip and control better with two diamond shaped on back
                </p>
                <p id="designp2">
                  of phone, improving your handling however you used your phone.
                  Symmetrical and even, the NINJATECH.
                </p>
              </center>
            </div>
          </Fade>
          <center>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <img src={designphone1} className="designphone" />
              <VisibilitySensor partialVisibility onChange={onChange}>
                <img
                  src={designphone2}
                  id={isVisible ? "animate" : "stopanimation"}
                  className="designphone"
                />
              </VisibilitySensor>
            </div>
          </center>
        </Container>
      </Slide>
    </div>
  )
}

export default Design
