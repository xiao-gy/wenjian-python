const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Python从爬虫到入门",
  description: "",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
    "/zh/": {
      title: "Python从爬虫到入门",
      description: "",
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "xiao-gy",
    repo: "https://github.com/xiao-gy/wenjian-python",

    nav: [
      { text: "Project Home", link: "/home/", icon: "home" },
      {
        text: "Guide",
        icon: "creative",
        link: "/guide/",
      },
    ],

    sidebar: {
      "/": [
        "",
        "home",
        "slides",
        "layout",
        {
          title: "Guide",
          icon: "creative",
          prefix: "guide/",
          children: ["", "page", "markdown", "disable", "encrypt"],
        },
      ],
    },

    locales: {
      "/zh/": {
        nav: [
          { text: "项目主页", link: "/zh/home/", icon: "home" },
          {
            text: "如何使用",
            icon: "creative",
            link: "/zh/guide/",
          },
        ],
        sidebar: {
          "/zh/": [
            "",
            "home",
            "slides",
            "layout",
            {
              title: "如何使用",
              icon: "creative",
              prefix: "guide/",
              children: ["", "page", "markdown", "disable", "encrypt"],
            },
          ],
        },
      },
    },

    blog: false,
    home: false,

    footer: {
      display: true,
      content: "来自 稳健IT社",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
