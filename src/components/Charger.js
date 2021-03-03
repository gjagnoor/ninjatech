import { Link } from "gatsby"
import React, { useEffect } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import spiderman from "../images/HTML USE IMAGE/spiderman.png"

const Charger = () => {
  return (
    <div id="charger">
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
            <h5 id="chargerheading">Hyper Charger</h5>
          </Fade>
          <Fade
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 7000 }}
          >
            <h5 id="chargersubheading">3300mAh Polymer Battery</h5>
          </Fade>
          <Fade
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 7000 }}
          >
            <p id="chargerp">
              The NinjaTech Pro feature charging while discharging in parallel
              allows 3300mAh for maximum battery output and a more stable
              battery life. A NinjaTech+ specialized charging chipset
              effectively manages power flow battery system.
            </p>
          </Fade>
        </Container>
      </Slide>
    </div>
  )
}

export default Charger
