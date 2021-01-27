# demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 目录结构
 1 .
 2 ├── build webpack打包相关的配置文件目录
 3 ├── config webpack打包相关的配置文件目录
 4 ├── node_modules第三方依赖包 千万不要动它
 5 ├── src项目源码
 6 │   ├── 401错误页面
 7 │   ├── api 请求接口
 8 │   ├── assets存储资源，例如 css、 img、 fonts
 9 │   ├── components存储所有组件
10 │   ├── layout 基础布局页面
11 │   ├── login 登录页面
12 │   ├── router路由
13         └──  index.js路由配置文件
14 │   ├── store 状态管理组件
15 │   ├── utils 配置
16         └──  index.js异步请求相关的拦截器
17 │   ├── view 项目所有页面
18 │   ├── App.vue  单页面应用程序的根组件
19 │   └── main.js  开机键，负责把根组件替换到根节点
20 ├── static  可以放一些静态资源
21 │   └── .gitkeep
22 ├── .babelrc  es6转es5配置文件，给 babel 编译器用的
23 ├── .editorconfig 
24 ├── .eslintignore  eslint配置文件
25 ├── .eslintrc.js  eslint配置文件
26 ├── .gitignore  git忽略上传文件
27 ├── .postcssrc.js  postcss类似于 less、sass 预处理器
28 ├── index.html  单页面引用程序的单页
29 ├── package.json 项目依赖项等信息
30 ├── package-lock.json
31 └── README.md
