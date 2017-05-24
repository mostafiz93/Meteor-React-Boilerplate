import React, { Component } from 'react';

export default class Sidebar extends React.Component{

    render(){
        return(
          <div className='three wide column sideBar'>
            <ul className='sideBarMenu'>
              <li><a href='#' className='activeMenu'><i className='file text outline icon'></i> প্রথম অধ্যায়</a></li>
              <li><a href='#'><i className='file text outline icon'></i> দ্বিতীয় অধ্যায়</a></li>
              <li><a href='#'><i className='file text outline icon'></i> তৃতীয় অধ্যায়</a></li>
            </ul>
          </div>
        )
    }
}
