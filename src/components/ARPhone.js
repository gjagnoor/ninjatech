import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Grow from "@material-ui/core/Grow"
import Fade from "@material-ui/core/Fade"
import spiderman from "../images/HTML USE IMAGE/spiderman.png"
import VisibilitySensor from "react-visibility-sensor"

const ARPhone = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <VisibilitySensor partialVisibility onChange={onChange} scrollCheck={true}>
      <div id="ARPhone">
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <h5 id="ARPhoneheading">AR Phones</h5>
          <div
            id="arphonescontent"
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "2rem",
              justifyContent: "space-around",
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
              enabled smartphones. Working with the ethos of ‘Smarter
              Technology' for All
            </p>
            <Grow in={isVisible} timeout={{ enter: 3000 }}>
              <img src={spiderman} id="spiderman" />
            </Grow>
          </div>
        </Container>
      </div>
    </VisibilitySensor>
  )
}

export default ARPhone
