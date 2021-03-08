import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import homeBackground from "../images/home-background-bright.png"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import phonegif from "../images/phone.gif"
import phonel from "../images/HTML USE IMAGE/phonel.png"
import phoner from "../images/HTML USE IMAGE/phoner.png"
import phonemid from "../images/HTML USE IMAGE/phone-middle.png"
import VisibilitySensor from "react-visibility-sensor"
import CircularProgress from "@material-ui/core/CircularProgress"

const Home = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <React.Fragment>
      <VisibilitySensor partialVisibility onChange={onChange}>
        <div id="home">
          <center>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
              id="home_"
            >
              <Slide
                direction="right"
                in={isVisible}
                mountOnEnter
                unmountOnExit
                timeout={2000}
              >
                <img src={phonel} className="homephone" />
              </Slide>
              <Slide
                direction="down"
                in={isVisible}
                mountOnEnter
                unmountOnExit
                timeout={1000}
              >
                <img src={phonemid} className="homephonemid" />
              </Slide>
              <Slide
                direction="left"
                in={isVisible}
                mountOnEnter
                unmountOnExit
                timeout={2000}
              >
                <img src={phoner} className="homephone" />
              </Slide>
            </div>
            <h4 id="heading_">Augmented Reality - The Ultimate Technology </h4>
          </center>
        </div>
      </VisibilitySensor>
    </React.Fragment>
  )
}

export default Home
