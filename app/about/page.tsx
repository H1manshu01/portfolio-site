import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";

export const metadata: Metadata = { title: "Engineering approach" };

export default function AboutPage() {
  return (
    <div className="shell page-shell about-page">
      <span className="kicker">ENGINEERING / ABOUT</span>
      <h1>I like the seam between product thinking and careful implementation.</h1>
      <div className="about-layout">
        <div className="prose large-prose">
          <p>I’m Himanshu, a full-stack engineer working primarily with TypeScript and React. I’m building a body of public work by contributing to tools used for humanitarian mapping.</p>
          <p>My best work starts before the first edit: reproducing the behavior, reading the surrounding system, and making the tradeoffs legible. From there, I aim for small, reviewable changes with strong failure states and tests that protect user-facing behavior.</p>
          <h2>What I care about</h2>
          <p>Accessible interactions. Useful errors. Clear state. APIs with predictable behavior. Tests that explain intent. Reviews that improve the work rather than merely approve it.</p>
          <h2>Why open source</h2>
          <p>Open-source contribution makes the full process visible: how an engineer enters an unfamiliar system, communicates with maintainers, responds to feedback, and earns trust over time.</p>
        </div>
        <aside className="toolbox"><span className="mono">WORKING SET</span><ul><li>TypeScript / JavaScript</li><li>React / Next.js</li><li>Node.js / Python</li><li>REST APIs</li><li>PostgreSQL</li><li>Vitest / pytest</li><li>Accessibility</li><li>Performance</li></ul></aside>
      </div>
      <ArrowLink href="/work">See the contribution roadmap</ArrowLink>
    </div>
  );
}
