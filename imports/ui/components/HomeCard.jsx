import React, { Component } from 'react';


import HomeCardPage from '/imports/ui/pages/HomeCardPage.jsx';


export default class HomeCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props)
    return(
      <div className='complainContainer'>
        <i className='remove red link icon threadRemoveIcon'></i>
        <img src='images/logo.png'/>
        <h3>Complain title goes here</h3>
        <p className='complainItems'>
          <span><i className='wait icon'></i>5:05 pm</span>
          <a><i className='talk outline icon'></i>11 replies</a>
          <a><i className='attach icon'></i></a>
        </p>
        <div className='clr'></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button className="circular ui icon blue button complainAddBtn" >
          <i className="icon add"></i>
        </button>
      </div>
    )
  }
}
