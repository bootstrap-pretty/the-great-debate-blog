export const SITE = {
    author: "Steph Hays",
    title: 'The Great Debate Blog',
    description: 'An SEO driven, responsive, and fully customizable blog template built with Astro and Bootstrap Pretty.',
    url: import.meta.env.SITE,
    gitHubUrl: 'https://github.com/bootstrap-pretty/the-great-debate-blog',
    shikiTheme: 'dracula'
};

export const NAVIGATION_LINKS = [
    {
        title: "About",
        path: "/about",
        active: true
    }, 
    {
        title: "Posts",
        path: "/posts",
        active: true
    },
    {
        title: "Tags",
        path: "/tags",
        active: true
    },
    {
      title: "Contact",
      path: "/contact",
      active: false
    }
];

export const NAVIGATION_SETTINGS = {
    showLogo: true
};

export const HOME_SETTINGS = {
    showAbout: true
};

export const SOCIALS = [
    {
      name: "Portfolio",
      icon: "bi:link-45deg",
      href: 'https://stephhays.dev',
      active: true,
    },
    {
      name: "GitHub",
      icon: "bi:github",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "Facebook",
      icon: "bi:facebook",
      href: "",
      active: false
    },
    {
      name: "Instagram",
      icon: "bi:instagram",
      href: "",
      active: false
    },
    {
      name: "LinkedIn",
      icon: "bi:linkedin",
      href: "https://www.linkedin.com/in/st3phhays",
      active: true,
    },
    {
      name: "Mail",
      icon: "bi:envelope",
      href: "",
      active: false
    },
    {
      name: "Twitter",
      icon: "bi:twitter",
      href: "https://twitter.com/st3phhays",
      active: true,
    },
    {
      name: "Twitch",
      icon: "bi:twitch",
      href: "https://www.twitch.tv/st3phhays",
      active: true,
    },
    {
      name: "YouTube",
      icon: "bi:youtube",
      href: "",
      active: false
    },
    {
      name: "WhatsApp",
      icon: "bi:whatsapp",
      href: "",
      active: false
    },
    {
      name: "Snapchat",
      icon: "bi:snapchat",
      href: "",
      active: false
    },
    {
      name: "Pinterest",
      icon: "bi:pinterest",
      href: "",
      active: false
    },
    {
      name: "TikTok",
      icon: "bi:tiktok",
      href: "",
      active: false
    },
    {
      name: "CodePen",
      icon: "fa-brands:codepen",
      href: "https://codepen.io/st3phhays",
      active: true,
    },
    {
      name: "Discord",
      icon: "bi:discord",
      href: "",
      active: false
    },
    {
      name: "GitLab",
      icon: "fa-brands:gitlab",
      href: "",
      active: false
    },
    {
      name: "Reddit",
      icon: "bi:reddit",
      href: "",
      active: false
    },
    {
      name: "Skype",
      icon: "bi:skype",
      href: "",
      active: false
    },
    {
      name: "Steam",
      icon: "bi:steam",
      href: "",
      active: false
    },
    {
      name: "Telegram",
      icon: "bi:telegram",
      href: "",
      active: false
    }
];

export const PAGE_SIZE = 5;
export const MAX_SIZE = 5;
