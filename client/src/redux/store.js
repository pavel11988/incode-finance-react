import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import { tickersReducer } from "./tickersReducer";
import thunk from 'redux-thunk';

const rootReducer = tickersReducer;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));