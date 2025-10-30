# 部署应用

了解如何将您的 Lovable 应用发布到生产环境，让全世界都能访问。

## 快速部署

### 一键发布

Lovable 提供最简单的部署方式：

1. 点击右上角的 **"Publish"** 按钮
   - 桌面端：右上角
   - 移动端：预览模式下的右下角

2. 等待部署完成（通常 30-60 秒）

3. 获得公开访问地址：
   ```
   https://your-project.lovable.app
   ```

### 自动部署

每次您对项目进行更改：
- 预览环境实时更新
- 点击 Publish 更新生产环境

## 部署域名

### Lovable 子域名

默认域名格式：
```
https://[project-name].lovable.app
```

特点：
- ✅ 免费
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 无需配置

### 自定义域名

使用您自己的域名（需要付费计划）：

#### 步骤 1: 添加域名

1. 进入 Project → Settings → Domains
2. 点击 "Connect Domain"
3. 输入您的域名：`www.yourdomain.com`

#### 步骤 2: 配置 DNS

在您的域名服务商（如阿里云、腾讯云）：

**CNAME 记录**（推荐）：
```
类型: CNAME
主机: www
值: your-project.lovable.app
```

**A 记录**（备选）：
```
类型: A
主机: @
值: [Lovable 提供的 IP]
```

#### 步骤 3: 验证域名

1. DNS 设置生效（可能需要几小时）
2. Lovable 自动验证
3. 自动配置 SSL 证书
4. 域名开始生效

### 域名配置示例

#### 配置根域名

```
yourdomain.com → your-project.lovable.app
```

设置：
```
类型: A
主机: @
值: [Lovable IP]
```

#### 配置子域名

```
app.yourdomain.com → your-project.lovable.app
```

设置：
```
类型: CNAME
主机: app
值: your-project.lovable.app
```

#### 同时支持 www 和根域名

```
yourdomain.com → CNAME/A 记录
www.yourdomain.com → CNAME 记录
```

## 环境管理

### 预览环境

- 地址：项目编辑器右侧窗口
- 用途：实时预览开发中的更改
- 特点：仅您可访问

### 生产环境

- 地址：`.lovable.app` 或自定义域名
- 用途：公开访问的正式版本
- 特点：需要手动 Publish 更新

### 最佳实践

1. **测试后发布**
   - 在预览环境测试功能
   - 确认无问题后 Publish

2. **重要更新前备份**
   - Lovable 自动版本控制
   - 可随时回滚到之前版本

3. **分阶段更新**
   - 先更新小功能
   - 测试稳定后添加大功能

## 性能优化

### 图片优化

```
优化所有图片：
- 压缩图片大小
- 使用 WebP 格式
- 添加懒加载
```

### 代码分割

Lovable 自动实现：
- 路由级代码分割
- 按需加载组件
- Tree Shaking

### CDN 加速

Lovable 应用自动使用全球 CDN：
- 静态资源缓存
- 就近访问
- 自动优化

### 缓存策略

```
配置缓存：
- 静态资源长期缓存
- API 数据短期缓存
- 关键内容实时更新
```

## SEO 优化

### 基础 SEO

```
优化 SEO：
- 设置页面标题和描述
- 添加 Open Graph 标签
- 配置 favicon
- 生成 sitemap
```

更新 `index.html`：

```html
<title>您的网站名称</title>
<meta name="description" content="网站描述" />
<meta property="og:title" content="分享标题" />
<meta property="og:description" content="分享描述" />
<meta property="og:image" content="分享图片 URL" />
```

### 动态 SEO

```
为每个页面设置独立的 SEO 信息
```

使用 `react-helmet` 或类似工具。

### robots.txt

已包含基础 `robots.txt`，允许搜索引擎爬取。

## 监控和分析

### 访问统计

集成 Google Analytics：

```
添加 Google Analytics 跟踪代码
```

在 `index.html` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 错误监控

```
集成 Sentry 错误监控
```

### 性能监控

使用浏览器开发工具：
- Lighthouse 评分
- Performance 面板
- Network 面板

## 安全性

### HTTPS

自动启用，无需配置。

### 内容安全策略

```
添加 CSP 头部，增强安全性
```

### 环境变量

敏感信息使用 Secrets：
- API 密钥
- 数据库连接
- 第三方服务凭证

## 备份和回滚

### 版本历史

Lovable 自动保存所有版本：

1. 在编辑器中查看历史记录
2. 预览任何历史版本
3. 点击 "Restore" 回滚

### 数据库备份

Lovable Cloud 自动备份数据库：
- 每日自动备份
- 保留 7 天
- 可联系支持恢复

## 故障排查

### 部署失败

检查：
- 是否有代码错误
- 查看构建日志
- 确认依赖安装成功

### 页面无法访问

检查：
- DNS 配置是否正确
- 域名是否已验证
- SSL 证书是否有效

### 功能异常

1. 在预览环境测试
2. 查看浏览器控制台
3. 检查 API 请求
4. 验证数据库连接

### 性能问题

- 使用 Lighthouse 诊断
- 检查大文件加载
- 优化数据库查询
- 考虑添加缓存

## 持续集成

### GitHub 集成

```
连接 GitHub 仓库，实现：
- 代码自动同步
- 支持本地开发
- 代码审查流程
```

详见 [GitHub 集成](github)。

### 自动化工作流

通过 GitHub Actions：
- 自动运行测试
- 代码质量检查
- 自动部署

## 扩展性

### 流量增长

Lovable 应用自动扩展：
- CDN 自动分发
- 数据库自动扩容
- 无需手动配置

### 数据库优化

流量增大时：
- 添加索引
- 优化查询
- 考虑缓存
- 升级数据库计划

## 成本管理

### Lovable 定价

- 基础部署：免费
- 自定义域名：付费计划
- Cloud 使用：按量计费

查看详情：[lovable.dev/pricing](https://lovable.dev/pricing)

### 优化成本

- 合理使用数据库
- 优化 API 调用次数
- 压缩静态资源
- 监控使用量

## 生产检查清单

部署前检查：

- [ ] 所有功能测试通过
- [ ] 移动端适配完成
- [ ] SEO 信息已配置
- [ ] 分析工具已集成
- [ ] 错误处理完善
- [ ] 加载状态显示
- [ ] 性能优化完成
- [ ] 安全性检查
- [ ] 备份策略确认
- [ ] 域名配置完成

## 下一步

- 🔗 了解 [GitHub 集成](github)
- 🌐 配置 [自定义域名](custom-domain)
- 📊 集成分析和监控工具
