# 自定义域名

了解如何为您的 Lovable 应用配置自定义域名，使用您自己的品牌域名。

## 前提条件

- ✅ Lovable 付费计划（自定义域名功能）
- ✅ 已购买域名（阿里云、腾讯云、GoDaddy 等）
- ✅ 可以访问域名的 DNS 设置

## 添加自定义域名

### 步骤 1: 进入域名设置

1. 打开您的 Lovable 项目
2. 点击项目名称 → **Settings**
3. 选择 **Domains** 标签
4. 点击 **"Connect Domain"**

### 步骤 2: 输入域名

输入您要连接的域名：

```
www.yourdomain.com
```

或

```
yourdomain.com
```

点击 **"Add Domain"**。

### 步骤 3: 配置 DNS

Lovable 会显示需要添加的 DNS 记录。

## DNS 配置

### 方案 1: CNAME 记录（推荐）

适用于子域名（如 `www.yourdomain.com`）

在域名服务商的 DNS 设置中添加：

| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| CNAME | www | your-project.lovable.app |

#### 示例：阿里云

1. 登录阿里云控制台
2. 进入域名管理
3. 点击解析设置
4. 添加记录：
   - 记录类型：CNAME
   - 主机记录：www
   - 记录值：your-project.lovable.app
   - TTL：10分钟

### 方案 2: A 记录

适用于根域名（如 `yourdomain.com`）

| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| A | @ | [Lovable 提供的 IP] |

Lovable 会在域名设置页面显示具体的 IP 地址。

### 方案 3: 同时配置根域名和 www

大多数情况下，您希望两个都能访问：

```
yourdomain.com → 显示网站
www.yourdomain.com → 显示网站
```

配置：

| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| A | @ | [Lovable IP] |
| CNAME | www | your-project.lovable.app |

## 常见域名服务商配置

### 阿里云

1. 登录 [阿里云控制台](https://dc.console.aliyun.com)
2. 域名 → 域名列表 → 解析
3. 添加记录
4. TTL 选择 10 分钟

### 腾讯云

1. 登录 [腾讯云 DNSPod](https://console.dnspod.cn)
2. 我的域名 → 添加记录
3. 填写记录信息
4. 保存

### Cloudflare

1. 登录 Cloudflare
2. 选择域名 → DNS → Records
3. Add record
4. 填写 CNAME 或 A 记录
5. 保存（可以启用代理）

### GoDaddy

1. 登录 GoDaddy
2. My Products → Domains
3. DNS → Manage Zones
4. Add Record
5. 选择类型并填写信息

### Namecheap

1. 登录 Namecheap
2. Domain List → Manage
3. Advanced DNS
4. Add New Record
5. 保存更改

## 验证和等待

### DNS 传播时间

DNS 更改需要时间生效：

- **最快**: 几分钟
- **通常**: 1-2 小时
- **最慢**: 24-48 小时

### 检查 DNS 配置

使用在线工具检查：

```
https://dnschecker.org
```

输入您的域名，查看全球 DNS 状态。

### 在 Lovable 中验证

1. 返回 Lovable 域名设置
2. 等待验证状态变为 ✅
3. 验证通过后，SSL 证书自动配置

## SSL/HTTPS 证书

### 自动配置

域名验证通过后，Lovable 自动：

1. 申请 Let's Encrypt SSL 证书
2. 配置 HTTPS
3. 强制 HTTPS 重定向

通常在验证后 5-10 分钟完成。

### 证书状态

在域名设置中查看：
- ⏳ Pending: 正在申请
- ✅ Active: 已生效
- ❌ Failed: 失败（联系支持）

### 证书续期

Lovable 自动续期证书，无需手动操作。

## 域名配置案例

### 案例 1: 只使用 www

```
用户访问: www.yourdomain.com
配置: CNAME www → your-project.lovable.app
```

### 案例 2: 只使用根域名

```
用户访问: yourdomain.com
配置: A @ → [Lovable IP]
```

### 案例 3: 两者都支持

```
用户访问: yourdomain.com 或 www.yourdomain.com
配置:
  A @ → [Lovable IP]
  CNAME www → your-project.lovable.app
```

### 案例 4: 子域名应用

```
用户访问: app.yourdomain.com
配置: CNAME app → your-project.lovable.app
```

### 案例 5: 多个子域名

```
app.yourdomain.com → 主应用
blog.yourdomain.com → 博客
api.yourdomain.com → API
```

每个都配置一个 CNAME 记录。

## 高级配置

### 301 重定向

让根域名跳转到 www：

在域名服务商配置 URL 转发：
```
yourdomain.com → 301 → www.yourdomain.com
```

### Cloudflare 代理

如果使用 Cloudflare：

1. 添加 CNAME 记录
2. 启用橙色云朵（代理）
3. 获得 Cloudflare 的额外优化

### 子路径部署

不支持子路径部署：
```
❌ yourdomain.com/app
✅ app.yourdomain.com
```

## 故障排查

### 域名无法访问

#### 检查 DNS 配置

```bash
# macOS/Linux
dig yourdomain.com
nslookup yourdomain.com

# Windows
nslookup yourdomain.com
```

确认记录值是否正确。

#### 清除 DNS 缓存

```bash
# macOS
sudo dscacheutil -flushcache

# Windows
ipconfig /flushdns

# Linux
sudo systemd-resolve --flush-caches
```

### SSL 证书问题

如果 HTTPS 不工作：

1. 等待 10-15 分钟
2. 确认 DNS 已完全生效
3. 尝试清除浏览器缓存
4. 使用隐私/无痕模式测试

### 显示其他网站

可能原因：
- DNS 未生效
- 缓存问题
- 配置错误

解决：
- 使用 DNS 检查工具
- 等待 DNS 传播
- 验证 DNS 记录配置

### 部分地区无法访问

DNS 在全球传播需要时间：
- 使用 dnschecker.org 查看状态
- 通常 24 小时内完全生效

## SEO 迁移

### 从旧域名迁移

如果从其他域名迁移：

#### 设置 301 重定向

在旧服务器配置：
```
olddomain.com → 301 → newdomain.com
```

#### 更新 Google Search Console

1. 添加新域名
2. 验证所有权
3. 提交新的 sitemap

#### 更新外部链接

- 更新社交媒体链接
- 通知合作伙伴
- 更新广告链接

### 保持 SEO 排名

- 使用 301 重定向
- 保持 URL 结构
- 更新 sitemap
- 保持内容不变

## 多域名管理

### 连接多个域名

可以为一个项目连接多个域名：

```
yourdomain.com
www.yourdomain.com
yourotherdomain.com
```

每个都需要单独配置 DNS。

### 主域名

在域名设置中设置主域名，其他域名会自动重定向。

## 移除域名

### 断开连接

1. 进入域名设置
2. 找到要移除的域名
3. 点击 "Remove"
4. 确认删除

### 清理 DNS

记得在域名服务商处：
- 删除相关 DNS 记录
- 或修改指向新地址

## 成本

### Lovable 费用

- 自定义域名功能需要付费计划
- 查看当前定价：[lovable.dev/pricing](https://lovable.dev/pricing)

### 域名费用

- 域名注册/续费费用由域名服务商收取
- 通常 ¥50-200/年
- DNS 服务通常免费

### SSL 证书

- Lovable 提供的 SSL 证书完全免费
- 自动续期
- 无需额外费用

## 最佳实践

### 1. 选择合适的域名

- 简短易记
- 与品牌相关
- 避免复杂拼写

### 2. 使用 HTTPS

- 已自动启用
- 有助于 SEO
- 提升用户信任

### 3. CDN 优化

- Lovable 自动使用 CDN
- 全球快速访问
- 无需额外配置

### 4. 监控状态

- 定期检查域名解析
- 关注 SSL 证书状态
- 设置域名续费提醒

## 常见问题

### Q: 可以使用免费域名吗？

A: 可以，只要能配置 DNS 记录。但建议使用正式的顶级域名。

### Q: 可以转移已有网站的域名吗？

A: 可以，但需要修改 DNS 配置，旧网站会无法访问。

### Q: 多个项目可以使用同一个域名吗？

A: 不可以。一个域名只能指向一个 Lovable 项目。但可以使用不同的子域名。

### Q: 可以使用国际域名（非 .com）吗？

A: 可以，支持所有顶级域名（.com、.net、.cn、.io 等）。

## 下一步

- 🚀 完成 [部署应用](deployment)
- 🔗 配置 [GitHub 集成](github)
- 📊 添加域名分析
- 🎯 优化 SEO
