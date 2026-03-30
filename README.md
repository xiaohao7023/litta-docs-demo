# LITTA Docs Demo

LITTA 文档中心 - 基于 VitePress 构建的文档网站 Demo

## 在线预览

🌐 **GitHub Pages**: https://litta.github.io/litta-docs-demo/

## 功能特性

- 📚 完整的文档结构（开始、Models、Skills）
- 🔍 本地搜索支持
- 📱 响应式设计
- 🔄 GitHub Actions 自动部署
- 🎨 类似 OpenClaw Docs 的界面风格

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/litta/litta-docs-demo.git
cd litta-docs-demo
```

### 2. 安装依赖

```bash
npm install
```

### 3. 本地开发

```bash
npm run docs:dev
```

访问 http://localhost:5173

### 4. 构建

```bash
npm run docs:build
```

## 文档结构

```
docs/
├── .vitepress/          # VitePress 配置
│   └── config.mjs       # 站点配置
├── start/               # 开始指南
│   ├── getting-started.md
│   ├── installation.md
│   └── configuration.md
├── models/              # Models 文档
│   ├── providers.md
│   ├── config.md
│   └── list.md
├── skills/              # Skills 文档
│   ├── index.md
│   ├── usage.md
│   └── development.md
└── index.md             # 首页
```

## 飞书文档同步 Skill（计划）

下一步将开发 Skill 实现飞书文档自动同步：

```javascript
// 使用示例
await skill('sync-feishu-doc', {
  feishuDocToken: 'C6i3ds5TKoliydxOqZDcQ2eenDb',
  targetPath: 'models/providers.md',
  autoCommit: true
})
```

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库 `litta-docs-demo`
2. 推送代码到仓库
3. 进入 Settings → Pages
4. Source 选择 "GitHub Actions"
5. 自动部署完成

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [GitHub Pages](https://pages.github.com/) - 托管服务

## 开发计划

- [x] VitePress 基础框架
- [x] 文档内容编写
- [x] GitHub Actions 自动部署
- [ ] 飞书文档同步 Skill
- [ ] 自动更新机制
- [ ] 样式定制

## License

MIT
