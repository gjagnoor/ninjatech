import { Link } from "gatsby"
import React, { useEffect } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import line from "../images/HTML USE IMAGE/line-about.png"
import productsimg from "../images/HTML USE IMAGE/products.png"
import ntech900 from "../images/HTML USE IMAGE/ntech900.png"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      backgroundColor: "white",
      color: "black",
    },
  },
}))

const Products = () => {
  const classes = useStyles()
  return (
    <div id="products">
      <Slide
        direction="right"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <h5 id="productsheading">Products</h5>
          <center>
            <img src={line} style={{ width: "7em" }} />
          </center>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <div className="ntech900 product">
              <p className="productheading">NTech 900</p>
              <img src={ntech900} className="productimg" />
              <center>
                <Button variant="contained">Buy now</Button>
              </center>
            </div>
            <div className="ntech900 product">
              <p className="productheading">NTech 900 +</p>
              <img src={ntech900} className="productimg" />
              <center>
                <Button variant="contained">Buy now</Button>
              </center>
            </div>
          </div>
        </Container>
      </Slide>
    </div>
  )
}

export default Products
