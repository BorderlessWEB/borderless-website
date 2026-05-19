import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#d1d3d4]">
      <div className="max-w-[1196px] mx-auto pt-10 lg:pt-16 pb-6 lg:pb-8 content-px">
        <div className="border-t-[2px] border-[#d9d9d9] pt-6 lg:pt-8" />
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h3 className="f-heading-md">Get our newsletters</h3>
          <div className="flex flex-col gap-2 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-0 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Email"
                className="f-small border border-[#d9d9d9] bg-white px-4 h-[50px] w-full sm:w-[300px] outline-none"
              />
              <button className="f-btn bg-black text-white px-6 h-[50px] hover:bg-black/80 transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
                Subscribe
              </button>
            </div>
            <label className="flex items-start gap-2 cursor-pointer text-black/50">
              <input type="checkbox" className="mt-0.5 accent-black" />
              <span className="text-xs leading-tight">
                I agree to the processing of personal data
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="max-w-[1196px] mx-auto py-8 lg:py-12 content-px">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <span className="f-nav-active text-black tracking-[3px] block mb-4 lg:mb-6">
              BORDERLESS
            </span>
            <p className="f-small text-black/50">All rights reserved</p>
          </div>
          <div>
            <Link
              href="/passport-visas"
              className="f-footer-nav text-black block hover:text-black/60 transition-colors"
            >
              Passport/visas
            </Link>
            <Link
              href="/investment"
              className="f-footer-nav text-black block hover:text-black/60 transition-colors"
            >
              Investment
            </Link>
            <Link
              href="/education"
              className="f-footer-nav text-black block hover:text-black/60 transition-colors"
            >
              Education
            </Link>
            <Link
              href="/collaboration"
              className="f-footer-nav text-black block hover:text-black/60 transition-colors"
            >
              Collaboration
            </Link>
            <Link
              href="/travel"
              className="f-footer-nav text-black block hover:text-black/60 transition-colors"
            >
              Travel
            </Link>
            <Link
              href="/insights"
              className="f-footer-nav text-black block hover:text-black/60 transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/about"
              className="f-footer-nav text-black block hover:text-black/60 transition-colors"
            >
              About Us
            </Link>
          </div>
          <div>
            <p className="f-footer-talk">let&apos;s Talk</p>
            <div className="mt-2 lg:mt-4 space-y-1">
              <p className="f-footer-phone">+1 888 463 5101</p>
              <p className="f-footer-phone">+1 888 463 5101</p>
              <p className="f-footer-phone">+1 888 463 5101</p>
            </div>
          </div>
          <div>
            <p className="f-footer-talk">let&apos;s Meet</p>
            <div className="mt-2 lg:mt-4 space-y-3">
              <div>
                <p className="f-footer-addr">Lisbon, Portugal</p>
                <p className="f-footer-addr text-black/50">
                  Av. da República, N° 6, 1° Esq.
                </p>
              </div>
              <div>
                <p className="f-footer-addr">Budapest, Hungary</p>
                <p className="f-footer-addr text-black/50">
                  Andrássy út 66, 1062
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="max-w-[1196px] mx-auto py-5 lg:py-8 content-px flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3 lg:gap-6">
            <a
              href="#"
              className="f-small text-black/40 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="f-small text-black/40 hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="f-small text-black/40 hover:text-black transition-colors"
            >
              YouTube
            </a>
            <a
              href="#"
              className="f-small text-black/40 hover:text-black transition-colors"
            >
              Telegram
            </a>
            <a
              href="#"
              className="f-small text-black/40 hover:text-black transition-colors"
            >
              Facebook
            </a>
          </div>
          <p className="f-small text-black/30">
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
