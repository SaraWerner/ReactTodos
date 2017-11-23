import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo.js';
import Insert from './components/Insert.js';
class App extends Component {
  constructor(props){
    super(props);
    this.add=this.add.bind(this);
    this.delete=this.delete.bind(this);    
    this.changeSelect=this.changeSelect.bind(this);
    this.findTodoById=this.findTodoById.bind(this);    
    this.state={
      todos:[],
      nextTodo:1
    }
  }
  findTodoById(_id,todos){
    var todo=todos.find(function(element){ return element.id=== _id;});
    return todo;
  }
  delete(_id){
    var todos=this.state.todos;    
    var todo=this.findTodoById(_id,todos);
    var i=todos.indexOf(todo);
    todos.splice(i,1);
    this.setState({todos: todos});
  }
  add(txt){
    var id=this.state.nextTodo;
    const arr=this.state.todos;
    var newTodo={content:txt,id:id,isDone:false};
    arr.push(newTodo);
    id++;
    this.setState({todos: arr,nextTodo:id});
    document.getElementById("txt").value="";
  }
changeSelect(_id) {
  var todos=this.state.todos;  
  var todo=this.findTodoById(_id,todos);
  todos[todos.indexOf(todo)].isDone=!  todos[todos.indexOf(todo)].isDone;
  this.setState({todos: todos});
} 
  render() {
    return (
      <div className="App">
            <Insert addTodo={this.add}></Insert>
           { this.state.todos.map((item) => {
                        return<Todo content={item.content} id={item.id} isDone={item.isDone} select={this.changeSelect} delete={this.delete}></Todo>
                    })}
      </div>
    );
  }
}
export default App;