import {
  Book,
  Edit3,
  Feather,
  GitHub,
  Home,
  Layers,
  Linkedin,
  Twitter,
  Youtube,
} from "react-feather";

const config = {
  app: {
    title: "daddysgarden",
    subtitle: "my digital garden",
    thumbnailUrl: "/img/logo.svg",
  },
  meta: {
    url: "https://reshaped-blog-starter.vercel.app",
    title: "Reshaped",
    description: "Blog starter built on top of Next.js and Reshaped",
    twitter: {
      username: "blvdmitry",
    },
  },
  menu: [
    {
      icon: Home,
      title: "Home",
      href: "/",
    },
    {
      icon: Feather,
      title: "Writing",
      href: "/article",
    },
    {
      icon: Layers,
      title: "Stack",
      href: "/stack",
    },
    {
      icon: Book,
      title: "Proof of Work",
      href: "/pow",
    },
    {
      icon: Edit3,
      title: "Today I Learned",
      href: "/til",
    },

    // {
    //   title: "Projects",
    //   items: [
    //     {
    //       icon: Package,
    //       title: "Reshaped",
    //       href: "https://reshaped.so",
    //     },
    //     {
    //       icon: CheckSquare,
    //       title: "Design System Checklist",
    //       href: "https://www.designsystemchecklist.com",
    //     },
    //     {
    //       icon: Mic,
    //       title: "Design System Interviews",
    //       href: "https://reshaped.so/blog",
    //     },
    //     {
    //       icon: Briefcase,
    //       title: "Formaat Design",
    //       href: "https://formaat.design",
    //     },
    //   ],
    // },
    {
      title: "Online",
      items: [
        {
          icon: Twitter,
          title: "Twitter",
          href: "https://twitter.com/dprophecyguy",
        },
        {
          icon: GitHub,
          title: "GitHub",
          href: "https://github.com/dprophecyguy",
        },
        {
          icon: Linkedin,
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/iamvijaysingh/",
        },
        {
          icon: Youtube,
          title: "Youtube",
          href: "https://www.youtube.com/@dprophecyguy",
        },
      ],
    },
  ],
};

export default config;
