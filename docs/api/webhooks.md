# Webhooks

Webhooks 用于接收 LITTA 平台的实时事件通知。

## 什么是 Webhooks

Webhooks 是一种 HTTP 回调机制，当特定事件发生时，LITTA 会向你配置的 URL 发送 HTTP POST 请求。

**适用场景：**
- 实时同步订单状态
- 会员注册/注销通知
- 预约状态变更
- 支付结果通知

## 配置 Webhooks

### 1. 配置接收地址

1. 登录 [LITTA 商家后台](https://merchant.litta.com)
2. 进入「设置」→「开发者中心」→「Webhooks」
3. 点击「添加 Webhook」
4. 填写接收 URL 和选择事件类型
5. 保存配置

### 2. 验证签名

为了确保请求来自 LITTA，我们会对请求进行签名：

```http
X-Litta-Signature: sha256={signature}
X-Litta-Timestamp: 1234567890
```

**验证示例（Node.js）：**

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}
```

## 事件类型

### 订单事件

| 事件 | 说明 |
|------|------|
| order.created | 订单创建 |
| order.paid | 订单支付成功 |
| order.refunded | 订单退款 |
| order.cancelled | 订单取消 |

### 会员事件

| 事件 | 说明 |
|------|------|
| member.registered | 会员注册 |
| member.updated | 会员信息更新 |
| member.tagged | 会员被添加标签 |

### 预约事件

| 事件 | 说明 |
|------|------|
| booking.created | 预约创建 |
| booking.confirmed | 预约确认 |
| booking.cancelled | 预约取消 |
| booking.checked_in | 预约核销 |

## 请求格式

```json
{
  "id": "evt_1234567890",
  "type": "order.paid",
  "created_at": "2024-03-30T12:00:00Z",
  "data": {
    "order_id": "ord_123456",
    "amount": 29900,
    "currency": "CNY",
    "member_id": "mem_123456",
    "store_id": "sto_123456"
  }
}
```

## 最佳实践

1. **幂等性处理** - 同一事件可能多次发送，请根据事件 ID 去重
2. **快速响应** - 请在 5 秒内返回 200 状态码
3. **异步处理** - 收到 Webhook 后异步处理业务逻辑
4. **重试机制** - 如果返回非 200，LITTA 会在 1 小时内重试 3 次

## 调试工具

使用 [webhook.site](https://webhook.site) 或 [ngrok](https://ngrok.com) 进行本地调试。

## 下一步

- [API 概览](/api/) - 了解 API 接口
- [SDK 下载](/api/sdk) - 快速接入工具包
