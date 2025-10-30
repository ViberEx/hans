# 设计系统

设计系统是保持应用视觉一致性的关键。Lovable 使用现代化的设计系统，让您的应用看起来专业且统一。

## 什么是设计系统

设计系统定义了应用的：

- 🎨 **颜色方案**: 主色、辅助色、背景色等
- 📏 **间距规范**: 统一的 margin 和 padding
- ✍️ **字体系统**: 字号、字重、行高
- 🔘 **组件样式**: 按钮、卡片、表单等
- 🌗 **明暗主题**: 自动适配系统主题

## Lovable 的技术栈

### Tailwind CSS

Lovable 使用 Tailwind CSS 作为样式框架：

```jsx
// 示例
<button className="bg-primary text-primary-foreground px-4 py-2 rounded">
  点击我
</button>
```

### shadcn/ui

所有 UI 组件基于 shadcn/ui：

- 高度可定制
- 无需安装，直接使用
- 遵循最佳实践

### 颜色系统

Lovable 使用语义化的颜色变量：

```css
/* 示例 */
--primary: 蓝色     /* 主要操作 */
--secondary: 灰色   /* 次要操作 */
--accent: 紫色      /* 强调元素 */
--destructive: 红色 /* 警告/删除 */
```

## 如何自定义设计系统

### 方法 1: 通过提示词

```
更新设计系统：
- 主色改为绿色 (#10b981)
- 按钮圆角改为 12px
- 卡片添加轻微阴影
```

Lovable 会自动修改 `index.css` 和 `tailwind.config.ts`。

### 方法 2: 直接修改代码

如果启用了代码编辑功能：

1. 打开 `src/index.css`
2. 修改 CSS 变量
3. 保存文件，实时预览效果

```css
:root {
  --primary: 142 71% 45%;  /* HSL 格式 */
  --radius: 0.75rem;       /* 圆角大小 */
}
```

## 组件变体

shadcn/ui 组件支持多种变体：

### 按钮变体

```tsx
<Button variant="default">主要按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="outline">轮廓按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button variant="destructive">删除按钮</Button>
```

### 卡片样式

```tsx
<Card className="shadow-lg">
  <CardHeader>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>
    内容区域
  </CardContent>
</Card>
```

## 响应式设计

Tailwind 的响应式断点：

```tsx
<div className="
  w-full           /* 手机: 100% 宽度 */
  md:w-1/2         /* 平板: 50% 宽度 */
  lg:w-1/3         /* 桌面: 33% 宽度 */
">
  内容
</div>
```

断点说明：
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 暗色模式

Lovable 自动支持暗色模式：

```tsx
<div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
">
  自动适配明暗主题
</div>
```

系统会根据用户系统偏好自动切换。

## 设计一致性建议

### 1. 使用语义化颜色

❌ 不推荐:
```tsx
<Button className="bg-blue-500">确认</Button>
```

✅ 推荐:
```tsx
<Button>确认</Button>  {/* 自动使用 primary 色 */}
```

### 2. 统一间距

使用 Tailwind 的间距标度：

```tsx
<div className="p-4 md:p-6 lg:p-8">
  {/* 4 = 16px, 6 = 24px, 8 = 32px */}
</div>
```

### 3. 复用组件

不要重复创建相似的组件，使用变体代替：

```tsx
// ❌ 不推荐
<PrimaryButton />
<SecondaryButton />

// ✅ 推荐
<Button variant="primary" />
<Button variant="secondary" />
```

## 实用提示词示例

### 更新配色方案

```
将整个应用的配色方案改为：
- 主色: 深蓝色 (#1e40af)
- 强调色: 橙色 (#f97316)
- 背景: 浅灰色 (#f9fafb)
更新所有相关组件
```

### 统一圆角

```
把应用中所有元素的圆角统一改为 8px
```

### 优化间距

```
优化卡片和按钮的间距：
- 卡片内边距改为 24px
- 按钮之间的间距改为 12px
```

## 设计系统检查清单

创建应用时，检查以下要素：

- [ ] 颜色使用是否一致
- [ ] 按钮样式是否统一
- [ ] 文字大小层次是否清晰
- [ ] 间距是否遵循规律（4 的倍数）
- [ ] 圆角大小是否统一
- [ ] 明暗主题是否都适配
- [ ] 响应式布局是否完善

## 下一步

- 🚀 了解 [Lovable Cloud](lovable-cloud) 添加后端
- 📱 学习如何优化移动端体验
- 🎯 探索高级自定义技巧
