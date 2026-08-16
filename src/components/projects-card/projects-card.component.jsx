import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import OmniSightLogo from "../../images/projects/omnisight-logo.svg";
import LockstepLogo from "../../images/projects/lockstep-logo.svg";
import Windows11Logo from "../../images/projects/windows-11.svg";

import {
  Actions,
  Card,
  CardContent,
  CardDescription,
  CardGrid,
  CardTitle,
  DemoLink,
  GithubLink,
  ProjectLogo,
  ProjectsHeading,
  ProjectsSection,
} from "./projects-card.styles";

const projects = [
  {
    title: "OmniSight",
    description:
      "A single-glance dashboard for monitoring servers, virtualization, containers, storage, databases and service health.",
    repository: "https://github.com/caglaryalcin/OmniSight",
    demo: "https://demo-omnisight.caglaryalcin.com",
    logo: OmniSightLogo,
  },
  {
    title: "Lockstep",
    description:
      "A self-hosted security checklist for tracking habits, priorities and profile-based progress.",
    repository: "https://github.com/caglaryalcin/lockstep",
    demo: "https://demo-lockstep.caglaryalcin.com",
    logo: LockstepLogo,
  },
  {
    title: "Clean Microsoft Products",
    description:
      "A PowerShell utility that removes unwanted Microsoft apps and Windows bloatware while reducing telemetry and sync.",
    repository: "https://github.com/caglaryalcin/clean-ms-products",
    logo: Windows11Logo,
  },
  {
    title: "After Format",
    description:
      "Windows 11 post-install automation for system setup, privacy hardening, software installation and bloatware removal.",
    repository: "https://github.com/caglaryalcin/after-format",
    logo: Windows11Logo,
  },
];

const ProjectsCard = () => (
  <ProjectsSection id="projects" aria-labelledby="projects-heading">
    <ProjectsHeading id="projects-heading">Projects</ProjectsHeading>
    <CardGrid>
      {projects.map((project) => (
        <Card key={project.title}>
          <CardContent>
            <ProjectLogo aria-hidden="true">
              <img src={project.logo} alt="" />
            </ProjectLogo>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardContent>

          <Actions aria-label={`${project.title} links`}>
            <GithubLink
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <FiGithub aria-hidden="true" focusable="false" />
              GitHub
            </GithubLink>

            {project.demo && (
              <DemoLink
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${project.title} live demo`}
              >
                Live demo
                <FiExternalLink aria-hidden="true" focusable="false" />
              </DemoLink>
            )}
          </Actions>
        </Card>
      ))}
    </CardGrid>
  </ProjectsSection>
);

export default ProjectsCard;
