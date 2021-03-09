import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"
import About from "../components/About.js"
import Convince from "../components/Convince.js"
import Home from "../components/Home.js"
import PageWallpaper from "../components/PageWallpaper"

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <React.Fragment>
      {
        isLoading ? <div></div> :  <Layout>
        <SEO title="Home" />
        <h4 id="heading">About Us</h4>
        <PagesHome firstComp={<PageWallpaper />} secondComp={ <Home />}/>
        <About />
        <Convince />
      </Layout>
      }
    </React.Fragment>
  )
}

export default IndexPage
