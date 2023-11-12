import React from "react";
import Nav from "./components/Nav.jsx";
import User from "./components/User.jsx";
import {connect} from "react-redux";
import {setUserName} from "./actions/user.actions.js";

const App = ( {user, math, setName} ) => {
    const changeUsername = (name) => {
        setName(name)
    }

    return(
        <div className="contaier">
            <Nav changeUsername={changeUsername}/>
            <User userName={user.name}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) =>  {dispatch(setUserName(name))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)