import React, { Component } from 'react';

class Todo extends Component {
 constructor(props){
   super(props);
   this.state={
       id:this.props.id,
       content:this.props.content,
       isDone:this.props.isDone,
       select:this.props.select,
       delete:this.props.delete       
   }
 }
    render() {
      return (
     
        <div className="todo" >
         <input className="check" type="checkbox"  onChange={() =>this.state.select(this.state.id)}/>
         <p className={ this.props.isDone === true ? 'Done': 'notDone' } >{this.state.content}</p>
         <button className='delete' onClick={() =>this.state.delete(this.state.id)}>X</button>
        </div>
      );
    }
  }  
  export default Todo;