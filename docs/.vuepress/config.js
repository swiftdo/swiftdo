const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');

module.exports = {
    theme: 'reco',
    base: '/',
    title: 'OldBirds',
    description: '过来人的笔记，带你最佳实践，@OldBirds公众号',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ["script", {
            "data-ad-client": "ca-pub-4465026491979447",
            async: true,
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        }],
        ['meta', {
            name: 'google-site-verification',
            content: '6EogPdlAJYusvUHenXWXCGX-oVrqdeBnY-WsURHuKAA'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],
    markdown: {
        plugins: ['task-lists']
    },
    plugins: pluginConf,
    themeConfig: {
        record: '粤ICP备18007810号-1',
        recordLink: 'http://www.beian.miit.gov.cn/',
        startYear: '2020',
        logo: '/logo.png',
        authorAvatar: '/logo.png',
        repo: 'swiftdo/swiftdo.github.io',
        smoothScroll: true,
        lastUpdated: '上次更新',
        nav: navConf,
        author: 'oldbirds'
    },
}