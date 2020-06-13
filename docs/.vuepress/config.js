module.exports = {
    base: '/swiftdo/',
    title: 'Swift',
    description: 'Swift learning',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
    ],
    themeConfig: {
        logo: 'logo.png'
    },
    plugins: ['@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
    ]
}