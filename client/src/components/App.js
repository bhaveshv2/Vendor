import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as jwtDecode from 'jwt-decode';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { getTokenFromLocalStorage } from '../helperUtils';
import { authenticateUser } from '../actions/authUser';

import Navbar from './Navbar';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';

class App extends Component{
  componentDidMount(){
    const token = getTokenFromLocalStorage();

    if(token){
      const user = jwtDecode(token);
      console.log(user);
      this.props.dispatch(
        authenticateUser({
          email:user.email,
          _id:user._id,
          name:user.name,
        })
      );
    }
  }

  render(){
    const {auth}=this.props;
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" render={(props)=>{return <Home {...props} isLoggedIn={auth.isLoggedIn}/>}} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return{
    auth:state.auth,
  }
}

export default connect(mapStateToProps)(App);
