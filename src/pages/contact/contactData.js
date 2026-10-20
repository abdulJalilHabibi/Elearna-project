const CDN = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/";

export const contactHero = {
  background: CDN + "66e0010e7514d168f2d61d7b_Contact%20Us%20One-2.webp",
  title: "Contact us",
};

export const contactDetails = {
  eyebrow: "Contact Us",
  title: "Get details information about online courses, contact us. we're happy to discuss",
  description:
    "Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id purus suspendisse. Imperdiet nam lorem tempus in.",
  items: [
    {
      icon: CDN + "66de9b23b2f8295c624d2080_Home%20Icon.svg",
      title: "Area location",
      lines: ["410 Sandtown, California 94001, USA"],
    },
    {
      icon: CDN + "66de9b254c2ae5562dd60344_Books%20Icon.svg",
      title: "Contact details",
      links: [
        { label: "888-123-4567", href: "tel:8881234567" },
        { label: "info@example.com", href: "mailto:info@example.com" },
      ],
    },
    {
      icon: CDN + "66de9b2343d23f2fb8c7598d_Clock%20Icons.svg",
      title: "Opening hours",
      lines: ["Monday-Friday", "10:30a.m-7:00p.m"],
    },
  ],
};

export const contactMarquee = {
  text: "Get in touch with me today",
};

export const contactForm = {
  background: CDN + "66dfc9d4f27ea9802cf995f1_Contact%20Background-2.webp",
  title: "Fill out for contact",
  description: "Lorem ipsum dolor sit amet consectetur libero donec.",
  checkboxText: "Save information for the next time comment.",
  submitLabel: "Send message",
};

export const contactFaq = {
  icon: CDN + "66de9b24cdbecf88f8d1b2da_FAQ%20Icons.svg",
  eyebrow: "Contact Us",
  title: "Frequently asked questions",
  items: [
    {
      question: "How do I enroll in an online course?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      question: "Are there any prerequisites for enrolling in online courses?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      question: "What are the technical requirements for online learning?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      question: "What if I encounter technical difficulties?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      question: "Are there live classes, or can I learn at my own pace?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
  ],
};

export const ctaBanner = {
  background: CDN + "66d97d5ab0f5c99538183a86_Office%20Image.webp",
  title: "Are you ready to start your journey?",
  primaryCta: { label: "Became an instructor", href: "/career" },
  secondaryCta: { label: "Browse courses", href: "/courses" },
};
