import React, { Component } from 'react';
import { mount } from 'react-mounter';

import HomeCardPage from '/imports/ui/pages/HomeCardPage.jsx';

export default class SampleComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      radio_net: -1,
      cmd_net: -1,
    }
  }

  componentDidMount(){
    $('.ui.dropdown').dropdown()
  }

  handleChange(name, e) {
    let val = parseInt(e.target.value);
    if(val == -1) return;

    let change = {}
    change[name] = val
    this.setState(change)
  }

  handleSubmit(){
    let x = {
      radio_net: this.state.radio_net,
      cmd_net: this.state.cmd_net,
    }
    if(x.radio_net == -1 || x.cmd_net == -1){
      alert('Please select values from both dropdowns')
      return;
    }
    mount(HomeCardPage, x)
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
              <button className='ui blue icon labeled button' onClick={this.handleSubmit.bind(this)}>
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
