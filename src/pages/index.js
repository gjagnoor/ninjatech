import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "./home.js";
import skrollr from "skrollr";

const IndexPage = () => {
  useEffect(() => {
    var s = skrollr.init();
  }, [])
  return (
    // <div id="headcontainer">

      <div class="container">

      <video autoplay muted loop id="myVideo">
        <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" type="video/mp4" />
      </video>

      <svg class="overlay" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="knockout" maskContentUnits="objectBoundingBox">
            <rect x="0" y="0" width="1" height="1" fill="white"/>
            <g fill="black"
              data-0="transform: translate(0.5px,0.5px) scale(0.0015) translate(-49px,-49px);"
              data-50p="transform: translate(0.5px,0.5px) scale(0.04) translate(-49px,-49px);">
              <path d="M48.86,97.73A7.72,7.72,0,0,1,41.15,90V7.72a7.72,7.72,0,1,1,15.43,0V90A7.72,7.72,0,0,1,48.86,97.73Z"/>
              <path class="cls-1" d="M90,56.58H7.72a7.72,7.72,0,1,1,0-15.43H90a7.72,7.72,0,1,1,0,15.43Z"/>
            </g>
          </mask>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill="white" mask="url('/#knockout')"/>
      </svg>

      </div>
      // </div>

  )
}

export default IndexPage
