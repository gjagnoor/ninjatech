import { Link } from "gatsby"
import React from "react"
import homeBackground from "../images/home-background.png";

const Home = () => {
    return (
        <section id="home">
            <img id="home-background" className="responsive" src={homeBackground} />
        </section>
    );
}

export default Home
