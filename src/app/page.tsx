const profileImage =
  "https://raw.githubusercontent.com/Rishikeshsanin/portfolio-main/main/src/app/assets/imgs/rishi.jpeg";

const resumeUrl =
  "https://raw.githubusercontent.com/Rishikeshsanin/portfolio-main/main/public/rishi-resume.pdf";

const projects = [
  {
    number: "01",
    name: "Skylark Command",
    kicker: "Agentic AI · Enterprise",
    description:
      "Decision-intelligence over live CRM and operational data, combining deterministic analytics with constrained AI planning, temporal snapshots and evidence-backed workflows.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL", "Gemini", "Supabase"],
    repo: "https://github.com/Rishikeshsanin/skylark-command",
    live: "https://skylark-command.vercel.app",
    image:
      "https://raw.githubusercontent.com/Rishikeshsanin/skylark-command/main/Screenshots/Screenshot%20(57).png",
    tone: "yellow",
  },
  {
    number: "02",
    name: "Vibify",
    kicker: "Realtime · Music",
    description:
      "A synchronized listening room that keeps phones and laptops aligned to one authoritative YouTube playback timeline using Firebase server time and versioned playback state.",
    stack: ["Next.js", "TypeScript", "Firebase", "YouTube API", "React", "Vercel"],
    repo: "https://github.com/Rishikeshsanin/vibify",
    live: "https://vibify-mu.vercel.app",
    image:
      "https://image.thum.io/get/width/1200/crop/720/noanimate/https://vibify-mu.vercel.app",
    tone: "blue",
  },
  {
    number: "03",
    name: "Imposter X",
    kicker: "Multiplayer · LiveKit",
    description:
      "Realtime social-deduction with server-authoritative game state, voting, timers, scoring, chat and authenticated low-latency voice/video rooms.",
    stack: ["JavaScript", "Supabase", "PostgreSQL", "LiveKit", "WebRTC", "Vercel"],
    repo: "https://github.com/Rishikeshsanin/Imposter-X",
    live: "https://imposter-x.vercel.app",
    image:
      "https://image.thum.io/get/width/1200/crop/720/noanimate/https://imposter-x.vercel.app",
    tone: "pink",
  },
  {
    number: "04",
    name: "NoCodeML",
    kicker: "ML Platform · Backend",
    description:
      "A guest-first AutoML workspace for dataset checks, model training, comparison, prediction and export, with isolated temporary workspaces and reusable inference preprocessing.",
    stack: ["React", "TypeScript", "FastAPI", "scikit-learn", "XGBoost", "Docker"],
    repo: "https://github.com/Rishikeshsanin/NoCodeML",
    image:
      "https://raw.githubusercontent.com/Rishikeshsanin/NoCodeML/main/screenshots/landing-page.png",
    tone: "green",
  },
  {
    number: "05",
    name: "Auralis",
    kicker: "Music · Multi-provider",
    description:
      "A multi-provider music product separating discovery, metadata and playback while coordinating full-song playback, radio, playlists, provider health and adaptive artwork-driven theming.",
    stack: ["JavaScript", "Vercel Functions", "YouTube API", "Audius", "Jamendo", "hls.js"],
    repo: "https://github.com/Rishikeshsanin/auralis-music",
    live: "https://auralis-music-lime.vercel.app",
    image:
      "https://image.thum.io/get/width/1200/crop/720/noanimate/https://auralis-music-lime.vercel.app",
    tone: "orange",
  },
  {
    number: "06",
    name: "EchoType",
    kicker: "Offline AI · Desktop",
    description:
      "A privacy-first desktop dictation product centered on local speech recognition, Indian-language support, push-to-talk, transcript cleanup and system-wide text injection.",
    stack: ["Python", "PySide6", "Qt", "Local ASR", "CUDA", "Desktop Services"],
    repo: "https://github.com/Rishikeshsanin/EchoType",
    tone: "purple",
  },
  {
    number: "07",
    name: "Socio Drift",
    kicker: "Generative AI · Startup",
    description:
      "Prompt-conditioned generative music for original jingles, themes and sonic identities. Presented through Mew Thetis as a Karnataka Elevate 2025 finalist.",
    stack: ["Python", "TensorFlow", "LSTM", "Transformers", "Gemini API"],
    repo: "https://github.com/Rishikeshsanin/SocioDrift",
    tone: "cream",
  },
];

const experience = [
  {
    period: "MAY 2026 — JUL 2026",
    role: "Assistant Teaching Faculty Intern",
    company: "RICON Technologies",
    description:
      "Supported C and Python theory/lab sessions, prepared programming exercises and mentored students through debugging and core programming concepts.",
    marker: "01",
  },
  {
    period: "2025",
    role: "Co-Founder",
    company: "Mew Thetis",
    description:
      "Presented Socio Drift, an AI-powered music-generation platform, as a Karnataka Elevate 2025 finalist.",
    marker: "02",
  },
  {
    period: "JUN 2024 — JUL 2024",
    role: "Cybersecurity Intern",
    company: "Dhee Data Center",
    description:
      "Built a Python malware-detection workflow with preprocessing and feature engineering, then evaluated Random Forest, SVM and XGBoost models.",
    marker: "03",
  },
];

const stackGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Product & Web",
    items: ["React", "Next.js", "REST APIs", "GraphQL", "Tailwind CSS"],
  },
  {
    title: "Data & Backend",
    items: ["PostgreSQL", "Supabase", "Firebase", "FastAPI", "Docker"],
  },
  {
    title: "AI & Systems",
    items: ["Applied AI", "LLMs", "scikit-learn", "Realtime Systems", "WebRTC"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>SOFTWARE ENGINEERING</span><b>✦</b><span>FULL STACK</span><b>✦</b><span>APPLIED AI</span><b>✦</b><span>REALTIME SYSTEMS</span><b>✦</b><span>BACKEND ENGINEERING</span><b>✦</b><span>SOFTWARE ENGINEERING</span><b>✦</b><span>FULL STACK</span><b>✦</b><span>APPLIED AI</span><b>✦</b>
        </div>
      </div>

      <header className="site-header shell">
        <a className="brand brutal-shadow-sm" href="#top" aria-label="Rishikesh home">
          RM<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small button-ink" href={resumeUrl} target="_blank" rel="noreferrer">
          Resume <Arrow />
        </a>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow brutal-shadow-sm">AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES</div>
          <h1>
            I BUILD
            <span className="hero-block hero-yellow">PRODUCTS</span>
            THAT ACTUALLY
            <span className="hero-block hero-blue">WORK.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m <strong>Rishikesh Munnaluri</strong>, a software engineer focused on full-stack products, backend systems, realtime experiences and applied AI.
          </p>
          <div className="hero-actions">
            <a className="button button-pink" href="#work">See my work ↓</a>
            <a className="button button-plain" href="https://github.com/Rishikeshsanin" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile card">
          <div className="burst burst-one">★</div>
          <div className="burst burst-two">✦</div>
          <div className="profile-card brutal-shadow-lg">
            <div className="profile-topline">
              <span>ENGINEER / BUILDER</span>
              <span>BLR, INDIA</span>
            </div>
            <div className="profile-image-wrap">
              <img src={profileImage} alt="Rishikesh Munnaluri" className="profile-image" />
              <span className="profile-sticker">HELLO!</span>
            </div>
            <div className="profile-name">RISHIKESH<br />MUNNALURI</div>
            <div className="profile-tags">
              <span>FULL STACK</span><span>AI / ML</span><span>REALTIME</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats shell" aria-label="Portfolio highlights">
        <article className="stat stat-yellow brutal-shadow-md"><strong>07</strong><span>Flagship projects</span></article>
        <article className="stat stat-blue brutal-shadow-md"><strong>04</strong><span>Live tier-A builds</span></article>
        <article className="stat stat-pink brutal-shadow-md"><strong>03</strong><span>Experience tracks</span></article>
        <article className="stat stat-green brutal-shadow-md"><strong>2027</strong><span>Graduation</span></article>
      </section>

      <section className="manifesto shell">
        <div className="section-number">00 / ABOUT</div>
        <div className="manifesto-grid">
          <h2>NOT JUST<br />FRONTEND.</h2>
          <div>
            <p className="manifesto-lead">
              I like taking an ambitious idea all the way from interface and API design to data, realtime state, AI workflows, testing and deployment.
            </p>
            <p>
              Final-year B.Tech (Hons) CSE — AI & ML student at RV University. I care about product quality, reliability, clean UX and being able to defend the technical decisions behind what I ship.
            </p>
            <div className="mini-grid">
              <div><b>EDUCATION</b><span>RV University<br />2023 — 2027</span></div>
              <div><b>FOCUS</b><span>Software Engineering<br />Backend + Applied AI</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="shell">
          <div className="section-heading-row">
            <div><div className="section-number">01 / SELECTED WORK</div><h2>THINGS I&apos;VE<br />SHIPPED.</h2></div>
            <p>Seven projects that best represent how I think about engineering, systems and product execution.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.name} className={`project-card project-${project.tone} brutal-shadow-lg ${index < 2 ? "project-featured" : ""}`}>
                <div className="project-meta"><span>{project.number}</span><span>{project.kicker}</span></div>
                {project.image ? (
                  <div className="project-image-frame">
                    <img src={project.image} alt={`${project.name} interface preview`} loading="lazy" />
                  </div>
                ) : (
                  <div className="project-art" aria-hidden="true"><span>{project.number}</span><b>{project.name.slice(0, 2).toUpperCase()}</b></div>
                )}
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-actions">
                  {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live demo <Arrow /></a> : null}
                  <a href={project.repo} target="_blank" rel="noreferrer">Source <Arrow /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section shell">
        <div className="section-heading-row compact-heading">
          <div><div className="section-number">02 / EXPERIENCE</div><h2>WHERE I&apos;VE<br />LEARNED.</h2></div>
          <div className="stamp brutal-shadow-sm">BUILD<br />LEARN<br />REPEAT</div>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={item.role} className="experience-row">
              <div className="experience-marker">{item.marker}</div>
              <div className="experience-period">{item.period}</div>
              <div className="experience-title"><h3>{item.role}</h3><p>{item.company}</p></div>
              <p className="experience-copy">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="stack-section">
        <div className="shell">
          <div className="section-number">03 / TOOLBOX</div>
          <div className="stack-title"><h2>TECH I USE<br />TO SHIP.</h2><span>→</span></div>
          <div className="stack-grid">
            {stackGroups.map((group, index) => (
              <article key={group.title} className={`stack-card stack-card-${index + 1} brutal-shadow-md`}>
                <div className="stack-index">0{index + 1}</div>
                <h3>{group.title}</h3>
                <div className="stack-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="achievement shell">
        <div className="achievement-card brutal-shadow-lg">
          <div className="achievement-kicker">SELECTED ACHIEVEMENT / 2025</div>
          <div className="achievement-content">
            <div className="trophy" aria-hidden="true">★</div>
            <div><h2>KARNATAKA<br />ELEVATE FINALIST</h2><p>Presented Socio Drift through Mew Thetis as an AI-powered generative music startup project.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-grid">
          <div>
            <div className="section-number section-number-light">04 / CONTACT</div>
            <h2>LET&apos;S BUILD<br /><span>SOMETHING.</span></h2>
          </div>
          <div className="contact-copy">
            <p>I&apos;m looking for software engineering opportunities where I can contribute across product, backend and applied AI.</p>
            <div className="contact-actions">
              <a className="button button-yellow" href="mailto:rishikeshjonin@gmail.com">Email me ↗</a>
              <a className="button button-white" href="https://www.linkedin.com/in/rishikesh-munnaluri-143b34293/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div><strong>RISHIKESH MUNNALURI</strong><span>Software Engineer · Bengaluru</span></div>
          <div className="footer-links"><a href="https://github.com/Rishikeshsanin" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/rishikesh-munnaluri-143b34293/" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
