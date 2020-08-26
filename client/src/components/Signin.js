import React from 'react';
import {connect} from 'react-redux';
import { clearAuthState, login } from '../actions/authUser';
import { Redirect } from 'react-router-dom';

class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        };
    }

    componentWillUnmount(){
        this.props.dispatch(clearAuthState());
    }

    handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        const {email,password} = this.state;

        if(email && password){
            this.props.dispatch(login(email,password));
        }

    }

    render(){
        const { error,inProgress,isLoggedIn} = this.props.auth;
        const { from } = this.props.location.state || {from:{pathname:'/'}};

        if(isLoggedIn){
            return <Redirect to={from} />
        }

        return (
            <form className="login-form">
                <span className="login-signup-header">SIGN IN</span>
                {error && <div className="alert error-dailog">{error}</div>}
                <div className="field">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        onChange={(e)=>this.setState({email:e.target.value})}
                        />
                </div>
                <div className="field">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required
                        onChange={(e)=>this.setState({password:e.target.value})}
                        />
                </div>
                <div className="field">
                    {inProgress ? 
                        <button onClick={this.handleFormSubmit} disabled={inProgress}>Logging In...</button>  
                        : 
                        <button onClick={this.handleFormSubmit} disabled={inProgress}>Log In</button>
                    }    
                </div>
            </form>
        );
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth,
    }
}

export default connect(mapStateToProps)(Signin);