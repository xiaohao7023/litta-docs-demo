# Skills 概述

Skills 是 LITTA 的核心能力扩展系统，让你可以通过自然语言调用各种功能。

## 什么是 Skills

Skills 是 LITTA 的插件系统，每个 Skill 都是一个独立的功能模块：

- 📧 发送邮件
- 📅 创建日程
- 📄 生成文档
- 🤖 调用 AI 模型
- 🔧 系统操作

## 核心概念

### Skill 结构

一个典型的 Skill 包含：

```
skill-name/
├── SKILL.md          # Skill 说明文档
├── index.js          # 主入口
├── package.json      # 依赖配置
└── README.md         # 使用说明
```

### SKILL.md 示例

```markdown
---
name: send-email
description: 发送邮件到指定地址
---

# Send Email

## 使用方法

```javascript
await skill('send-email', {
  to: 'user@example.com',
  subject: '主题',
  body: '内容'
})
```

## 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| to | string | 是 | 收件人地址 |
| subject | string | 是 | 邮件主题 |
| body | string | 是 | 邮件内容 |
```

## 内置 Skills

### 通讯类

| Skill | 功能 |
|-------|------|
| `send-email` | 发送邮件 |
| `send-message` | 发送即时消息 |
| `schedule-meeting` | 创建会议 |

### 文档类

| Skill | 功能 |
|-------|------|
| `create-doc` | 创建文档 |
| `read-doc` | 读取文档 |
| `update-doc` | 更新文档 |

### AI 类

| Skill | 功能 |
|-------|------|
| `chat` | 对话 |
| `generate-image` | 生成图片 |
| `analyze-data` | 数据分析 |

### 系统类

| Skill | 功能 |
|-------|------|
| `run-command` | 执行命令 |
| `read-file` | 读取文件 |
| `write-file` | 写入文件 |

## 使用 Skills

### 自然语言调用

```
帮我发一封邮件给 team@litta.com，主题是"周会通知"
```

### 代码调用

```javascript
await skill('send-email', {
  to: 'team@litta.com',
  subject: '周会通知',
  body: '本周五下午3点周会，请准时参加。'
})
```

### 命令行调用

```bash
litta skill send-email --to team@litta.com --subject "周会通知"
```

## 开发 Skills

### 快速开始

1. 创建 Skill 目录

```bash
mkdir my-skill
cd my-skill
```

2. 创建 SKILL.md

```markdown
---
name: my-skill
description: 我的自定义 Skill
---

# My Skill

这是一个示例 Skill。
```

3. 创建 index.js

```javascript
module.exports = async function(params, context) {
  // 获取参数
  const { name } = params
  
  // 执行业务逻辑
  console.log(`Hello, ${name}!`)
  
  // 返回结果
  return {
    success: true,
    message: `已问候 ${name}`
  }
}
```

4. 测试 Skill

```javascript
await skill('my-skill', { name: 'LITTA' })
```

## Skill 最佳实践

### 1. 单一职责

每个 Skill 只做一件事，保持简单。

### 2. 参数校验

```javascript
if (!params.to) {
  throw new Error('缺少必要参数: to')
}
```

### 3. 错误处理

```javascript
try {
  // 业务逻辑
} catch (error) {
  return {
    success: false,
    error: error.message
  }
}
```

### 4. 文档完善

- 清晰的 SKILL.md
- 完整的参数说明
- 使用示例

## 下一步

- [使用指南](/skills/usage) - 学习如何使用 Skills
- [开发指南](/skills/development) - 学习如何开发 Skills
