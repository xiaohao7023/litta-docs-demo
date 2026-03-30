# Providers

LITTA 支持多种 AI 模型提供商，本文档列出所有可用的 Providers。

## 已支持的 Providers

### OpenAI

| 模型 | 上下文长度 | 说明 |
|------|-----------|------|
| GPT-4 | 8K / 32K | 最强大的多模态模型 |
| GPT-4 Turbo | 128K | 最新版本，支持视觉 |
| GPT-3.5 Turbo | 16K | 性价比高，响应快 |

**配置示例：**

```json
{
  "provider": "openai",
  "model": "gpt-4-turbo-preview",
  "apiKey": "your-api-key"
}
```

### Anthropic

| 模型 | 上下文长度 | 说明 |
|------|-----------|------|
| Claude 3 Opus | 200K | 最强大的 Claude 模型 |
| Claude 3 Sonnet | 200K | 平衡性能和成本 |
| Claude 3 Haiku | 200K | 最快响应 |

**配置示例：**

```json
{
  "provider": "anthropic",
  "model": "claude-3-opus-20240229",
  "apiKey": "your-api-key"
}
```

### Moonshot (Kimi)

| 模型 | 上下文长度 | 说明 |
|------|-----------|------|
| Kimi K2.5 | 256K | 长文本处理能力强 |
| Kimi K2 | 128K | 通用能力强 |

**配置示例：**

```json
{
  "provider": "moonshot",
  "model": "kimi-k2.5",
  "apiKey": "your-api-key"
}
```

## 即将支持的 Providers

我们正在接入更多模型提供商：

- [x] OpenAI
- [x] Anthropic
- [x] Moonshot (Kimi)
- [ ] Google Gemini
- [ ] Azure OpenAI
- [ ] 文心一言
- [ ] 通义千问

## Provider 对比

| Provider | 优势 | 适用场景 |
|----------|------|---------|
| OpenAI | 生态完善，功能全面 | 通用场景 |
| Anthropic | 长文本，安全性高 | 文档处理 |
| Moonshot | 中文优化，长文本 | 中文场景 |

## 如何选择 Provider

### 1. 根据任务类型

- **代码生成**：GPT-4 Turbo、Claude 3 Opus
- **长文档处理**：Claude 3 (200K)、Kimi (256K)
- **快速响应**：GPT-3.5 Turbo、Claude 3 Haiku
- **中文场景**：Kimi、文心一言

### 2. 根据成本考虑

| Provider | 输入价格 | 输出价格 |
|----------|---------|---------|
| GPT-3.5 Turbo | $0.5/M tokens | $1.5/M tokens |
| GPT-4 Turbo | $10/M tokens | $30/M tokens |
| Claude 3 Haiku | $0.25/M tokens | $1.25/M tokens |
| Claude 3 Opus | $15/M tokens | $75/M tokens |
| Kimi | 按需定价 | 按需定价 |

### 3. 根据延迟要求

- **低延迟**：GPT-3.5 Turbo、Claude 3 Haiku
- **平衡**：GPT-4 Turbo、Claude 3 Sonnet
- **高质量**：GPT-4、Claude 3 Opus

## 配置多个 Providers

你可以在配置中设置多个 Provider，系统会根据任务自动选择：

```json
{
  "providers": [
    {
      "name": "openai",
      "model": "gpt-4-turbo-preview",
      "apiKey": "sk-xxx",
      "priority": 1
    },
    {
      "name": "moonshot",
      "model": "kimi-k2.5",
      "apiKey": "sk-xxx",
      "priority": 2
    }
  ]
}
```

## 故障转移

当某个 Provider 不可用时，系统会自动切换到备用 Provider：

```json
{
  "failover": true,
  "failoverProviders": ["openai", "moonshot", "anthropic"]
}
```

## 下一步

- [模型配置](/models/config) - 了解如何配置模型
- [模型列表](/models/list) - 查看完整模型列表
- [Skills 概述](/skills/) - 了解 Skills 系统
