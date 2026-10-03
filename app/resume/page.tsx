import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";

export const metadata: Metadata = { title: "Résumé & contact" };

export default function ResumePage() {
  return (
    <div className="shell page-shell resume-page">
      <span className="kicker">RÉSUMÉ / CONTACT</span>
      <h1>Full-stack engineer.<br />Product-minded contributor.</h1>
      <div className="resume-layout">
        <div>
          <section className="resume-section"><span className="mono">PROFILE</span><p>Full-stack product engineer focused on TypeScript, React, dependable APIs, and accessible user experiences. Currently developing a public contribution record in humanitarian open-source software.</p></section>
          <section className="resume-section"><span className="mono">CURRENT PORTFOLIO SPRINT</span><h2>Humanitarian OpenStreetMap Team</h2><p>Planned open-source contributor · 12-week program</p><ul><li>Study and contribute to a React, FastAPI, and PostgreSQL production codebase.</li><li>Deliver test-backed fixes and a meaningful product improvement.</li><li>Document investigation, tradeoffs, review feedback, and verified outcomes.</li></ul></section>
          <section className="resume-section"><span className="mono">CORE SKILLS</span><p>TypeScript · React · Next.js · Node.js · Python · REST APIs · PostgreSQL · automated testing · accessibility · Git</p></section>
        </div>
        <aside className="contact-card"><span className="mono">LET’S TALK</span><h2>Building something useful?</h2><p>Add your preferred email and GitHub profile in this section before publishing.</p><ArrowLink href="https://github.com/hotosm">View current community</ArrowLink></aside>
      </div>
    </div>
  );
}
