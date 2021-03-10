import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import charger from "../images/HTML USE IMAGE/chargerphone.png"
import VisibilitySensor from "react-visibility-sensor"

const Charger = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  // Charger section for homepage starts here
  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div id="charger">
        <Slide
          direction="right"
          in={isVisible}
          mountOnEnter
          // unmountOnExit
          timeout={1000}
        >
          <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
            <h5 id="chargerheading">Hyper Charger</h5>
            <h5 id="chargersubheading">3300mAh Polymer Battery</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <img src={charger} id="chargerphone" />
              <center>
                <p id="chargerp">
                  The NinjaTech Pro feature charging while discharging in
                  parallel allows 3300mAh of maximum battery output and a more
                  stable battery life. NinjaTech+ specialized charging chipset
                  effectively manages power flow battery system.
                </p>
              </center>
            </div>
          </Container>
        </Slide>
      </div>
    </VisibilitySensor>
  )
}

// charger section for homepage ends here

export default Charger
