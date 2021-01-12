import React from 'react';

import {BrowserRouter as Router, Link, Route , Switch} from "react-router-dom";

import Home from './components/Home/index';

class App extends React.Component{

  state ={
    name: ''
  }
  handleName=(newName)=>{
    console.log(newName,'namestate');
    // const name = this.state.name;
    this.setState({ name : newName})
    // console.log(name,'nameprops');
    // return name;
    // this.state.name = newName
    //
  //  const finalName = [...this.state.name, newName]
  //  this.setState({finalName});
  console.log('newnamestate' , this.state.name)
  }

  render(){
      return(
        <Router>
            <div className="App">
            <h1>Welcome to Habitify</h1>
              <Switch>
                  <Route exact path='/'  render={(props)=>{
                 return   <Home  HandleName={this.handleName}   {...props} />
                  }} />
                   
              </Switch>
          </div>
        </Router>
      )
  }
}

export default App;