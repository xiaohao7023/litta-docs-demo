# 模型配置

本文档介绍如何配置 LITTA 的 AI 模型。

## 基础配置

### 配置文件

创建 `config.json`：

```json
{
  "model": {
    "provider": "openai",
    "model": "gpt-4-turbo-preview",
    "apiKey": "your-api-key",
    "temperature": 0.7,
    "maxTokens": 2000
  }
}
```

### 环境变量

你也可以使用环境变量配置：

```bash
export LITTA_MODEL_PROVIDER=openai
export LITTA_MODEL_NAME=gpt-4-turbo-preview
export LITTA_API_KEY=your-api-key
```

## 高级配置

### 温度参数

`temperature` 控制输出的随机性：

- **0.0**：确定性输出，适合代码生成
- **0.7**：平衡，适合一般对话
- **1.0**：创造性输出，适合创意写作

```json
{
  "model": {
    "provider": "openai",
    "model": "gpt-4-turbo-preview",
    "temperature": 0.3
  }
}
```

### 最大 Token

`maxTokens` 限制输出长度：

```json
{
  "model": {
    "maxTokens": 4000
  }
}
```

### 系统提示词

设置默认的系统提示词：

```json
{
  "model": {
    "systemPrompt": "你是 LITTA 助手，帮助用户了解主动健康服务操作系统。"
  }
}
```

## 多模型配置

### 按任务类型配置

```json
{
  "models": {
    "default": {
      "provider": "openai",
      "model": "gpt-4-turbo-preview"
    },
    "coding": {
      "provider": "openai",
      "model": "gpt-4-turbo-preview",
      "temperature": 0.2
    },
    "writing": {
      "provider": "anthropic",
      "model": "claude-3-opus-20240229",
      "temperature": 0.8
    },
    "long-context": {
      "provider": "moonshot",
      "model": "kimi-k2.5"
    }
  }
}
```

### 使用特定模型

```javascript
// 使用默认模型
const response = await litta.chat('你好')

// 使用特定模型
const code = await litta.chat('写个排序算法', { model: 'coding' })

// 使用长文本模型
const summary = await litta.chat('总结这篇文档', { model: 'long-context' })
```

## 流式输出

启用流式输出：

```json
{
  "model": {
    "stream": true
  }
}
```

代码中使用：

```javascript
const stream = await litta.chatStream('你好')
for await (const chunk of stream) {
  process.stdout.write(chunk.content)
}
```

## 函数调用

配置函数调用能力：

```json
{
  "model": {
    "functions": [
      {
        "name": "getWeather",
        "description": "获取天气信息",
        "parameters": {
          "type": "object",
          "properties": {
            "city": {
              "type": "string",
              "description": "城市名称"
            }
          },
          "required": ["city"]
        }
      }
    ]
  }
}
```

## 代理配置

如果你的网络需要通过代理访问：

```json
{
  "model": {
    "proxy": {
      "host": "proxy.company.com",
      "port": 8080,
      "auth": {
        "username": "user",
        "password": "pass"
      }
    }
  }
}
```

## 超时配置

设置请求超时：

```json
{
  "model": {
    "timeout": 30000
  }
}
```

## 重试配置

配置失败重试：

```json
{
  "model": {
    "retries": 3,
    "retryDelay": 1000
  }
}
```

## 下一步

- [Providers](/models/providers) - 查看支持的 Providers
- [模型列表](/models/list) - 查看完整模型列表
