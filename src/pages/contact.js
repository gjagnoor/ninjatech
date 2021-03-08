import React, {useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"

const IndexPage = () => {
  useEffect(() => {
    window.pageExitTime = 1000
  }, [])
  return (
 
    <Layout>
      <SEO title="Home" />
      <h4 id="heading">Contact Us</h4>
      <PagesHome />
    </Layout>
  )
}

export default IndexPage
