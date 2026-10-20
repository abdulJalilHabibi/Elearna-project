const CDN = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/";
const CMS = "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/";

export const blogHero = {
  background: CDN + "66e7f3bebbe98a4b87f69448_Blog%20Hero%20Image.webp",
  eyebrow: "News and journals",
  title: "Planning to transition to a new career?",
};

export const featuredPost = {
  image: CMS + "66ff71ac285b8bcb87417ef6_Blog%20Portrait%20Thumbnail-13.webp",
  date: "10.4.2024",
  author: "Nina Leffler",
  title: "Improve knowledge retention with visual learning",
  description:
    "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  href: "#",
};

export const blogPostsGrid = [
  // Column 1
  [
    {
      image: CMS + "66ff6e0a6f9b375fbca970fe_Blog%20Small%20Thumbnail-11.webp",
      date: "4.10.2024",
      author: "Samantha Dicki",
      title: "Master online learning with proven strategies",
      href: "#",
    },
    {
      image: CMS + "66ff6a7612bb5e582719b5d6_Blog%20Portrait%20Thumbnail-10.webp",
      date: "3.10.2024",
      author: "Edwin Waters",
      title: "How to enhance your learning experience today",
      href: "#",
    },
    {
      image: CMS + "66e93b2410f6e96cbbc70c8d_Blog%20Small%20Thumbnail.webp",
      date: "17.9.2024",
      author: "Edward Braun",
      title: "The evolution of teaching tools in the 21st century",
      href: "#",
    },
    {
      image: CMS + "66e93b734e839a98823ff445_Blog%20Small%20Thumbnail-3.webp",
      date: "16.9.2024",
      author: "Jesse Johnson",
      title: "The role of parental involvement in academic achievement",
      href: "#",
    },
  ],
  // Column 2
  [
    {
      image: CMS + "66e93bb940c86a7d79f1e185_Blog%20Small%20Thumbnail-8.webp",
      date: "14.9.2024",
      author: "Samantha Dicki",
      title: "The role of technology in modern classrooms",
      href: "#",
    },
    {
      image: CMS + "66e93bf4c8aeb4955eb8be4c_Blog%20Small%20Thumbnail-2.webp",
      date: "13.9.2024",
      author: "Edwin Waters",
      title: "How globalization is shaping curriculum development",
      href: "#",
    },
    {
      image: CMS + "66e94670c010ad7f6a1391a0_Blog%20Portrait%20Thumbnail-3.webp",
      date: "12.9.2024",
      author: "Gerald Nienow",
      title: "How personalized learning is changing education",
      href: "#",
    },
    {
      image: CMS + "66e93c6c4ffe823e68be9c67_Blog%20Small%20Thumbnail-6.webp",
      date: "11.9.2024",
      author: "Nina Leffler",
      title: "Empowering teachers with continuous professional development",
      href: "#",
    },
  ],
];

export const ctaBanner = {
  background: CDN + "66d97d5ab0f5c99538183a86_Office%20Image.webp",
  title: "Are you ready to start your journey?",
  primaryCta: { label: "Became an instructor", href: "/career" },
  secondaryCta: { label: "Browse courses", href: "/courses" },
};
