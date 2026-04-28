import Link from "next/link";
import type { ReactNode } from "react";

type TimelineSide = "left" | "right";

type HomeProject = {
  title: string;
  duration: string;
  year: string;
  tags: string[];
  side: TimelineSide;
  href?: string;
};

type Experience = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
  side: TimelineSide;
};

const projects: HomeProject[] = [
  {
    title: "Refresh of Data School Website",
    duration: "2 months",
    year: "2026",
    tags: ["AI driven"],
    side: "right",
    href: "/projects/codebridge-college",
  },
  {
    title: "Cloud workload protection module in enterprise product",
    duration: "12 months",
    year: "2025",
    tags: ["@ESET", "B2B"],
    side: "left",
    href: "/projects/cloud-security",
  },
  {
    title: "Skoda EcoShift app",
    duration: "4 months",
    year: "2024",
    tags: ["internship", "app"],
    side: "right",
    href: "/projects/skoda-app",
  },
  {
    title: "Codebridge College",
    duration: "2 months",
    year: "2024",
    tags: ["start-up", "branding"],
    side: "left",
    href: "/projects/codebridge-college",
  },
  {
    title: "Healthapp",
    duration: "48 hours",
    year: "2022",
    tags: ["hackathon"],
    side: "right",
  },
  {
    title: "Bratislava app",
    duration: "48 hours",
    year: "2022",
    tags: ["hackathon"],
    side: "left",
  },
];

const experiences: Experience[] = [
  {
    company: "ESET cybersecurity",
    title: "Product designer",
    period: "full time since 07/24",
    side: "left",
    bullets: [
      "Responsible for two major projects",
      "Main domain B2B products for small/medium businesses",
      "Designing of core flows, user interfaces such as dashboards and tables",
      "Collaboratively iterating designs with other teams",
      "Validating designs through usability testing and analytics",
    ],
  },
  {
    company: "Skoda Auto",
    title: "UX/UI designer",
    period: "16 months internship",
    side: "right",
    bullets: [
      "Main domain digital instrument cluster and infotainment",
      "Collaborating on a new app for electromobility",
      "Interaction proposals for a new generation of vehicles",
      "Diploma thesis",
      "UX/UI lookfeel for the concept show car",
    ],
  },
];

const protocol = [
  "Map the system before the screen",
  "Prototype the risky interaction first",
  "Make handoff readable for engineers",
];

function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`pill ${className}`}>{children}</div>;
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}

function ProjectCard({ project }: { project: HomeProject }) {
  const content = (
    <article className="project-card">
      <span className="mobile-year">{project.year}</span>
      <h3>{project.title}</h3>
      <p>{project.duration}</p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );

  if (!project.href) return content;

  return (
    <Link href={project.href} className="project-link" aria-label={`Open ${project.title}`}>
      {content}
    </Link>
  );
}

function ProjectsTimeline() {
  return (
    <section id="projects" className="section-shell projects-section">
      <h2 className="section-kicker">Projects</h2>

      <div className="timeline">
        {projects.map((project) => {
          const left = project.side === "left";
          return (
            <div key={`${project.title}-${project.year}`} className="timeline-row">
              <div className={`timeline-cell ${left ? "timeline-card-cell" : "timeline-year-cell"}`}>
                {left ? <ProjectCard project={project} /> : <span className="year-label">{project.year}</span>}
              </div>

              <div className="timeline-axis" aria-hidden="true">
                <span />
              </div>

              <div className={`timeline-cell ${left ? "timeline-year-cell" : "timeline-card-cell"}`}>
                {left ? <span className="year-label">{project.year}</span> : <ProjectCard project={project} />}
              </div>
            </div>
          );
        })}
      </div>

      <p className="behance-line">
        more projects on{" "}
        <a href="https://www.behance.net/robertkolek" target="_blank" rel="noreferrer">
          Behance
        </a>
      </p>
    </section>
  );
}

function ContactBand() {
  return (
    <section id="contact" className="contact-band">
      <div className="contact-inner">
        <p>Got project in mind?</p>
        <h2>Lets talk!</h2>
        <a className="email-pill" href="mailto:robert.kolek98@gmail.com">
          robert.kolek98@gmail.com
        </a>
        <div className="social-row">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.behance.net/robertkolek" target="_blank" rel="noreferrer">
            Behance
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-card">
      <h3>{experience.company}</h3>
      <p className="experience-period">{experience.period}</p>
      <p className="experience-role">{experience.title}</p>
      <ul>
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

function CVTimeline() {
  return (
    <section id="cv" className="section-shell cv-section">
      <div className="center-title">
        <p>My CV</p>
        <h2>Corporations</h2>
      </div>

      <div className="cv-timeline">
        {experiences.map((experience) => {
          const left = experience.side === "left";
          return (
            <div key={experience.company} className="cv-row">
              <div className={`cv-cell ${left ? "cv-card-cell" : "cv-empty-cell"}`}>
                {left ? <ExperienceCard experience={experience} /> : null}
              </div>

              <div className="cv-axis" aria-hidden="true">
                <span />
              </div>

              <div className={`cv-cell ${left ? "cv-empty-cell" : "cv-card-cell"}`}>
                {left ? null : <ExperienceCard experience={experience} />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Protocol() {
  return (
    <section className="protocol-band">
      <div className="protocol-inner">
        <h2>My protocol</h2>
        <div className="protocol-grid">
          {protocol.map((item, index) => (
            <p key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero-shell" aria-label="Intro">
        <div className="hero-grid">
          <div className="hero-copy">
            <Pill className="headline-pill">I turn complexity into clarity.</Pill>
            <div className="identity-row">
              <Pill>Robert Kolek</Pill>
              <Pill>product designer</Pill>
            </div>
            <div className="status-row">
              <Pill className="blue-pill">currently @ESET</Pill>
              <Pill className="green-pill">previously @SkodaAuto</Pill>
            </div>
          </div>

          <a href="#projects" className="animation-pill" aria-label="Jump to projects">
            <span>Animation</span>
          </a>
        </div>
      </section>

      <ProjectsTimeline />
      <ContactBand />
      <CVTimeline />
      <Protocol />
    </main>
  );
}
