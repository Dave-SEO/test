import React,{Fragment,Component} from 'react';
class TodoList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    // 数据存储在state中
    this.state = {
      valueInput: '',
      list:['one', 'two']
    }
  }
 render(){
  return (
    <Fragment> 
      <div>
        {/* 改变组件作用域 */}
        <input value={this.state.valueInput} onChange = {this.handlenChangeInput.bind(this)} /> 
        <button onClick={this.handlenClick.bind(this)}>提交</button>
      </div>
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </Fragment>
  );
 }
 handlenChangeInput(e) {
   this.setState({
     valueInput: e.target.value
   })
  }
  handlenClick(){
    this.setState({
      list: [...this.state.list, this.state.valueInput],
      valueInput: ''
    })
  }
}
export default TodoList;
