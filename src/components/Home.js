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

const Home = props => {
  const [isVisible, setVisibility] = useState(false)
  const [play, setPlay] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }

  useEffect(() => {
    props.play ? setTimeout(() => setPlay(true), 100) : setPlay(true)
  }, [])

  // homepage top section starts here
  return (
    <React.Fragment>
      <VisibilitySensor partialVisibility onChange={onChange}>
        <div id="home__">
          <center>
            <div>
              <Slide
                direction="right"
                in={play}
                mountOnEnter
                // unmountOnExit
                timeout={{ enter: 2000 }}
              >
                <img src={phonel} className="homephone" />
              </Slide>
              <Slide
                direction="down"
                in={play}
                mountOnEnter
                // unmountOnExit
                timeout={{ enter: 3000 }}
              >
                <img src={phonemid} className="homephonemid" />
              </Slide>
              <Slide
                direction="left"
                in={play}
                mountOnEnter
                // unmountOnExit
                timeout={{ enter: 2000 }}
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

// Homepage top section ends here

export default Home
