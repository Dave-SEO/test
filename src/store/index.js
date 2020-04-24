import {createStore} from 'redux'
import reducer from './reducer'
// 创建一个公共的存储仓库(仓库管理员)并导出, reducer相当于字典，传递给仓库管理员
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store