// All page content lives here so components stay presentational.
// Images are hot-linked from the original Webflow CDN — download them into
// /public/images and update these paths before going to production.

const CDN = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/";
const CMS = "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/";

export const contact = {
  email: "support@example.com",
  supportEmail: "info@example.com",
  phone: "(888) 123 4567",
  phoneHref: "tel:8881234567",
};

export const logo = CDN + "66c6fb8bf82fe9cef5f78d65_Elearna.svg";
export const cartIcon = CDN + "66c6fb8ba5e099697cc76c17_Cart.svg";

export const navLinks = [
  {
    label: "Home",
    label: "Courses",
    label: "Blog",
    label: "Contact",
  },
];

export const hero = {
  background: "./hero.webp",
  bigWords: ["personal", "Coach"],
  eyebrow: "Online learning",
};

export const features = [
  {
    icon: CDN + "66cff274c1ce9bc0b1d47e11_Circle%20Icon%20One.svg",
    title: "150+ online courses",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    icon: CDN + "66cff274e1a83a39a2571294_Circle%20Icon%20Two.svg",
    title: "Personalized learning",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    icon: CDN + "66cff27596d8f5a818903b2a_Circle%20Icon%20Three.svg",
    title: "Lifetime update",
    text: "Lorem ipsum dolor sit amet",
  },
];

export const categories = [
  {
    icon: CDN + "66c6fb8b9d9bcd0e5de94637_Category%20Icons.svg",
    title: "Creative web design",
    count: 8,
  },
  {
    icon: CDN + "66c6fb8b98a2dc7066c693d3_Category%20Icons-2.svg",
    title: "Finance accounting",
    count: 10,
  },
  {
    icon: CDN + "66c6fb8b2ae1000d4215a423_Category%20Icons-3.svg",
    title: "IT and software",
    count: 5,
  },
  {
    icon: CDN + "66c6fb94416128e5b4e355b0_Category%20Icons-4.svg",
    title: "Digital marketing",
    count: 4,
  },
  {
    icon: CDN + "66c6fb8b035ebd8829061041_Category%20Icons-5.svg",
    title: "Web development",
    count: 8,
  },
  {
    icon: CDN + "66c6fb8bf82fe9cef5f78d2f_Category%20Icons-6.svg",
    title: "Content writing",
    count: 3,
  },
];

const lorem =
  "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.";

export const discover = {
  eyebrow: "Unlocking Potential",
  title:
    "Discover the boundless advantages and transformative power of eLearning for professional growth",
  images: [
    CDN + "66cff2777e50749c4b90b5dd_Potential%20Image-2.webp",
    CDN + "66cff277582c8617efcf31ab_Potential%20Image-3.webp",
    CDN + "66cff277ceae6c7605edbd6e_Potential%20Image-4.webp",
    CDN + "66de9b2474f1094cb7ea1767_Contact%20Us%20One.webp",
  ],
  cards: [
    { number: "01", title: "Flexibility and convenience", text: lorem },
    { number: "02", title: "Course accessibility", text: lorem },
    { number: "03", title: "Cost-effectiveness", text: lorem },
    { number: "04", title: "Personalized learning", text: lorem },
  ],
};

export const ratingIcon = CDN + "66c6fb8b857efb6c4c737b5d_Rating.svg";

export const courses = [
  {
    image: CMS + "66ebabcd61399462d208146a_Course%20Portrait%20Image.webp",
    category: "Development",
    title: "Building single page applications with angular",
    rating: "5.00 (328)",
    price: "Free",
  },
  {
    image: CMS + "66ebabde3e87f8984b6782a1_Course%20Portrait%20Image-9.webp",
    category: "Development",
    title: "Database integration with MongoDB",
    rating: "4.49 (756)",
    price: "$59",
  },
  {
    image: CMS + "66ebabf4c17d78e3224b9b5b_Course%20Portrait%20Image-8.webp",
    category: "Finance",
    title: "Operations management and process improvement",
    rating: "5.00 (812)",
    price: "Free",
  },
  {
    image: CMS + "66ebac0cfd1f38c62e59431b_Course%20Portrait%20Image-7.webp",
    category: "Management",
    title: "Risk management and business continuity",
    rating: "4.88 (210)",
    price: "$49",
  },
  {
    image: CMS + "66fe66cdef763efcc757aefb_Course%20Image-2.webp",
    category: "Design",
    title: "Design systems and pattern libraries",
    rating: "5.00 (1.2K)",
    price: "$99",
  },
  {
    image: CMS + "66ebac3db9565bc62a90430e_Course%20Portrait%20Image-5.webp",
    category: "Development",
    title: "Full-stack development with the MERN stack",
    rating: "5.00 (985)",
    price: "$72",
  },
];

export const whyUs = {
  eyebrow: "Why we are",
  title: "World-class learning from anywhere",
  text: "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.",
  image: CDN + "66cff274cdd4c2243b9ba324_Woman%20Image.webp",
  video: {
    poster:
      CDN + "66c86567624ca9dec83f55cc_Home%20One%20Video-poster-00001.jpg",
    mp4: CDN + "66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.mp4",
    webm: CDN + "66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.webm",
  },
  decorations: {
    yellowCircle: CDN + "66cff2745bc495d2bda978f2_Yellow%20Circle.svg",
    outlineCircle: CDN + "66cff274f001523c81c44d05_Outline%20Circle.svg",
  },
  stats: [
    { value: 1.5, decimals: 1, suffix: "K", label: "Finish seasons" },
    { value: 7.8, decimals: 1, suffix: "K", label: "Enrolled" },
    { value: 100, decimals: 0, suffix: "%", label: "Job placement" },
  ],
};

export const offer = {
  background:
    CDN + "66cff2751d8bac1df232a433_Boy%20Using%20Laptop%20Image.webp",
  eyebrow: "what we Offer",
  title: "Personalized learning for your ambitions",
  text: "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.",
};

export const clients = {
  text: "Learn from 350+ leading universities and companies with us",
  logos: [
    CDN + "66cff2747e50749c4b90b49e_Client%20Icon%20Black.svg",
    CDN + "66cff274f86ce33e074f03d9_Client%20Icon%20Black-2.svg",
    CDN + "66cff274cdd4c2243b9ba268_Client%20Icon%20Black-3.svg",
    CDN + "66cff274e855d20c26ff2fba_Client%20Icon%20Black-4.svg",
    CDN + "66cff274d9213b6ef2e8640e_Client%20Icon%20Black-5.svg",
    CDN + "66cff274d9213b6ef2e86488_Client%20Icon%20Black-6.svg",
  ],
};

export const testimonials = {
  quoteIcon: CDN + "66cff274c1ce9bc0b1d47e56_Quote%20Icons.svg",
  arrowIcon: CDN + "66cff27450908035329d09f0_Slider%20Arrow%20Black.svg",
  items: [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.",
      name: "Linda Grady",
      role: "Co-assistant manager",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis.",
      name: "Jim Adams",
      role: "Designer",
    },
  ],
};

export const blog = {
  eyebrow: "Education Blog",
  title: "Our news and ideas",
  text: "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis.",
  posts: [
    {
      image: CMS + "66ff7196253a4813606a5f52_Blog%20Small%20Thumbnail-12.webp",
      category: "Career",
      title: "Improve knowledge retention with visual learning",
      date: "October 4, 2024",
      href: "#",
    },
    {
      image: CMS + "66ff6e0a6f9b375fbca970fe_Blog%20Small%20Thumbnail-11.webp",
      category: "Development",
      title: "Master online learning with proven strategies",
      date: "October 4, 2024",
      href: "#",
    },
    {
      image: CMS + "66ff6a72dd07492f0cbb0a6d_Blog%20Small%20Thumbnail-10.webp",
      category: "Teaching",
      title: "How to enhance your learning experience today",
      date: "October 3, 2024",
      href: "#",
    },
  ],
};

export const footer = {
  background: CDN + "66d57c66a83a752540483c24_Noisy%20Background.webp",
  about:
    "Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.",
  columns: [
    {
      title: "Popular courses",
      links: ["Finance", "Management", "Design", "Web development"],
    },
    {
      title: "Company",
      links: ["About", "Courses", "Blog", "Contact", "License", "Pricing"],
    },
    {
      title: "CMS",
      links: ["Course details", "Instructor details", "Blog details"],
    },
  ],
};
