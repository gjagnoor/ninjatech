import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import homeBackground from "../images/home-background-bright.png"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import phone1 from "../images/HTML USE IMAGE/phone1_.png"
import phone2 from "../images/HTML USE IMAGE/phone2_.png"
import phone3 from "../images/HTML USE IMAGE/phone3_.png"
import phonemid from "../images/HTML USE IMAGE/phone-middle.png"
import VisibilitySensor from "react-visibility-sensor"
import Carousel from "react-material-ui-carousel"
import Home from "./Home.js"
import PagesWallpaper from "../images/HTML USE IMAGE/pageswallpaper.jpg"
import { Button } from "@material-ui/core"

const PagesHome = () => {
  const [isVisible, setVisibility] = useState(false)
  const [color, setColor] = useState("greyhound")

  const onChange = visiblity => {
    setVisibility(visiblity)
  }

  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div style={{ marginTop: "5em" }}>
        <Container>
          <Carousel
            onChange={i =>
              setColor(
                i === 0 ? "greyhound" : i === 1 ? "black beauty" : "aqua"
              )
            }
            changeOnFirstRender={false}
            indicators={false}
          >
            <center>
              <div>
                <img src={phone1} className="carouselphone" />
              </div>
            </center>
            <center>
              <div>
                <img src={phone2} className="carouselphone" />
              </div>
            </center>
            <center>
              <div>
                <img src={phone3} className="carouselphone" />
              </div>
            </center>
          </Carousel>
        </Container>
        <center>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              marginTop: "3em",
            }}
          >
            {color}
          </Button>
        </center>
      </div>
    </VisibilitySensor>
  )
}

export default PagesHome
