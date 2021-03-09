import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"
import Services from "../components/Services.js"
import ServicePoints from "../components/ServicePoints.js"
import Home from "../components/Home"
import PagesWallpaper from "../components/PageWallpaper"
import loading from "../images/loading.gif"

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <React.Fragment>
      {isLoading ? (
        <div id="loadingscreen">
          <img src={loading} />
        </div>
      ) : (
        <Layout>
          <SEO title="Home" />
          <h4 id="heading">Services</h4>
          <PagesHome firstComp={<Home />} secondComp={<PagesWallpaper />} />
          <Services />
          <ServicePoints />
        </Layout>
      )}
    </React.Fragment>
  )
}

export default IndexPage
