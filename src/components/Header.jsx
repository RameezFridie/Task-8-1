import React from 'react';
// Importing my image from the folder
import h_image from './images/GameHub.png';
// Script that sets the state whether one is logged in or not
class LoginControl extends React.Component {
  // constructor with below properties
  constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
    // Event that occurs while user is logged in
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
    // Event that occurs while user is logged out
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
    // Checks the state of button
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;

      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
      // Depending on the state the button is in return a greeting or a login screen
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  // Function that greets when user logs in
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
// Function that asks user to log in when not logged in
  function GuestGreeting(props) {
    return <h1>Please log in.</h1>;
  }
// function that decides which greeting to display depending on state
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
// function of login button
  function LoginButton(props) {
    return (
      <button id='log-in' class='btn' onClick={props.onClick}>
        Login
      </button>
    );
  }
// Function of logout button
  function LogoutButton(props) {
    return (
      <button id='log-out' class='btn' onClick={props.onClick}>
        Logout
      </button>
    );
  }
// Exports what displays in the HTML
export class Header extends React.Component {
    render() {
        return (
            <div className='Jumbotron'>
                <div>
                    <img className='banner' src={h_image} alt=""/>
                </div>
                <div id='login'>
                  {/* Runs the class function logincontrol */}
                <LoginControl/>
                </div>
            </div>
        );
    };
};