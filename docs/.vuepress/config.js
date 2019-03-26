module.exports = {
    title: 'Js',
    description: 'code define life',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Github',
                link: 'https://github.com/yxbysxcoco'
            },
        ],
        sidebar: {
            '/dir/': [{
                title: '起步',
                collapsable: false,
                children: [{
                    title: "概述",
                    path: "/dir/overview"
                }, {
                    title: "基础",
                    path: "/dir/basis"
                }]
            }],
        }
    },
}