# 需要解决的问题

 `yarn start`启动时候页面报错,`yarn build`之后使用`http-server`在`dist`文件夹启动，页面运行正常

 **似乎webpack的配置没有在`webpack-dev-server`中生效**
 # 我的环境

 ```
node -v
v14.15.5

yarn -v
1.22.10
 ```

 # 操作步骤

 ## 问题复现
 ### 使用webpack-dev-server

 `yarn install `

 `yarn start`


`http://localhost:9000/`

按`F12` `Console` 中输入以下代码

```javascript
cim.fn('2')

//VM59:1 Uncaught TypeError: Cannot read property 'fn' of undefined
  //  at <anonymous>:1:5
```
### 使用http-server

 ```
 yarn build
 yarn add http-server
 cd dist
 hs -p 9001
 ```
 按`F12` `Console` 中输入以下代码

```javascript
cim.fn('2')

 //输出 2
```