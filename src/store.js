import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import {mathReducer} from "./reducers/mathReducer.js";
import {userReducer} from "./reducers/userReducer.js";

export default createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(logger, thunk)
)