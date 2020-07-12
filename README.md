# vue-cli-plugin-nodeenv

此插件作用为修改已经存在的 `cli-service`命令对应的 `NODE_ENV` 值，在`vue-cli`中 ,`NODE_ENV` 影响着编译结果， 当 `NODE_ENV` 等于 `production` 时代码才会压缩混淆

## 之前的默认行为

默认情况下，`NODE_ENV` 取决于「模式」的不同：

**若不指定 `--mode` 参数，或者指定的`mode` 值为 `development`、`production`、`test` 之一， 具体行为表现为：**

- `vue-cli-service serve` 命令默认对应 `development` 模式，`NODE_ENV` ==>  `development`
- `vue-cli-service build` 命令默认对应 `production` 模式，`NODE_ENV` ==>  `production`
- `vue-cli-service test:unit` 命令默认对应 `test` 模式，`NODE_ENV` ==>  `test`

**若指定 `--mode` 参数 ：**

执行 `vue-cli-service serve --mode staging`,

- 当 `.env.staging` 文件内部未设置 `NODE_ENV` 值，  则 `NODE_ENV` ==> `production`

- 当 `.env.staging` 文件内部设置 `NODE_ENV` 时，  则 `NODE_ENV` ==> `.env.staging` 文件内部设置的值

## 修改后的行为

本插件修改了两个命令对应的 `NODE_ENV` 值：

- `vue-cli-service serve`  使用 `serve` 命令时， `NODE_ENV` ==>  `development`
- `vue-cli-service build`  使用 `build` 命令时， `NODE_ENV` ==>  `production`

无论是否指定mode参数、无论.env文件中是否明确指定了`NODE_ENV`，都无法更改`NODE_ENV`值，`NODE_ENV`只与命令相绑定。

换句话说：

- `vue-cli-service serve` 命令会启动开发服务器，代码不压缩混淆；

- `vue-cli-service build` 命令会将代码压缩混淆，生成生产代码；

这样更加明确命令的意义所在。

其他行为和默认行为保持一致。
