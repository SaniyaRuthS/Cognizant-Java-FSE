
import React, { Component } from 'react';

class ComplaintRegister extends Component {

  constructor(props){
    super(props);

    this.state = {
      ename:'',
      complaint:''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const refNo = Math.floor(Math.random()*1000) + 100;

    alert(
      'Thanks ' +
      this.state.ename +
      '\nYour Complaint was Submitted.\nTransaction ID is: ' +
      refNo
    );
  }

  render(){
    return(
      <div style={{textAlign:'center',marginTop:'80px'}}>
        <h1 style={{color:'red'}}>Register your complaints here!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <table style={{margin:'auto'}}>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="ename"
                    value={this.state.ename}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Complaint:</td>
                <td>
                  <textarea
                    name="complaint"
                    value={this.state.complaint}
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

export default ComplaintRegister;
