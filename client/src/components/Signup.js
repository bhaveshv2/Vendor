import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup, startSignup, clearAuthState } from '../actions/authUser';


class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            phoneNo:'',
            userType:'Vendor',
        }
    }

    componentWillUnmount(){
        this.props.dispatch(clearAuthState());
    }

    handleFormSubmit = (e)=>{
        e.preventDefault();
        const { name,email, password, phoneNo,userType } = this.state;
        
        if(name && email && password && userType && phoneNo){
            // console.log(this.props.dispatch(startSignup()));
            // console.log(this.props.dispatch(signup(name,email,password,confirmPassword)));
            this.props.dispatch(startSignup());
            this.props.dispatch(signup(name,email,password,phoneNo,userType));
        }
    }

    render(){
        const { error,inProgress,isLoggedIn } = this.props.auth;

        if(isLoggedIn){
            return <Redirect to="/signin" />
        }

        return(
            <form className="login-form">
               <span className="login-signup-header">SIGN UP</span>
                {error && <div className="alert error-dailog">{error}</div>}
                <div className="field">
                    <input type="text" placeholder="Name" required onChange={(e)=> this.setState({name:e.target.value})} />
                </div>
                <div className="field">
                    <input type="email" placeholder="Email" required onChange={(e)=> this.setState({email:e.target.value})}/>
                </div>
                <div className="field">
                    <input type="password" placeholder="Password" required onChange={(e)=> this.setState({password:e.target.value})}/>
                </div>
                {/* <div className="field">
                    <input type="password" placeholder="Confirm Password" required onChange={(e)=> this.setState({confirmPassword:e.target.value})}/>
                </div> */}
                <div className="field">
                    <input type="text" placeholder="Phone No." required onChange={(e)=> this.setState({phoneNo:e.target.value})}/>
                </div>
                <div className="field">
                    {inProgress ? 
                        <button onClick={this.handleFormSubmit} disabled={inProgress}>Signing Up...</button> 
                        :  
                        <button onClick={this.handleFormSubmit} disabled={inProgress}>Signup</button>
                    }   
                </div>
            </form>
        )
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth,
    }
}

export default connect(mapStateToProps)(Signup);