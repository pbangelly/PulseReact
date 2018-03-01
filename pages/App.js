import React from "react"
import Layout from "../src/comp/Layout"
import ToolBar from "../src/comp/ToolBar"
import Banner from "../src/comp/Banner"
import About from "../src/comp/About"
import Graph from "../src/comp/Graph"
import Footer from "../src/comp/Footer"


export default () => (
  <Layout>
    <ToolBar/>
    <Banner/>
    <About/>
    <Graph/>
    <Footer/>
  </Layout>
)