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
 6 │   ├── api 请求接口
 7 │   ├── assets存储资源，例如 css、 img、 fonts
 8 │   ├── components存储所有组件
 9 │   ├── errorPage 错误页面
10 │   ├── layout 基础布局页面
11 │   ├── login 登录页面
12 │   ├── router路由
13         └──  index.js路由配置文件
14 │   ├── store 状态管理组件
15 │   ├── utils 配置
16         └──  index.js异步请求相关的拦截器
17 │   ├── views 项目所有页面
18 │   ├── App.vue  单页面应用程序的根组件
19 │   └── main.js  开机键，负责把根组件替换到根节点
20 │   └── permission.js  路由守卫页面
21 ├── static  可以放一些静态资源
22 │   └── .gitkeep
23 ├── .babelrc  es6转es5配置文件，给 babel 编译器用的
24 ├── .editorconfig 
25 ├── .eslintignore  eslint配置文件
26 ├── .eslintrc.js  eslint配置文件
27 ├── .gitignore  git忽略上传文件
28 ├── .postcssrc.js  postcss类似于 less、sass 预处理器
29 ├── index.html  单页面引用程序的单页
30 ├── package.json 项目依赖项等信息
31 ├── package-lock.json
32 └── README.md
