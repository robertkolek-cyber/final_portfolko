import Link from "next/link";

type Project = {
  title: string;
  year: string;
  duration: string;
  role: string;
  summary: string;
  tags: string[];
  href?: string;
};

type Experience = {
  company: string;
  period: string;
  role: string;
  summary: string;
};

const projects: Project[] = [
  {
    title: "Refresh of Data School Website",
    year: "2026",
    duration: "2 months",
    role: "UX/UI, positioning, AI-assisted build",
    summary:
      "Repositioned a founder-led data school into a clearer, warmer, more credible website for students and corporate buyers.",
    tags: ["education", "web", "AI driven"],
    href: "/projects/codebridge-college",
  },
  {
    title: "Cloud workload protection module",
    year: "2025",
    duration: "12 months",
    role: "Enterprise UX, setup flows",
    summary:
      "Turned cloud security setup across Azure, AWS, and GCP into a guided adoption path with explicit checkpoints.",
    tags: ["@ESET", "B2B", "security"],
    href: "/projects/cloud-security",
  },
  {
    title: "Skoda EcoShift app",
    year: "2024",
    duration: "4 months",
    role: "Mobile UX/UI, prototyping",
    summary:
      "Made efficient driving feel personal by connecting ride behavior to savings, CO2 impact, and progress toward goals.",
    tags: ["mobility", "app", "internship"],
    href: "/projects/skoda-app",
  },
  {
    title: "Codebridge College",
    year: "2024",
    duration: "2 months",
    role: "Brand system, web UI",
    summary:
      "Built a practical identity and web layer for a young education brand that needed to feel personal and ready to scale.",
    tags: ["brand", "start-up", "web"],
    href: "/projects/codebridge-college",
  },
  {
    title: "Healthapp",
    year: "2022",
    duration: "48 hours",
    role: "Hackathon UX/UI",
    summary:
      "Compressed a health-service idea into a coherent mobile journey under tight sprint conditions.",
    tags: ["hackathon", "health"],
  },
  {
    title: "Bratislava app",
    year: "2022",
    duration: "48 hours",
    role: "Hackathon concept",
    summary:
      "Shaped a civic-service concept around faster orientation and lower friction in city workflows.",
    tags: ["hackathon", "city"],
  },
];

const experience: Experience[] = [
  {
    company: "ESET cybersecurity",
    period: "since 07/24",
    role: "Product designer",
    summary:
      "Designing B2B security product surfaces: dashboards, tables, setup flows, and validation loops with product and engineering teams.",
  },
  {
    company: "Skoda Auto",
    period: "16 months",
    role: "UX/UI designer",
    summary:
      "Worked across digital instrument cluster, infotainment, electromobility concepts, and show-car interface exploration.",
  },
];

const principles = [
  "Map the system before the screen.",
  "Prototype the risky interaction first.",
  "Make handoff readable for engineers.",
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const content = (
    <article className="project-row">
      <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
      <div className="project-main">
        <div className="project-title-line">
          <h3>{project.title}</h3>
          <span>{project.year}</span>
        </div>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-side">
        <span>{project.duration}</span>
        <p>{project.role}</p>
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

export default function Home() {
  return (
    <main>
      <header className="site-shell hero">
        <nav className="topbar" aria-label="Primary navigation">
          <Link href="/" className="brand">
            Robert Kolek
          </Link>
          <div>
            <a href="#work">Work</a>
            <a href="#cv">CV</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid" aria-label="Intro">
          <div className="hero-copy">
            <p className="label">Product designer</p>
            <h1>I turn complexity into clarity.</h1>
            <p>
              I design product flows, dashboards, and decision-heavy interfaces
              for enterprise, mobility, and data products.
            </p>
          </div>

          <aside className="hero-card" aria-label="Profile details">
            <div>
              <span>currently</span>
              <strong>@ESET</strong>
            </div>
            <div>
              <span>previously</span>
              <strong>@SkodaAuto</strong>
            </div>
            <a href="#work">Selected work</a>
          </aside>
        </section>
      </header>

      <section id="work" className="site-shell section-block">
        <div className="section-heading">
          <p className="label">Selected work</p>
          <h2>Projects shaped around clarity, trust, and usable structure.</h2>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectRow key={`${project.title}-${project.year}`} project={project} index={index} />
          ))}
        </div>

        <p className="behance-line">
          More visual work on{" "}
          <a href="https://www.behance.net/robertkolek" target="_blank" rel="noreferrer">
            Behance
          </a>
        </p>
      </section>

      <section id="contact" className="contact-band">
        <div className="site-shell contact-inner">
          <div>
            <p className="label">Available for focused product work</p>
            <h2>Bring the messy flow. I will make it usable.</h2>
          </div>
          <a href="mailto:robert.kolek98@gmail.com">robert.kolek98@gmail.com</a>
        </div>
      </section>

      <section id="cv" className="site-shell section-block">
        <div className="section-heading compact">
          <p className="label">CV</p>
          <h2>Experience inside real product constraints.</h2>
        </div>

        <div className="experience-grid">
          {experience.map((item) => (
            <article key={item.company}>
              <span>{item.period}</span>
              <h3>{item.company}</h3>
              <strong>{item.role}</strong>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="protocol-band">
        <div className="site-shell protocol-inner">
          <p className="label">Protocol</p>
          <div>
            {principles.map((item, index) => (
              <p key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
