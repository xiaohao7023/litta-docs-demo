# Skills 使用指南

本文档介绍如何在 LITTA 中使用 Skills。

## 基础用法

### 自然语言调用

最简单的方式是直接描述你的需求：

```
帮我查一下明天的天气
```

LITTA 会自动识别并调用相应的 Skill。

### 显式调用

你也可以显式指定 Skill 名称：

```
使用 weather Skill 查北京明天天气
```

### 代码调用

在代码中使用：

```javascript
const result = await skill('weather', {
  city: '北京',
  date: 'tomorrow'
})
```

## 参数传递

### 位置参数

```javascript
await skill('echo', 'Hello', 'World')
```

### 命名参数

```javascript
await skill('send-email', {
  to: 'user@example.com',
  subject: 'Hello',
  body: 'World'
})
```

### 混合参数

```javascript
await skill('send-email', 'user@example.com', {
  subject: 'Hello',
  body: 'World'
})
```

## 常用 Skills 示例

### 发送邮件

```javascript
await skill('send-email', {
  to: 'team@litta.com',
  subject: '项目进度更新',
  body: '本周完成了以下工作...',
  attachments: ['report.pdf']
})
```

### 创建日程

```javascript
await skill('create-event', {
  title: '产品评审会',
  start: '2024-03-30 14:00',
  end: '2024-03-30 15:30',
  attendees: ['zhangsan@litta.com', 'lisi@litta.com'],
  location: '会议室 A'
})
```

### 生成文档

```javascript
await skill('create-doc', {
  title: '项目计划书',
  template: 'project-plan',
  data: {
    projectName: 'LITTA Docs',
    startDate: '2024-03-01',
    endDate: '2024-06-01'
  }
})
```

### 数据分析

```javascript
await skill('analyze-data', {
  source: 'sales-data.csv',
  analysis: 'trend',
  output: 'report.pdf'
})
```

### 文件操作

```javascript
// 读取文件
const content = await skill('read-file', 'document.txt')

// 写入文件
await skill('write-file', {
  path: 'output.txt',
  content: 'Hello World'
})

// 批量处理
await skill('batch-process', {
  files: '*.csv',
  operation: 'convert',
  format: 'xlsx'
})
```

## 链式调用

多个 Skills 可以链式调用：

```javascript
// 读取数据 → 分析 → 生成报告 → 发送邮件
const data = await skill('read-file', 'data.csv')
const analysis = await skill('analyze-data', { source: data })
const report = await skill('generate-report', { data: analysis })
await skill('send-email', {
  to: 'boss@litta.com',
  subject: '数据分析报告',
  attachments: [report]
})
```

## 条件调用

根据条件选择不同的 Skill：

```javascript
const weather = await skill('weather', { city: '北京' })

if (weather.rain) {
  await skill('send-message', {
    to: 'team',
    message: '今天有雨，记得带伞！'
  })
}
```

## 批量调用

批量执行相同的 Skill：

```javascript
const cities = ['北京', '上海', '广州', '深圳']

const weatherData = await Promise.all(
  cities.map(city => skill('weather', { city }))
)
```

## 错误处理

### try-catch

```javascript
try {
  await skill('send-email', {
    to: 'invalid-email',
    subject: 'Test'
  })
} catch (error) {
  console.error('发送失败:', error.message)
}
```

### 默认值

```javascript
const result = await skill('weather', { city: '北京' })
  .catch(() => ({ temp: 20, condition: '未知' }))
```

## 高级用法

### 自定义超时

```javascript
await skill('long-task', {
  timeout: 30000  // 30秒超时
})
```

### 进度回调

```javascript
await skill('upload-file', {
  path: 'large-file.zip',
  onProgress: (percent) => {
    console.log(`上传进度: ${percent}%`)
  }
})
```

### 取消操作

```javascript
const controller = new AbortController()

skill('long-task', {
  signal: controller.signal
})

// 5秒后取消
setTimeout(() => controller.abort(), 5000)
```

## 调试技巧

### 查看可用 Skills

```
列出所有可用的 Skills
```

### 查看 Skill 详情

```
查看 send-email Skill 的文档
```

### 测试模式

```javascript
// 测试模式不会真正执行
await skill('send-email', {
  to: 'test@example.com',
  dryRun: true
})
```

## 下一步

- [Skills 概述](/skills/) - 了解 Skills 系统
- [开发指南](/skills/development) - 学习开发 Skills
