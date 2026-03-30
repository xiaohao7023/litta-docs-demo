# 安装指南

本文档介绍如何在本地安装和配置 LITTA Docs。

## 环境要求

- **Node.js**: 18.0 或更高版本
- **npm**: 8.0 或更高版本
- **Git**: 任意版本

## 安装步骤

### 1. 检查 Node.js 版本

```bash
node --version
# 应该输出 v18.x.x 或更高
```

如果版本过低，请前往 [nodejs.org](https://nodejs.org) 下载安装最新 LTS 版本。

### 2. 克隆仓库

```bash
git clone https://github.com/litta/litta-docs-demo.git
cd litta-docs-demo
```

### 3. 安装依赖

```bash
npm install
```

这将安装 VitePress 和所有必要的依赖。

### 4. 启动开发服务器

```bash
npm run docs:dev
```

你会看到类似以下的输出：

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

打开浏览器访问 http://localhost:5173 即可预览文档。

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run docs:dev` | 启动开发服务器 |
| `npm run docs:build` | 构建生产版本 |
| `npm run docs:preview` | 预览构建结果 |

## 配置说明

### 修改站点配置

编辑 `docs/.vitepress/config.mjs`：

```javascript
export default defineConfig({
  title: '你的站点标题',
  description: '你的站点描述',
  // ...
})
```

### 修改首页

编辑 `docs/index.md`，参考 [VitePress 首页配置](https://vitepress.dev/reference/default-theme-home-page)。

## 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

在 GitHub 上创建新仓库 `litta-docs-demo`。

### 2. 推送到 GitHub

```bash
git remote add origin https://github.com/你的用户名/litta-docs-demo.git
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库 Settings → Pages
2. Source 选择 "GitHub Actions"
3. 系统会自动使用 `.github/workflows/deploy.yml` 进行部署

### 4. 访问站点

部署完成后，访问 `https://你的用户名.github.io/litta-docs-demo/`

## 下一步

- [配置指南](/start/configuration) - 了解详细配置选项
- [Models Providers](/models/providers) - 查看支持的 AI 模型
