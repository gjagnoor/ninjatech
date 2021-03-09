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
import Carousel from "react-material-ui-carousel"
import PagesWallpaper from "../images/HTML USE IMAGE/pageswallpaper.jpg"

const PagesHome = (props) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity)
  }

  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div id="pageshome">
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <Carousel>
            <center>
              <div className="slide">
                {props.firstComp}
              </div>
            </center>
            <center>
              <div className="slide">
                {props.secondComp}
              </div>
            </center>
          </Carousel>
        </Container>
      </div>
    </VisibilitySensor>
  )
}

export default PagesHome
