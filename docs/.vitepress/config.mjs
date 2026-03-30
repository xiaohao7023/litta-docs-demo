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
  
  // 忽略死链接检查
  ignoreDeadLinks: true,
  
  // 主题配置
  themeConfig: {
    // 网站 Logo
    logo: '/logo.svg',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '快速开始',
        link: '/guide/getting-started',
        activeMatch: '/guide/'
      },
      { 
        text: '商家指南',
        link: '/guide/onboarding',
        activeMatch: '/guide/'
      },
      { 
        text: '开发文档',
        link: '/api/',
        activeMatch: '/api/'
      },
      { 
        text: '帮助',
        link: '/help/faq',
        activeMatch: '/help/'
      }
    ],
    
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          collapsed: false,
          items: [
            { text: '概览', link: '/guide/getting-started' },
            { text: '核心概念', link: '/guide/concepts' },
            { text: '功能特性', link: '/guide/features' }
          ]
        },
        {
          text: '入驻与设置',
          collapsed: false,
          items: [
            { text: '商家入驻', link: '/guide/onboarding' },
            { text: '实名认证', link: '/guide/verification' },
            { text: '门店创建', link: '/guide/store-setup' },
            { text: '基础配置', link: '/guide/basic-config' }
          ]
        },
        {
          text: '门店运营',
          collapsed: false,
          items: [
            { text: '门店信息管理', link: '/guide/store-management' },
            { text: '营业时间设置', link: '/guide/business-hours' },
            { text: '服务商品上架', link: '/guide/service-publish' },
            { text: '价格策略', link: '/guide/pricing' }
          ]
        },
        {
          text: '会员管理',
          collapsed: false,
          items: [
            { text: '会员档案', link: '/guide/member-profile' },
            { text: '标签体系', link: '/guide/member-tags' },
            { text: '跟进记录', link: '/guide/member-followup' },
            { text: '会员营销', link: '/guide/member-marketing' }
          ]
        },
        {
          text: '订单与预约',
          collapsed: false,
          items: [
            { text: '预约管理', link: '/guide/booking' },
            { text: '核销流程', link: '/guide/checkin' },
            { text: '退改处理', link: '/guide/refund' },
            { text: '订单查询', link: '/guide/orders' }
          ]
        },
        {
          text: '数据与财务',
          collapsed: false,
          items: [
            { text: '经营报表', link: '/guide/analytics' },
            { text: '业绩分析', link: '/guide/performance' },
            { text: '收益结算', link: '/guide/settlement' },
            { text: '提现管理', link: '/guide/withdrawal' }
          ]
        }
      ],
      '/api/': [
        {
          text: '开发文档',
          collapsed: false,
          items: [
            { text: 'API 概览', link: '/api/' },
            { text: '认证与授权', link: '/api/auth' },
            { text: '错误码', link: '/api/errors' }
          ]
        },
        {
          text: '接口文档',
          collapsed: false,
          items: [
            { text: '商家接口', link: '/api/merchant' },
            { text: '会员接口', link: '/api/members' },
            { text: '订单接口', link: '/api/orders' },
            { text: '预约接口', link: '/api/bookings' }
          ]
        },
        {
          text: '其他',
          collapsed: false,
          items: [
            { text: 'Webhooks', link: '/api/webhooks' },
            { text: 'SDK 下载', link: '/api/sdk' }
          ]
        }
      ],
      '/help/': [
        {
          text: '帮助',
          collapsed: false,
          items: [
            { text: '常见问题', link: '/help/faq' },
            { text: '更新日志', link: '/help/changelog' },
            { text: '联系我们', link: '/help/contact' }
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
    },
    
    // 大纲显示层级
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  },
  
  // Markdown 配置
  markdown: {
    lineNumbers: true
  }
})
