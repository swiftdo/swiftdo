module.exports = {
    '@vuepress/back-to-top': true,
    '@vuepress/active-header-links': true,
    '@vuepress/nprogress': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
        }
    },
    '@vuepress/google-analytics': {
        'ga': 'UA-141621537-2'
    },
    'vuepress-plugin-auto-sidebar': {
        titleMode: "uppercase",
    },
    'sitemap': {
        hostname: 'https://oldbird.run'
    },
    'image': true,
    '@vuepress-yard/vuepress-plugin-window': {
        title: "OldBirds",
        contentInfo: {
            title: "更多高质内容，请关注官方公众号",
            needImg: true,
            imgUrl: "/wechat_cobe.jpg",
            content: "",
            contentStyle: ""
        },
        bottomInfo: {
            btnText: '关于',
            linkTo: '/about/index/'
        },
        closeOnce: true,
    },
    "vuepress-plugin-nuggets-style-copy": {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    },
    'vuepress-plugin-baidu-autopush': {},
    'robots': {
        /**
         * @host
         * Mandatory, You have to provide the host URL
         */   
        host: "https://oldbird.run",
        /**
         * @disallowAll
         * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
         */
        disallowAll: false,
        /**
         * @allowAll
         * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
         */
        allowAll: true,      
        /**
         * @sitemap
         * Optional, by default: sitemap.xml
         */ 
        sitemap: "/sitemap.xml",
    }
}