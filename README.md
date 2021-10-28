@binary/bundle
==========

LISA 工具集定义。

## 定义

#### `binaries: string[]`

所包含的二进制包列表 (省略 `@binary/` 前缀)。应当与工具集的 `dependencies` 对应。

#### `env: Record<string, string>`

该工具集对外暴露的环境变量。
