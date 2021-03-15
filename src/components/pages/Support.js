const Support = () =>{
  return(
    <div className="container support-form">
      <div className="row">
        <form className="col s12 md10">

          <div className="row">
            <div className="input-field col s12">
              <input  id="support-name" type="text" className="validate" />
              <label htmlFor="support-name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input  id="company" type="text" className="validate" />
              <label htmlFor="company">Company</label>
            </div>
          </div>
        
          <div className="row">
            <div className="input-field col s12">
              <input id="email-support" type="email" className="validate" />
              <label htmlFor="email-support">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="phone-support" type="tel" className="validate" />
              <label htmlFor="phone-support">Phone</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="message-support" className="materialize-textarea"></textarea>
              <label htmlFor="message-support">Tell us more about your request</label>
            </div>
          </div>
          <button className="btn deep-orange lighten-1 btn-large waves-effect waves-light" type="submit" name="action">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>      
    </div>
  )
}

export default Support;