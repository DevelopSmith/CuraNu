import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import promise from "redux-promise-middleware";

import widgetsReducer from './reducers/widgetsReducer.ts';
import userReducer from './reducers/userReducer.ts';

// make a store of multiple reducers
export default createStore(
	combineReducers({
		widgetsReducer,
		userReducer
	}),
	{} ,
	applyMiddleware(thunk, multi, promise())
);