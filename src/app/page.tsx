import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type TimelineSide = "left" | "right";

type HomeProject = {
  title: string;
  shortTitle: string;
  duration: string;
  year: string;
  role: string;
  outcome: string;
  summary: string;
  tags: string[];
  side: TimelineSide;
  href?: string;
  image?: string;
  accent: string;
};

type Experience = {
  company: string;
  title: string;
  period: string;
  focus: string;
  bullets: string[];
  side: TimelineSide;
};

const projects: HomeProject[] = [
  {
    title: "Refresh of Data School Website",
    shortTitle: "Data school refresh",
    duration: "2 months",
    year: "2026",
    role: "UX/UI, positioning, AI-assisted build",
    outcome: "Warmer trust layer for students and corporate buyers",
    summary:
      "A redesign that moves an underground founder-led school into a more credible growth stage without losing its human voice.",
    tags: ["AI driven", "education", "web"],
    side: "right",
    href: "/projects/codebridge-college",
    image: "/final_portfolko/images/projects/codebridge-college.png",
    accent: "#246bff",
  },
  {
    title: "Cloud workload protection module in enterprise product",
    shortTitle: "Cloud protection",
    duration: "12 months",
    year: "2025",
    role: "Enterprise UX, setup flows, systems thinking",
    outcome: "Clearer adoption path for Azure, AWS, and GCP protection",
    summary:
      "A complex security workflow translated into guided setup, explicit checkpoints, and reusable states for technical users.",
    tags: ["@ESET", "B2B", "security"],
    side: "left",
    href: "/projects/cloud-security",
    accent: "#2e766e",
  },
  {
    title: "Skoda EcoShift app",
    shortTitle: "EcoShift app",
    duration: "4 months",
    year: "2024",
    role: "Mobile UX/UI, prototyping, mobility concept",
    outcome: "Personal savings and CO2 impact made visible per ride",
    summary:
      "A companion app concept that reframes eco-driving from abstract sustainability into personal financial progress.",
    tags: ["internship", "app", "mobility"],
    side: "right",
    href: "/projects/skoda-app",
    image: "/final_portfolko/images/projects/skoda-app.png",
    accent: "#f39bd8",
  },
  {
    title: "Codebridge College",
    shortTitle: "Codebridge brand",
    duration: "2 months",
    year: "2024",
    role: "Brand system, web UI, launch support",
    outcome: "A sharper identity system for a young data education brand",
    summary:
      "A brand and web layer for a small school that needed to feel practical, personal, and ready to scale.",
    tags: ["start-up", "branding", "web"],
    side: "left",
    href: "/projects/codebridge-college",
    image: "/final_portfolko/images/projects/codebridge-college-alt.png",
    accent: "#246bff",
  },
  {
    title: "Healthapp",
    shortTitle: "Healthapp",
    duration: "48 hours",
    year: "2022",
    role: "Hackathon UX/UI",
    outcome: "Fast concept validation under time pressure",
    summary:
      "A compressed sprint focused on turning a health-service idea into a coherent mobile journey quickly.",
    tags: ["hackathon", "health"],
    side: "right",
    accent: "#f39bd8",
  },
  {
    title: "Bratislava app",
    shortTitle: "Bratislava app",
    duration: "48 hours",
    year: "2022",
    role: "Hackathon concept and interface",
    outcome: "City-service concept shaped into a scannable app flow",
    summary:
      "A civic product exercise around helping people orient through urban services with less friction.",
    tags: ["hackathon", "city"],
    side: "left",
    accent: "#2e766e",
  },
];

const experiences: Experience[] = [
  {
    company: "ESET cybersecurity",
    title: "Product designer",
    period: "Full time since 07/24",
    focus: "B2B security products for small and medium businesses",
    side: "left",
    bullets: [
      "Own core flows for dashboards, tables, and enterprise product surfaces",
      "Shape complex setup journeys with product managers and engineering teams",
      "Validate interaction decisions through usability testing and analytics",
    ],
  },
  {
    company: "Skoda Auto",
    title: "UX/UI designer",
    period: "16 months internship",
    focus: "Digital instrument cluster, infotainment, and electromobility concepts",
    side: "right",
    bullets: [
      "Designed interaction proposals for a new generation of vehicles",
      "Collaborated on an electromobility app concept and show-car lookfeel",
      "Connected diploma thesis work with production-facing design exploration",
    ],
  },
];

const protocol = [
  {
    title: "Map the system",
    copy: "I start by naming actors, states, constraints, and failure paths so the interface is solving the real knot.",
  },
  {
    title: "Prototype the risk",
    copy: "The first prototype is for the part that can break trust: setup, decision points, handoff, or re-entry.",
  },
  {
    title: "Make it shippable",
    copy: "I turn the chosen direction into readable flows, states, specs, and feedback loops for the team.",
  },
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

function HeroSignal() {
  return (
    <a href="#projects" className="signal-card" aria-label="Jump to projects">
      <div className="signal-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div>
        <p>Selected work</p>
        <strong>6 projects</strong>
      </div>
    </a>
  );
}

function ProjectVisual({ project }: { project: HomeProject }) {
  if (project.image) {
    return (
      <div className="project-visual image-visual" style={{ "--accent": project.accent } as CSSProperties}>
        <img src={project.image} alt={`${project.shortTitle} preview`} />
      </div>
    );
  }

  return (
    <div className="project-visual abstract-visual" style={{ "--accent": project.accent } as CSSProperties}>
      <span className="abstract-line" />
      <span className="abstract-line short" />
      <span className="abstract-chip">flow</span>
      <span className="abstract-chip ghost">state</span>
    </div>
  );
}

function ProjectCard({ project }: { project: HomeProject }) {
  const content = (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-body">
        <div className="project-meta">
          <span>{project.year}</span>
          <span>{project.duration}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <dl className="project-facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
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
      <div className="section-heading">
        <p>Projects</p>
        <h2>Not a gallery. A trail of solved complexity.</h2>
      </div>

      <div className="timeline">
        {projects.map((project, index) => {
          const left = project.side === "left";
          return (
            <div key={`${project.title}-${project.year}`} className="timeline-row">
              <div className={`timeline-cell ${left ? "timeline-card-cell" : "timeline-year-cell"}`}>
                {left ? <ProjectCard project={project} /> : <span className="year-label">{project.year}</span>}
              </div>

              <div className="timeline-axis" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className={`timeline-cell ${left ? "timeline-year-cell" : "timeline-card-cell"}`}>
                {left ? <span className="year-label">{project.year}</span> : <ProjectCard project={project} />}
              </div>
            </div>
          );
        })}
      </div>

      <p className="behance-line">
        more visual work on{" "}
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
        <div>
          <p className="eyebrow">Open to focused product work</p>
          <h2>Bring me the messy flow, the unclear dashboard, or the product surface nobody wants to touch.</h2>
        </div>
        <div className="contact-actions">
          <a className="email-pill" href="mailto:robert.kolek98@gmail.com">
            robert.kolek98@gmail.com
          </a>
          <div className="social-row">
            <a href="https://www.behance.net/robertkolek" target="_blank" rel="noreferrer">
              Behance
            </a>
            <a href="https://github.com/robertkolek-cyber" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-card">
      <p>{experience.period}</p>
      <h3>{experience.company}</h3>
      <strong>{experience.title}</strong>
      <span>{experience.focus}</span>
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
      <div className="section-heading centered">
        <p>My CV</p>
        <h2>Corporations with real constraints.</h2>
      </div>

      <div className="cv-timeline">
        {experiences.map((experience, index) => {
          const left = experience.side === "left";
          return (
            <div key={experience.company} className="cv-row">
              <div className={`cv-cell ${left ? "cv-card-cell" : "cv-empty-cell"}`}>
                {left ? <ExperienceCard experience={experience} /> : null}
              </div>

              <div className="cv-axis" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
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
        <div className="section-heading centered">
          <p>My protocol</p>
          <h2>How I keep complex work moving.</h2>
        </div>
        <div className="protocol-grid">
          {protocol.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
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
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/" className="brand-mark">
            Robert Kolek
          </Link>
          <div>
            <a href="#projects">Work</a>
            <a href="#cv">CV</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <Pill className="headline-pill">
              <span>I turn complexity into clarity.</span>
            </Pill>
            <div className="hero-statement">
              <p className="eyebrow">Product designer for B2B systems, mobility, and data products</p>
              <h1>Complex products, made calm enough to use.</h1>
              <p>
                I design the parts of digital products where logic, trust, and behavior meet:
                setup flows, dashboards, decision states, and product systems.
              </p>
            </div>
          </div>

          <div className="hero-side">
            <HeroSignal />
            <Pill className="blue-pill">currently @ESET</Pill>
            <Pill className="green-pill">previously @SkodaAuto</Pill>
          </div>
        </div>

        <div className="proof-strip" aria-label="Experience highlights">
          <div>
            <span>01</span>
            <strong>Enterprise UX</strong>
            <p>Security flows, tables, dashboards, and cloud setup journeys.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Mobility systems</strong>
            <p>In-car interfaces, app concepts, and interaction prototypes.</p>
          </div>
          <div>
            <span>03</span>
            <strong>AI-assisted build</strong>
            <p>Fast product storytelling from positioning to shipped interface.</p>
          </div>
        </div>
      </section>

      <ProjectsTimeline />
      <ContactBand />
      <CVTimeline />
      <Protocol />
    </main>
  );
}
