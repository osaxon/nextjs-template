import siteConfig from "@/site.config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-base-200 text-base-content">
        <div className="footer mx-auto max-w-6xl px-4 py-20">
          <div>
            <div className="inline-flex text-3xl">{siteConfig.siteTitle}</div>
            <p className="opacity-50">Company tagline</p>
          </div>

          <div>
            <span className="footer-title">Site map</span>
            {siteConfig.navLinks.map(({ label, href }) => (
              <Link className="link-hover link" key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <span className="footer-title">Site map</span>
            {siteConfig.docLinks.map(({ label, href }) => (
              <Link className="link-hover link" key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
