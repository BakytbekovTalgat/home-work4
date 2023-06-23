import React from 'react';

export default class NameFrom extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({value: e.target.value.toUpperCase() });
  }

  handleSubmit(e) {
    alert("Send message" + this.state.value)
    e.preventDefault();
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          ФИО:
          <input className='input-text' 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
          />
        </label>
        <input className='input-send1' type="submit" value="Send" /> <br />

        <label>
          $(".ss").keyup(function(e) {
              this.value = this.value.replace(/[^0-9\.]/g, '')
            });
          Phone Number:
          <input className='input-number' 
            type="text" 
            value={this.state.value}
            onChange={this.handleChange} 
            
          />
        </label>
        <input className='input-send2' type="submit" value="Send" /> <br />
        
        <label>
          Email @:
          <input className='input-email' 
            type="text" 
            value={this.state.value}
            onChange={this.handleChange} 
          />
        </label>
        <input className='input-send3' type="submit" value="Send" />

      </form>
    )
  }
}
