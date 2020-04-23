This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

##### 命令式开发
1. 直接操作dom的方式称为命令式的编程
##### 声明式开发
1. react
##### 单项数据流
1. 父组件向子组件传值，子组件不能直接修改父组件值
##### propTypes
1. 限制父组件向子组件传值的类型
2. isRequired 要求父组件必须传递当前属性例如：test: PropTypes.number.isRequired
3. 限制父组件传递string或者number：test: PropTypes.arrayOf(PropTypes.number, PropTypes.string)
##### defaultProps
1. 给组件传递默认值
##### state,props,render关系
1. 当组件的state或者props发生改变时，render函数就会重新执行
2. 父组件或者props执行都会造成子组件render函数的执行
##### 虚拟dom （没有直接做dom的对比从而节省了性能，documentfragment）
1. tate 数据
2. jsx模版
3. 数据+模版结合，生成真实的DOM，来显示
 ```html
  <div id="abc"><span>hello World<span></div>
 ```
4. 生成虚拟dom（虚拟dom就是一个js对象，用它来描述真实dom）（损耗性能）
```javascript
['div',{id: 'abc'}, ['span',{},'hello world']]
```
5. state 发生变化
6. 数据+模版生成新的虚拟dom（极大的提升了性能）
```javascript
['div',{id: 'abc'}, ['span',{},'test']]
```
7. 比较原始虚拟dom和新的虚拟dom的区别，找到区别是span中的内容（极大的提升了性能）
8. 直接操作dom，改变span 中的内容

##### react 中的虚拟dom
1. tate 数据
2. jsx模版
4. 数据+模版结合生成虚拟dom（虚拟dom就是一个js对象，用它来描述真实dom）（损耗性能）
3. 用虚拟dom的结构，生成真实的DOM，来显示
 ```html
  <div id="abc"><span>hello World<span></div>
 ```
```javascript
['div',{id: 'abc'}, ['span',{},'hello world']]
```
5. state 发生变化
6. 数据+模版生成新的虚拟dom（极大的提升了性能）
```javascript
['div',{id: 'abc'}, ['span',{},'test']]
```
7. 比较原始虚拟dom和新的虚拟dom的区别，找到区别是span中的内容（极大的提升了性能）
8. 直接操作dom，改变span 中的内容
##### react jsx
1. 页面中的jsx=>React.createElement('',{},'')=>js对象=>真实dom
##### react 虚拟dom优点
1. 性能提升
2. 它使得跨端应用得以实现，React Native
##### react different 算法
1. react 中的虚拟dom是同层比对的，例如第一层比对发现差异，之后的就不会再进行比对，直接删除
2. setState 可以把相近时间的setState合并成一个setState，，减少虚拟dom比对的次数，这也是setState 设计成异步的初衷
3. key---- 再做循环时增加key值是用来提高虚拟dom比对的性能，key值要保持稳定，尽量不要使用下标做key值
##### react生命周期
1. componentWillMount：当组件即将被挂载到页面的时候自动执行
2. componentDidMount：组件被挂载到页面之后自动执行
3. render: 页面挂载执行
4. shouldComponentUpdate: 组件被更新之前执行 返回一个bool值确认是否更新
5. componentWillUpdate: 在shouldComponentUpdate之后并且返回true后执行
6. componentDidUpdate： 组件更新完成之后，会执行
7. componentWillReceiveProps
8. componentWillUnmount: 组件将要被销毁时执行