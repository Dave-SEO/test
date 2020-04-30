import React, {Component} from 'react'
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
// import store from './store'
import {connect} from 'react-redux'
 class TodoList extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = store.getState()
    //     // this.handleChange = this.handleChange.bind(this)
    //     // 订阅
    //     this.handleStoreChange = this.handleStoreChange.bind(this)
    //     this.handleCLick = this.handleCLick.bind(this)
    //     store.subscribe(this.handleStoreChange)
    //     console.log('this.state', this.state)
    // }
    render () {
        return (
            <div>
                <Input placeholder="Basic usage" onChange={this.props.handleChange} value={this.props.valueInput} style= {{'width': '300px','margin': '10px'}}/>
                <Button type="primary" onClick={this.props.handleCLick}>TodoList</Button>
                <List bordered style={{'width':'300px','marginLeft': '10px'}}
                    dataSource={this.props.list}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
    // handleChange(e){
    //     console.log('e.target.value', e.target.value)
    //     const action = {
    //         type: 'input_change_value',
    //         value: e.target.value
    //     }
    //     store.dispatch(action)
    // }
    // handleCLick(){
    //     console.log('this.state.valueInput', this.state.valueInput)
    //     const action = {
    //         type: 'list_change',
    //         list: [this.state.valueInput]
    //     }
    //     // store.dispatch(action)
    // }
    handleStoreChange(){
        // this.setState(store.getState())
    }
}
const mapStateToProps = (state) => {
    return {
        valueInput: state.valueInput,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChange(e){
            console.log('e.target.value', e.target.value)
            const action = {
                type: 'input_change_value',
                value: e.target.value
            }
            console.log('ownProps', ownProps)
            dispatch(action)
        },
        handleCLick(){
            const action = {
                type: 'list_change',
                // action: this.props.valueInput
            }
            // console.log('value', value)
            dispatch(action)
        }
    }
}
export  default connect(mapStateToProps, mapDispatchToProps)(TodoList)