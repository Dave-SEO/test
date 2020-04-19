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
 render(){
  return (
    <Fragment> 
      <div>
        <label htmlFor="name" >输入</label>
        {/* 改变组件作用域 */}
        <input  id="name" value={this.state.valueInput} onChange = {this.handlenChangeInput} /> 
        <button onClick={this.handlenClick}>提交</button>
      </div>
      <ul>
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
    }))
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
