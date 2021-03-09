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

const Opening = () => {
  const [isVisible, setVisibility] = useState(false)
  const [displayhome, setDisplayHome] = useState(false)
  const [showLine, setShowLine] = useState(false)
  const [state, setState] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }

  useEffect(() => {
    setTimeout(() => setState(true), 3000)
  }, [])
  return (
    <React.Fragment>
      <div id="container___">
        <div className={!state ? "home___" : "showhome"}>
          <Layout>
            <SEO title="Home" />
            <Home play={true} />
            <Features />
            <br />
            <Design />
            <Touch />
            <Qualcomm />
            <ARPhone />
            <Charger />
          </Layout>
        </div>
        <div id="landing" className={state ? "slide_" : ""}>
          <div style={{ display: "flex" }} className="ninjatech___">
            <Fade in={true} timeout={{ enter: 1000 }}>
              <h1>N</h1>
            </Fade>
            <Fade in={true} timeout={{ enter: 2500 }}>
              <h1>i</h1>
            </Fade>
            <Fade in={true} timeout={{ enter: 3500 }}>
              <h1>n</h1>
            </Fade>
            <Fade in={true} timeout={{ enter: 4500 }}>
              <h1>j</h1>
            </Fade>
            <Fade in={true} timeout={{ enter: 5500 }}>
              <h1>a</h1>
            </Fade>
            <Fade in={true} timeout={{ enter: 6500 }}>
              <h1>T</h1>
            </Fade>
            <Fade in={true} timeout={{ enter: 7500 }}>
              <h1>e</h1>
            </Fade>
            <Fade in={true} timeout={{ enter: 8500 }}>
              <h1>c</h1>
            </Fade>
            <Fade
              in={true}
              timeout={{ enter: 9500 }}
              onEntered={() => setShowLine(true)}
            >
              <h1>h</h1>
            </Fade>
          </div>
          <Slide in={showLine} timeout={{ enter: 10500 }}>
            <div>
              <img src={line} />
            </div>
          </Slide>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Opening
