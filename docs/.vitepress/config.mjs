import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LITTA Docs',
  description: 'LITTA 文档中心 - 主动健康服务操作系统',
  
  // 基础配置
  base: '/litta-docs-demo/',
  
  // 主题配置
  themeConfig: {
    // 网站 Logo
    logo: '/logo.svg',
    
    // 导航栏
    nav: [
      { text: '开始', link: '/start/getting-started' },
      { 
        text: 'Models', 
        items: [
          { text: 'Providers', link: '/models/providers' },
          { text: '配置', link: '/models/config' }
        ]
      },
      { 
        text: 'Skills',
        items: [
          { text: '概述', link: '/skills/' },
          { text: '使用指南', link: '/skills/usage' }
        ]
      }
    ],
    
    // 侧边栏
    sidebar: {
      '/start/': [
        {
          text: '开始',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/start/getting-started' },
            { text: '安装', link: '/start/installation' },
            { text: '配置', link: '/start/configuration' }
          ]
        }
      ],
      '/models/': [
        {
          text: 'Models',
          collapsed: false,
          items: [
            { text: 'Providers', link: '/models/providers' },
            { text: '配置', link: '/models/config' },
            { text: '模型列表', link: '/models/list' }
          ]
        }
      ],
      '/skills/': [
        {
          text: 'Skills',
          collapsed: false,
          items: [
            { text: '概述', link: '/skills/' },
            { text: '使用指南', link: '/skills/usage' },
            { text: '开发指南', link: '/skills/development' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/litta' }
    ],
    
    // 页脚
    footer: {
      message: 'LITTA 主动健康服务操作系统',
      copyright: 'Copyright © 2024 LITTA'
    },
    
    // 搜索
    search: {
      provider: 'local'
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/litta/litta-docs-demo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  },
  
  // Markdown 配置
  markdown: {
    lineNumbers: true
  }
})
