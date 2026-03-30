# SDK 下载

LITTA 提供多语言 SDK，帮助开发者快速接入。

## JavaScript / TypeScript

### 安装

```bash
npm install @litta/sdk
# 或
yarn add @litta/sdk
```

### 使用示例

```javascript
import { LittaClient } from '@litta/sdk';

const client = new LittaClient({
  apiKey: 'sk_live_xxxxxxxx',
  baseURL: 'https://api.litta.com/v1'
});

// 获取会员列表
const members = await client.members.list({
  limit: 10,
  offset: 0
});

// 创建预约
const booking = await client.bookings.create({
  memberId: 'mem_123456',
  serviceId: 'srv_123456',
  scheduledAt: '2024-04-01T10:00:00Z'
});
```

### GitHub

[https://github.com/litta/js-sdk](https://github.com/litta/js-sdk)

## Python

### 安装

```bash
pip install litta-sdk
```

### 使用示例

```python
from litta import LittaClient

client = LittaClient(api_key='sk_live_xxxxxxxx')

# 获取会员列表
members = client.members.list(limit=10, offset=0)

# 创建预约
booking = client.bookings.create(
    member_id='mem_123456',
    service_id='srv_123456',
    scheduled_at='2024-04-01T10:00:00Z'
)
```

### GitHub

[https://github.com/litta/python-sdk](https://github.com/litta/python-sdk)

## Java

### Maven

```xml
<dependency>
    <groupId>com.litta</groupId>
    <artifactId>litta-sdk</artifactId>
    <version>1.0.0</version>
</dependency>
```

### Gradle

```groovy
implementation 'com.litta:litta-sdk:1.0.0'
```

### 使用示例

```java
import com.litta.LittaClient;

LittaClient client = new LittaClient.Builder()
    .apiKey("sk_live_xxxxxxxx")
    .build();

// 获取会员列表
MemberList members = client.members().list(10, 0);

// 创建预约
Booking booking = client.bookings().create(
    "mem_123456",
    "srv_123456",
    "2024-04-01T10:00:00Z"
);
```

### GitHub

[https://github.com/litta/java-sdk](https://github.com/litta/java-sdk)

## Go

### 安装

```bash
go get github.com/litta/go-sdk
```

### 使用示例

```go
package main

import (
    "context"
    "log"
    
    "github.com/litta/go-sdk/litta"
)

func main() {
    client := litta.NewClient("sk_live_xxxxxxxx")
    
    // 获取会员列表
    members, err := client.Members.List(context.Background(), 10, 0)
    if err != nil {
        log.Fatal(err)
    }
    
    // 创建预约
    booking, err := client.Bookings.Create(context.Background(), &litta.CreateBookingRequest{
        MemberID:   "mem_123456",
        ServiceID:  "srv_123456",
        ScheduledAt: "2024-04-01T10:00:00Z",
    })
    if err != nil {
        log.Fatal(err)
    }
    
    log.Printf("Booking created: %s", booking.ID)
}
```

### GitHub

[https://github.com/litta/go-sdk](https://github.com/litta/go-sdk)

## 其他语言

如需其他语言支持，请联系开发者支持：

- 📧 developer@litta.com
- 💬 开发者微信群（添加小助手：litta-dev）

## 下一步

- [API 概览](/api/) - 了解 API 接口
- [Webhooks](/api/webhooks) - 接收实时事件通知
