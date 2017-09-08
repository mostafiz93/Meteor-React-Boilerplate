import React, { Component } from 'react';

import SampleLayout from '/imports/ui/layouts/SampleLayout.jsx';
import HomeCard from '/imports/ui/components/HomeCard.jsx';

export default class HomeCardPage extends Component{

  render(){
    console.log("SamplePage being rendered");

      return(
        <SampleLayout content={<HomeCard combo={this.props}/>}/>
      );
  }
}
