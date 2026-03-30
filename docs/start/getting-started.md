# 快速开始

欢迎访问 LITTA 文档中心！本指南将帮助你在 5 分钟内了解 LITTA 文档系统。

## 什么是 LITTA Docs

LITTA Docs 是 LITTA 主动健康服务操作系统的文档中心，基于 VitePress 构建，提供：

- 📚 完整的 API 文档和开发指南
- 🤖 Models 提供商配置说明
- 🛠️ Skills 开发和使用的详细文档
- 🔄 飞书文档自动同步机制

## 前置要求

在开始之前，请确保你已经：

- 了解 LITTA 的基本业务概念
- 有 GitHub 账号（用于部署）
- 安装了 Node.js 18+

## 本地开发

### 1. 克隆仓库

```bash
git clone https://github.com/litta/litta-docs-demo.git
cd litta-docs-demo
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run docs:dev
```

打开浏览器访问 `http://localhost:5173`

### 4. 构建

```bash
npm run docs:build
```

构建输出在 `docs/.vitepress/dist` 目录。

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

## 下一步

- [安装指南](/start/installation) - 详细的安装步骤
- [Models Providers](/models/providers) - 查看支持的 AI 模型
- [Skills 概述](/skills/) - 了解 Skills 系统

## 获取帮助

如果在使用过程中遇到问题，可以通过以下方式获取帮助：

- 📧 联系团队：team@litta.com
- 💬 飞书群组：LITTA 技术交流群
- 🐛 提交 Issue：https://github.com/litta/litta-docs-demo/issues
