export const SITE = {
    author: "Steph Hays",
    title: 'Astro Bootstrap Blog',
    description: 'An SEO driven, responsive, and fully customizable blog template built with Astro.',
    url: import.meta.env.SITE,
    gitHubUrl: 'https://github.com/st3phhays/astro-bootstrap-blog',
    shikiTheme: 'material-palenight'
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
      name: "GitHub",
      icon: "bi:github",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "Facebook",
      icon: "bi:facebook",
      href: SITE.gitHubUrl,
      active: true
    },
    {
      name: "Instagram",
      icon: "bi:instagram",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "LinkedIn",
      icon: "bi:linkedin",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "Mail",
      icon: "bi:envelope",
      href: `${SITE.url}contact`,
      active: true,
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
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "WhatsApp",
      icon: "bi:whatsapp",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "Snapchat",
      icon: "bi:snapchat",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "Pinterest",
      icon: "bi:pinterest",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "TikTok",
      icon: "bi:tiktok",
      href: SITE.gitHubUrl,
      active: true,
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
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "GitLab",
      icon: "fa-brands:gitlab",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "Reddit",
      icon: "bi:reddit",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "Skype",
      icon: "bi:skype",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "Steam",
      icon: "bi:steam",
      href: SITE.gitHubUrl,
      active: true,
    },
    {
      name: "Telegram",
      icon: "bi:telegram",
      href: SITE.gitHubUrl,
      active: true,
    }
];

export const PAGE_SIZE = 1;
export const MAX_SIZE = 5;