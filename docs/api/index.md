# API 概览

LITTA 提供完善的 API 接口，帮助开发者接入商家系统。

## 快速开始

### 获取 API Key

1. 登录 [LITTA 商家后台](https://merchant.litta.com)
2. 进入「设置」→「开发者中心」
3. 点击「创建 API Key」
4. 复制并妥善保存 Key

### 基础 URL

```
https://api.litta.com/v1
```

### 认证方式

所有请求需在 Header 中携带 API Key：

```http
Authorization: Bearer {your_api_key}
```

## 接口列表

### 商家接口

| 接口 | 方法 | 说明 |
|------|------|------|
| /merchant/info | GET | 获取商家信息 |
| /merchant/stores | GET | 获取门店列表 |

### 会员接口

| 接口 | 方法 | 说明 |
|------|------|------|
| /members | GET | 获取会员列表 |
| /members/{id} | GET | 获取会员详情 |

### 订单接口

| 接口 | 方法 | 说明 |
|------|------|------|
| /orders | GET | 获取订单列表 |
| /orders/{id} | GET | 获取订单详情 |

## 错误码

| 错误码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | 未授权 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

## SDK

- [JavaScript SDK](/api/sdk)
- [Python SDK](/api/sdk)
- [Java SDK](/api/sdk)
- [Go SDK](/api/sdk)

## 下一步

- [认证与授权](/api/auth) - 详细认证说明
- [Webhooks](/api/webhooks) - 实时事件通知
