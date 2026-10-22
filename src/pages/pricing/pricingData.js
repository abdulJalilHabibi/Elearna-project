const CDN = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/";

export const pricingHeroData = {
  background: CDN + "66d57c66a83a752540483c24_Noisy%20Background.webp",
  eyebrow: "Pricing",
  title: "Flexible pricing plan for every one",
  billingDiscount: "Save 20%",
  plans: [
    {
      id: "starter",
      name: "Starter Plan",
      description: "Lorem ipsum dolor sit amet consectetur. eu vitae magna lacus ut.",
      icon: CDN + "66e14486380835542ec4e9d1_Gift%20Image.svg",
      iconWidth: 65,
      iconHeight: 72,
      dark: false,
      monthly: {
        originalPrice: "$199",
        price: "$149",
        period: "/Monthly",
      },
      yearly: {
        originalPrice: "$149",
        price: "$129",
        period: "/Monthly",
      },
      tickIcon: CDN + "66e14486372d78a27e95c8e9_Pricing%20Blue%20Tick.svg",
      crossIcon: CDN + "66e14486222233c74f9b9622_Pricing%20Blue%20Cross.svg",
      features: [
        { text: "Access to 30+ top courses", included: true },
        { text: "Certification prep", included: true },
        { text: "Customizable content", included: true },
        { text: "AI-powered coding exercises", included: true },
        { text: "Analytics and adoption reports", included: false },
      ],
      buttonLabel: "Subscribe This Plan",
      buttonHref: "/contact",
      buttonVariant: "dark",
    },
    {
      id: "premium",
      name: "Premium Plan",
      description: "Lorem ipsum dolor sit amet consectetur. eu vitae magna lacus ut.",
      icon: CDN + "66e14486876c02e130b6a4b3_Crown.svg",
      iconWidth: 94,
      iconHeight: 58,
      dark: true,
      monthly: {
        originalPrice: "$399",
        price: "$349",
        period: "/Monthly",
      },
      yearly: {
        originalPrice: "$349",
        price: "$329",
        period: "/Monthly",
      },
      tickIcon: CDN + "66e1448572ee3b06c3e042b5_Pricing%20Grey%20Tick.svg",
      crossIcon: CDN + "66e14486222233c74f9b9622_Pricing%20Blue%20Cross.svg",
      features: [
        { text: "Access to 50+ top courses", included: true },
        { text: "Certification prep", included: true },
        { text: "Customizable content", included: true },
        { text: "AI-powered coding exercises", included: true },
        { text: "Analytics and adoption reports", included: true },
      ],
      buttonLabel: "Subscribe This Plan",
      buttonHref: "/contact",
      buttonVariant: "yellow",
    },
  ],
};

export const pricingFaqData = {
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

export const pricingCtaData = {
  title: "Are you ready to start your journey?",
  btnOne: {
    label: "Browse courses",
    href: "/courses",
  },
  btnTwo: {
    label: "Became a teacher",
    href: "/contact",
  },
};
