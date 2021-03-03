/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container maxWidth="xl">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        {/* <center style={{
          top: '10em',
          position: 'relative'
        }}>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` 🖤 `}
            <span>by Ninja Tech</span>
          </footer>
        </center> */}
      </div>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
