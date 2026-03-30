import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LITTA',
  description: 'LITTA 主动健康服务操作系统',
  
  base: '/litta-docs-demo/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  
  // 国际化配置
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    }
  },
  
  themeConfig: {
    // 网站 Logo
    logo: '/logo.svg',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '关于 LITTA', link: '/about' },
      { 
        text: '服务配置',
        link: '/service/',
        activeMatch: '/service/'
      },
      { 
        text: '商家后台',
        link: 'https://b.litta.cn',
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    ],
    
    // 侧边栏 - 服务配置下的二级菜单
    sidebar: {
      '/service/': [
        {
          text: '服务策略配置',
          collapsed: false,
          items: [
            { text: '功能概览', link: '/service/' },
            { text: '问卷配置', link: '/service/questionnaire' },
            { text: '首页配置', link: '/service/homepage' },
            { text: '训练计划配置', link: '/service/training-plan' }
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
    
    // 大纲
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  },
  
  markdown: {
    lineNumbers: true
  }
})
