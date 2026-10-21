import { useState } from "react";
import Container from "@/ui/Container";
import Reveal from "@/ui/Reveal";
import { contactForm } from "./contactData";

export default function ContactForm({ className = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    saveInfo: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className={`bg-cover bg-center bg-no-repeat py-12 md:py-20 lg:py-24 ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${contactForm.background})`,
      }}
    >
      <Container>
        <div className="flex justify-end">
          <Reveal
            delay={100}
            className="w-full max-w-[550px] rounded bg-white p-6 shadow-[0_40px_60px_rgba(53,57,58,0.1)] sm:p-8 md:p-10 lg:p-12"
          >
            {submitted ? (
              <div className="rounded bg-[#eff6f8] p-6 text-center text-heading">
                <h4 className="mb-2 text-xl font-semibold">Thank you!</h4>
                <p className="text-paragraph">Your submission has been received!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <h3 className="mb-2 text-[24px] font-semibold tracking-[-0.5px] text-heading md:text-[28px]">
                  {contactForm.title}
                </h3>
                <p className="mb-6 text-[15px] text-paragraph">
                  {contactForm.description}
                </p>

                <input
                  type="text"
                  required
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mb-4 min-h-[50px] w-full rounded border border-[#1b2c30]/30 px-5 text-[15px] text-heading transition-colors placeholder:text-paragraph/60 focus:border-brand focus:outline-none"
                />

                <input
                  type="email"
                  required
                  placeholder="Your email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mb-4 min-h-[50px] w-full rounded border border-[#1b2c30]/30 px-5 text-[15px] text-heading transition-colors placeholder:text-paragraph/60 focus:border-brand focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="mb-4 min-h-[50px] w-full rounded border border-[#1b2c30]/30 px-5 text-[15px] text-heading transition-colors placeholder:text-paragraph/60 focus:border-brand focus:outline-none"
                />

                <textarea
                  required
                  placeholder="Your message*"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mb-4 min-h-[140px] w-full rounded border border-[#1b2c30]/30 p-5 text-[15px] text-heading transition-colors placeholder:text-paragraph/60 focus:border-brand focus:outline-none"
                />

                <label className="mb-6 flex cursor-pointer items-center gap-3 select-none">
                  <input
                    type="checkbox"
                    checked={formData.saveInfo}
                    onChange={(e) =>
                      setFormData({ ...formData, saveInfo: e.target.checked })
                    }
                    className="h-4 w-4 rounded border-gray-300 text-brand accent-brand focus:ring-brand"
                  />
                  <span className="text-[13px] text-paragraph md:text-[14px]">
                    {contactForm.checkboxText}
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex min-h-[50px] w-full items-center justify-center rounded bg-heading px-8 py-3 text-[16px] font-medium tracking-tight text-white transition-all duration-300 hover:scale-[0.97] hover:bg-deep-green active:scale-[0.94] md:w-auto"
                >
                  {contactForm.submitLabel}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
