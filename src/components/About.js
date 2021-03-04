import { Link } from "gatsby"
import React, { useEffect } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import aboutPhone from "../images/HTML USE IMAGE/about-phone.png"
import lineAbout from "../images/HTML USE IMAGE/line-about.png"
import aboutfeatures from "../images/HTML USE IMAGE/about-lines.png"

const About = () => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        )
      },
      false
    )
  }, [])
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
          <h5 id="aboutheading">About Ninja Tech</h5>
          <center>
            <img src={lineAbout} id="aboutline" />
          </center>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              //   margin: "8em",
            }}
            id="about-phone-content"
          >
            <img src={aboutPhone} id="aboutphone" />
            <div id="about-content">
              <center>
                <img src={aboutfeatures} id="aboutfeaturesimg" />
              </center>
              <center>
                <p
                  className="aboutfeaturesp"
                  style={{ wordBreak: "break-word", width: "25rem" }}
                >
                  We deal in Mobile Phones. Ninja tech deals with AR Phone,a
                  technology which is unique and interesting. Ninja Logo
                  represents the Skilled Fighter. Then lines are knows as traces
                  which also represents the technology.
                </p>
                <p
                  className="aboutfeaturesp"
                  style={{ textAlign: "center", width: "25rem" }}
                >
                  Ninja Tech is a whole new generation of fast and intelligent.
                  The 25% faster CPU, GPU and 100% improved system enables a
                  breathtaking experience in Augmented Reality, browsing and
                  more.
                </p>
              </center>
            </div>
          </div>
        </Container>
      </Slide>
    </div>
  )
}

export default About
