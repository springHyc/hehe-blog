<!-- prettier-ignore-start -->
# hehe-blog

## 更新说明

### 20190724

- 完善layouts中的面包屑并添加导航功能
- react-router结合antd中的layout布局，子路由完成content内容的切换

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
