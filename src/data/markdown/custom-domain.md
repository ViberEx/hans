# 自定义域名

使用您自己的域名访问 Lovable 应用，提升品牌形象和专业度。

## 前提条件

### 必需条件

1. **付费计划**: 自定义域名功能需要 Pro 或更高级别的付费计划
2. **已拥有域名**: 您需要拥有一个域名（如 `yourdomain.com`）
3. **域名管理权限**: 能够修改域名的 DNS 设置

### 域名购买

如果还没有域名，可以从以下服务商购买：

**国际服务商**:
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)
- [Cloudflare](https://www.cloudflare.com/products/registrar/)

**中国服务商**:
- 阿里云（万网）
- 腾讯云 DNSPod
- 华为云
- 西部数码

## 默认域名

在配置自定义域名前，您的应用使用 Lovable 提供的免费子域名：

```
https://your-project.lovable.app
```

特点：
- ✅ 完全免费
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 无需配置
- ❌ 域名包含 ".lovable.app"

## 配置自定义域名

### 步骤 1: 添加域名

1. 在 Lovable 编辑器中，点击项目名称
2. 选择 **Settings** → **Domains**
3. 点击 **"Connect Domain"** 或 **"Add Custom Domain"**
4. 输入您的域名：
   - 根域名：`yourdomain.com`
   - 带 www：`www.yourdomain.com`
   - 子域名：`app.yourdomain.com`

### 步骤 2: 获取 DNS 配置信息

添加域名后，Lovable 会显示需要配置的 DNS 记录：

#### 方式 A: CNAME 记录（推荐）

```
类型: CNAME
主机: www (或您的子域名)
值: your-project.lovable.app
TTL: 自动或 3600
```

**优势**:
- 配置简单
- 自动跟随 IP 变化
- 推荐用于 www 和子域名

#### 方式 B: A 记录

```
类型: A
主机: @ (根域名) 或 www
值: [Lovable 提供的 IP 地址]
TTL: 自动或 3600
```

**用途**:
- 配置根域名（`yourdomain.com`）
- 某些 DNS 提供商不支持根域名 CNAME

### 步骤 3: 配置 DNS

#### 在阿里云配置

1. 登录 [阿里云控制台](https://dns.console.aliyun.com)
2. 进入域名管理 → 选择域名 → 解析设置
3. 点击 **"添加记录"**
4. 填写记录信息：
   - 记录类型：CNAME 或 A
   - 主机记录：www 或 @
   - 记录值：Lovable 提供的值
   - TTL：10 分钟（或默认）
5. 点击 **"确认"**

#### 在腾讯云 DNSPod 配置

1. 登录 [DNSPod 控制台](https://console.dnspod.cn)
2. 选择域名 → 添加记录
3. 填写：
   - 记录类型：CNAME 或 A
   - 主机记录：www 或 @
   - 记录值：Lovable 提供的值
   - TTL：600
4. 保存

#### 在 Cloudflare 配置

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 选择域名 → DNS → Records
3. 点击 **"Add record"**
4. 填写：
   - Type: CNAME 或 A
   - Name: www 或 @
   - Target/Content: Lovable 提供的值
   - Proxy status: 可选（橙色云朵或灰色云朵）
5. Save

#### 在 Namecheap 配置

1. 登录 Namecheap 账号
2. Domain List → Manage
3. Advanced DNS
4. Add New Record
5. 填写信息并保存

### 步骤 4: 等待 DNS 生效

DNS 配置生效需要时间：
- 最快：几分钟
- 通常：1-2 小时
- 最长：24-48 小时（极少见）

**检查 DNS 是否生效**:

在终端运行：

```bash
# 检查 CNAME
nslookup www.yourdomain.com

# 检查 A 记录
nslookup yourdomain.com

# 或使用 dig
dig www.yourdomain.com
```

### 步骤 5: 验证域名

DNS 生效后：

1. Lovable 会自动检测 DNS 配置
2. 验证通过后，自动配置 SSL 证书
3. 域名状态变为 **"Active"**
4. 现在可以通过自定义域名访问应用了！

## 域名配置方案

### 方案 1: 仅使用 www

**配置**:
```
www.yourdomain.com → CNAME → your-project.lovable.app
```

**访问**:
- ✅ `https://www.yourdomain.com` (可访问)
- ❌ `https://yourdomain.com` (无法访问)

### 方案 2: 仅使用根域名

**配置**:
```
yourdomain.com → A Record → [Lovable IP]
```

**访问**:
- ✅ `https://yourdomain.com` (可访问)
- ❌ `https://www.yourdomain.com` (无法访问)

### 方案 3: 同时支持根域名和 www（推荐）

**配置**:
```
yourdomain.com → A Record → [Lovable IP]
www.yourdomain.com → CNAME → your-project.lovable.app
```

**访问**:
- ✅ `https://yourdomain.com` (可访问)
- ✅ `https://www.yourdomain.com` (可访问)
- 可以设置重定向，统一访问方式

### 方案 4: 使用子域名

**配置**:
```
app.yourdomain.com → CNAME → your-project.lovable.app
blog.yourdomain.com → CNAME → your-project.lovable.app
```

**用途**:
- 主域名用于官网
- 子域名用于应用
- 不同子域名指向不同项目

## SSL/HTTPS

### 自动 SSL 证书

Lovable 自动为自定义域名配置 SSL 证书：

- ✅ 使用 Let's Encrypt 免费证书
- ✅ 自动续期
- ✅ 强制 HTTPS
- ✅ 支持 HTTP/2

### 证书配置时间

- 域名验证通过后，立即开始配置 SSL
- 通常 5-10 分钟内完成
- 完成前可能看到证书警告，这是正常的

### 检查 SSL 状态

访问您的域名：
- 浏览器地址栏显示锁图标 🔒
- 使用 `https://` 协议
- 证书信息显示为 Let's Encrypt

## 域名管理

### 查看已连接的域名

在 Settings → Domains 中可以查看：
- 域名列表
- 状态（验证中、已激活、错误）
- SSL 证书状态
- 添加时间

### 设置主域名

如果连接了多个域名：
1. 选择一个作为主域名
2. 其他域名可以重定向到主域名
3. 确保 SEO 一致性

### 删除域名

不再需要某个域名：
1. 在 Domains 列表中找到域名
2. 点击 **"Remove"** 或 **"Delete"**
3. 确认删除
4. DNS 记录可以保留或删除

## 常见配置场景

### 场景 1: 企业官网

**需求**: 使用公司域名

**配置**:
```
www.company.com → CNAME → company-website.lovable.app
company.com → A Record → [Lovable IP]
```

**重定向**: `company.com` → `www.company.com`

### 场景 2: SaaS 应用

**需求**: 应用使用子域名

**配置**:
```
app.yoursaas.com → CNAME → yoursaas-app.lovable.app
www.yoursaas.com → 官网
yoursaas.com → 重定向到 www
```

### 场景 3: 多语言网站

**需求**: 不同语言使用不同子域名

**配置**:
```
www.yoursite.com → CNAME → main-site.lovable.app
en.yoursite.com → CNAME → en-site.lovable.app
zh.yoursite.com → CNAME → zh-site.lovable.app
```

### 场景 4: 测试和生产环境

**需求**: 分离开发和生产

**配置**:
```
yoursite.com → CNAME → prod-project.lovable.app
staging.yoursite.com → CNAME → staging-project.lovable.app
dev.yoursite.com → CNAME → dev-project.lovable.app
```

## 故障排查

### DNS 配置不生效

**检查清单**:
- [ ] DNS 记录类型正确（CNAME 或 A）
- [ ] 主机记录正确（@ 或 www）
- [ ] 记录值正确（复制自 Lovable）
- [ ] 等待足够时间（至少 1 小时）
- [ ] 清除浏览器缓存
- [ ] 使用 `nslookup` 检查 DNS

**常见错误**:
- 主机记录写错（如 `www.yourdomain.com` 应该写 `www`）
- 记录值多了 `https://` 或结尾的 `/`
- CNAME 和 A 记录同时存在于同一主机记录

### SSL 证书错误

**症状**: 浏览器显示"不安全"警告

**可能原因**:
1. SSL 证书还在配置中（等待几分钟）
2. DNS 未正确指向 Lovable
3. 使用了 HTTP 而非 HTTPS

**解决方法**:
- 等待 SSL 自动配置完成
- 确认 DNS 正确配置
- 强制使用 HTTPS 访问

### 域名无法访问

**检查步骤**:

1. **测试 Lovable 默认域名**:
   ```
   https://your-project.lovable.app
   ```
   如果这个也无法访问，是应用本身的问题

2. **检查 DNS**:
   ```bash
   nslookup www.yourdomain.com
   ```
   应该指向 Lovable 的服务器

3. **检查域名状态**:
   在 Lovable Settings → Domains 中查看状态

4. **清除缓存**:
   - 清除浏览器缓存
   - 清除 DNS 缓存（`ipconfig /flushdns` Windows 或 `sudo dscacheutil -flushcache` macOS）

### CNAME 不允许在根域名

**问题**: 某些 DNS 提供商不允许根域名使用 CNAME

**解决方案**:
1. 使用 A 记录配置根域名
2. 使用支持 CNAME Flattening 的 DNS 服务（如 Cloudflare）
3. 仅使用 www 子域名

## 高级配置

### 使用 Cloudflare

Cloudflare 提供额外的优势：

**功能**:
- 免费 CDN 加速
- DDoS 防护
- 页面规则
- 缓存优化
- 分析统计

**配置步骤**:

1. 将域名添加到 Cloudflare
2. 更新域名服务器到 Cloudflare
3. 在 Cloudflare 添加 DNS 记录指向 Lovable
4. 开启橙色云朵（启用代理）
5. 配置 SSL/TLS 为 "Full"

**注意事项**:
- 确保 SSL/TLS 设置正确
- 页面规则不要与 Lovable 冲突
- 监控缓存设置

### 重定向配置

#### 将根域名重定向到 www

在您的 DNS 提供商配置：
```
yourdomain.com → 重定向 → www.yourdomain.com
```

或使用 Cloudflare 页面规则：
```
规则: yourdomain.com/*
转发到: https://www.yourdomain.com/$1
状态码: 301 (永久重定向)
```

#### 多域名重定向

如果有多个域名指向同一应用：
```
yourdomain.net → 重定向 → yourdomain.com
yourdomain.org → 重定向 → yourdomain.com
```

有助于：
- 统一 SEO
- 避免重复内容惩罚
- 提升用户体验

### 子路径配置

Lovable 不直接支持子路径部署（如 `yourdomain.com/app`），但可以通过反向代理实现。

## 域名最佳实践

### SEO 优化

1. **使用 HTTPS**: 搜索引擎优先 HTTPS 网站
2. **统一域名**: 选择一个主域名，其他重定向
3. **避免多个域名**: 分散权重
4. **配置 sitemap**: 帮助搜索引擎索引

### 性能优化

1. **使用 CDN**: Cloudflare 或其他 CDN 服务
2. **启用 HTTP/2**: Lovable 默认启用
3. **配置缓存**: 合理的缓存策略
4. **压缩资源**: Gzip/Brotli 压缩

### 安全性

1. **强制 HTTPS**: Lovable 自动强制
2. **定期更新 SSL**: 自动续期
3. **配置 CSP**: 内容安全策略
4. **监控证书**: 确保有效

## 成本

### Lovable 费用

- 自定义域名功能需要付费计划
- Pro 计划支持自定义域名
- 不限制域名数量（合理范围内）

### 域名注册费用

- 根据域名后缀和注册商不同
- `.com` 通常 $10-15/年
- `.cn` 通常 ¥30-50/年
- 续费可能更贵

### DNS 服务

- 大多数域名注册商免费提供 DNS
- Cloudflare 免费 DNS 服务
- 高级 DNS 服务通常 $5-20/月

## 检查清单

配置自定义域名前的检查清单：

- [ ] 已升级到付费计划
- [ ] 已拥有域名
- [ ] 有域名 DNS 管理权限
- [ ] 已在 Lovable 中添加域名
- [ ] DNS 记录已正确配置
- [ ] DNS 已生效（通过 nslookup 检查）
- [ ] SSL 证书已配置
- [ ] 域名可以正常访问
- [ ] HTTPS 正常工作
- [ ] 已测试移动端和桌面端
- [ ] 已配置重定向（如需要）
- [ ] 已更新相关链接和文档

## 下一步

- 🚀 优化 [SEO 设置](deployment#seo-优化)
- 📊 集成 [分析工具](deployment#监控和分析)
- 🔒 了解 [安全性配置](deployment#安全性)
- 🌐 探索 [性能优化](deployment#性能优化)

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
