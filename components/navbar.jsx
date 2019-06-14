import $ from "jquery";
import React, { Component } from "react";
import Link from "next/link";
import about from "../pages/about";
class Navbar extends Component {

  componentDidMount() {
    $(document).ready(function() {

      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
    
      });
    })
  }

  render () {
  return(
    <nav className="navbar is-link" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="#">
          <a className="navbar-item">
            <img src="/static/img/bulma-logo.png" alt="bulma logo"/>
          </a>
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            Home
          </div>

          <div className="navbar-item">
            Account
          </div>

          <div className="navbar-item">
            Jobs
          </div>

          <Link href="/about">
            <a className="navbar-item">
            About
          </a>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
              Contact us
            </div>
          <div className="buttons">
            <div className="navbar-item button is-primary">
              login
            </div>

            <div className="navbar-item button is-light">
              sign up
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  )}
}

export default Navbar;