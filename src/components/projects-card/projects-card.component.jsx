import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiFirefoxbrowser, SiGooglechrome } from "react-icons/si";
import OmniSightLogo from "../../images/projects/omnisight-logo.svg";
import LockstepLogo from "../../images/projects/lockstep-logo.svg";
import CofferLogo from "../../images/projects/coffer-logo.svg";
import MonlineLogo from "../../images/projects/monline-logo.svg";
import Windows11Logo from "../../images/projects/windows-11.svg";

import {
  Actions,
  Card,
  CardContent,
  CardDescription,
  CardGrid,
  CardTitle,
  DemoLink,
  ExtensionLink,
  ExtensionLinks,
  GithubLink,
  ProjectLogo,
  ProjectsHeading,
  ProjectsSection,
} from "./projects-card.styles";

const projects = [
  {
    title: "OmniSight",
    description:
      "A single dashboard for monitoring infrastructure and service health.",
    repository: "https://github.com/caglaryalcin/OmniSight",
    demo: "https://demo-omnisight.caglaryalcin.com",
    logo: OmniSightLogo,
  },
  {
    title: "Coffer",
    description:
      "Coffer is a self-hosted, multi-user 2fa vault.",
    repository: "https://github.com/caglaryalcin/Coffer",
    extensions: [
      {
        label: "Firefox Add-ons",
        href: "https://addons.mozilla.org/en-US/firefox/addon/coffer/",
        icon: SiFirefoxbrowser,
      },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/coffer/ajekhlpjkcohkdedhkdjkadilecboimd",
        icon: SiGooglechrome,
      },
    ],
    demo: "https://demo-coffer.caglaryalcin.com/",
    logo: CofferLogo,
  },
  {
    title: "Monline",
    description:
      "A self-hosted app for tracking income, expenses, subscriptions and budgets.",
    repository: "https://github.com/caglaryalcin/Monline",
    demo: "https://demo-monline.caglaryalcin.com",
    logo: MonlineLogo,
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
    title: "After Format",
    description:
      "Windows 11 setup automation for privacy, apps and bloatware removal.",
    repository: "https://github.com/caglaryalcin/after-format",
    demo: "https://caglaryalcin.github.io/caglaryalcin/main.gif",
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

            {project.extensions && (
              <ExtensionLinks>
                {project.extensions.map((extension) => {
                  const ExtensionIcon = extension.icon;

                  return (
                    <ExtensionLink
                      key={extension.label}
                      href={extension.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on ${extension.label}`}
                      title={extension.label}
                    >
                      <ExtensionIcon
                        aria-hidden="true"
                        focusable="false"
                      />
                    </ExtensionLink>
                  );
                })}
              </ExtensionLinks>
            )}
          </Actions>
        </Card>
      ))}
      <Card as="div" className="project-placeholder" aria-hidden="true" />
    </CardGrid>
  </ProjectsSection>
);

export default ProjectsCard;
