# API 概览

LITTA 提供完善的 API 接口，帮助开发者接入商家系统。

## 快速开始

### 获取 API Key

1. 登录 [LITTA 商家后台](https://merchant.litta.com)
2. 进入「设置」→「开发者中心」
3. 点击「创建 API Key」
4. 复制并妥善保存 Key

> **注意**：API Key 只显示一次，请立即保存。

### 基础 URL

```
https://api.litta.com/v1
```

### 认证方式

所有请求需在 Header 中携带 API Key：

```http
Authorization: Bearer {your_api_key}
```

### 请求示例

```bash
curl -X GET "https://api.litta.com/v1/merchant/info" \
  -H "Authorization: Bearer sk_live_xxxxxxxx"
```

## 接口列表

### 商家接口

| 接口 | 方法 | 说明 |
|------|------|------|
| /merchant/info | GET | 获取商家信息 |
| /merchant/stores | GET | 获取门店列表 |
| /merchant/stores/{id} | GET | 获取门店详情 |

### 会员接口

| 接口 | 方法 | 说明 |
|------|------|------|
| /members | GET | 获取会员列表 |
| /members/{id} | GET | 获取会员详情 |
| /members/{id}/tags | POST | 添加会员标签 |

### 订单接口

| 接口 | 方法 | 说明 |
|------|------|------|
| /orders | GET | 获取订单列表 |
| /orders/{id} | GET | 获取订单详情 |
| /orders/{id}/refund | POST | 申请退款 |

### 预约接口

| 接口 | 方法 | 说明 |
|------|------|------|
| /bookings | GET | 获取预约列表 |
| /bookings/{id} | GET | 获取预约详情 |
| /bookings/{id}/checkin | POST | 预约核销 |

## 错误码

| 错误码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | 未授权，API Key 无效 |
| 403 | 无权限访问 |
| 404 | 资源不存在 |
| 429 | 请求过于频繁 |
| 500 | 服务器内部错误 |

## 限流规则

- 每分钟最多 100 次请求
- 超过限流将返回 429 错误
- 请在代码中实现重试机制

## SDK

我们提供多语言 SDK，简化接入流程：

- [JavaScript/TypeScript SDK](/api/sdk#javascript)
- [Python SDK](/api/sdk#python)
- [Java SDK](/api/sdk#java)
- [Go SDK](/api/sdk#go)

## Webhooks

通过 Webhooks 接收实时事件通知：

- [Webhooks 配置](/api/webhooks)

## 下一步

- [Webhooks 配置](/api/webhooks) - 接收实时事件通知
- [SDK 下载](/api/sdk) - 快速接入工具包
