import { Link } from "gatsby"
import React, { useEffect } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"

const Qualcomm = () => {
  return (
    <div id="qualcomm">
      <Slide
        direction="right"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <Container maxWidth="xl">
          <Fade
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 7000 }}
          >
            <h5 id="qualcommheading">Qualcomm Snapdragon 835</h5>
          </Fade>
          <Fade
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 7000 }}
          >
            <div>
              <p className="qualcommtext">Augmented Reality</p>
            </div>
          </Fade>
          <Fade
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 7000 }}
          >
            <center>
              <p className="qualcommp">
                Powered by the most advance mobile platform the Qualcomm
                Snapdragon 835, Ninja Tech is a whole new generation of fast and
                intelligent. The 25% faster CPU, GPU and 100% improved system
                enables a breathtaking experience in Augmented Reality, browsing
                and more.
              </p>
            </center>
          </Fade>
        </Container>
      </Slide>
    </div>
  )
}

export default Qualcomm
