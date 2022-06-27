import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthAppState";
import { couponsReducer } from "./CouponsAppState";


//Multiple Reducers
const reducers = combineReducers({taskReducer: couponsReducer,authState: authReducer});
const store = createStore(reducers)


export default store;