import { Link } from "gatsby"
import React, { useEffect, useState, useRef } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import aboutPhone from "../images/HTML USE IMAGE/about-phone.png"
import lineAbout from "../images/HTML USE IMAGE/line-about.png"
import aboutfeatures from "../images/HTML USE IMAGE/about-lines.png"
import personalization from "../images/HTML USE IMAGE/personalization.png"
import setup from "../images/HTML USE IMAGE/setup.png"
import online from "../images/HTML USE IMAGE/online.png"
import VisibilitySensor from "react-visibility-sensor"

const About = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 200 }}
      onChange={onChange}
    >
      <div id="convince">
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <h5 id="aboutheading">Buy an NTech Model Today</h5>
          <center>
            <img src={lineAbout} id="aboutline" />
          </center>
          <center>
            <p className="aboutp2">
              We deal in Mobile Phones.Ninja tech deals with AR Phone,a
              technology which is unique and interesting. Ninja Logo represents
              the Skilled Fighter.Then lines are knows as traces which also
              represents the technology.
            </p>
          </center>
          <center>
            <p className="aboutp2">
              Ninja Tech is a whole new generation of fast and intelligent. The
              25% faster CPU, GPU and 100% improved system enables a
              breathtaking experience in Augmented Reality, browsing and more.
            </p>
          </center>
          <Slide
            direction="right"
            in={isVisible}
            mountOnEnter
            // unmountOnExit
            timeout={1000}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                marginTop: "5%",
              }}
            >
              <div>
                <center>
                  <img src={setup} className="abouticon" />
                  <p>Quick Setup</p>
                </center>
              </div>
              <div>
                <center>
                  <img src={online} className="abouticon" />
                  <p>Be online. Always</p>
                </center>
              </div>
              <div>
                <center>
                  <img src={personalization} className="abouticon" />
                  <p>Better personalization</p>
                </center>
              </div>
            </div>
          </Slide>
        </Container>
      </div>
    </VisibilitySensor>
  )
}

export default About
