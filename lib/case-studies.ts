import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export type CaseStudyStatus = "proposed" | "in-progress" | "under-review" | "merged";

export type CaseStudy = {
  slug: string;
  title: string;
  organization: string;
  problem: string;
  role: string;
  technologies: readonly string[];
  status: CaseStudyStatus;
  dates: string;
  upstreamIssue?: string;
  pullRequest?: string;
  measurableOutcome: string;
  dek: string;
  repository: string;
  sections: readonly { heading: string; body: readonly string[] }[];
};

const contentDirectory = join(process.cwd(), "content", "case-studies");
const requiredFields = ["title", "organization", "problem", "role", "status", "dates", "measurableOutcome", "dek", "repository"] as const;
const validStatuses = new Set<CaseStudyStatus>(["proposed", "in-progress", "under-review", "merged"]);

function parseCaseStudy(filename: string): CaseStudy {
  const source = readFileSync(join(contentDirectory, filename), "utf8");
  const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) throw new Error(`${filename}: expected YAML-style frontmatter`);

  const metadata: Record<string, string> = {};
  for (const line of frontmatterMatch[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    metadata[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  for (const field of requiredFields) {
    if (!metadata[field]) throw new Error(`${filename}: missing ${field}`);
  }
  if (!validStatuses.has(metadata.status as CaseStudyStatus)) throw new Error(`${filename}: invalid status`);

  let technologies: string[];
  try { technologies = JSON.parse(metadata.technologies); }
  catch { throw new Error(`${filename}: technologies must be a JSON array`); }
  if (!Array.isArray(technologies) || technologies.some((item) => typeof item !== "string")) throw new Error(`${filename}: invalid technologies`);

  const sections = frontmatterMatch[2].trim().split(/\n(?=## )/).map((block) => {
    const [headingLine, ...bodyLines] = block.split("\n");
    if (!headingLine.startsWith("## ")) throw new Error(`${filename}: body sections must begin with ##`);
    return { heading: headingLine.slice(3).trim(), body: bodyLines.join("\n").trim().split(/\n\s*\n/).filter(Boolean) };
  });

  return {
    slug: filename.replace(/^\d+-/, "").replace(/\.mdx$/, ""),
    title: metadata.title,
    organization: metadata.organization,
    problem: metadata.problem,
    role: metadata.role,
    technologies,
    status: metadata.status as CaseStudyStatus,
    dates: metadata.dates,
    upstreamIssue: metadata.upstreamIssue || undefined,
    pullRequest: metadata.pullRequest || undefined,
    measurableOutcome: metadata.measurableOutcome,
    dek: metadata.dek,
    repository: metadata.repository,
    sections,
  };
}

export const caseStudies: readonly CaseStudy[] = readdirSync(contentDirectory).filter((filename) => filename.endsWith(".mdx")).sort().map(parseCaseStudy);
export function getCaseStudy(slug: string) { return caseStudies.find((study) => study.slug === slug); }

export const statusLabels: Record<CaseStudyStatus, string> = {
  proposed: "Proposed",
  "in-progress": "In progress",
  "under-review": "Under review",
  merged: "Merged upstream",
};
