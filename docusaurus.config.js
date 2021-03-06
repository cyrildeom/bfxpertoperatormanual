const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Operator manual',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/help/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon2.ico',
  organizationName: 'bfxpert', // Usually your GitHub org/user name.
  projectName: 'bfxpert', // Usually your repo name.
  themeConfig: {
    hideableSidebar: false,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'BFXpert (Operator manual)',
        src: 'img/pw-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Operator manual',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Paul Wurth - All rights reserved - Disclaimer - Contact`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
/*  i18n:
      {
        defaultLocale: 'en',
        locales: ['en', 'ru', 'de', 'fr'],
      },

 */
};
