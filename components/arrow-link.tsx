import Link from "next/link";

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <Link className="arrow-link" href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}<span aria-hidden="true">↗</span>
    </Link>
  );
}
