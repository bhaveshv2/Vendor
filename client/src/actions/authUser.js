import { LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS, SIGNUP_START, SIGNUP_FAILED, SIGNUP_SUCCESS, AUTHENTICATE_USER, LOG_OUT, CLEAR_AUTH_STATE } from "./actionTypes";

export function startLogin(){
    return {
        type:LOGIN_START,
    };
}

export function loginFailed(errorMessage){
    return {
        type:LOGIN_FAILED,
        error:errorMessage
    }
}

export function loginSuccess(user){
    return {
        type:LOGIN_SUCCESS,
        user,
    }
}

export function login(email,password){
    return (dispatch) =>{
        dispatch(startLogin());
        const url='http://localhost:5000/auth/signin';
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email,password}),
        })
        .then(response => response.json())
        .then (data => {
            console.log('data',data);
            if(data.success){
                // if Login successful than dispatch the user
                localStorage.setItem('token',data.data.token);              //Persisting the user
                dispatch(loginSuccess(data.data.user));
                return;
            }
            dispatch(loginFailed(data.message));
        });
    }
}

export function startSignup(){
    return {
        type:SIGNUP_START
    }
}

export function signupFailed(errorMessage){
    console.log(errorMessage);
    return {
        type:SIGNUP_FAILED,
        error:errorMessage
    }
}

export function signupSuccess(user){
    return {
        type:SIGNUP_SUCCESS,
        user,
    }
}

export function signup(name,email,password,phoneNo,userType){
    return (dispatch) =>{
        const url='http://localhost:5000/user/createuser';
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name,email,password,phoneNo,userType}),
        })
        .then(response => response.json())
        .then (data => {
            console.log('data',data);
            if(data.success){
                // if Login successful than dispatch the user
                dispatch(signupSuccess(data.data.user));
                return;
            }
            dispatch(signupFailed(data.message));
        });
    }
}

export function authenticateUser(user){
    return{
        type:AUTHENTICATE_USER,
        user,
    }
}

export function logoutUser(){
    return {
        type:LOG_OUT,
    }
}

export function clearAuthState(){
    return{
        type: CLEAR_AUTH_STATE,
    }
}