# 模型列表

本文档列出 LITTA 支持的所有 AI 模型。

## OpenAI

### GPT-4 系列

| 模型 | 上下文 | 输入价格 | 输出价格 | 特点 |
|------|--------|---------|---------|------|
| gpt-4-turbo-preview | 128K | $10/M | $30/M | 最新版本，支持视觉 |
| gpt-4-0125-preview | 128K | $10/M | $30/M | 2024年1月版本 |
| gpt-4-1106-preview | 128K | $10/M | $30/M | 2023年11月版本 |
| gpt-4 | 8K | $30/M | $60/M | 稳定版本 |
| gpt-4-32k | 32K | $60/M | $120/M | 长上下文 |

### GPT-3.5 系列

| 模型 | 上下文 | 输入价格 | 输出价格 | 特点 |
|------|--------|---------|---------|------|
| gpt-3.5-turbo-0125 | 16K | $0.5/M | $1.5/M | 最新版本 |
| gpt-3.5-turbo | 4K | $1.5/M | $2/M | 稳定版本 |
| gpt-3.5-turbo-16k | 16K | $3/M | $4/M | 长上下文 |

## Anthropic

### Claude 3 系列

| 模型 | 上下文 | 输入价格 | 输出价格 | 特点 |
|------|--------|---------|---------|------|
| claude-3-opus-20240229 | 200K | $15/M | $75/M | 最强大 |
| claude-3-sonnet-20240229 | 200K | $3/M | $15/M | 平衡 |
| claude-3-haiku-20240307 | 200K | $0.25/M | $1.25/M | 最快 |

## Moonshot (Kimi)

| 模型 | 上下文 | 特点 |
|------|--------|------|
| kimi-k2.5 | 256K | 最新版本，长文本 |
| kimi-k2 | 128K | 通用能力强 |
| kimi-k1.5 | 128K | 稳定版本 |

## 模型选择建议

### 按场景选择

| 场景 | 推荐模型 | 原因 |
|------|---------|------|
| 通用对话 | GPT-4 Turbo / Claude 3 Sonnet | 能力强，价格合理 |
| 代码生成 | GPT-4 Turbo | 代码能力强 |
| 长文档处理 | Kimi K2.5 / Claude 3 Opus | 上下文长 |
| 快速响应 | Claude 3 Haiku | 速度快 |
| 中文场景 | Kimi | 中文优化 |
| 创意写作 | Claude 3 Opus | 创造性强 |

### 按成本选择

| 预算 | 推荐模型 |
|------|---------|
| 低成本 | GPT-3.5 Turbo / Claude 3 Haiku |
| 中等 | Claude 3 Sonnet |
| 高预算 | GPT-4 Turbo / Claude 3 Opus |

## 模型能力对比

### 代码能力

1. GPT-4 Turbo ⭐⭐⭐⭐⭐
2. Claude 3 Opus ⭐⭐⭐⭐⭐
3. Claude 3 Sonnet ⭐⭐⭐⭐
4. Kimi K2.5 ⭐⭐⭐⭐

### 长文本处理

1. Kimi K2.5 (256K) ⭐⭐⭐⭐⭐
2. Claude 3 系列 (200K) ⭐⭐⭐⭐⭐
3. GPT-4 Turbo (128K) ⭐⭐⭐⭐

### 中文能力

1. Kimi K2.5 ⭐⭐⭐⭐⭐
2. GPT-4 Turbo ⭐⭐⭐⭐
3. Claude 3 Opus ⭐⭐⭐⭐

### 推理能力

1. Claude 3 Opus ⭐⭐⭐⭐⭐
2. GPT-4 Turbo ⭐⭐⭐⭐⭐
3. Kimi K2.5 ⭐⭐⭐⭐

## 下一步

- [Providers](/models/providers) - 了解 Providers
- [模型配置](/models/config) - 学习如何配置模型
