# template

>vue-cli全套适配模板

## 项目结构

> src

```tree
.
├── .vscode // vscode setting
├── deploy // 上传组件
│   ├── index // 上传方法
│   └── products // 配置项
├── public
├── src // 主要逻辑
│   ├── api // axios请求
│   ├── assets // 静态文件
│   ├── router // 路由
│   ├── store // vuex
│   ├── style // 初始化样式和通用样式
│   ├── utils // 工具类
│   ├── views // 页面组件
│   ├── App.vue // 页面入口文件
│   ├── main.js // 程序入口文件
│   └── permission.js // 路由控制，vuex的刷新保存
├── .env // 环境
│   ├── .development
│   └── .production
└── tree.md

```