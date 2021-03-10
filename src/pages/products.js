import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"
import Products from "../components/Products.js"
import ProductsSlider from "../components/ProductsSlider.js"
import PagesWallpaper from "../components/PageWallpaper"
import Home from "../components/Home_"
import loading from "../images/loading.gif"

const Products_ = () => {
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
          <h4 id="heading">Products</h4>
          <PagesHome firstComp={<PagesWallpaper />} secondComp={<Home />} />
          <Products />
          <ProductsSlider />
        </Layout>
      )}
    </React.Fragment>
  )
}

export default Products_
