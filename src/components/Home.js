import { Link } from "gatsby"
import React, { useEffect } from "react"
import homeBackground from "../images/home-background-bright.png"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import phonegif from "../images/phone.gif"

const Home = () => {
  return (
    <div id="home">
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
            <center>
              <div className="ml15">
                <h5 id="ninjatech" className="word">
                  Augmented Reality
                  <span>
                    <p> - The Utimate Technology</p>
                  </span>
                </h5>
              </div>
            </center>
          </Fade>
        </Container>
      </Slide>
    </div>
  )
}

export default Home
