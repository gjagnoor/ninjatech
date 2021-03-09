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
      <Video />
    </Layout>
  )
}

export default IndexPage
