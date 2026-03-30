# Skills 开发指南

本文档介绍如何开发自定义 Skills。

## 前置要求

- Node.js 18+
- 了解 JavaScript/TypeScript
- 熟悉 Markdown

## 创建 Skill

### 1. 创建目录结构

```bash
mkdir -p skills/my-skill
cd skills/my-skill
```

### 2. 创建 SKILL.md

```markdown
---
name: my-skill
description: 描述这个 Skill 的功能
version: 1.0.0
author: your-name
---

# My Skill

详细描述这个 Skill 的功能和使用场景。

## 使用方法

```javascript
await skill('my-skill', {
  param1: 'value1',
  param2: 'value2'
})
```

## 参数说明

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| param1 | string | 是 | 参数1说明 |
| param2 | number | 否 | 参数2说明，默认值为 0 |

## 返回值

```javascript
{
  success: true,
  data: {
    result: '处理结果'
  }
}
```

## 示例

### 示例 1：基础用法

```javascript
await skill('my-skill', { param1: 'hello' })
```

### 示例 2：完整参数

```javascript
await skill('my-skill', {
  param1: 'hello',
  param2: 42
})
```
```

### 3. 创建主文件

**JavaScript 版本 (index.js)：**

```javascript
/**
 * My Skill 主入口
 * @param {Object} params - 传入参数
 * @param {Object} context - 执行上下文
 * @returns {Object} 执行结果
 */
module.exports = async function(params, context) {
  // 1. 参数解构
  const { param1, param2 = 0 } = params
  
  // 2. 参数校验
  if (!param1) {
    throw new Error('缺少必要参数: param1')
  }
  
  // 3. 业务逻辑
  context.log('开始处理...')
  
  const result = await doSomething(param1, param2)
  
  context.log('处理完成')
  
  // 4. 返回结果
  return {
    success: true,
    data: {
      result: result,
      timestamp: new Date().toISOString()
    }
  }
}

async function doSomething(param1, param2) {
  // 实现业务逻辑
  return `${param1} - ${param2}`
}
```

**TypeScript 版本 (index.ts)：**

```typescript
interface Params {
  param1: string
  param2?: number
}

interface Context {
  log: (message: string) => void
  error: (message: string) => void
}

interface Result {
  success: boolean
  data: {
    result: string
    timestamp: string
  }
}

export default async function(params: Params, context: Context): Promise<Result> {
  const { param1, param2 = 0 } = params
  
  if (!param1) {
    throw new Error('缺少必要参数: param1')
  }
  
  context.log('开始处理...')
  
  const result = await doSomething(param1, param2)
  
  return {
    success: true,
    data: {
      result,
      timestamp: new Date().toISOString()
    }
  }
}
```

### 4. 创建 package.json

```json
{
  "name": "my-skill",
  "version": "1.0.0",
  "description": "描述这个 Skill 的功能",
  "main": "index.js",
  "scripts": {
    "test": "node test.js"
  },
  "dependencies": {
    // 如果需要外部依赖
  },
  "keywords": ["litta", "skill"],
  "author": "your-name",
  "license": "MIT"
}
```

## 上下文 API

### context.log

输出日志信息：

```javascript
context.log('普通信息')
context.log('成功信息', 'success')
context.log('警告信息', 'warning')
context.log('错误信息', 'error')
```

### context.error

输出错误信息：

```javascript
context.error('发生错误')
```

### context.callSkill

调用其他 Skill：

```javascript
const result = await context.callSkill('another-skill', params)
```

### context.config

访问配置：

```javascript
const apiKey = context.config.get('apiKey')
```

## 最佳实践

### 1. 参数校验

```javascript
function validateParams(params) {
  const required = ['param1', 'param2']
  const missing = required.filter(key => !(key in params))
  
  if (missing.length > 0) {
    throw new Error(`缺少必要参数: ${missing.join(', ')}`)
  }
  
  // 类型校验
  if (typeof params.param1 !== 'string') {
    throw new Error('param1 必须是字符串')
  }
  
  return true
}
```

### 2. 错误处理

```javascript
try {
  const result = await riskyOperation()
  return { success: true, data: result }
} catch (error) {
  context.error(`操作失败: ${error.message}`)
  return {
    success: false,
    error: error.message,
    code: error.code || 'UNKNOWN_ERROR'
  }
}
```

### 3. 超时控制

```javascript
async function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('操作超时')), ms)
  })
  
  return Promise.race([promise, timeout])
}

// 使用
const result = await withTimeout(doSomething(), 30000)
```

### 4. 重试机制

```javascript
async function withRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i === maxRetries - 1) throw error
      context.log(`第 ${i + 1} 次重试...`, 'warning')
      await sleep(1000 * (i + 1))
    }
  }
}
```

## 测试 Skill

创建 `test.js`：

```javascript
const skill = require('./index.js')

async function test() {
  const context = {
    log: console.log,
    error: console.error,
    callSkill: async (name, params) => {
      console.log(`调用 Skill: ${name}`, params)
      return { success: true }
    },
    config: {
      get: (key) => process.env[key]
    }
  }
  
  try {
    // 测试用例 1：正常情况
    const result1 = await skill({ param1: 'hello', param2: 42 }, context)
    console.log('测试 1 通过:', result1)
    
    // 测试用例 2：缺少参数
    try {
      await skill({ param2: 42 }, context)
      console.error('测试 2 失败：应该抛出错误')
    } catch (error) {
      console.log('测试 2 通过:', error.message)
    }
    
    // 测试用例 3：默认值
    const result3 = await skill({ param1: 'hello' }, context)
    console.log('测试 3 通过:', result3)
    
  } catch (error) {
    console.error('测试失败:', error)
  }
}

test()
```

运行测试：

```bash
node test.js
```

## 发布 Skill

### 1. 代码审查清单

- [ ] SKILL.md 文档完整
- [ ] 参数校验完善
- [ ] 错误处理完善
- [ ] 测试用例通过
- [ ] 代码注释清晰

### 2. 提交到仓库

```bash
git add .
git commit -m "feat: add my-skill"
git push origin main
```

### 3. 注册 Skill

```
注册 Skill my-skill 到 LITTA
```

## 示例：飞书文档同步 Skill

这是一个实际的 Skill 示例：

```javascript
// skills/sync-feishu-doc/index.js

module.exports = async function(params, context) {
  const { feishuDocToken, targetPath } = params
  
  // 参数校验
  if (!feishuDocToken || !targetPath) {
    throw new Error('缺少必要参数: feishuDocToken 或 targetPath')
  }
  
  context.log(`开始同步飞书文档: ${feishuDocToken}`)
  
  try {
    // 1. 读取飞书文档
    const docContent = await context.callSkill('feishu-doc', {
      action: 'read',
      doc_token: feishuDocToken
    })
    
    // 2. 转换为 Markdown
    const markdown = convertToMarkdown(docContent)
    
    // 3. 写入文件
    const fs = require('fs')
    const path = require('path')
    
    const fullPath = path.join(process.cwd(), 'docs', targetPath)
    fs.mkdirSync(path.dirname(fullPath), { recursive: true })
    fs.writeFileSync(fullPath, markdown)
    
    context.log(`文档已更新: ${targetPath}`)
    
    // 4. Git 提交（可选）
    if (params.autoCommit) {
      const { execSync } = require('child_process')
      execSync('git add .')
      execSync(`git commit -m "docs: sync from feishu ${feishuDocToken}"`)
      execSync('git push')
      context.log('已提交到 Git')
    }
    
    return {
      success: true,
      message: '文档同步成功',
      path: targetPath
    }
    
  } catch (error) {
    context.error(`同步失败: ${error.message}`)
    throw error
  }
}

function convertToMarkdown(content) {
  // 转换逻辑
  return content
}
```

## 下一步

- [Skills 概述](/skills/) - 了解 Skills 系统
- [使用指南](/skills/usage) - 学习使用 Skills
