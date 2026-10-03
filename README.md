# Jiahe Wang · Homepage & Blog

个人主页保持为普通 HTML；博客使用 GitHub Pages 支持的 Jekyll，把 Markdown 自动生成为静态文章页。

## 文件结构

```text
index.html                  主页内容
assets/css/site.css         主页及全站公共样式
assets/css/blog.css         博客列表、文章和代码样式
assets/js/mathjax-config.js 数学公式配置
assets/js/visit-counter.js  全站访问统计及加载/失败提示
img/avator.png              头像，同时作为浏览器标签页图标（favicon）
blog/index.html             博客列表，按日期倒序自动更新
_posts/                    已发布的 Markdown 文章
_drafts/my-first-post.md    写作模板，不会在正式网站显示
_layouts/                  博客列表和文章的 HTML 模板
_includes/footer.html      博客共用页脚
_config.yml                Jekyll 站点配置
```

## 发布一篇博客

1. 复制 `_drafts/my-first-post.md` 到 `_posts/`，命名为 `YYYY-MM-DD-英文短标题.md`，例如 `_posts/2026-09-18-my-first-post.md`。
2. 修改文件开头的标题、摘要和标签，再写正文：

   ```markdown
   ---
   title: "我的第一篇博客"
   description: "一段简短的文章摘要。"
   tags: [研究, 随笔]
   lang: zh-CN
   ---

   这里写正文。支持 **粗体**、列表、图片、代码块、表格和数学公式。
   ```

3. 将修改提交并推送到 GitHub Pages 使用的分支。部署完成后，文章自动出现在 `/blog/`，地址为 `/blog/my-first-post/`，无需手工维护列表。

文件名中的日期决定文章顺序；未来日期的文章和 `_drafts/` 默认不发布。在文章开头加入 `published: false` 也能隐藏文章。不同文章请使用不同的英文短标题，以免网址重复。

图片放入 `img/`，正文写 `![图片说明](/img/图片文件名.png)`。数学公式使用 `$$E = mc^2$$`；独立公式上下留空行。完整例子见草稿模板。草稿默认不生成网页，但公开仓库里的草稿源码仍然可以被查看。

## 本地预览

主页 `index.html` 仍可通过 VS Code Live Server 预览。博客的 Markdown 和模板需要经过 Jekyll 构建，本地已用 Ruby 3.3 验证；请安装 Ruby 3.3 和 Bundler，然后在仓库根目录运行：

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

打开 `http://127.0.0.1:4000/`，点击 Blog。若需预览草稿：

```sh
bundle exec jekyll serve --host 127.0.0.1 --drafts
```

仅检查构建：`bundle exec jekyll build`。构建产物位于 `_site/`，无需提交。

## 实现参考

- [参考站 Blog](https://www.error666.top/blog/)：首页入口 → 日期、标题、摘要列表 → 独立文章页。
- [GitHub Pages 与 Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)
- [Jekyll 的文章与草稿规则](https://jekyllrb.com/docs/posts/)
- [不蒜子官方接入示例](https://busuanzi.ibruce.info/)
