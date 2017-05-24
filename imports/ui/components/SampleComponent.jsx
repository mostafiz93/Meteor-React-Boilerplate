import React, { Component } from 'react';

export default class SampleComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    // initiate something
  }

  render(){
    return(
      <div className='contentContainer'>
        <h3> Hello! This is your component! </h3>
      </div>
    )
  }
}
