# 作品集网站

设计师个人作品集单页网站 —— 我的第一个 vibe coding 项目：想法和设计意图由我提出，代码由 Kimi（AI）编写。

## 技术栈

- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Space Grotesk 字体（@fontsource 本地打包）
- 封面图为纯 CSS 渐变生成，无外部图片依赖

## 本地运行

```bash
npm install
npm run dev
```

构建：

```bash
npm run build   # 产物在 dist/
npm run preview # 预览构建结果
```

## 页面结构

- `src/sections/Hero.tsx` — 首屏大字海报
- `src/sections/Marquee.tsx` — 滚动字幕条
- `src/sections/Works.tsx` — 作品列表（悬停浮现封面预览，点击查看详情弹窗）
- `src/sections/About.tsx` — 关于我
- `src/sections/Footer.tsx` — 联系与页脚
- `src/data/projects.ts` — 作品数据（改这里就能替换内容）
