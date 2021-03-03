import { Link } from "gatsby"
import React, { useEffect } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import spiderman from "../images/HTML USE IMAGE/spiderman.png"

const ARPhone = () => {
  return (
    <div id="ARPhone">
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
            <h5 id="ARPhoneheading">AR Phones</h5>
          </Fade>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "5rem",
              justifyContent: "space-between",
            }}
          >
            <p id="arphonesp">
              Augmented reality is used to enhance natural environments or
              situations and offer perceptually enriched experiences. With the
              help of advanced AR Technologies . The information about the
              surrounding real world of the user becomes interactive and
              digitally manipulated. The AR phone can create a virtual
              environment with a projection technology giving a feel of
              futuristic entertainment. NinjaTech specializes in new-age
              technology, it designs, develops, manufactures, and sells Tech
              enabled smartphones. Working with the ethos of ‘Smarter Technology
              for All
            </p>
            <img src={spiderman} id="spiderman" />
          </div>
        </Container>
      </Slide>
    </div>
  )
}

export default ARPhone
