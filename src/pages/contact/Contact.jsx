import ContactHero from "./ContactHero";
import ContactDetails from "./ContactDetails";
import TextMarquee from "./TextMarquee";
import ContactForm from "./ContactForm";
import ContactFaq from "./ContactFaq";
import CtaBanner from "./CtaBanner";

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactDetails />
      <TextMarquee />
      <ContactForm />
      <ContactFaq />
      <CtaBanner />
    </main>
  );
}
