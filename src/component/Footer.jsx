import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { footer, logo, contact } from "../pages/Home/content";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#1D292B] pt-14 sm:pt-16 lg:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between">
          <div className="flex max-w-[280px] flex-col gap-5 sm:col-span-2 md:col-span-1">
            <Link to="/">
              <img src={logo} alt="Elearna" className="w-[140px]" />
            </Link>
            <p className="text-[15px] leading-relaxed text-white/60">
              {footer.about}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4 sm:gap-6">
              <h5 className="font-heading text-[18px] font-semibold text-white md:text-[20px]">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-white/60 transition-colors duration-300 hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4 sm:gap-6">
            <h5 className="font-heading text-[18px] font-semibold text-white md:text-[20px]">
              Need help?
            </h5>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div>
                <div className="text-[14px] text-white/60">Call us</div>
                <a
                  href={contact.phoneHref}
                  className="font-heading text-[17px] font-semibold text-white transition-colors hover:text-brand md:text-[20px]"
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                <div className="text-[14px] text-white/60">Need support?</div>
                <a
                  href={`mailto:${contact.supportEmail}`}
                  className="font-heading text-[17px] font-semibold text-white transition-colors hover:text-brand md:text-[20px] break-all"
                >
                  {contact.supportEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-center text-[14px] text-white/60 sm:flex-row sm:text-left">
          <div>
            Design by{" "}
            <a
              href="https://www.radianttemplates.com"
              className="text-white transition-colors hover:text-brand"
            >
              Radiant Templates
            </a>
          </div>
          <div>
            Built with <span className="text-white">React &amp; Tailwind</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}