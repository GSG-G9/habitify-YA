import React from "react";

import { Link, Route , Switch} from "react-router-dom";

import "./style.css";

class Home extends React.Component{
    state ={
        name: 'Guest'
    };

    handleName = (event) =>{
        event.preventDefault();
        this.setState((previousState)=>{
            console.log(event.target.value)
            return {
                name: event.target.value
            }
        })
    }
    Start =(event)=>{
        event.preventDefault();
        this.setState((previousState)=>{
            console.log(event.target)
            return {
                name: event.target.value
            }
        })
    }

  render(){
    return(
        <div>
            <form>
                <input type="text" name="text" value={this.state.name} placeholder="Enter your name" onChange={this.handleName}/>
                <button onClick={this.Start}>
                <Link to="/profile">Start</Link>
                </button>
            </form>
        </div>
    )
  }
};

export default Home;
