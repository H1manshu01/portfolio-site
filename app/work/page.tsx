import type { Metadata } from "next";
import { CaseCard } from "@/components/case-card";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = { title: "Contribution case studies", description: "Open-source contribution plans and evidence-backed case studies." };

export default function WorkPage() {
  return (
    <div className="shell page-shell">
      <span className="kicker">OPEN-SOURCE CONTRIBUTIONS</span>
      <h1>Work, with the decisions left in.</h1>
      <p className="page-intro">These case studies document the whole engineering loop: problem framing, constraints, implementation, tests, review, and verified outcome. Work that has not shipped is labeled plainly.</p>
      <div className="case-grid work-grid">
        {caseStudies.map((study, index) => <CaseCard key={study.slug} study={study} index={index} />)}
      </div>
      <aside className="truth-note"><span className="mono">A NOTE ON STATUS</span><p>“Proposed” means no implementation or upstream claim has been made. Pages are updated to “under review” or “merged upstream” only when linked evidence supports it.</p></aside>
    </div>
  );
}
