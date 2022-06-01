import { getTickersAction } from "./tickersReducer"

import io from 'socket.io-client';
let socket = io('http://localhost:4000');

export const fetchTickers = () => {
    return function(dispatch){
        // check connection
        socket.on("connect", () => socket.connected);
        //start emit
        socket.emit("start");
        //get tickers
        socket.on("ticker", function (quotes) {
            dispatch(getTickersAction(quotes))
        });
    }
}