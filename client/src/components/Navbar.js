import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/authUser';
import { connect } from 'react-redux';


class Navbar extends Component {
    logout = () =>{
        localStorage.removeItem('token');
        this.props.dispatch(logoutUser());
    }
    render(){
        console.log('Navbar' ,this.props);
        const {auth} = this.props;
        return(
            <div>
                <nav className="nav">
                    <div className="left-nav">
                        <Link to="/">
                            <img src="https://general.futuregenerali.in/img/logo.png" alt="logo"/>
                        </Link>
                    </div>
                    <div className="right-nav">
                        {auth.isLoggedIn && (
                            <div className="user">
                                <Link to="/settings">
                                    <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="user-dp" id="user-dp"/>
                                    <span>{auth.user.name}</span>
                                </Link>
                            </div>
                        )}
                        <div className="nav-links">
                            <ul>
                                {!auth.isLoggedIn && (
                                    <li>
                                        <Link to="/signin">Login</Link>
                                    </li>
                                )}

                                {auth.isLoggedIn && <li onClick={this.logout}>Logout</li>}

                                {!auth.isLoggedIn && (
                                    <li>
                                        <Link to="/signup">Register</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth,
    }
}

export default connect(mapStateToProps)(Navbar);