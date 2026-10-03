import { ArrowLink } from "@/components/arrow-link";
import { CaseCard } from "@/components/case-card";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="eyebrow"><span className="signal" aria-hidden="true" /> Building in public · 12-week focus</div>
        <h1>Product engineering for work that <em>matters.</em></h1>
        <p className="hero-copy">I’m a full-stack engineer focused on thoughtful TypeScript and React work for public-interest software. This portfolio documents the investigation, collaboration, and testing behind each contribution.</p>
        <div className="hero-actions">
          <ArrowLink href="/work">Explore the work</ArrowLink>
          <ArrowLink href="/about">How I engineer</ArrowLink>
        </div>
        <div className="hero-note" aria-label="Current focus">
          <span className="mono">CURRENT FOCUS</span>
          <p>Contributing to humanitarian mapping tools with the Humanitarian OpenStreetMap Team.</p>
        </div>
      </section>

      <section className="work-section shell" aria-labelledby="selected-work">
        <div className="section-heading">
          <div><span className="kicker">01 / SELECTED WORK</span><h2 id="selected-work">Depth over volume.</h2></div>
          <p>Every case study separates plans from shipped work and backs outcomes with evidence.</p>
        </div>
        <div className="case-grid">
          {caseStudies.map((study, index) => <CaseCard key={study.slug} study={study} index={index} />)}
        </div>
      </section>

      <section className="principles shell" aria-labelledby="principles-title">
        <span className="kicker">02 / ENGINEERING PRINCIPLES</span>
        <h2 id="principles-title">Reliable software is a team sport.</h2>
        <div className="principle-grid">
          <article><span>01</span><h3>Understand first</h3><p>Reproduce the problem, learn the constraints, and align on scope before reaching for code.</p></article>
          <article><span>02</span><h3>Design for failure</h3><p>Treat validation, error states, accessibility, and recovery paths as core product behavior.</p></article>
          <article><span>03</span><h3>Leave evidence</h3><p>Tests, clear decisions, and honest outcomes make a contribution useful long after it merges.</p></article>
        </div>
      </section>
    </>
  );
}
