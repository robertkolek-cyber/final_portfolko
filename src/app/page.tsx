import Link from "next/link";

type Project = {
  title: string;
  year: string;
  duration: string;
  role: string;
  summary: string;
  impact: string;
  tags: string[];
  href?: string;
  image?: string;
};

type Experience = {
  company: string;
  period: string;
  role: string;
  summary: string;
};

const projects: Project[] = [
  {
    title: "Data School Website Refresh",
    year: "2026",
    duration: "2 months",
    role: "UX/UI, positioning, AI-assisted build",
    summary:
      "Moved a founder-led data school from charming but rough into a calmer, more credible experience for students and corporate buyers.",
    impact: "Sharper trust signals, clearer offer structure, warmer conversion path.",
    tags: ["Education", "Website", "AI build"],
    href: "/projects/codebridge-college",
    image: "/final_portfolko/images/projects/codebridge-college.png",
  },
  {
    title: "Cloud Workload Protection",
    year: "2025",
    duration: "12 months",
    role: "Enterprise UX, setup flows",
    summary:
      "Translated multi-cloud protection across Azure, AWS, and GCP into an adoption path with explicit checkpoints and re-entry states.",
    impact: "Less ambiguity in a high-trust, technical workflow.",
    tags: ["ESET", "B2B", "Security"],
    href: "/projects/cloud-security",
  },
  {
    title: "Skoda EcoShift App",
    year: "2024",
    duration: "4 months",
    role: "Mobile UX/UI, prototyping",
    summary:
      "Reframed eco-driving as personal progress by connecting ride behavior to savings, CO2 impact, and driver goals.",
    impact: "Sustainability made tangible through everyday numbers.",
    tags: ["Mobility", "App", "Prototype"],
    href: "/projects/skoda-app",
    image: "/final_portfolko/images/projects/skoda-app.png",
  },
  {
    title: "Codebridge College Brand",
    year: "2024",
    duration: "2 months",
    role: "Identity system, web UI",
    summary:
      "Built a practical identity and web layer for a young education brand that needed to feel personal, useful, and ready to scale.",
    impact: "A more coherent brand foundation for a growing school.",
    tags: ["Brand", "Startup", "Web"],
    href: "/projects/codebridge-college",
    image: "/final_portfolko/images/projects/codebridge-college-alt.png",
  },
  {
    title: "Healthapp",
    year: "2022",
    duration: "48 hours",
    role: "Hackathon UX/UI",
    summary:
      "Compressed a health-service idea into a coherent mobile journey under tight sprint conditions.",
    impact: "Fast validation of a service concept under pressure.",
    tags: ["Health", "Hackathon"],
  },
  {
    title: "Bratislava App",
    year: "2022",
    duration: "48 hours",
    role: "Hackathon concept",
    summary:
      "Shaped a civic-service concept around faster orientation and lower friction in city workflows.",
    impact: "A clearer access layer for everyday city services.",
    tags: ["City", "Hackathon"],
  },
];

const experience: Experience[] = [
  {
    company: "ESET cybersecurity",
    period: "since 07/24",
    role: "Product designer",
    summary:
      "B2B security product surfaces: dashboards, tables, setup flows, usability validation, and cross-team delivery.",
  },
  {
    company: "Skoda Auto",
    period: "16 months",
    role: "UX/UI designer",
    summary:
      "Digital instrument cluster, infotainment, electromobility concepts, and show-car interface exploration.",
  },
];

const principles = [
  "Map the system before the screen.",
  "Prototype the interaction that carries the most risk.",
  "Turn the final direction into readable product language.",
];

function ProjectPreview({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return (
      <div className="project-preview">
        <img src={project.image} alt={`${project.title} preview`} />
      </div>
    );
  }

  return (
    <div className="project-preview project-preview-empty" aria-hidden="true">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <div />
      <div />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const card = (
    <article className="project-card">
      <ProjectPreview project={project} index={index} />
      <div className="project-content">
        <div className="project-kicker">
          <span>{project.year}</span>
          <span>{project.duration}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-impact">
          <span>Impact</span>
          <p>{project.impact}</p>
        </div>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-meta">
        <span>{project.role}</span>
        <span>{project.href ? "View case" : "Sprint note"}</span>
      </div>
    </article>
  );

  if (!project.href) return card;

  return (
    <Link href={project.href} className="project-link" aria-label={`Open ${project.title}`}>
      {card}
    </Link>
  );
}

function AsciiSignal() {
  return (
    <div className="ascii-card" aria-hidden="true">
      <div className="ascii-topline">
        <span>system sketch</span>
        <span>live</span>
      </div>
      <div className="ascii-stage">
        <pre className="ascii-frame frame-a">{`complexity

  ?---x---?
  |   |   |
  x---?---x

signals: scattered`}</pre>
        <pre className="ascii-frame frame-b">{`mapping states

  input -> rule
          -> edge
          -> risk

signals: grouped`}</pre>
        <pre className="ascii-frame frame-c">{`clarity

  input  -> decision
  state  -> next step
  risk   -> checkpoint

signals: usable`}</pre>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-shell hero">
        <nav className="topbar" aria-label="Primary navigation">
          <Link href="/" className="brand">
            RK
          </Link>
          <div>
            <a href="#work">Work</a>
            <a href="#profile">Profile</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid" aria-label="Intro">
          <div className="hero-copy">
            <p className="eyebrow">Robert Kolek / Product designer</p>
            <h1>I turn complex product systems into clear decisions.</h1>
          </div>

          <aside className="hero-panel">
            <p>
              Designing enterprise UX, mobility concepts, and data-product interfaces
              where every state has to earn user trust.
            </p>
            <dl>
              <div>
                <dt>Current</dt>
                <dd>@ESET</dd>
              </div>
              <div>
                <dt>Previous</dt>
                <dd>@SkodaAuto</dd>
              </div>
            </dl>
            <AsciiSignal />
          </aside>
        </section>
      </header>

      <section id="work" className="site-shell work-section">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Calm interfaces for products with a lot going on underneath.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${project.year}`} project={project} index={index} />
          ))}
        </div>

        <p className="more-link">
          More visual work on{" "}
          <a href="https://www.behance.net/robertkolek" target="_blank" rel="noreferrer">
            Behance
          </a>
        </p>
      </section>

      <section id="contact" className="contact-band">
        <div className="site-shell contact-inner">
          <p className="eyebrow">Available for focused product work</p>
          <h2>Bring the messy flow. I will make it usable.</h2>
          <a href="mailto:robert.kolek98@gmail.com">robert.kolek98@gmail.com</a>
        </div>
      </section>

      <section id="profile" className="site-shell profile-section">
        <div className="section-heading">
          <p className="eyebrow">Profile</p>
          <h2>Experience shaped inside real product constraints.</h2>
        </div>

        <div className="profile-grid">
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.company}>
                <span>{item.period}</span>
                <h3>{item.company}</h3>
                <strong>{item.role}</strong>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>

          <div className="principles">
            <p className="eyebrow">Protocol</p>
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
