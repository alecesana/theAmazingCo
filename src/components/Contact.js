import React, {Component} from 'react'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      email: 'fghdfh',
      phone: '',
      message: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(event) {
    alert('name : ' + this.state.name + '\n' +
          'company : ' + this.state.company + '\n' +
          'phone : ' + this.state.phone + '\n' +
          'message : ' + this.state.message    
    );
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log("changeHappening")
    this.setState({
      [name]: value
    });
  }

  render() {
    
    return (
      <div className = "contact" id="Contact">
        <h2>Contact</h2>
        <div className = "formContainer">
          <form className = "contactForm" onSubmit = {this.handleSubmit}>
          <div className = "formInputsContainer">
            <div className = "formSection" >
            <div>
              <label>
              Name
              </label>
            </div> 
            <div>
              <input
                name="name"
                type="text"   
                value={this.state.name}         
                onChange={this.handleInputChange}
                placeholder = "your name" /> 
            </div>       
          </div>
          <div className = "formSection" >
            <div>
              <label>
                Company
              </label>
            </div>
            <div>
            <input
              name="company"
              type="text"  
              value={this.state.company}          
              onChange={this.handleInputChange}
              placeholder = "your company name"/>  
            </div> 
                  
          </div>
          <div className = "formSection" >
            <div>
            <label>
              Phone
              </label>
            </div>
            <div>
            <input
              name="phone"
              type="phone" 
              value={this.state.phone}           
              onChange={this.handleInputChange}
              placeholder = "your phone number" />             
            </div>                
          </div>     
            <div className = "formSection" >
                <div>
                  <label>
                    Message
                  </label>
                </div>
                <div >   
                    <textarea 
                    name = "message"
                    rows = "10"             
                    value={this.state.message}
                    onChange={this.handleInputChange}         
                    placeholder = "what's going on?"></textarea>  
                </div>
            </div> 
         </div>   
          <div className = "formButtonSection" > 
              <input className = "formButton" type="submit" value="Submit" />
          </div>    
          </form >
               
        </div>
      </div>
    )
  }
}






export default Contact

