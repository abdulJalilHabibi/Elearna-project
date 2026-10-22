import ContactHero from "./ContactHero";
import ContactDetails from "./ContactDetails";
import TextMarquee from "./TextMarquee";
import ContactForm from "./ContactForm";
import ContactFaq from "./ContactFaq";
import CtaBanner from "./CtaBanner";

export default function Contact() {
  const p = "p-4 sm:p-6 md:p-8 lg:p-10";
  return (
    <div className="w-full overflow-x-clip">
      <main className="w-full">
        <ContactHero className={p} />
        <ContactDetails className={p} />
        <TextMarquee className={p} />
        <ContactForm className={p} />
        <ContactFaq className={p} />
        <CtaBanner className={p} />
      </main>
    </div>
  );
}