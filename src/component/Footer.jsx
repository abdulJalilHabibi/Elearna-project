import Container from "../ui/Container";
import { footer, logo, contact } from "../pages/Home/content";

export default function Footer() {
  return (
    <footer
      className="overflow-hidden bg-[#1D292B]  pt-20"
     
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 lg:flex lg:justify-between">
          <div className="flex max-w-[263px] flex-col gap-6">
            <a href="/">
              <img src={logo} alt="Elearna" className="w-[140px]" />
            </a>
            <p className="text-white/60">{footer.about}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-6">
              <h5 className="text-[17px] text-white md:text-[20px]">{col.title}</h5>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 transition-colors duration-300 hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-6">
            <h5 className="text-[17px] text-white md:text-[20px]">Need help?</h5>
            <div className="flex flex-col gap-5">
              <div>
                <div className="text-white/60">Call us</div>
                <a href={contact.phoneHref} className="font-heading text-[17px] font-semibold text-white hover:text-brand md:text-[20px]">
                  {contact.phone}
                </a>
              </div>
              <div>
                <div className="text-white/60">Need support?</div>
                <a href={`mailto:${contact.supportEmail}`} className="font-heading text-[17px] font-semibold text-white hover:text-brand md:text-[20px]">
                  {contact.supportEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1290px] flex-col items-center justify-between gap-1 px-[15px] py-4 text-white/60 sm:flex-row">
          <div>
            Design by{" "}
            <a href="https://www.radianttemplates.com" className="text-white hover:text-brand">
              Abdul jalil
            </a>
          </div>
          <div>
            Built with <span className="text-white">React &amp; Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
