import React, {Component} from 'react';


class Person extends Component{

  constructor(props){
    super(props)

    this.state={
      name:"",
      email:"" 
    }
     console.log("Person constructor");
  }

  getSnapshotBeforeUpdate (){
    console.log("person getSnapshotBeforeUpdate");
    return false;
  }
static getDerivedStateFromProps(props,state){
    console.log("Person getDerivedStateFromProps")
  }
   componentDidMount(){
    console.log("Person componentDidMount");
  }
  shouldComponentUpdate(){
    console.log("person shouldComponentUpdate")
    return true;
  }
  componentDidUpdate(){
    console.log('person componentDidUpdate')
  };
 onChange(e){
   this.setState({...this.state,
     [e.target.name]:e.target.value
   })
 }
  render(){
     console.log("Person render")
    return(
      
     <>

        <form>
            <input type="text" name="name" value={this.state.name} onChange={e=>this.onChange(e)}/>
            <input type="text" name="email" value={this.state.email} onChange={e=>this.onChange(e)}/>

        </form>

    {
      <>
      <p>Your name is :{this.state.name}</p>
       <p>Your email is :{this.state.email}</p>

</>
    }
    
     </>)
  }
}

export default Person;