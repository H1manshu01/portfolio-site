import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { statusLabels } from "@/lib/case-studies";

export function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="case-card">
      <div className="card-meta"><span>0{index + 1}</span><span className={`status status-${study.status}`}>{statusLabels[study.status]}</span></div>
      <h3><Link href={`/work/${study.slug}`}>{study.title}</Link></h3>
      <p>{study.dek}</p>
      <ul className="tag-list" aria-label="Technologies">
        {study.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <Link className="card-link" href={`/work/${study.slug}`}>Read the plan <span aria-hidden="true">→</span></Link>
    </article>
  );
}
