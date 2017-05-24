import React, { Component } from 'react';

export default class Sidebar extends React.Component{

    render(){
        return(
          <div className='three wide column sideBar'>
            <ul className='sideBarMenu'>
              <li><a href='#' className='activeMenu'><i className='file text outline icon'></i> First Item</a></li>
              <li><a href='#'><i className='file text outline icon'></i> Second Item</a></li>
              <li><a href='#'><i className='file text outline icon'></i> Third Item</a></li>
            </ul>
          </div>
        )
    }
}
