import './App.css';
import React from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';

class App extends React.Component{

   state={todos : [{id : 0, task : "eat", done :false},{id : 1, task : "sleep", done :false},{id : 2, task : "repeat", done :false}], text:""}
// ---------------
   addTodos=()=>{ this.setState({todos : [...this.state.todos, {id : Math.random(), task : this.state.text, done :false}]})  }
   deleteTodos=(id)=>{ this.setState({ todos :this.state.todos.filter(el=>el.id!==id) })    }
   doneTodos=(id)=>{this.setState({todos : this.state.todos.map(el=>el.id===id ?{ ...el, done:!el.done}:el)})}
  render(){
    console.log(this.state.todos)
    return(
      
      <div className='App'>
      <h1>Challenge State React JS</h1>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="Task"
      aria-label="Task"
      aria-describedby="basic-addon2"
      onChange={(event)=>this.setState({text : event.target.value })}
    />
    <Button variant="primary" onClick={ ()=>this.addTodos()} id="button-addon2">
      ADD
    </Button>
  </InputGroup>
      {/* <input onChange={(event)=>this.setState({text : event.target.value })}/>
      <Button variant="primary" onClick={ ()=>this.addTodos() }>Add</Button> */}
      {this.state.todos.map(el=>
      <div key= {el.id} >
            <h3  style={{textDecoration : el.done ?"line-through":null}}>{el.task}</h3> 
            <Button variant="danger" onClick={()=>this.deleteTodos(el.id)}>Delete</Button>
            <Button variant="success" onClick={()=>this.doneTodos(el.id)}>Done</Button>
            
      </div>
        )}
      </div>
    )
  }
}

export default App;
