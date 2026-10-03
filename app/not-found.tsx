import Link from "next/link";
export default function NotFound() { return <div className="shell page-shell"><span className="kicker">404</span><h1>This route is still unmapped.</h1><p className="page-intro">The page may have moved, or it never existed.</p><Link className="arrow-link" href="/">Return home <span aria-hidden="true">→</span></Link></div>; }
