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
  // design page for homepage starts here
  return (
    <div id="design">
      <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
        <h5 id="symmetricaldesign">Symmetrical Design</h5>
        <p id="degree">
          360<span>°</span>
        </p>
        <div>
          <center>
            <p id="designp">
              Grip and control better with an ergonomic back. Improved handling.
              Symmetrical and even!
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
            id="designimages"
          >
            <img
              src={designphone1}
              className="designphone"
              style={{ height: "40%" }}
            />
            <VisibilitySensor partialVisibility onChange={onChange}>
              <img
                src={designphone2}
                id={isVisible ? "animate" : "stopanimation"}
                className="designphone"
                style={{ height: "65vh", marginBottom: "10em" }}
              />
            </VisibilitySensor>
          </div>
        </center>
      </Container>
    </div>
  )
}
// design page for homepage ends here
export default Design
