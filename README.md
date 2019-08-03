<!-- prettier-ignore-start -->
# hehe-blog

## 更新说明

### 端口说明

* 9999 本机调试
* 9998 本机build,先要使用`npm run build`
* 9000 本机build的，使用node起的前端项目,使用命令是: `npm run start-dev`

#### 本地`build`然后使用`node`启动

这种方式类似pm2，使用pm2，最大的好处是，可以处理线程断了之后可以自动重启的问题，如果只是简单的远程部署，可以直接使用静态文件就可以啦，就是9998端口这种形式。

### 20190724

- react-router结合antd中的layout布局，子路由完成content内容的切换
- 完善layouts中的面包屑并添加导航功能

### 20190722

this.props.history.push的用法：

```js
this.props.history.push("/addViewPoint");// pathname
this.props.history.push("#addViewPoint");// hash
this.props.history.push({
    key: "xxx",
    hash: '#editViewPoint',
    pathname: "xxx",
    search: "xxx",
    state: { record }
})
```


### 20190719

- 删除：`"proxy": "http://127.0.0.1:4321",`,采用nginx进行反向代理来解决前后端跨域的问题
- 优化layout布局
- 导航与layout结合

### 201907

- 引入 eslint 和 prettier 做代码规范
- 引入 redux 做统一的数据处理
- 添加 antd
- 添加 antd 的按需引用

## 项目概况

- 启动命令-`npm start`
- 测试 - `npm test`
- `npm run build`
- 依赖下载：`yarn install`

<!-- prettier-ignore-end -->
