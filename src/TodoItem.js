import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    render(){
        return  <li onClick={this.handleDelete}>{this.props.test}-{this.props.content}</li>
    }
    handleDelete(){
        this.props.delete(this.props.index)
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    delete: PropTypes.func
}
TodoItem.defaultProps = {
    test: 'Hello'
}