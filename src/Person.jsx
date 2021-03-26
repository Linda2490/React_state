import React, { Component } from 'react'
import img from "./imgsrc.jpg"
import './App.css';


export default class Person extends Component {
    constructor (props) {
        super (props) 
        this.state = {
          fullName: "Linda Zoghlami",
          bio: "learning at GO MY CODE",
          profession : "Web Developer",
          count : 0,
        }}

  
    render() {
      const {count} = this.state
        return (
           <div className='App'>
                <h1 style={{color:'white'}}>count : {count}</h1>
                 
                 <br/>
                 <img  src={img} alt='me'style={{height :'300px'}}/>
                 
                 
             
                 <h1 style={{color:'red'}}>{this.state.fullName}</h1> 
                  
                 <h2>{this.state.bio}</h2>
                 
                
                 <h1>{this.state.profession}</h1>
                 
             
            </div> 
        )
    }
    componentDidMount() {
      this.myInterval = setInterval (()=>{
      this.setState({count : this.state.count + 1})
},1000)
  }
    componentWillUnmount () {
      clearInterval (this.myInterval)
    }
}
