const CDN = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/";
const CMS = "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/";

export const coursesHero = {
  background: CDN + "66eaca673fb4c6cd73e6cb30_Course%20Two%20Hero.webp",
  eyebrow: "START WITH",
  title: "Professional online courses",
};

export const categoriesData = {
  eyebrow: "Top Categories",
  title: "Discover leading categories",
  cta: {
    label: "Get Started",
    href: "/contact",
  },
  items: [
    {
      title: "Web design and creative",
      count: "8 Courses",
      icon: CDN + "66c6fb8b9d9bcd0e5de94637_Category%20Icons.svg",
      href: "/courses",
    },
    {
      title: "Finance and accounting",
      count: "10 Courses",
      icon: CDN + "66c6fb8b98a2dc7066c693d3_Category%20Icons-2.svg",
      href: "/courses",
    },
    {
      title: "IT and software",
      count: "5 Courses",
      icon: CDN + "66c6fb8b2ae1000d4215a423_Category%20Icons-3.svg",
      href: "/courses",
    },
    {
      title: "Digital marketing",
      count: "4 Courses",
      icon: CDN + "66c6fb94416128e5b4e355b0_Category%20Icons-4.svg",
      href: "/courses",
    },
    {
      title: "Web development",
      count: "8 Courses",
      icon: CDN + "66c6fb8b035ebd8829061041_Category%20Icons-5.svg",
      href: "/courses",
    },
    {
      title: "Content and language",
      count: "3 Courses",
      icon: CDN + "66c6fb8bf82fe9cef5f78d2f_Category%20Icons-6.svg",
      href: "/courses",
    },
  ],
};

export const starRatingIcon =
  CDN + "66c6fb8b857efb6c4c737b5d_Rating.svg";

export const allCourses = [
  // Page 1
  {
    id: 1,
    image: CMS + "6710c8e98e373637b34e5406_Course%20Image-8.webp",
    category: "Management",
    title: "Crisis management and problem-solving strategies",
    rating: "4.88 (210)",
    price: "Free",
    href: "#",
  },
  {
    id: 2,
    image: CMS + "6710bd0293bbfbd5e9b9c0b4_Course%20Image-5.webp",
    category: "Design",
    title: "Advanced photoshop techniques for designers",
    rating: "5.00 (1.2K)",
    price: "Free",
    href: "#",
  },
  {
    id: 3,
    image: CMS + "6710bb35a23640b475679863_Course%20Image-2-2.webp",
    category: "Finance",
    title: "Understanding corporate finance and investments",
    rating: "4.88 (210)",
    price: "Free",
    href: "#",
  },
  {
    id: 4,
    image: CMS + "66ebabcd61399462d208146a_Course%20Portrait%20Image.webp",
    category: "Development",
    title: "Building single page applications with angular",
    rating: "5.00 (328)",
    price: "Free",
    href: "#",
  },
  {
    id: 5,
    image: CMS + "66ebabde3e87f8984b6782a1_Course%20Portrait%20Image-9.webp",
    category: "Development",
    title: "Database integration with MongoDB",
    rating: "4.49 (756)",
    price: "$59",
    href: "#",
  },
  {
    id: 6,
    image: CMS + "66ebabf4c17d78e3224b9b5b_Course%20Portrait%20Image-8.webp",
    category: "Finance",
    title: "Operations management and process improvement",
    rating: "5.00 (812)",
    price: "Free",
    href: "#",
  },
  // Page 2
  {
    id: 7,
    image: CMS + "66ebac0cfd1f38c62e59431b_Course%20Portrait%20Image-7.webp",
    category: "Management",
    title: "Risk management and business continuity",
    rating: "4.88 (210)",
    price: "$49",
    href: "#",
  },
  {
    id: 8,
    image: CMS + "66fe66cdef763efcc757aefb_Course%20Image-2.webp",
    category: "Design",
    title: "Design systems and pattern libraries",
    rating: "5.00 (1.2K)",
    price: "$99",
    href: "#",
  },
  {
    id: 9,
    image: CMS + "66ebac3db9565bc62a90430e_Course%20Portrait%20Image-5.webp",
    category: "Development",
    title: "Full-stack development with the MERN stack",
    rating: "5.00 (985)",
    price: "$72",
    href: "#",
  },
  {
    id: 10,
    image: CMS + "66ed1026b284234066a8f423_Course%20Portrait%20Image-2.webp",
    category: "Management",
    title: "Grow your brand and reach your audience",
    rating: "4.88 (210)",
    price: "$49",
    href: "#",
  },
  {
    id: 11,
    image: CMS + "66ebab61dd850c0dad26f9a0_Course%20Portrait%20Image-4.webp",
    category: "Design",
    title: "Learn interactive Web Design by building real projects",
    rating: "4.49 (756)",
    price: "$79",
    href: "#",
  },
  {
    id: 12,
    image: CMS + "66ebab87fc8ee47e284af90a_Course%20Portrait%20Image-3.webp",
    category: "Finance",
    title: "The complete guide to personal and business finance",
    rating: "4.88 (210)",
    price: "$99",
    href: "#",
  },
];

export const ctaThreeData = {
  background: CDN + "66d97d5ab0f5c99538183a86_Office%20Image.webp",
  title: "Are you ready to start your journey?",
  browseBtn: {
    label: "Browse courses",
    href: "/courses",
  },
  instructorBtn: {
    label: "Became an instructor",
    href: "/contact",
  },
};
