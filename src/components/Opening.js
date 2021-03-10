import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/Home.js"
import Features from "../components/Features.js"
import Design from "../components/Design.js"
import Touch from "../components/Touch.js"
import Qualcomm from "../components/Qualcomm.js"
import ARPhone from "../components/ARPhone.js"
import Charger from "../components/Charger.js"
import line from "../images/HTML USE IMAGE/line-about.png"
import { Slider } from "@material-ui/core"
import $ from "jquery"
import { render } from "react-dom"
import { Parallax, Background } from "react-parallax"
import banner from "../images/HTML USE IMAGE/banner.jpg"
import features from "../images/section-2.png"
import touchb from "../images/HTML USE IMAGE/touch-background.jpg"
import designb from "../images/HTML USE IMAGE/design.png"
import qualcommb from "../images/HTML USE IMAGE/qualcomm.jpg"
import charger from "../images/HTML USE IMAGE/chargerbackground.png"

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

const Opening = () => {
  const [isVisible, setVisibility] = useState(false)
  const [displayhome, setDisplayHome] = useState(false)
  const [showLine, setShowLine] = useState(false)
  const [state, setState] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }

  useEffect(() => {
    setTimeout(() => {
      var text = $(".text")
      text.removeClass("hidden")
      var next = $(".next")
      next.removeClass("hidden")
    }, 2000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setState(true)
    }, 4000)
  }, [])
// opening page starts here
  return (
    <React.Fragment>
      <div id="container___">
        {!state ? (
          <div id="landing" className="fadein2">
            <ul className="text hidden">
              <li>N</li>
              <li className="ghost">I</li>
              <li className="ghost">N</li>
              <li className="ghost">J</li>
              <li className="ghost">A</li>
              <li>T</li>
              <li>E</li>
              <li>C</li>
              <li>H</li>
            </ul>
            <div>
              <ul className="hidden next">
                <li className="ghost">S</li>
                <li className="ghost">e</li>
                <li className="ghost">m</li>
                <li className="ghost">p</li>
                <li className="ghost">e</li>
                <li className="ghost">r</li>
                <li className="spaced ghost">E</li>
                <li className="ghost">n</li>
                <li className="ghost">g</li>
                <li className="ghost">i</li>
                <li className="ghost">n</li>
                <li className="ghost">e</li>
                <li className="ghost">e</li>
                <li className="ghost">r</li>
                <li className="ghost">i</li>
                <li className="ghost">n</li>
                <li className="ghost">g</li>
              </ul>
            </div>
          </div>
        ) : (
          <Fade in={state} timeout={{ enter: 4000 }}>
            <div className={!state ? "home___" : "showhome"}>
              <Layout>
                <div style={styles}>
                  <Parallax bgImage={image1} strength={500}>
                    <div style={{ height: "auto" }}>
                      <Home />
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
                    <div style={{ height: "100vh" }} id="touchpar">
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
            </div>
          </Fade>
        )}
      </div>
    </React.Fragment>
  )
}

// opening page ends here 

export default Opening
