# Chuanwei 个人主页

基于 Vite、React 与 TypeScript 构建的个人主页，用于展示个人博客、近期作品与自我介绍。界面采用编辑型排版，并支持响应式布局、深浅色主题和减少动画偏好。博客内容后续用于收录 CSDN 与语雀笔记。

## 目录结构

```text
src/
├── components/  # 页面模块组件
├── hooks/       # 通用交互 Hook
├── App.tsx      # 页面结构入口
├── main.tsx     # React 应用入口
└── styles.css   # 全局样式与主题变量
```

## 本地开发

```bash
pnpm.cmd install
pnpm.cmd dev
```

## 质量检查

```bash
pnpm.cmd lint
pnpm.cmd build
```

## 项目约定

- 图标统一使用 `reicon-react`。
- OpenSpec 已针对 Codex 初始化，配置位于 `openspec/config.yaml`。
- Windows 环境下统一使用 `.cmd` 执行包管理命令。
