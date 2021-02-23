const ContactForm = () =>{
  return(
    <section id="contact" class="container">
    <div class="row">
        <h3>Get in touch</h3>
        <form name="contact" class="col s12" method="POST" data-netlify="true">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix black-text lighten-1">account_circle</i>
              <input id="first_name" type="text" name="name" class="validate" />
              <label for="first_name">Name</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix black-text lighten-1">home_work</i>
              <input id="first_name" type="text" name="company" class="validate" />
              <label for="first_name">Company name</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix black-text lighten-1">phone</i>
              <input id="first_name" type="tel" name="phone" class="validate" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
              <label for="first_name">Phone number</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix black-text lighten-1">email</i>
              <input id="email" type="email" name="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix black-text lighten-1">mode_edit</i>
              <textarea id="textarea1" name="message" class="materialize-textarea"></textarea>
              <label for="textarea1">Message</label>
            </div>
          </div>

          <button class="btn btn-large waves-effect waves-light deep-orange lighten-1" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>

        </form>
    </div>
  </section>
  )
}

export default ContactForm;