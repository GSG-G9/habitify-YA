import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

class Home extends React.Component {
    state = {
        name: ''
    };


    handleChange = (event) => {
        this.setState((previousState)=>{
            return {
                name: event.target.value
            }
        })
    }
    handleSubmit =(event) => {
        event.preventDefault();
        if(this.state.name === ''){
            this.setState((previousState)=>{
                return {
                    name: 'Guest'
                }
            })
        }else{
            const {history:{push}} = this.props;
            const name = this.state.name;
            this.props.HandleName(name);
            push('/profile');
        }

    }

  render() {
    return(
        <div>
            <form  onSubmit={this.handleSubmit}>
                <label htmlFor="username">
                Enter your name :
                <input type="text" name="text" id="username" value={this.state.name} placeholder="username" onChange={this.handleChange}/>
                </label>
                <input type="submit"  value="Start" />
            </form>
        </div>
    )
  }
};

export default Home;
