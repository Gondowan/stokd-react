const LoginForm = () =>{
  return(
    <section id="contact" className="container">
    <div className="row">
        <h3>Login to your account</h3>
        <form name="contact" className="col s12" method="POST" data-netlify="true">
          
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix black-text lighten-1">email</i>
              <input id="email" type="email" name="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix black-text lighten-1">password</i>
              <input id="password" type="password" name="password" className="validate" />
              <label htmlFor="email">Password</label>
            </div>
          </div>
          

          <button className="btn btn-large waves-effect waves-light deep-orange lighten-1" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>

        </form>
    </div>
  </section>
  )
}
export default LoginForm;