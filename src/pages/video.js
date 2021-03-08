import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"
import Video from "../components/Video.js"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h4 id="heading">Video</h4>
      <PagesHome />
      <Video />
    </Layout>
  )
}

export default IndexPage
