/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Technifuturlab",
  tagline: "Technifutur Lab DevOps",
  url: "https://github.com/badouuuuuu",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "badouuuuuu", // Usually your GitHub org/user name.
  projectName: "technifuturlab-docusaurusv2", // Usually your repo name.
  themeConfig: {
    navbar: {
      
      title: "Technifutur Lab",
      logo: {
        alt: "Technifutur Lab",
        src: "img/logo-techni.png"
      },
      items: [
        {
          
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Home"
        },
        {
          
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Cours"
        },


        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/badouuuuuu",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutoriaux",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Technifutur",
              href: "https://technifutur.be/fr/"
            },
            {
              label: "Discord",
              href: "https://discord.gg/bYNtBvZ8"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/badouuuuuu"
            }
          ]
        },
        {
          title: "Plus d'info...",
          items: [
            {
              label: "Blog",
              to: "/blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/badouuuuuu"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Technifutur Lab, Inc. Crée avec Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.

          editUrl: "https://github.com/badouuuuuu/technifuturlab-docusaurusv2/edit/main/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/badouuuuuu/technifuturlab-docusaurusv2/edit/main/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
