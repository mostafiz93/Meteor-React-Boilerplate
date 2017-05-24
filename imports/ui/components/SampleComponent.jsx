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
      <div>
        You have clicked {this.state.counter} times!
      </div>
    )
  }
}
