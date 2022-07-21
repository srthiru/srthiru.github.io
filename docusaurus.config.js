// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thiruvenkadam',
  tagline: 'Think . Do . Be',
  url: 'https://srthiru.github.io.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://icon-library.com/images/fall-leaf-icon/fall-leaf-icon-8.jpg',
  organizationName: 'srthiru', // Usually your GitHub org/user name.
  projectName: 'srthiru.github.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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

      image: 'https://icon-library.com/images/fall-leaf-icon/fall-leaf-icon-8.jpg',
      navbar: {
        title: 'Uthir',
        logo: {
          src: 'https://icon-library.com/images/fall-leaf-icon/fall-leaf-icon-8.jpg',
        },
        items: [
          {href: 'https://srthiru.github.io/fast-ramblings/', label: 'Blog', position: 'right'},
          // {href: 'https://github.com/srthiru', label: 'GitHub', position: 'right'},
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Thiruvenkadam R. Built with Docusarus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
