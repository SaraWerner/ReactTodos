import React, { Component } from 'react';

class Insert extends Component {
 constructor(props){
   super(props);
   this.state={
       text:null
   }
this.clicked=this.clicked.bind(this);
this.isEnter=this.isEnter.bind(this);

 }
isEnter(event){
    if(event.key == 'Enter'){
        {
            this.clicked();
        }  
 }
}
 clicked(){    
     this.setState({text:document.getElementById("txt").value});
     this.props.addTodo(document.getElementById("txt").value);
 }
    render() {
      return (
        <div className="insert">
            <input type="text" id="txt" onKeyPress={this.isEnter} placeholder="Your text here"/>
            <button className="add-btn" onClick={this.clicked}>add</button>
        </div>
      );
    }
  }  
  export default Insert;