# 修复 DisqusJS 评论基础模式加载失败

## 问题摘要

DisqusJS 基础模式 API 调用默认使用 `https://disqus.skk.moe/disqus/` 作为 API 端点，该代理服务可能不稳定、被限速或不可达，导致评论加载失败，显示"评论基础模式加载失败"。

## 解决方案

仅修改 `_config.butterfly.yml` 配置文件，将 DisqusJS 的 API 端点切换为 Disqus 官方 API。

## 修改内容

| 文件 | 修改 |
|------|------|
| `d:\IndBlog\_config.butterfly.yml` | 在 `disqusjs.option` 中添加 `api: https://disqus.com/api/` |

### 具体变更

```diff
 disqusjs:
   shortname: 'yw37153'
   apikey: QZ0WUPplsWWcCTIFmYCG01iXrqukbtzkTLcxZxSvGZAnplNIh2ICNH52iOU00e06
-  option:
+  option:
+    api: https://disqus.com/api/
```

### 原理

Butterfly 主题的 `disqusjs.pug` 模板会将 `option` 字段通过 `...dqOption` 展开到 DisqusJS 构造函数参数中，因此 `api` 字段会覆盖默认的 `https://disqus.skk.moe/disqus/` 端点，改为直接调用 Disqus 官方 API。

### 回退方案

如果切换到官方 API 后问题依旧（说明网络无法访问 Disqus 所有域名），则需要额外部署一个 Disqus API 反代（Vercel / Cloudflare Workers），然后将 `api` 设置为自己的代理地址。

## 验证步骤

1. 修改 `_config.butterfly.yml`
2. 执行 `hexo clean && hexo generate` 重新构建
3. 部署后访问博客文章页面
4. 检查 DisqusJS 评论区域是否正常加载评论列表
