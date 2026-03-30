# 配置指南

本文档介绍 LITTA Docs 的配置选项。

## VitePress 配置

站点配置文件位于 `docs/.vitepress/config.mjs`。

### 基础配置

```javascript
export default defineConfig({
  // 站点标题
  title: 'LITTA Docs',
  
  // 站点描述（用于 SEO）
  description: 'LITTA 文档中心',
  
  // 基础路径（GitHub Pages 需要）
  base: '/litta-docs-demo/',
  
  // 语言设置
  lang: 'zh-CN',
  
  // 最后更新时间
  lastUpdated: true
})
```

### 主题配置

```javascript
themeConfig: {
  // 网站 Logo
  logo: '/logo.svg',
  
  // 导航栏
  nav: [
    { text: '开始', link: '/start/getting-started' },
    { text: 'Models', link: '/models/providers' }
  ],
  
  // 侧边栏
  sidebar: {
    '/start/': [
      {
        text: '开始',
        items: [
          { text: '快速开始', link: '/start/getting-started' }
        ]
      }
    ]
  },
  
  // 社交链接
  socialLinks: [
    { icon: 'github', link: 'https://github.com/litta' }
  ],
  
  // 搜索
  search: {
    provider: 'local'
  }
}
```

## 飞书文档同步配置

### 映射配置

创建 `scripts/sync-config.json`：

```json
{
  "mappings": [
    {
      "feishu_doc": "C6i3ds5TKoliydxOqZDcQ2eenDb",
      "target_path": "start/getting-started.md",
      "schedule": "realtime"
    },
    {
      "feishu_doc": "xxx",
      "target_path": "models/providers.md",
      "schedule": "daily"
    }
  ]
}
```

### 环境变量

创建 `.env` 文件：

```bash
# 飞书应用凭证
FEISHU_APP_ID=your_app_id
FEISHU_APP_SECRET=your_app_secret

# GitHub Token（用于自动提交）
GITHUB_TOKEN=your_github_token
```

## Markdown 扩展

VitePress 支持多种 Markdown 扩展语法：

### 代码块

```markdown
```js
console.log('Hello LITTA')
```

```js{4}
export default {
  data() {
    return {
      msg: 'Highlighted' // 第4行高亮
    }
  }
}
```
```

### 提示框

```markdown
::: tip 提示
这是一个提示框
:::

::: warning 注意
这是一个警告框
:::

::: danger 危险
这是一个危险警告
:::
```

### 行内代码高亮

```markdown
`\`js{1,3}` 可以高亮第1和第3行
```

## 自定义样式

在 `docs/.vitepress/theme/custom.css` 中添加自定义样式：

```css
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}
```

然后在 `docs/.vitepress/config.mjs` 中引入：

```javascript
export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ]
})
```

## 下一步

- [Models Providers](/models/providers) - 查看支持的 AI 模型
- [Skills 概述](/skills/) - 了解 Skills 系统
