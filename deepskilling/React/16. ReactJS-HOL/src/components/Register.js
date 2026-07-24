
import React, { Component } from 'react';

class Register extends Component {

  constructor(props){
    super(props);

    this.state={
      fullName:'',
      email:'',
      password:'',
      errors:{
        fullName:'',
        email:'',
        password:''
      }
    };
  }

  handleChange=(event)=>{

    const {name,value}=event.target;
    let errors=this.state.errors;

    switch(name){

      case 'fullName':
        errors.fullName =
          value.length < 5
          ? 'Full Name must be 5 characters long'
          : '';
        break;

      case 'email':
        errors.email =
          (value.includes('@') && value.includes('.'))
          ? ''
          : 'Email is not valid';
        break;

      case 'password':
        errors.password =
          value.length < 8
          ? 'Password must be 8 characters long'
          : '';
        break;

      default:
        break;
    }

    this.setState({
      errors,
      [name]:value
    });
  }

  validateForm=(errors)=>{
    let valid=true;

    Object.values(errors).forEach(val=>{
      if(val.length>0){
        valid=false;
      }
    });

    return valid;
  }

  handleSubmit=(event)=>{

    event.preventDefault();

    if(this.validateForm(this.state.errors)){
      alert('Valid Form');
    }
    else{

      if(this.state.errors.fullName!==''){
        alert(this.state.errors.fullName);
      }

      if(this.state.errors.email!==''){
        alert(this.state.errors.email);
      }

      if(this.state.errors.password!==''){
        alert(this.state.errors.password);
      }
    }
  }

  render(){

    return(
      <div style={{textAlign:'center',marginTop:'80px'}}>

        <h1 style={{color:'red'}}>Register Here!!!</h1>

        <form onSubmit={this.handleSubmit}>

          <table style={{margin:'auto'}}>
            <tbody>

              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>

            </tbody>
          </table>

        </form>

      </div>
    );
  }
}

export default Register;
