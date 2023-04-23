// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YUZEJIA',
  tagline: '',
  url: 'https://github.com/yuzejia/blog.git',
  baseUrl: '/blog/',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  trailingSlash: false,
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/docusaurus.jpg',
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

  themeConfig:{
    algolia: {
      appId:'4Z9YZSL3WS',

      // Public API key: it is safe to commit it
      apiKey: '2d3473083ebc8ec6ed92afd439630c45',
      indexName: 'yuki_123',
    },
      navbar: {
        title: 'YUZEJIA',
        logo: {
          alt: 'My Site Logo',
          src: 'img/docusaurus.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '博客',
          },
          {
            to: '/blog/blog',
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
            items: [ ],
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
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yuzejia/blog',
              },
              {
                label: "docusaurus",
                href: "https://www.docusaurus.cn/docs"
              }
           ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;