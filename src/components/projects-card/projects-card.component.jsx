import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiFirefoxbrowser, SiGooglechrome } from "react-icons/si";
import OmniSightLogo from "../../images/projects/omnisight-logo.svg";
import LockstepLogo from "../../images/projects/lockstep-logo.svg";
import CofferLogo from "../../images/projects/coffer-logo.svg";
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

const TYPING_PAUSE = 1500;
const EMPTY_PAUSE = 700;
const TYPING_VOLUME_MULTIPLIER = 5.4;
const KEYBOARD_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

let typingAudioContext = null;
let typingNoiseBuffer = null;

const randomBetween = (minimum, maximum) =>
  minimum + Math.random() * (maximum - minimum);

const getTypingDelay = (previousCharacter, firstCharacter) => {
  if (firstCharacter) {
    return randomBetween(70, 110);
  }

  if (/[.!?]/.test(previousCharacter)) {
    return randomBetween(190, 270);
  }

  if (/[,;:]/.test(previousCharacter)) {
    return randomBetween(120, 180);
  }

  if (previousCharacter === " ") {
    return randomBetween(50, 70);
  }

  const hesitation = Math.random() < 0.04 ? randomBetween(60, 120) : 0;
  return randomBetween(65, 95) + hesitation;
};

const getDeletingDelay = () => randomBetween(120, 170);

const deletePreviousWord = (value) => {
  const nextValue = value.replace(/(?:\s+)?\S+\s*$/, "");
  return nextValue === value ? "" : nextValue;
};

const getNearbyKey = (character) => {
  const normalizedCharacter = character.toLowerCase();
  const rowIndex = KEYBOARD_ROWS.findIndex((row) =>
    row.includes(normalizedCharacter)
  );

  if (rowIndex === -1) {
    return "x";
  }

  const columnIndex = KEYBOARD_ROWS[rowIndex].indexOf(normalizedCharacter);
  const candidates = [];

  for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
    const row = KEYBOARD_ROWS[rowIndex + rowOffset];

    if (!row) {
      continue;
    }

    for (let columnOffset = -1; columnOffset <= 1; columnOffset += 1) {
      const candidate = row[columnIndex + columnOffset];

      if (candidate && candidate !== normalizedCharacter) {
        candidates.push(candidate);
      }
    }
  }

  const nearbyKey =
    candidates[Math.floor(Math.random() * candidates.length)] || "x";

  return character === character.toUpperCase()
    ? nearbyKey.toUpperCase()
    : nearbyKey;
};

const createTypoPlan = (text) => {
  const candidates = Array.from(text, (character, index) => ({
    character,
    index,
  })).filter(
    ({ character, index }) =>
      index > 7 &&
      index < text.length - 7 &&
      /[a-z]/i.test(character) &&
      (/[a-z]/i.test(text[index - 1]) || /[a-z]/i.test(text[index + 1]))
  );
  const typoCount = text.length > 85 && Math.random() < 0.55 ? 3 : 2;
  const ranges =
    typoCount === 3
      ? [
          [0.15, 0.32],
          [0.38, 0.58],
          [0.65, 0.85],
        ]
      : [
          [0.22, 0.46],
          [0.56, 0.82],
        ];
  const plan = new Map();

  ranges.forEach(([rangeStart, rangeEnd]) => {
    const rangedCandidates = candidates.filter(
      ({ index }) =>
        index >= text.length * rangeStart && index <= text.length * rangeEnd
    );

    if (rangedCandidates.length === 0) {
      return;
    }

    const { index } =
      rangedCandidates[Math.floor(Math.random() * rangedCandidates.length)];
    const typoLength = Math.random() < 0.65 ? 1 : 2;
    let wrongText = "";

    for (let offset = 0; offset < typoLength; offset += 1) {
      const intendedCharacter = /[a-z]/i.test(text[index + offset])
        ? text[index + offset]
        : text[index];
      wrongText += getNearbyKey(intendedCharacter);
    }

    plan.set(index, wrongText);
  });

  return plan;
};

const getTypingAudioContext = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) {
    return null;
  }

  if (!typingAudioContext || typingAudioContext.state === "closed") {
    try {
      typingAudioContext = new AudioContext({ latencyHint: "interactive" });
    } catch {
      typingAudioContext = new AudioContext();
    }

    typingNoiseBuffer = null;
  }

  return typingAudioContext;
};

const unlockTypingAudio = () => {
  const context = getTypingAudioContext();

  if (context?.state === "suspended") {
    context.resume().catch(() => {});
  }
};

const getTypingNoiseBuffer = (context) => {
  if (typingNoiseBuffer) {
    return typingNoiseBuffer;
  }

  const duration = 0.25;
  const frameCount = Math.max(1, Math.floor(context.sampleRate * duration));
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const channel = buffer.getChannelData(0);

  for (let index = 0; index < frameCount; index += 1) {
    channel[index] = Math.random() * 2 - 1;
  }

  typingNoiseBuffer = buffer;
  return typingNoiseBuffer;
};

const playNoiseLayer = (
  context,
  buffer,
  { start, duration, frequency, quality, peakGain }
) => {
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  const maximumOffset = Math.max(0, buffer.duration - duration);

  source.buffer = buffer;
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(frequency, start);
  filter.Q.setValueAtTime(quality, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(
    peakGain * TYPING_VOLUME_MULTIPLIER,
    start + 0.0015
  );
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  source.connect(filter).connect(gain).connect(context.destination);
  source.start(start, randomBetween(0, maximumOffset));
  source.stop(start + duration);

  source.onended = () => {
    source.disconnect();
    filter.disconnect();
    gain.disconnect();
  };
};

const playToneLayer = (
  context,
  { start, duration, frequency, peakGain }
) => {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.frequency.exponentialRampToValueAtTime(
    frequency * 0.78,
    start + duration
  );
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(
    peakGain * TYPING_VOLUME_MULTIPLIER,
    start + 0.002
  );
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(gain).connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration);

  oscillator.onended = () => {
    oscillator.disconnect();
    gain.disconnect();
  };
};

const playTypingSound = (character, deleting = false) => {
  const context = typingAudioContext;

  if (
    !context ||
    context.state !== "running" ||
    typeof document === "undefined" ||
    document.hidden
  ) {
    return;
  }

  const now = context.currentTime;
  const isSpace = character === " ";
  const isModifier = character === "Control";
  const noiseBuffer = getTypingNoiseBuffer(context);
  const clickDuration = deleting
    ? randomBetween(0.015, 0.021)
    : isModifier
      ? randomBetween(0.019, 0.025)
    : isSpace
      ? randomBetween(0.026, 0.035)
      : randomBetween(0.013, 0.018);
  const clickFrequency = deleting
    ? randomBetween(1400, 1900)
    : isModifier
      ? randomBetween(700, 1050)
    : isSpace
      ? randomBetween(850, 1200)
      : randomBetween(2150, 2900);
  const clickGain = deleting
    ? randomBetween(0.015, 0.019)
    : isModifier
      ? randomBetween(0.014, 0.018)
    : isSpace
      ? randomBetween(0.018, 0.023)
      : randomBetween(0.018, 0.023);
  const bodyDuration = deleting
    ? randomBetween(0.03, 0.037)
    : isModifier
      ? randomBetween(0.04, 0.047)
      : isSpace
        ? randomBetween(0.04, 0.047)
        : randomBetween(0.035, 0.043);

  playNoiseLayer(context, noiseBuffer, {
    start: now,
    duration: clickDuration,
    frequency: clickFrequency,
    quality: randomBetween(0.58, 0.75),
    peakGain: clickGain,
  });

  playNoiseLayer(context, noiseBuffer, {
    start: now,
    duration: bodyDuration,
    frequency: deleting
      ? randomBetween(190, 260)
      : isModifier
        ? randomBetween(115, 170)
        : isSpace
          ? randomBetween(120, 175)
          : randomBetween(155, 230),
    quality: randomBetween(0.5, 0.72),
    peakGain: deleting
      ? randomBetween(0.009, 0.013)
      : isModifier
        ? randomBetween(0.014, 0.019)
        : isSpace
          ? randomBetween(0.016, 0.021)
          : randomBetween(0.012, 0.017),
  });

  playToneLayer(context, {
    start: now,
    duration: isSpace
      ? randomBetween(0.042, 0.048)
      : randomBetween(0.036, 0.043),
    frequency: deleting
      ? randomBetween(112, 132)
      : isModifier
        ? randomBetween(78, 102)
      : isSpace
        ? randomBetween(78, 98)
        : randomBetween(94, 122),
    peakGain: deleting
      ? randomBetween(0.009, 0.012)
      : isModifier
        ? randomBetween(0.014, 0.019)
      : isSpace
        ? randomBetween(0.017, 0.022)
        : randomBetween(0.013, 0.018),
  });

  if (!deleting) {
    playNoiseLayer(context, noiseBuffer, {
      start: now + randomBetween(0.008, 0.012),
      duration: randomBetween(0.014, 0.019),
      frequency: isSpace
        ? randomBetween(650, 950)
        : randomBetween(900, 1350),
      quality: randomBetween(0.6, 0.8),
      peakGain: randomBetween(0.0035, 0.0055),
    });
  }
};

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
};

const HoverTypewriter = ({ text }) => {
  const [output, setOutput] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [activeTypo, setActiveTypo] = useState(null);
  const typoPlanRef = useRef(null);
  const usedTypoPositionsRef = useRef(new Set());

  if (typoPlanRef.current === null) {
    typoPlanRef.current = createTypoPlan(text);
  }

  useEffect(() => {
    let timeout;
    let chordTimeout;

    if (activeTypo) {
      const { baseOutput, wrongText, typedCount, correcting } = activeTypo;

      if (!correcting && typedCount < wrongText.length) {
        const wrongCharacter = wrongText[typedCount];

        timeout = window.setTimeout(() => {
          const nextTypedCount = typedCount + 1;
          playTypingSound(wrongCharacter);
          setOutput(baseOutput + wrongText.slice(0, nextTypedCount));
          setActiveTypo({
            ...activeTypo,
            typedCount: nextTypedCount,
          });
        }, randomBetween(55, 85));
      } else if (!correcting) {
        timeout = window.setTimeout(() => {
          setActiveTypo({
            ...activeTypo,
            correcting: true,
          });
        }, randomBetween(100, 170));
      } else if (output.length > baseOutput.length) {
        timeout = window.setTimeout(() => {
          playTypingSound("Backspace", true);
          setOutput(output.slice(0, -1));
        }, randomBetween(36, 56));
      } else {
        timeout = window.setTimeout(
          () => setActiveTypo(null),
          randomBetween(55, 95)
        );
      }
    } else if (!deleting && output.length < text.length) {
      const character = text[output.length];
      const previousCharacter = output[output.length - 1];
      const plannedTypo = typoPlanRef.current.get(output.length);

      if (
        plannedTypo &&
        !usedTypoPositionsRef.current.has(output.length)
      ) {
        usedTypoPositionsRef.current.add(output.length);
        timeout = window.setTimeout(() => {
          setActiveTypo({
            baseOutput: output,
            wrongText: plannedTypo,
            typedCount: 0,
            correcting: false,
          });
        }, randomBetween(35, 70));
      } else {
        timeout = window.setTimeout(
          () => {
            playTypingSound(character);
            setOutput(text.slice(0, output.length + 1));
          },
          getTypingDelay(previousCharacter, output.length === 0)
        );
      }
    } else if (!deleting) {
      timeout = window.setTimeout(() => setDeleting(true), TYPING_PAUSE);
    } else if (output.length > 0) {
      timeout = window.setTimeout(() => {
        playTypingSound("Control");

        chordTimeout = window.setTimeout(() => {
          playTypingSound("Backspace", true);
          setOutput(deletePreviousWord(output));
        }, randomBetween(30, 44));
      }, getDeletingDelay());
    } else {
      timeout = window.setTimeout(() => {
        typoPlanRef.current = createTypoPlan(text);
        usedTypoPositionsRef.current.clear();
        setDeleting(false);
      }, EMPTY_PAUSE);
    }

    return () => {
      window.clearTimeout(timeout);
      window.clearTimeout(chordTimeout);
    };
  }, [activeTypo, deleting, output, text]);

  return (
    <span>
      {output}
      <span className="react-rotating-text-cursor">|</span>
    </span>
  );
};

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
    title: "After Format",
    description:
      "Windows 11 post-install automation for system setup, privacy hardening, software installation and bloatware removal.",
    repository: "https://github.com/caglaryalcin/after-format",
    demo: "https://caglaryalcin.github.io/caglaryalcin/main.gif",
    logo: Windows11Logo,
  },
];

const ProjectsCard = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const unlockAudio = () => unlockTypingAudio();

    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio);

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);

      if (typingAudioContext && typingAudioContext.state !== "closed") {
        typingAudioContext.close().catch(() => {});
      }

      typingAudioContext = null;
      typingNoiseBuffer = null;
    };
  }, []);

  return (
    <ProjectsSection id="projects" aria-labelledby="projects-heading">
      <ProjectsHeading id="projects-heading">Projects</ProjectsHeading>
      <CardGrid>
        {projects.map((project) => {
          const isHovered = hoveredProject === project.title;
          const shouldType = isHovered && !prefersReducedMotion;

          return (
            <Card
              key={project.title}
              onMouseEnter={() => {
                unlockTypingAudio();
                setHoveredProject(project.title);
              }}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent>
                <ProjectLogo aria-hidden="true">
                  <img src={project.logo} alt="" />
                </ProjectLogo>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription
                  $typing={shouldType}
                >
                  <span
                    className="project-description-copy"
                    aria-hidden="true"
                  >
                    {project.description}
                  </span>
                  {shouldType && (
                    <span
                      className="project-description-animation"
                      aria-hidden="true"
                    >
                      <HoverTypewriter text={project.description} />
                    </span>
                  )}
                  <span className="project-description-static">
                    {project.description}
                  </span>
                </CardDescription>
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
          );
        })}
      </CardGrid>
    </ProjectsSection>
  );
};

export default ProjectsCard;
