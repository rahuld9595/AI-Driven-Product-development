import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const organizationName = 'rahuld9595';
const projectName = 'AI-Driven-Product-development';

const config: Config = {
  title: 'AI Driven Product Development Training',
  tagline: 'Sustainable AI practices across the Product Development Lifecycle',
  favicon: 'img/favicon.svg',

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  trailingSlash: false,

  // A broken internal link fails the build rather than shipping a dead link.
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/website/`,
          breadcrumbs: true,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'AI Driven Product Development Training',
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'courseSidebar',
          position: 'left',
          label: 'Course',
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {label: 'Welcome', to: '/docs/intro'},
            {label: 'Sustainable AI Practices', to: '/docs/proven-practices'},
            {label: 'Docs & Activity Index', to: '/docs/reference'},
          ],
        },
        {
          title: 'Lab',
          items: [
            {label: 'Overview', to: '/docs/part-2/overview'},
            {label: 'Round 1: MVP', to: '/docs/part-2/round-1/'},
            {label: 'Round 2: Advanced', to: '/docs/part-2/round-2/'},
            {label: 'Round 3: Precision & Automation', to: '/docs/part-2/round-3/'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Agent Ready Repo', to: '/docs/part-2/agent-ready-repo'},
            {label: 'Setup & Installation', to: '/docs/setup/'},
            {
              label: 'GitHub',
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: 'Public training material. Built with Docusaurus.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'gherkin', 'python', 'powershell'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
