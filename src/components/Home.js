import { Link } from "gatsby"
import React, { useEffect } from "react"
import homeBackground from "../images/home-background-bright.png"
import anime from "animejs/lib/anime.es.js"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import phonegif from "../images/phone.gif"

const Home = () => {
  return (
    <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
      <Fade
        direction="up"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 7000 }}
      >
        <div className="ml15">
          <h5 id="ninjatech" className="word">
            Ninja Tech
          </h5>
        </div>
      </Fade>
      <Slide
        direction="right"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <div id="home"></div>
      </Slide>
      {/* <img id="home-background" className="responsive" src={homeBackground} /> */}
    </Container>
  )
}

export default Home
