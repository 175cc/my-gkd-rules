# JSON5_x

使用 JSON5 拆分维护 GKD 订阅规则，并构建为单个订阅文件。

## 目录

- `src/subscription.json5`：订阅基础信息。
- `src/apps/`：按应用包名拆分的规则源文件。
- `dist/gkd.json5`：构建生成的订阅文件。

## 构建

```bash
npm run build
```

也可以使用 `npm start` 执行同样的构建命令。
