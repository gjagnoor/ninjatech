import React from "react"
import { render } from "react-dom"
import { Parallax, Background } from "react-parallax"
import Touch from "../components/Touch.js"
import Features from "../components/Features.js"
import Home from "../components/Home.js"
import banner from "../images/HTML USE IMAGE/banner.jpg"
import features from "../images/section-2.png"
import Design from "../components/Design.js"
import touchb from "../images/HTML USE IMAGE/touch-background.jpg"
import designb from "../images/HTML USE IMAGE/design.png"
import qualcommb from "../images/HTML USE IMAGE/qualcomm.jpg"
import Qualcomm from "../components/Qualcomm.js"
import ARPhone from "../components/ARPhone.js"
import charger from "../images/HTML USE IMAGE/chargerbackground.png"
import Charger from "../components/Charger.js"
import Layout from "../components/layout.js"

const styles = {
  // fontFamily: "sans-serif",
  textAlign: "center",
}
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}
const image1 = banner
const image2 = features
const image3 = designb
const image4 = touchb
const image5 = qualcommb
const image6 = "black"
const image7 = charger

const App = () => (
  <Layout>
    <div style={styles}>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: "auto" }}>
          {/* <div style={insideStyles}> */}
          <Home />
          {/* </div> */}
        </div>
      </Parallax>
      <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
        <div style={{ height: "auto" }}>
          <Features />
        </div>
      </Parallax>
      <Parallax bgImage={image3} strength={-100}>
        <div style={{ height: "auto" }}>
          <Design />
        </div>
      </Parallax>
      <Parallax bgImage={image4} strength={-100}>
        <div style={{ height: "auto" }}>
          <Touch />
        </div>
      </Parallax>
      <Parallax bgImage={image5} strength={-100}>
        <div style={{ height: "auto" }}>
          <Qualcomm />
        </div>
      </Parallax>
      <Parallax bgImage={image6} strength={-100}>
        <div style={{ height: "auto" }}>
          <ARPhone />
        </div>
      </Parallax>
      <Parallax bgImage={image7} strength={-100}>
        <div style={{ height: "auto" }}>
          <Charger />
        </div>
      </Parallax>
    </div>
  </Layout>
)

export default App
