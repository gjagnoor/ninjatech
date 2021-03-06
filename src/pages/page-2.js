import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PagesWallpaper from "../components/PageWallpaper.js"
import About from "../components/About.js"
import Convince from "../components/Convince.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PagesWallpaper />
  </Layout>
)

export default IndexPage
