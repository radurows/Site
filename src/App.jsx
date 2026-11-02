
import { useState, useEffect } from 'react'
import './App.css'

const sections = [
  {
    id: 'management',
    number: '01',
    title: 'Project & Program Management',
    subtitle: 'Planning · Coordination · Execution',
    description:
      'Turning ideas into structured programs, coordinating teams and delivering customer-focused initiatives.',
    skills: [
      'Program Management',
      'Project Coordination',
      'Stakeholder Management',
      'Planning & Execution',
      'Performance Reporting',
    ],
  },
  {
    id: 'customer',
    number: '02',
    title: 'Customer Success & Experience',
    subtitle: 'Onboarding · Adoption · Engagement',
    description:
      'Helping customers understand, adopt and get more value from technology through meaningful experiences.',
    skills: [
      'Customer Onboarding',
      'Customer Experience',
      'NPS & CSAT Analysis',
      'Customer Engagement',
      'Feedback Analysis',
    ],
  },
  {
    id: 'cloud',
    number: '03',
    title: 'Cloud & Technical Expertise',
    subtitle: 'Oracle Cloud · Infrastructure · Networking',
    description:
      'Combining technical knowledge with customer-facing experience to make complex cloud technologies easier to understand.',
    skills: [
      'Oracle Cloud Infrastructure',
      'Cloud Networking',
      'Identity & Access Management',
      'Python',
      'Linux',
      'SQL',
    ],
  },
  {
    id: 'digital',
    number: '04',
    title: 'Digital Engagement & Content',
    subtitle: 'Content · Communication · Digital Experience',
    description:
      'Creating educational content and digital experiences that make information accessible and encourage engagement.',
    skills: [
      'Content Management',
      'Educational Videos',
      'Digital Engagement',
      'Website Management',
      'Campaign Support',
    ],
  },
]

function App() {
  const [activeSection, setActiveSection] = useState(null)
  const [activeVideo, setActiveVideo] = useState('idle')

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setActiveSection(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
  const videos = [
    `${import.meta.env.BASE_URL}videos/management.webm`,
    `${import.meta.env.BASE_URL}videos/customer.webm`,
    `${import.meta.env.BASE_URL}videos/cloud.webm`,
    `${import.meta.env.BASE_URL}videos/digital.webm`,
  ]

  videos.forEach((src) => {
    const video = document.createElement('video')
    video.src = src
    video.preload = 'auto'
    video.load()
  })
  } , []) 



  const active = sections.find(
    (section) => section.id === activeSection
  )

  return (
    <main className="portfolio">

      {/* HEADER */}
      <header className="header">
        <a href="#" className="brand">RADU.</a>

        <nav>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="header-contact">
          Let's talk ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-heading">
          <span className="eyebrow">
            PERSONAL PORTFOLIO · 2026
          </span>

          <h1>
            Different skills.
            <br />
            <em>One versatile mind.</em>
          </h1>

          <p>
            Technology, people and processes — bringing ideas
            together to create meaningful outcomes.
          </p>
        </div>

        {/* INTERACTIVE STAGE */}
        <div className="interactive-stage" id="expertise">

          {/* LEFT NOTES */}
          <div className="notes-column notes-left">

            <button
              className="sticky-note note-management"
              onMouseEnter={() => setActiveVideo('management')}
              onMouseLeave={() => setActiveVideo('idle')}
              onClick={() => setActiveSection('management')}
            >
              <span>01 / EXPLORE</span>
              <strong>
                Project &<br />
                Program Management
              </strong>
              <small>Planning · Delivery ↗</small>
            </button>

            <button
              className="sticky-note note-digital"
              onClick={() => setActiveSection('digital')}
              onMouseEnter={() => setActiveVideo('digital')}
              onMouseLeave={() => setActiveVideo('idle')}
            >
              <span>04 / EXPLORE</span>
              <strong>
                Digital Engagement<br />
                & Content
              </strong>
              <small>Creativity · Communication ↗</small>
            </button>

          </div>

          {/* CENTRAL VIDEO */}
          <div className="person-placeholder">

            <video
              className="hero-video"
              src={`/videos/${activeVideo}.webm`}
              autoPlay
              loop
              muted
              playsInline
            />

          </div>

          {/* RIGHT NOTES */}
          <div className="notes-column notes-right">

            <button
              className="sticky-note note-customer"
              onMouseEnter={() => setActiveVideo('customer')}
              onMouseLeave={() => setActiveVideo('idle')}
              onClick={() => setActiveSection('customer')}
            >
              <span>02 / EXPLORE</span>
              <strong>
                Customer Success<br />
                & Experience
              </strong>
              <small>People · Engagement ↗</small>
            </button>

            <button
              className="sticky-note note-cloud"
              onMouseEnter={() => setActiveVideo('cloud')}
              onMouseLeave={() => setActiveVideo('idle')}
              onClick={() => setActiveSection('cloud')}
            >
              <span>03 / EXPLORE</span>
              <strong>
                Cloud &<br />
                Technical Expertise
              </strong>
              <small>Technology · Solutions ↗</small>
            </button>

          </div>

        </div>

        <div className="hero-bottom">
          <span>SCROLL TO DISCOVER</span>
          <span>BASED IN ROMANIA · OPEN TO OPPORTUNITIES</span>
        </div>

      </section>

      {/* INTERACTIVE DETAIL PANEL */}
      {active && (
        <div
          className="detail-overlay"
          onClick={() => setActiveSection(null)}
        >
          <section
            className="detail-panel"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="close-panel"
              onClick={() => setActiveSection(null)}
              aria-label="Close section"
            >
              ×
            </button>

            <span className="eyebrow">
              {active.number} / PROFESSIONAL EXPERTISE
            </span>

            <h2>{active.title}</h2>

            <p className="detail-subtitle">
              {active.subtitle}
            </p>

            <p className="detail-description">
              {active.description}
            </p>

            <h3>Skills & Expertise</h3>

            <div className="skill-list">
              {active.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <p className="detail-footnote">
              Explore my professional background and practical experience.
            </p>

          </section>
        </div>
      )}

      {/* PORTFOLIO */}
      <section
        className="content-section projects-section"
        id="projects"
      >

        <span className="eyebrow">
          SELECTED EXPERIENCE
        </span>

        <h2>
          Beyond the titles.
          <br />
          <em>Into the work.</em>
        </h2>

        <p>
          A selection of programs, projects and initiatives
          I've contributed to throughout my professional journey.
        </p>

        <div className="project-grid">

          <article className="project-card">
            <span>01 / DIGITAL PLATFORM</span>

            <h3>OCI-in-5</h3>

            <p>
              An educational video platform built to simplify
              Oracle Cloud concepts and make technical knowledge
              accessible to customers and internal audiences.
            </p>

            <small>
              Website · 60 Educational Videos · Content Management
            </small>

            <a
              href="https://www.oracle.com/europe/cloud/architecture-center/oci-in-5/#security"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Visit website ↗
            </a>
          </article>

          <article className="project-card">
            <span>02 / CUSTOMER EXPERIENCE</span>

            <h3>Customer Insights</h3>

            <p>
              Customer survey management and analysis,
              transforming feedback into actionable insights
              and recommendations.
            </p>

            <small>
              5,000 Surveys · 3 Dashboards · NPS & CSAT
            </small>
          </article>

          <article className="project-card">
            <span>03 / AUTOMATION</span>

            <h3>Automation Lab</h3>

            <ul className="automation-skills">
                <li>Playwright-based data scraping</li>
                <li>Cross-platform data collection</li>
                <li>Python automation</li>
                <li>Data extraction and workflow optimization</li>
                <li>Slack integrations</li>
            </ul>

            <small>
              Python · Playwright · Slack · n8n
            </small>

                    {/* <span className="learning-label">
              n8n — Currently Learning
            </span>
                    */}
          </article>

          <article className="project-card">
            <span>04 / PROGRAM MANAGEMENT</span>

            <h3>Customer-Focused Programs</h3>

            <p>
              Designing and implementing scalable customer-focused
              programs, coordinating stakeholders and managing
              initiatives from ideation through rollout.
            </p>

            <small>
              3 Programs · Cross-functional Collaboration
            </small>
          </article>

          <article className="project-card">
                  <span>05 / AUTOMATION & INTEGRATION</span>

                  <h3>Smart Email Insights</h3>

                  <p>
                    An automated workflow integrating AI-powered 
                    sentiment analysis to process incoming emails, 
                    classify customer sentiment and transform 
                    unstructured messages into actionable insights
                  </p>

                  <small>
                    n8n · AI · Sentiment Analysis · Email Automation
                  </small>

                  {/*<span className="learning-label">
                    Currently in Development
                  </span>
                  */}
          </article>

        </div>

      </section>

      {/* ABOUT */}
      <section className="content-section" id="about">

        <span className="eyebrow">
          A LITTLE ABOUT ME
        </span>

        <h2>
          Technology meets
          <br />
          <em>people and possibilities.</em>
        </h2>

        <p>
          I'm a technology professional who enjoys connecting 
          the dots between people, technology and business.
        </p>

        <p>
          My journey at Oracle has taken me across Cloud Infrastructure, 
          Customer Experience, Project Management and Technical Program Management — 
          giving me a perspective that goes beyond technical delivery.
        </p>

        <p>
          I enjoy turning complex ideas into practical solutions, 
          building meaningful customer experiences and bringing people 
          together to make things happen.
        </p>


        <p>
          <strong>
            Curious by nature. Structured by mindset.
            Versatile by experience.
          </strong>
        </p>

      <div className="about-stats">

                    <div className="about-stat">
                      <strong>300+</strong>
                      <span>Customers supported</span>
                    </div>

                    <div className="about-stat">
                      <strong>60</strong>
                      <span>Educational videos</span>
                    </div>

                    <div className="about-stat">
                      <strong>3</strong>
                      <span>Customer-focused programs</span>
                    </div>

      </div>    




      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <span className="eyebrow">
          HAVE A PROJECT OR OPPORTUNITY?
        </span>

        <h2>
          Let's create something
          <em> meaningful.</em>
        </h2>

        <p>I'd love to hear from you.</p>

        <a
          href="mailto:chiru.radu.d@gmail.com"
          className="contact-button"
        >
          Get in touch ↗
        </a>

        <div className="contact-links">

          <a
            href="https://www.linkedin.com/in/radu-rc/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="/CV-RC2.pdf" download>
            Download CV ↓
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>RADU. © 2026</span>
        <span>BUILT WITH PURPOSE.</span>
      </footer>

    </main>
  )
}

export default App
