import React, {Component} from 'react';

class PurseForm extends Component {
  constructor(props){
    super(props);
    
    this.state = {      
        coinName: "", 
        denomination: 0.00      
    };
    
    //need this so our event handler methods use the correct reference of 'this'
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  }

  //this handleChange event handler will be able to handle changes with either of the inputs in the form 
  handleChange(e){
    this.setState({      
        [e.target.name]: e.target.value      
    });
  }

  handleSubmit(e){
    e.preventDefault(); 
    this.props.addNewCoin(this.state); 
  }

  render() {
    return (
      <div>
        <h3>Add a New Coin to Purse</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="coinName"> New Coin Name </label>
          <input
            type="text"
            name="coinName"
            value={this.state.coinName}
            onChange={this.handleChange}
          />
          <label htmlFor="denomination"> New Coin Denomination </label>
          <input 
            type="number"
            name="denomination"
            value={this.state.denomination}
            min="0"
            step="0.01"
            onChange={this.handleChange}
          />
          <button 
            type="submit"
          >
          Add Coin To Purse
          </button>
        </form>
      </div>
    )
  }
}

export default PurseForm; 