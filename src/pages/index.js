import * as React from "react"
import HeroSection from "../components/HeroSection"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Images from "./images"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Images />
  </Layout>
)

export default IndexPage
