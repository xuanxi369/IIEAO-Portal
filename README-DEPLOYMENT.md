# Cloudflare 部署说明

## 方案 1: 使用 Wrangler CLI（推荐）

这是最简单和推荐的方式。

### 步骤：

1. **构建项目**
```bash
npm install
npm run build
```

2. **部署到 Cloudflare Workers**
```bash
cd dist/server
npx wrangler deploy
```

3. **绑定自定义域名**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
   - 进入 Workers & Pages
   - 找到你的 Worker (`sites-project`)
   - 点击 "Settings" > "Triggers" > "Custom Domains"
   - 添加 `www.iieao.com`

---

## 方案 2: 使用 Cloudflare Pages Functions

如果你想继续使用 Cloudflare Pages，需要修改配置：

### Cloudflare Pages 构建配置：

```
构建命令: npm run build
构建输出目录: .
根目录: (留空)
```

**注意**: 
- 构建输出必须是 `.`（项目根目录），不是 `dist/client`
- Pages 会自动识别 `functions/` 目录和 `dist/client` 作为静态资源
- `functions/_middleware.js` 会处理所有请求

### 环境变量（如需要）：

在 Cloudflare Pages 设置中添加：
- `NODE_VERSION`: `22.13.0`（或更高）

---

## 为什么之前会 404？

你的项目是一个**全栈应用**（React Server Components），不是纯静态网站：

- ❌ **错误配置**: `构建输出: dist/client` 
  - 只部署了静态文件（图片、CSS）
  - 缺少服务器代码，无法渲染页面

- ✅ **正确配置**: 使用 Wrangler 或 Pages Functions
  - 部署完整的 Worker + 静态资源
  - 服务器可以处理 SSR 和 RSC

---

## 推荐方式

**使用方案 1（Wrangler CLI）**，因为：
- 更简单直接
- 自动处理所有配置
- 原生支持 Workers 特性
- 项目已经有 `wrangler.json` 配置

方案 2 需要额外配置，可能会有兼容性问题。
