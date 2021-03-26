
import './App.css';


import React, { Component } from 'react'
import Person from './Person'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show :false}
    this.togglebutton = () => {
    this.setState ({show : !this.state.show})
  }
     }
  
      
  render() {
        
    return (
       <div className='App'>
         
         <button   onClick = {()=> this.togglebutton()}>show </button>
         {this.state.show ? (<Person/>) : null}
       </div>
   
      
      
         
     
    )
    
  }
}

