import React from 'react';
import Signin from './Signin';
import Signup from './Signup';

class Home extends React.Component{

    render(){
        const {isLoggedIn} = this.props;
        return(
            <div className="home-container">
                {isLoggedIn && (
                    <div className="add-bill-button">
                        <button className="">+ ADD BILL</button>
                    </div>
                )}
                {!isLoggedIn && <Signup />}
                {!isLoggedIn && <Signin {...this.props}/>}
            </div>
        )
    }
}

export default Home;

