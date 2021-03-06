import { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register, signOut } from '../../actions';
import FieldArraysForm from '../subcomponents/FieldsArrayForm'

class RegisterForm extends Component{

  onSubmit = (formValues) =>{
    this.props.register(formValues)
  }


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
        <input {...input} />
        {this.renderError(meta)}
      </div>
    ); 
  }

  render(){
    
    return(
      <section id="contact" className="container">
      <div className="row">
          <h3>Let's register your business</h3>
          <form className="col s12" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field 
              name="name" 
              component={this.renderInput} 
              label='Company Name' 
            />
            <Field 
              name="location" 
              component={this.renderInput} 
              label="Address" 
            />
            <Field 
              name="serviceType" 
              component={this.renderInput} 
              label="Service Type" 
            />
            <FieldArraysForm />
            <button className="btn btn-large waves-effect waves-light deep-orange lighten-1" >Submit
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
  if (!formValues.passwordConfirmation){
    errors.password = 'Please confirm your password';
  }
  return errors;
}
  
export default connect(
  mapStateToProps,
  { signOut, register }
)(reduxForm({ form: 'RegisterForm', validate })(RegisterForm));