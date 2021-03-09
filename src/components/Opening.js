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
    }, 2000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 4000)
  }, [])

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
              </div>
        ) : (
          <Fade in={state} timeout={{enter: 4000}}>

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
              </Fade>

        )}
      </div>
    </React.Fragment>
  )
}

export default Opening
