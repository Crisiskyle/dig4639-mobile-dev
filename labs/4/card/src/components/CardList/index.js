import React from 'react';
import data from "./data.json";


//TodoItem to pass properties 
function Card(props){
  //show the property  ands then pass whatever is in there on.
    return <p className="card" onClick={() => props.removeTask(props.id)}>{props.title}<br></br>{props.content} <p class="close">x</p></p>
}


class CardList extends React.Component{
  constructor(props){
    super(props)
    //tracks the state of the components
    this.state ={
      //manage what the  json file has
      data, 
      hideTasks:false,
    }
    this.currentId = 4;
  }

  //add task by click event
    addtheTask(e) {
      console.log(this.refs.taskContent)
      let data = this.state.data
      data.push(
       {"id": this.currentId, "content" :this.refs.taskContent.value, "title": this.refs.title.value, "completed" :true})
        this.currentId++
        this.setState({data:data})   
        this.refs.taskContent.value = ""     
        this.refs.title.value =""
  }

  removeTask(id){
    let data = this.state.data
    data = data.filter((v) =>  v.id !== id)
    this.setState({data})
  }

  render(){
return (

  <>
  <div class="centr">
  <input type="text" ref = "taskContent" />
  <input type="text"  ref = "title" />
  <input type="button" value= "Add Task" onClick={(e) => this.addTask(e)} />
  </div>
  
 <br/>
 <input ref = "hideTasks" type="checkbox" id="hidTasks" 
 name="hideTasks" value="hideTasks" onChange= {(e) => this.setState({hideTasks:e.target.checked})}/>
 <label htmlFor="hideTasks"> Clear tasks</label><br></br>

  
}
export default CardList