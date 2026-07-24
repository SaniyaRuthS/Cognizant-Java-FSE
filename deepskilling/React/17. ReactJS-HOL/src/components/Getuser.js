import React,{Component} from 'react';

class Getuser extends Component{
 constructor(props){
  super(props);
  this.state={person:{},loading:true};
 }

 async componentDidMount(){
  const response=await fetch('https://api.randomuser.me/');
  const data=await response.json();
  this.setState({person:data.results[0],loading:false});
 }

 render(){
  if(this.state.loading){
   return <h2>Loading...</h2>;
  }

  const person=this.state.person;

  return(
   <div style={{margin:'100px'}}>
    <h1>{person.name.title} {person.name.first} {person.name.last}</h1>
    <img src={person.picture.large} alt="user"/>
   </div>
  );
 }
}

export default Getuser;
