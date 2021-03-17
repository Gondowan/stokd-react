import { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signIn, signOut } from '../../actions';

class LoginForm extends Component{

  renderError({ error, touched }){
    if(touched && error){
      return(
        <div className="login-alert">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput= ({ input, label, meta }) =>{
    const className = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    ); 
  }

  render(){
    console.log(this.props)
    return(
      <section id="contact" className="container">
      <div className="row">
          <h3>Login to your account</h3>
          <form name="contact" className="col s12" method="POST" data-netlify="true">
            <Field 
              name="email" 
              component={this.renderInput} 
              label='Email' 
            />
            <Field 
              name="password" 
              component={this.renderInput} 
              label="Password" 
            />
            <button className="btn btn-large waves-effect waves-light deep-orange lighten-1" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>

          </form>
      </div>
    </section>
    )
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

const validate = (formValues) =>{
  const errors = {};

  if(!formValues.email){
    errors.email = 'Please enter an email'
  }
  if (!formValues.password){
    errors.password = 'Please enter your password';
  }
  return errors;
}

export default reduxForm({
  form: 'loginForm',
  validate
})(connect(mapStateToProps, { signIn, signOut })(LoginForm))
  