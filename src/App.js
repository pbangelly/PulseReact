import React from "react"
import Layout from "./comp/Layout"
import ToolBar from "./comp/ToolBar"
import Banner from "./comp/Banner"
import About from "./comp/About"
import Graph from "./comp/Graph"
import Footer from "./comp/Footer"


export default () => (
  <Layout>
    <ToolBar/>
    <Banner/>
    <About/>
    <Graph/>
    <Footer/>
  </Layout>
)