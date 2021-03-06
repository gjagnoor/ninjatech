import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])
  // contact page starts here
  return (
    <React.Fragment>
      {isLoading ? (
        <div></div>
      ) : (
        <Layout>
          <SEO title="Home" />
        </Layout>
      )}
    </React.Fragment>
  )
}
// contact page ends here

export default IndexPage
