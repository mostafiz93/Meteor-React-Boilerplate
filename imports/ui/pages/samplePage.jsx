import React, { Component } from 'react';

import SampleLayout from '/imports/ui/layouts/SampleLayout.jsx';
import SampleComponent from '/imports/ui/components/SampleComponent.jsx';

export default class SamplePage extends Component{

  render(){
    console.log("SamplePage being rendered");

      return(
        <SampleLayout content={<SampleComponent/>}/>
      );
  }
}
