import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Himanshu Sharma — Product Engineer", template: "%s — Himanshu Sharma" },
  description: "Full-stack product engineering for public-interest and humanitarian software.",
};

const nav = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Résumé", "/resume"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Himanshu Sharma, home">
            <span className="brand-mark" aria-hidden="true">HS</span>
            <span>Himanshu Sharma</span>
          </Link>
          <nav aria-label="Primary navigation">
            {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer>
          <p>Built with Next.js and TypeScript. No trackers, no runtime API calls.</p>
          <p>© {new Date().getFullYear()} Himanshu Sharma</p>
        </footer>
      </body>
    </html>
  );
}
