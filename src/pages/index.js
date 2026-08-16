import * as React from "react";
import Seo from "../components/seo";
import SnippetCard from "../components/snippet-card/snippet-card.component";
import ProjectsCard from "../components/projects-card/projects-card.component";
import JourneyCard from "../components/journey-card/journey-card.component";
import SkillsCard from "../components/skills-card/skills-card.component";
import Footer from "../components/footer/footer.component";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <Seo />
    <SnippetCard />
    <ProjectsCard />
    <JourneyCard />
    <SkillsCard />
    <Footer />
  </Layout>
);

export default IndexPage;
