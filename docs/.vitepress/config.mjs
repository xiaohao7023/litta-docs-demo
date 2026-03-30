import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'LITTA 商家中心',
  description: 'LITTA 商家端文档中心 - 主动健康服务操作系统',
  
  // 基础配置
  base: '/litta-docs-demo/',
  
  // 清理 URL
  cleanUrls: true,
  
  // 最后更新时间
  lastUpdated: true,
  
  // 主题配置
  themeConfig: {
    // 网站 Logo
    logo: '/logo.svg',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '商家指南', 
        items: [
          { text: '快速开始', link: '/merchant/getting-started' },
          { text: '入驻指南', link: '/merchant/register' },
          { text: '门店管理', link: '/merchant/store-management' }
        ]
      },
      { 
        text: '开发文档',
        items: [
          { text: 'API 概览', link: '/api/' },
          { text: 'Webhooks', link: '/api/webhooks' },
          { text: 'SDK', link: '/api/sdk' }
        ]
      }
    ],
    
    // 侧边栏
    sidebar: {
      '/merchant/': [
        {
          text: '商家指南',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/merchant/getting-started' },
            { text: '入驻指南', link: '/merchant/register' },
            { text: '门店管理', link: '/merchant/store-management' }
          ]
        }
      ],
      '/api/': [
        {
          text: '开发文档',
          collapsed: false,
          items: [
            { text: 'API 概览', link: '/api/' },
            { text: 'Webhooks', link: '/api/webhooks' },
            { text: 'SDK', link: '/api/sdk' }
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
      pattern: 'https://github.com/xiaohao7023/litta-docs-demo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  },
  
  // Markdown 配置
  markdown: {
    lineNumbers: true
  },
  
  // 忽略死链接检查
  ignoreDeadLinks: true
})
