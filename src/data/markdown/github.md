# GitHub 集成

将您的 Lovable 项目连接到 GitHub，实现代码同步、版本控制和团队协作。

## 为什么要连接 GitHub

### 主要优势

1. **代码所有权**: 完全拥有您的代码，存储在您的 GitHub 账号中
2. **版本控制**: 利用 Git 的强大版本管理能力
3. **本地开发**: 可以在本地编辑器（VS Code、WebStorm 等）中开发
4. **团队协作**: 通过 Pull Request 进行代码审查
5. **备份安全**: 代码自动备份到 GitHub
6. **CI/CD**: 可以接入自动化测试和部署流程

### 双向同步

Lovable 的 GitHub 集成支持双向同步：
- **Lovable → GitHub**: 在 Lovable 中的修改自动推送到 GitHub
- **GitHub → Lovable**: 通过 Pull Request 将代码改动同步回 Lovable

## 连接 GitHub

### 前提条件

- GitHub 账号
- Lovable 项目

### 步骤 1: 授权连接

1. 在 Lovable 编辑器中，点击右上角的 **"GitHub"** 按钮
2. 选择 **"Connect to GitHub"**
3. 登录您的 GitHub 账号
4. 授权 Lovable 访问您的 GitHub

### 步骤 2: 创建或选择仓库

#### 选项 A: 创建新仓库
1. 选择 **"Create new repository"**
2. 输入仓库名称
3. 选择公开（Public）或私有（Private）
4. 点击 **"Create"**

#### 选项 B: 连接现有仓库
1. 选择 **"Connect existing repository"**
2. 从列表中选择仓库
3. 确认连接

> ⚠️ **注意**: 连接现有仓库会覆盖仓库中的内容，请确保先备份重要数据。

### 步骤 3: 初始同步

- Lovable 会自动将当前项目的所有代码推送到 GitHub
- 通常需要几秒到几分钟
- 完成后，您可以在 GitHub 上看到所有文件

## 工作流程

### 在 Lovable 中开发

1. 在 Lovable 编辑器中正常开发
2. 每次保存修改，代码自动推送到 GitHub
3. 每次推送都是一个新的 commit
4. 可以在 GitHub 上查看完整的提交历史

### 查看 GitHub 仓库

访问您的 GitHub 仓库，您会看到：

```
my-lovable-project/
├── .gitignore
├── README.md
├── package.json
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── lib/
└── public/
```

### 本地开发

#### 克隆项目到本地

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

#### 安装依赖

```bash
npm install
# 或
bun install
```

#### 启动开发服务器

```bash
npm run dev
# 或
bun dev
```

#### 进行修改

1. 在本地编辑器中修改代码
2. 测试您的更改
3. 提交更改：
   ```bash
   git add .
   git commit -m "描述您的更改"
   git push origin main
   ```

#### 通过 PR 同步回 Lovable

1. 在 GitHub 上创建 Pull Request
2. 从 `main` 分支到 `lovable` 分支
3. 审查更改
4. 合并 PR
5. Lovable 会自动同步这些更改

> 💡 **提示**: 确保您的 PR 是从 `main` 到 `lovable` 分支，而不是相反。

## 分支策略

### 默认分支结构

Lovable 使用以下分支结构：

- **main**: 主开发分支，用于本地开发
- **lovable**: Lovable 自动同步的分支
- **production**: （可选）生产环境分支

### 推荐工作流

1. **在 Lovable 中开发**: 修改自动推送到 `lovable` 分支
2. **本地开发**: 在 `main` 分支开发新功能
3. **同步**: 通过 PR 将 `main` 合并到 `lovable`
4. **Lovable 更新**: Lovable 编辑器会反映最新的代码

## 协作开发

### 团队协作场景

#### 场景 1: 设计师 + 开发者

**设计师**:
- 在 Lovable 中创建界面和组件
- 专注于视觉设计和用户体验

**开发者**:
- 在本地添加复杂的业务逻辑
- 实现 API 集成和数据处理
- 优化性能和代码质量

**协作方式**:
1. 设计师在 Lovable 中设计界面
2. 代码自动推送到 GitHub
3. 开发者拉取最新代码
4. 开发者添加功能逻辑
5. 通过 PR 同步回 Lovable

#### 场景 2: 多个开发者

1. 每个开发者在自己的分支上工作
2. 定期合并到 `main` 分支
3. 测试通过后，PR 到 `lovable` 分支
4. Lovable 编辑器保持最新状态

### 代码审查

利用 GitHub 的 PR 功能：
1. 创建功能分支
2. 完成开发后创建 PR
3. 团队成员审查代码
4. 讨论和修改
5. 批准后合并

## 处理冲突

### 什么时候会有冲突

- 同时在 Lovable 和本地修改同一文件
- 多个开发者修改同一部分代码

### 解决冲突

#### 在本地解决

```bash
# 拉取最新的 lovable 分支
git fetch origin lovable

# 合并时可能出现冲突
git merge origin/lovable

# 手动解决冲突
# 编辑冲突文件，保留需要的更改

# 标记为已解决
git add .
git commit -m "解决合并冲突"
git push
```

#### 在 GitHub 上解决

1. GitHub 会在 PR 中提示冲突
2. 点击 "Resolve conflicts"
3. 在线编辑器中解决冲突
4. 保存并提交

### 避免冲突的建议

1. **明确分工**: 不同开发者负责不同模块
2. **频繁同步**: 经常拉取最新代码
3. **小步提交**: 不要一次修改太多文件
4. **沟通协调**: 团队成员之间保持沟通

## 高级功能

### GitHub Actions

设置自动化工作流：

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
```

### 自动部署

将构建的应用部署到其他平台：

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build
        run: npm run build
      - name: Deploy to Netlify
        # 部署步骤...
```

### 代码质量检查

```yaml
# .github/workflows/quality.yml
name: Code Quality

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run ESLint
        run: npm run lint
      - name: Type check
        run: npm run type-check
```

## 断开 GitHub 连接

如果需要断开连接：

1. 在 Lovable 中点击 GitHub 按钮
2. 选择 **"Disconnect from GitHub"**
3. 确认断开

> ⚠️ **注意**: 断开后，GitHub 仓库不会被删除，但不再自动同步。

## 重新连接

断开后可以重新连接：

1. 点击 GitHub 按钮
2. 选择之前的仓库或创建新仓库
3. 确认连接

## Lovable Cloud 项目注意事项

### Supabase 配置

如果项目使用了 Lovable Cloud：

- 数据库迁移文件会同步到 GitHub
- Secrets（如 Supabase URL 和 Key）**不会**同步
- 需要在本地配置环境变量

### 本地环境变量

创建 `.env.local` 文件：

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> 🔒 **安全提示**: 不要将 `.env.local` 提交到 GitHub

## 常见问题

### Q: GitHub 同步需要多久？

A: 通常是即时的。Lovable 中的每次保存都会触发一次 commit 并推送到 GitHub。

### Q: 可以连接多个仓库吗？

A: 一个 Lovable 项目只能连接一个 GitHub 仓库。

### Q: 会覆盖我的现有代码吗？

A: 连接现有仓库时会覆盖。建议先备份或创建新仓库。

### Q: 支持 GitLab 或 Bitbucket 吗？

A: 目前仅支持 GitHub。

### Q: 本地开发需要 Lovable 账号吗？

A: 不需要。克隆仓库后，可以完全在本地开发，不依赖 Lovable。

### Q: 如何处理 Lovable 自动生成的 commits？

A: Lovable 的 commits 会保留完整历史。如果想整理，可以在本地使用 `git rebase` 或 `git squash`。

### Q: 可以禁用自动同步吗？

A: 不能。连接后，所有更改都会自动同步。如果需要控制，考虑在本地开发并手动 PR。

## 最佳实践

### 1. 合理使用分支

- `lovable`: 保持与 Lovable 同步
- `main`: 稳定的开发版本
- `feature/*`: 新功能开发
- `hotfix/*`: 紧急修复

### 2. 编写清晰的 Commit 信息

虽然 Lovable 会自动生成 commits，但在本地开发时要写清晰的 commit 信息：

```bash
git commit -m "feat: 添加用户个人资料页面"
git commit -m "fix: 修复登录表单验证问题"
git commit -m "style: 优化移动端导航栏样式"
```

### 3. 使用 .gitignore

确保不提交不必要的文件：

```
node_modules/
dist/
.env.local
.DS_Store
*.log
```

### 4. 定期同步

- 每天开始工作前，先拉取最新代码
- 完成功能后，及时推送到远程

### 5. 保护重要分支

在 GitHub 仓库设置中：
- 启用分支保护规则
- 要求 PR 审查才能合并
- 运行 CI 测试后才能合并

### 6. 文档化

维护良好的 README.md：
- 项目介绍
- 安装步骤
- 开发指南
- 部署说明

## 故障排查

### 同步失败

**可能原因**:
- 网络问题
- GitHub 授权过期
- 仓库权限不足

**解决方法**:
1. 检查网络连接
2. 重新授权 GitHub
3. 确认仓库访问权限

### 本地无法推送

**错误信息**: `Permission denied`

**解决方法**:
```bash
# 检查 Git 配置
git config --list

# 重新配置认证
gh auth login
```

### Lovable 未显示最新代码

**解决方法**:
1. 确认 PR 已合并到 `lovable` 分支
2. 刷新 Lovable 编辑器
3. 检查是否有合并冲突

## 下一步

- 🚀 了解 [部署应用](deployment)
- 🔒 配置 [自定义域名](custom-domain)
- 📚 探索 GitHub Actions 自动化

将您的 Lovable 项目与 GitHub 连接，实现代码版本控制和协作开发。

## 为什么要连接 GitHub

### 主要优势

- 📦 **代码备份**: 自动备份到 GitHub
- 🔄 **双向同步**: Lovable ↔ GitHub 实时同步
- 💻 **本地开发**: 使用 VS Code 等 IDE
- 👥 **团队协作**: Pull Request 代码审查
- 🚀 **CI/CD**: GitHub Actions 自动化

### 工作流程

```
Lovable 修改 → 自动推送到 GitHub
GitHub 提交 → 自动同步到 Lovable
```

完全双向，无需手动操作！

## 连接 GitHub

### 步骤 1: 准备 GitHub 账号

1. 如果没有 GitHub 账号，先注册：[github.com](https://github.com)
2. 登录 GitHub

### 步骤 2: 在 Lovable 中连接

1. 打开项目，点击右上角的 **"GitHub"** 按钮
2. 点击 **"Connect to GitHub"**
3. 授权 Lovable GitHub App
4. 选择要连接的 GitHub 账号或组织

### 步骤 3: 创建仓库

1. Lovable 会提示创建新仓库
2. 输入仓库名称
3. 选择公开或私有
4. 点击 **"Create Repository"**

### 完成！

几秒钟后，您的代码会出现在 GitHub 上。

## 查看 GitHub 仓库

### 仓库结构

```
your-repo/
├── src/                    # 源代码
│   ├── components/        # React 组件
│   ├── pages/            # 页面文件
│   ├── hooks/            # 自定义 Hooks
│   └── lib/              # 工具函数
├── public/                # 静态资源
├── package.json          # 依赖配置
├── vite.config.ts       # Vite 配置
└── README.md            # 项目说明
```

### README

自动生成的 README 包含：
- 项目信息和链接
- 本地开发指南
- 技术栈说明
- 部署说明

## 本地开发

### 克隆仓库

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:8080`

### 修改代码

1. 使用您喜欢的编辑器（VS Code 等）
2. 修改文件并保存
3. 浏览器自动刷新预览

### 提交更改

```bash
git add .
git commit -m "描述您的更改"
git push
```

提交后，Lovable 会自动同步！

## 双向同步

### Lovable → GitHub

在 Lovable 中的任何更改：
- 自动提交到 GitHub
- 提交信息自动生成
- 实时推送

### GitHub → Lovable

推送到 GitHub 的更改：
- 自动同步到 Lovable
- 预览窗口自动更新
- 无需手动拉取

### 查看同步状态

在 Lovable GitHub 按钮旁：
- ✅ 绿色勾：已同步
- 🔄 旋转图标：同步中
- ❌ 红色叉：同步失败

## 分支管理（实验性）

Lovable 对分支有有限的支持。

### 启用分支功能

1. 账号设置 → Labs
2. 启用 **"GitHub Branch Switching"**

### 使用分支

```bash
# 本地创建新分支
git checkout -b feature/new-feature

# 推送到 GitHub
git push -u origin feature/new-feature
```

在 Lovable 中可以切换分支（实验性）。

### 限制

- 分支切换功能仍在开发中
- 建议在主分支进行 Lovable 编辑
- 通过 GitHub 管理复杂的分支策略

## 团队协作

### Pull Request 工作流

#### 方案 1: 在 Lovable 开发

1. 在 Lovable 中开发功能
2. 自动推送到 GitHub
3. 在 GitHub 创建 Pull Request
4. 团队审查代码
5. 合并到主分支

#### 方案 2: 本地开发

1. 克隆仓库到本地
2. 创建功能分支
3. 本地开发和测试
4. 推送并创建 Pull Request
5. 合并后 Lovable 自动同步

### 代码审查

在 GitHub Pull Request 中：
- 查看代码差异
- 添加评论和建议
- 请求更改
- 批准并合并

### 冲突处理

如果出现代码冲突：

1. 在本地解决冲突：
```bash
git pull
# 手动解决冲突
git add .
git commit -m "解决冲突"
git push
```

2. 或在 GitHub 网页上解决

## 版本管理

### Git 历史

在 GitHub 查看：
- 所有提交记录
- 代码更改历史
- 提交者信息

### Tag 和 Release

创建版本标签：

```bash
git tag -a v1.0.0 -m "第一个版本"
git push origin v1.0.0
```

在 GitHub 创建 Release：
1. 进入 Releases
2. 创建新 Release
3. 填写版本信息和更新日志

### 回滚版本

#### 在 Lovable 中回滚

使用 Lovable 内置的版本历史功能。

#### 在 GitHub 中回滚

```bash
# 回滚到特定提交
git revert <commit-hash>
git push

# 或强制重置（谨慎使用）
git reset --hard <commit-hash>
git push --force
```

## CI/CD 自动化

### GitHub Actions

创建 `.github/workflows/ci.yml`：

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
```

### 自动部署

Lovable 自动处理部署，但您可以：

1. 在 GitHub Actions 中运行测试
2. 测试通过后合并到主分支
3. Lovable 自动同步并部署

## 最佳实践

### 1. 提交信息

使用清晰的提交信息：

```bash
# ❌ 不好
git commit -m "更新"

# ✅ 好
git commit -m "添加用户登录功能"
git commit -m "修复导航栏移动端显示问题"
```

### 2. 分支策略

推荐策略：
- `main`: 生产代码
- `develop`: 开发分支
- `feature/*`: 功能分支
- `hotfix/*`: 紧急修复

### 3. 保持同步

定期同步：
```bash
git pull origin main
```

### 4. .gitignore

已包含必要的 `.gitignore`：
- `node_modules/`
- `.env.local`
- `dist/`
- 等等

## 导入现有仓库

### 当前限制

Lovable 暂不支持直接导入现有 GitHub 仓库。

### 解决方案

#### 方案 1: 复制代码

1. 创建新 Lovable 项目
2. 连接到 GitHub
3. 手动复制现有代码到新仓库

#### 方案 2: 小项目

对于小项目：
1. 创建新 Lovable 项目
2. 通过对话让 AI 重建功能
3. 复制特定代码片段

## 故障排查

### 同步失败

检查：
- GitHub 授权是否有效
- 网络连接是否正常
- 是否有未解决的冲突

解决：
1. 断开并重新连接 GitHub
2. 手动解决代码冲突
3. 联系 Lovable 支持

### 代码丢失

不用担心：
- Lovable 有版本历史
- GitHub 有完整提交记录
- 可以回滚到任何版本

### 权限问题

确保：
- GitHub App 有足够权限
- 仓库未设置保护规则阻止推送
- 您是仓库的协作者

## 高级用法

### GitHub CLI

使用 GitHub CLI 管理：

```bash
# 安装 gh
brew install gh

# 认证
gh auth login

# 创建 PR
gh pr create --title "新功能"

# 查看 PR
gh pr list
```

### Git Hooks

添加提交前检查：

创建 `.husky/pre-commit`：

```bash
#!/bin/sh
npm run lint
npm run test
```

### Submodules

管理子模块：

```bash
git submodule add <repo-url>
git submodule update --init --recursive
```

## 切换账号

### 限制

一个 Lovable 账号只能连接一个 GitHub 账号。

### 切换方法

1. 断开当前 GitHub 连接
2. 连接新的 GitHub 账号

注意：现有仓库不会自动转移。

## 安全性

### 私有仓库

推荐使用私有仓库：
- 代码不公开
- 付费 GitHub 计划提供

### 敏感信息

⚠️ 永远不要提交：
- API 密钥
- 数据库密码
- 私钥文件

使用 Lovable Secrets 管理。

### 访问控制

在 GitHub 设置：
- 限制推送权限
- 要求代码审查
- 启用分支保护

## 下一步

- 🚀 准备 [部署应用](deployment)
- 🌐 配置 [自定义域名](custom-domain)
- 📚 探索 GitHub Actions
- 👥 邀请团队成员协作
