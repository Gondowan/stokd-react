const ContactForm = () =>{
  return(
    <section id="contact" className="container">
    <div className="row">
        <h3>Get in touch</h3>
        <form name="contact" className="col s12" method="POST" data-netlify="true">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix black-text lighten-1">account_circle</i>
              <input id="first_name" type="text" name="name" className="validate" />
              <label htmlFor="first_name">Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix black-text lighten-1">home_work</i>
              <input id="first_name" type="text" name="company" className="validate" />
              <label htmlFor="first_name">Company name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix black-text lighten-1">phone</i>
              <input id="first_name" type="tel" name="phone" className="validate" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
              <label htmlFor="first_name">Phone number</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix black-text lighten-1">email</i>
              <input id="email" type="email" name="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix black-text lighten-1">mode_edit</i>
              <textarea id="textarea1" name="message" className="materialize-textarea"></textarea>
              <label htmlFor="textarea1">Message</label>
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

export default ContactForm;