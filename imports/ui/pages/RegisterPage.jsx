import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class RegisterPage extends Component{

  componentWillMount(){
      document.body.style.background= "#004212";
  }

  componentWillUnmount(){
    document.body.style.background= "#FFF";
  }

  register(){
    data = {
      name : ReactDOM.findDOMNode(this.refs.name).value,
      userId : ReactDOM.findDOMNode(this.refs.userId).value,
      password : ReactDOM.findDOMNode(this.refs.password).value,
      password1 : ReactDOM.findDOMNode(this.refs.password1).value,
      code: ReactDOM.findDOMNode(this.refs.code).value,
    }
    if(data.password != data.password1){
      window.alert("Error! Passwords don't match.");
      return;
    }
    else if(data.name == '' ||
      data.userId == '' ||
      data.password == ''
    ){
      window.alert("Please fill up all fields");
      return;
    }
    if(data.code != 'army101'){
      alert("Code is wrong!");
      return;
    }
    Meteor.call("user.create", data, function(error, result){
      if(error){
        console.log("error", error);
        window.alert('Error! Please contact admin.')
      }
      if(result){
         console.log(result);
         Meteor.loginWithPassword(data.userId, data.password, (error) =>{
           FlowRouter.go('/');
         })
      }
    });
  }

  render(){
    return(
      <div className='loginSectionCon'>
        <a href='#'><img src="images/logo.png" alt="BanBeis" className="loginLogo"/></a>
        <h2>নিবন্ধন করুন</h2>
        <div className='logFieldContainer'>
            <p>নাম</p>
            <input type="text" className="loginField" ref='name' placeholder="আপনার নাম লিখুন"/>
            <p>ইউজার আইডি অথবা ইমেইল</p>
            <input type="text" className="loginField" ref='userId' placeholder="ইউজার আইডি অথবা ইমেইল লিখুন"/>
            <p>অ্যাকটিভেশন কোড</p>
            <input type="text" className="loginField" ref='code' placeholder="অ্যাকটিভেশন কোড লিখুন"/>
            <p>পাসওয়ার্ড</p>
            <input type="password" className="loginField" ref='password' placeholder="পাসওয়ার্ড লিখুন"/>
            <p>পুনরায় পাসওয়ার্ড লিখুন</p>
            <input type="password" className="loginField" ref='password1' placeholder="পুনরায় পাসওয়ার্ড লিখুন"/>
            <br/>
            <div className='two ui buttons'>
              <button className="ui blue button" onClick={this.register.bind(this)}>নিবন্ধন</button>
            </div>
        </div>
      </div>
    )
  }
}
