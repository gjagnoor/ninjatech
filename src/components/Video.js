import { Link } from "gatsby"
import React, { useEffect } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import aboutPhone from "../images/HTML USE IMAGE/about-phone.png"
import lineAbout from "../images/HTML USE IMAGE/line-about.png"
import aboutfeatures from "../images/HTML USE IMAGE/about-lines.png"
import { Button } from "@material-ui/core"

const About = () => {
  return (
    <div id="about">
      <Slide
        direction="right"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <h5 id="aboutheading">Video</h5>
          <center>
            <img src={lineAbout} id="aboutline" />
          </center>
          <center>
            <iframe
              width="auto"
              height="auto"
              src="https://www.youtube.com/embed/eVIozKR9p50"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </center>
          <center>
            <Button variant="contained">Watch Now</Button>
          </center>
        </Container>
      </Slide>
    </div>
  )
}

export default About
