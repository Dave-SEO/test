import React,{Fragment,Component} from 'react';
import TodoItem from './TodoItem'
class TodoList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    // 数据存储在state中
    this.state = {
      valueInput: '',
      list:['one', 'two']
    }
    this.handlenItemDelete = this.handlenItemDelete.bind(this)
    this.handlenChangeInput = this.handlenChangeInput.bind(this)
    this.handlenClick = this.handlenClick.bind(this)
  }
  // 当组件即将被挂载到页面的时候自动执行
  componentWillMount(){
    console.log('componentWillMount')
  }
  // 组件被挂载到页面之后自动执行
  componentDidMount(){
    console.log('componentDidMount')
  }
 // 组件被更新之前执行
 shouldComponentUpdate(){
   console.log('shouldComponentUpdate')
   return true
 }
 // 在shouldComponentUpdate之后并且返回true后执行
componentWillUpdate(){
  console.log('shouldComponentUpdate')
}
// 组件更新完成之后，会执行
componentDidUpdate(){
  console.log('shouldComponentUpdate')
}
componentWillUnmount(){
  console.log('componentWillUnmount')
}
 render(){
  return (
    <Fragment> 
      <div>
        <label htmlFor="name" >输入</label>
        {/* 改变组件作用域 */}
        <input  id="name" value={this.state.valueInput} onChange = {this.handlenChangeInput} /> 
        <button onClick={this.handlenClick} ref={(input)=>{this.input = input}}>提交</button>
      </div>
      <ul ref={(ul)=>{this.ul = ul}}>
        {
          this.state.list.map((item, index) => {
            // return <li key={index} onClick={this.handlenItemDelete.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>
            return <TodoItem key={index} content= {item} index={index} delete={this.handlenItemDelete}/>
          })
        }
      </ul>
    </Fragment>
  );
 }
 handlenChangeInput(e) {
  const value = e.target.value
   this.setState((prevProps)=>(
     {
       valueInput: value
      }
   ))
  }
  handlenClick(){
    this.setState((prevProps)=>({
      list: [...prevProps.list, prevProps.valueInput],
      valueInput: ''
    }),()=>{
       console.log('this.ul', this.ul.querySelectorAll('li'))
    })
  }
  handlenItemDelete(index){
    this.setState((prevProps)=>{
      let list = [...prevProps.list]
      list.splice(index,1)
      return {list}
    })
  }
}
export default TodoList;
