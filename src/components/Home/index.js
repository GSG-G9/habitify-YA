import React from "react";

import { Link, Route , Switch} from "react-router-dom";

import "./style.css";

class Home extends React.Component{
    state ={
        name: ''
    };

    setName = (event) =>{
        this.setState((previousState)=>{
            console.log(event.target.value)
            return {
                name: event.target.value
            }
        })
    }
    Start =(event)=>{
        event.preventDefault();
        const name = this.state.name;
        console.log('zftname' , name);
        this.props.HandleName(name);
    }

  render(){
    return(
        <div>
            <form>
                <input type="text" name="text" value={this.state.name} placeholder="Enter your name" onChange={this.setName}/>
                <button onClick={this.Start}>
                <Link to="/profile">Start</Link>
                </button>
            </form>
        </div>
    )
  }
};

export default Home;
