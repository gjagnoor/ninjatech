import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

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

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, []);
  return (
    <React.Fragment>
      {
        isLoading ? <div></div> :  <Layout>
          <SEO title="Home" />
          <Home />
          <Features />
          <br />
          <Design />
          <Touch />
          <Qualcomm />
          <ARPhone />
          <Charger />
      </Layout>
      }
    </React.Fragment>
  )
}

export default HomePage
