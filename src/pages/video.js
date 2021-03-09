import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"
import Video from "../components/Video.js"

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <React.Fragment>
      {
        isLoading ? <div></div> :     <Layout>
        <SEO title="Home" />
        <Video />
      </Layout>
      }
    </React.Fragment>
  )
}

export default IndexPage
