module.exports = {
    title: 'Web修炼指南',
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
                text: 'Core',
                items: [{
                        text: 'Html',
                        link: '/htmlDir/overview'
                    },
                    {
                        text: 'JavaScript',
                        link: '/jsDir/overview'
                    }
                ]
            },
            {
                text: 'Github',
                link: 'https://github.com/yxbysxcoco'
            },
        ],
        sidebar: {
            '/jsDir/': [{
                title: 'Js起步',
                collapsable: false,
                children: [{
                    title: "概述",
                    path: "/jsDir/overview"
                }, {
                    title: "基础",
                    path: "/jsDir/basis"
                }, {
                    title: "变量&作用域&内存",
                    path: "/jsDir/scope&memory"
                }, {
                    title: "引用类型",
                    path: "/jsDir/reference"
                }]
            }],
            '/htmlDir/': [{
                title: 'Html起步',
                collapsable: false,
                children: []
            }],
        }
    },
}