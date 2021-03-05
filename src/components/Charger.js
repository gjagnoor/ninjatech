import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import spiderman from "../images/HTML USE IMAGE/spiderman.png"
import VisibilitySensor from "react-visibility-sensor"

const Charger = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div id="charger">
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
              <h5 id="chargerheading">Hyper Charger</h5>
            </Fade>
            <Fade
              direction="up"
              in={isVisible}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 7000 }}
            >
              <h5 id="chargersubheading">3300mAh Polymer Battery</h5>
            </Fade>
            <Fade
              direction="up"
              in={isVisible}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 7000 }}
            >
              <center>
                <p id="chargerp">
                  The NinjaTech Pro feature charging while discharging in
                  parallel allows 3300mAh for maximum battery output and a more
                  stable battery life. A NinjaTech+ specialized charging chipset
                  effectively manages power flow battery system.
                </p>
              </center>
            </Fade>
          </Container>
        </Slide>
      </div>
    </VisibilitySensor>
  )
}

export default Charger
