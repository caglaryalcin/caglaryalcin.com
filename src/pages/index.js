import * as React from "react"
import Seo from "../components/seo";
import SnippetCard from "../components/snippet-card/snippet-card.component";
import JourneyCard from "../components/journey-card/journey-card.component";
import SkillsCard from "../components/skills-card/skills-card.component";
import Footer from "../components/footer/footer.component";
import Layout from "../components/layout";



const IndexPage = () => {
  return (
      <Layout>
        <Seo  description="Hi, I'm Caglar. I live in a big city somewhere in the world."></Seo>
        <SnippetCard />
        <JourneyCard />
        <SkillsCard />
        <Footer />
      </Layout>


  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
