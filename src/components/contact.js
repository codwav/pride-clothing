import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./../css/contact.scss";
import "./../css/form.scss";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nameErrorMessage: '',
      emailErrorMessage: '',
      subjectErrorMessage: '',
      messageErrorMessage: '',
      nameMaxLength: 100,
      emailMaxLength: 320,
      subjectMaxLength: 255,
      messageMaxLength: 5000
    };
  }

  setErrorState(inputElement) {
    inputElement.classList.add('form-input-error');
  }

  resetState(inputElement) { // Remove error class
    inputElement.classList.remove('form-input-error');
  }

  validateName = (event) => {
    this.resetState(event.target);
    this.setState({nameErrorMessage: ""});
    var name = event.target.value;
    var safe = true;

    if(name.trim() === "") {
      this.setState({nameErrorMessage: "✗ Please enter your name"});
      safe = false;
    }

    if(name.length > this.state.nameMaxLength) {
      this.setState({nameErrorMessage: "✗ Name must not be over " + this.state.nameMaxLength + " characters"});
      safe = false;
    }

    if(safe === false) { // Error found. Set error state on input
      this.setErrorState(event.target);
    }
  }

  validateEmail = (event) => {
    this.resetState(event.target);
    this.setState({emailErrorMessage: ""});
    var email = event.target.value;
    var safe = true;

    if(email.trim() === "") {
      this.setState({emailErrorMessage: "✗ Please enter your e-mail"});
      safe = false;
    }

    if(email.length > this.state.emailMaxLength) {
      this.setState({emailErrorMessage: "✗ E-mail must not be over " + this.state.emailMaxLength + " characters"});
      safe = false;
    }

    if(safe === false) { // Error found. Set error state on input
      this.setErrorState(event.target);
    }
  }

  validateSubject = (event) => {
    this.resetState(event.target);
    this.setState({subjectErrorMessage: ""});
    var subject = event.target.value;
    var safe = true;

    if(subject.trim() === "") {
      this.setState({subjectErrorMessage: "✗ Please enter a subject"});
      safe = false;
    }

    if(subject.length > this.state.subjectMaxLength) {
      this.setState({subjectErrorMessage: "✗ Subject must not be over " + this.state.subjectMaxLength + " characters"});
      safe = false;
    }

    if(safe === false) { // Error found. Set error state on input
      this.setErrorState(event.target);
    }
  }

  validateMessage = (event) => {
    this.resetState(event.target);
    this.setState({messageErrorMessage: ""});
    var message = event.target.value;
    var safe = true;

    if(message.trim() === "") {
      this.setState({messageErrorMessage: "✗ Please enter your message"});
      safe = false;
    }

    if(message.length > this.state.messageMaxLength) {
      this.setState({messageErrorMessage: "✗ That's quite a long message. Please shorten it so it can be sent via this form"});
      safe = false;
    }

    if(safe === false) { // Error found. Set error state on input
      this.setErrorState(event.target);
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <h1>Contact Us</h1>
        <section>
          <form className="form-block" method="POST">
            <p className="margin-bottom-20">If you have any queries, please don't hesitate to contact us. We are more than happy to help!</p>
            <label className="form-label" for="name">Name</label>
            <input id="name" onChange={this.validateName} className="form-input" type="text" required="required" maxLength={this.state.nameMaxLength + 1} aria-describedby="name-error-message"></input><span class="error-message" id="name-error-message" aria-live="polite">{this.state.nameErrorMessage}</span>

            <label className="form-label" for="email">E-mail</label>
            <input id="email" onChange={this.validateEmail} className="form-input" type="email" required="required" maxLength={this.state.emailMaxLength + 1} aria-describedby="email-error-message"></input><span class="error-message" id="email-error-message" aria-live="polite">{this.state.emailErrorMessage}</span>

            <label className="form-label" for="subject">Subject</label>
            <input id="subject" onChange={this.validateSubject} className="form-input" type="text" required="required" maxLength={this.state.subjectMaxLength + 1} aria-describedby="subject-error-message" autoComplete="off"></input><span class="error-message" id="subject-error-message" aria-live="polite">{this.state.subjectErrorMessage}</span>
            
            <label className="form-label" for="message">Message</label>
            <textarea id="message" onChange={this.validateMessage} className="form-input form-textarea" required="required" maxLength={this.state.messageMaxLength + 1} aria-describedby="message-error-message"></textarea><span class="error-message" id="message-error-message" aria-live="polite">{this.state.messageErrorMessage}</span>

            <input className="form-submit margin-top-20 margin-bottom-20" type="submit" value="Submit"></input>
          </form>
        </section>
        <section>
          <div id="officeLocation">
            <iframe width="800" height="600" src="https://maps.google.com/maps?q=28%20Hopper%20Street%2C%20Mount%20Cook%2C%20Wellington%206011&t=&z=19&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Contact;
