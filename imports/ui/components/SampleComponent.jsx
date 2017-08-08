import React, { Component } from 'react';

export default class SampleComponent extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $('.ui.dropdown').dropdown()
  }

  handleChange(name, e) {
    let val = parseInt(e.target.value);
    if(val.isNan() || val == -1) return;

    let change = {}
    change[name] = val
    this.setState(change)
  }

  handleSubmit(){

  }

  render(){
    console.log(this.state)
    return(
      <div className='contentContainer'>
        <div style={{width: '350px', margin: '5vh auto 15px', borderRadius: '5px', background: '#00300d'}}>
          <h3 style={{padding: '15px', borderBottom: '1px solid #ddd', textAlign: 'center', margin: 0, color: 'white'}}>Select  Net Type</h3>
          <div style={{padding: '20px 15px', background: '#ddd'}}>
            <select className="ui fluid dropdown dropdownContent" onChange={this.handleChange.bind(this, 'radio_net')}>
              <option value="-1">Select Net Type</option>
              <option value="1">Army Radio Net</option>
              <option value="2">Div Radio Net</option>
              <option value="3">BDE Radio Net</option>
            </select>
            <select className="ui fluid dropdown" onChange={this.handleChange.bind(this, 'cmd_net')}>
              <option value="-1">Select Command or Admin</option>
              <option value="1">Command Net</option>
              <option value="2">Admin Net</option>
            </select>
            <div className='actionButtonContainer'>
              <button className='ui blue icon labeled button'>
                <i className='send icon'></i>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
