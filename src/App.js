import React, { Component } from 'react';
import Change from './Change'
import PurseForm from './PurseForm'
import Purse from './Purse';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      //set inital/default state 
      this.state = {
        changeToMake: 0.00, 
        purse: [
          {
            coinName: "Quarter's",
            denomination: .25
          }, 
          {
            coinName: "Nickle's",
            denomination: .05
          }, 
          {
            coinName: "Dime's",
            denomination: .10
          }, 
          {
            coinName: "Pennies",
            denomination: .01
          }
        ],
        change: [
          {
            coinName: "Quarter's",
            numCoins: 0
          }, 
          {
            coinName: "Nickle's",
            numCoins: 0
          }, 
          {
            coinName: "Dime's",
            numCoins: 0
          }, 
          {
            coinName: "Pennies",
            numCoins: 0
          }
        ], 
        message: ""
      }

      //need this so our event handler methods use the correct reference of 'this'
      this.handleSubmit = this.handleSubmit.bind(this); 
      this.addNewCoin = this.addNewCoin.bind(this); 
  }

  handleSubmit(e){
    e.preventDefault(); 

    //making copy of purse so we dont directly modify the state 
    let sortedPurse = [...this.state.purse];
    //sorting in coin value desc order, as that is the order we'll need to process in later
    sortedPurse.sort((d1, d2) => {
      return d2.denomination - d1.denomination;
    });
    //copy of changeToMake state 
    let changeToMake = this.state.changeToMake;
    
    //create our change arr obj, which we'll add coins to below to build out what change we're giving
    let change = [{}];
    
    // loop through our purse
    sortedPurse.map(c => {
      //see how many of this (c) coin we need 
      let numCoins = Math.floor(changeToMake / c.denomination)
      
      //creating the arr above created an empty obj in the arr, so we need to check on this so we dont have en empty obj at element 0 (would refactor this as its ugly)
      Object.keys(change[0]).length > 0 ? 
      change.push({
        coinName: c.coinName, 
        numCoins: numCoins    //could destructure here, but being explicit
      }) : 
      change = [{
        coinName: c.coinName, 
        numCoins: numCoins 
      }] 
      
      //decrement the changeToMake val, which will now be our remaining amount
      //toFixed(2) is so we're always getting to 2 decimal places. Ran into math/rounding issues without it
      changeToMake = (changeToMake - (c.denomination * numCoins)).toFixed(2);
      
      return change; 
    })

    //checking to see if we were able to provide exact change 
    const message = changeToMake > 0 ? `We were not able to provide exact change, remaining change ${Number(changeToMake).toFixed(2)}` : ""
    
    //setState, which will invoke render() 
    this.setState({purse: sortedPurse, change: change, message: message}) //could destructure here, but being explicit
  }

  addNewCoin(newCoin){
    //tiny bit of validation, to ensure a coin with this value is not already in our purse
    //using the 'some' method to check if the denomination of the new coin already exists   
    if(!this.state.purse.some(c => c.denomination === newCoin.denomination)) {
      //adding the new coin, recieved from the PurseForm, to the purse state 
      this.setState({purse: [...this.state.purse, newCoin]}); 
    }
  }

  deleteCoin(coin){
    //using filter to remove this coin from  the array 
    const purse = this.state.purse.filter(c => c.denomination !== coin.denomination); 
    this.setState({purse})
  }

  render() {
    const changeToMake = this.state.changeToMake;    
    
    //loop through our change array to build out the list of change we calculated
    const change = this.state.change.map((c, i) => (
      <Change
        key={i} //not ideal, but not working with an actual id
        name={c.coinName}
        numCoins={c.numCoins}
      />
    ));

    //build out the list of coins we have availble 
    const purse = this.state.purse.map((c, i) => (
      <Purse 
      key={i}
      name={c.coinName}
      denomination={Number(c.denomination).toFixed(2)}
      onDelete={this.deleteCoin.bind(this, c)}
      >
      </Purse>
    )); 
  
    return (
      <div className="App">
        <div>
          <h2>Make Change App</h2>        
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="changeToMake">Change to Make </label>
              <input 
                type="number"
                id="changeToMake"
                name="changeToMake"
                value={changeToMake}
                min="0"
                step="0.01"
                onChange={(e) => this.setState({[e.target.name]: e.target.value})}
              />
              <button
                type="submit"
              >
              Make Change
              </button>
            </form>
        </div>
        <div>
          <h3>Your change due is: ${Number(changeToMake).toFixed(2)}</h3>
          <span>{this.state.message}</span>
          <ul>
            {change}
          </ul>
        </div>
        <div>
          <PurseForm addNewCoin={this.addNewCoin} />
        </div>
        <div>
          <h4>Coins in Purse</h4>
          <ul>
            {purse}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;