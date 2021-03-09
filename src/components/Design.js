import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import designphone1 from "../images/HTML USE IMAGE/about-phone.png"
import designphone2 from "../images/HTML USE IMAGE/designphone2.png"
import VisibilitySensor from "react-visibility-sensor"

const Design = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <VisibilitySensor partialVisibility onChange={onChange}>

    <div id="design">
      <Slide
        direction="right"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={{enter: 2000}}
      >
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
            <h5 id="symmetricaldesign">Symmetrical Design</h5>
            <p id="degree">
              360<span>°</span>
            </p>
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
          <center>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <img src={designphone1} className="designphone" style={{ height: '40%' }}/>
                <img
                  src={designphone2}
                  id={isVisible ? "animate" : "stopanimation"}
                  className="designphone"
                  style={{height: "65vh", marginBottom: "10em"}}
                />
            </div>
          </center>
        </Container>
      </Slide>
      </div>
      </VisibilitySensor>

  )
}

export default Design
