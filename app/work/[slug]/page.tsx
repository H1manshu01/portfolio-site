import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, statusLabels } from "@/lib/case-studies";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  return study ? { title: study.title, description: study.dek } : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  return (
    <article className="shell case-page">
      <Link className="back-link" href="/work">← All contributions</Link>
      <header className="case-hero">
        <div className="eyebrow"><span className={`status status-${study.status}`}>{statusLabels[study.status]}</span><span>{study.organization}</span></div>
        <h1>{study.title}</h1>
        <p>{study.dek}</p>
      </header>
      <dl className="facts">
        <div><dt>Role</dt><dd>{study.role}</dd></div>
        <div><dt>Timeline</dt><dd>{study.dates}</dd></div>
        <div><dt>Stack</dt><dd>{study.technologies.join(" · ")}</dd></div>
        <div><dt>Repository</dt><dd><a href={study.repository} target="_blank" rel="noreferrer">View on GitHub ↗</a></dd></div>
      </dl>
      <div className="case-body">
        <aside><span className="mono">OUTCOME</span><p>{study.measurableOutcome}</p></aside>
        <div className="prose">
          {study.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        </div>
      </div>
    </article>
  );
}
