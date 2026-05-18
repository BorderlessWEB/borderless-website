import Link from "next/link";

const footerLinks = {
  Ecosystem: [
    { label: "Passport & Visas", href: "/passport-visas" },
    { label: "Investment", href: "/investment" },
    { label: "Education", href: "/education" },
    { label: "Travel", href: "/travel" },
    { label: "Collaboration", href: "/collaboration" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
              BORDERLESS
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              An ecosystem that unites projects about conscious global living.
              Freedom · Sustainability · Smart Investments · New Luxury.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Instagram", "YouTube", "Telegram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Borderless. All rights reserved.
          </p>
          <div className="flex gap-6">
            <select
              className="text-sm bg-transparent border border-white/20 rounded px-2 py-1 text-white/60"
              defaultValue="EN"
            >
              <option className="text-dark">EN</option>
              <option className="text-dark">RU</option>
              <option className="text-dark">UA</option>
              <option className="text-dark">DE</option>
              <option className="text-dark">PT</option>
              <option className="text-dark">ES</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
