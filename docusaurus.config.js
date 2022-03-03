// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YUZEJIA',
  tagline: '',
  url: 'https://github.com/yuzejia/blog.git master:gh-pages',
  baseUrl: '/blog/',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'YUZEJIA',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '博客',
          },
          {
            to: '/blog',
            label: '阅读',
            position: 'left'
          },
          {
            href: 'https://github.com/yuzejia/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 页尾
      footer: {
        style: 'dark',
        links: [{
            title: '博客',
            items: [{
              label: 'javaScript',
              to: '/docs/javaScript/链表',
            }, ],
          },
          {
            title: '关联',
            items: [{
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            }],
          },
          {
            title: '链接',
            items: [{
              label: 'GitHub',
              href: 'https://github.com/yuzejia/blog',
            }, ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;