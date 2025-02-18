// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// If you are using dotenv (https://www.npmjs.com/package/dotenv)
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
    return [
        '@docusaurus/plugin-content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
            id: section,
            path: `docs/${section}`,
            routeBasePath: section,
            include: ['**/*.md', '**/*.mdx'],
            breadcrumbs: false,
            sidebarPath: require.resolve('./sidebars.cjs'),
            editUrl: 'https://github.com/WTFAcademy/frontend/tree/dev',
            versions: version && {
                current: {
                    label: version.label,
                },
            },
            ...options,
        }),
    ];
}

const SECTIONS = [
    defineSection('solidity-start'),
    defineSection('solidity-advanced'),
    defineSection('solidity-application'),
    defineSection('solidity-104'),
    defineSection('solidity-105'),
    defineSection('ethers-101'),
    defineSection('ethers-102'),
    defineSection('evm-opcodes-101'),
    defineSection('evm-opcodes-102'),
    defineSection('langchain-101'),
    defineSection('cairo-101'),
    defineSection('cairo-102'),
    defineSection('html-101'),
    defineSection('css-101'),
    defineSection('javascript-101'),
    defineSection('javascript-102'),
    defineSection('analysis-101'),
    defineSection('huff-101'),
    defineSection('starknet-basecamp-2023'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'WTF Academy',
    tagline: 'Web3 Open University for Developers',
    url: 'https://wtf.academy',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    trailingSlash: false,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'WTFAcademy', // Usually your GitHub org/user name.
    projectName: 'frontend', // Usually your repo name.
    themes: ['solive-docusaurus-theme-code'],
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh',
        locales: ['en', 'zh'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            zh: {
                label: '简体中文',
            },
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: false,
                theme: {
                    customCss: [
                        require.resolve('./src/styles/docusaurus.css'),
                        require.resolve('./src/styles/tailwind.css'),
                        require.resolve('./src/styles/other.css'),
                        require.resolve('./src/styles/prosemirror.css'),
                    ],
                },
            }),
        ],
    ],
    plugins: [
        ...SECTIONS,
        path.resolve(__dirname, './plugins/webpack-plugin.cjs'),
        path.resolve(__dirname, './plugins/tailwind-loader.cjs'),
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/logo.png',
            navbar: {
                logo: {
                    alt: 'WTF Logo',
                    src: 'img/logo.png',
                    height: '24px',
                },
                items: [
                    // {
                    //     href: '/learning-center',
                    //     label: 'Center',
                    //     position: 'left',
                    // },
                    {
                        href: '/solidity-start',
                        position: 'left',
                        label: 'Solidity 101',
                    },
                    {
                        href: '/solidity-advanced',
                        position: 'left',
                        label: 'Solidity 102',
                    },
                    {
                        href: '/solidity-application',
                        position: 'left',
                        label: 'Solidity 103',
                    },
                    {
                        href: '/starknet-basecamp-2023',
                        position: 'left',
                        label: 'Starknet Basecamp',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        type: 'custom-profile',
                        position: 'right'
                    }
                ],
            },
            footer: {
                logo: {
                    src: 'img/logo-full.png',
                    height: '40px',
                },
                links: [
                    {
                        title: 'Products',
                        items: [
                            // {
                            //     label: 'Learning Center',
                            //     to: '/learning-center',
                            // },
                            // {
                            //     label: 'Courses',
                            //     to: '/learning-center',
                            // },
                            {
                                label: 'Forum',
                                href: 'https://github.com/AmazingAng/WTFSolidity/discussions',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/WTFAcademy',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/5akcruXrsk',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/0xAA_Science',
                            },
                            {
                                label: 'Wechat',
                                href: 'https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform',
                            },
                        ],
                    },
                    {
                        title: 'Donation',
                        items: [
                            {
                                label: 'Gitcoin',
                                href: 'https://gitcoin.co/grants/6090/wtf-solidity',
                            },
                            {
                                label: 'Mirror',
                                href: 'https://mirror.xyz/ninjak.eth/collection',
                            },
                        ],
                    },
                ],
                copyright: `© ${new Date().getFullYear()} WTF Academy.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["solidity"]
            },
        }),
    customFields: {
        APP_URL: process.env.REACT_APP_API_URL,
    }
};

module.exports = config;
