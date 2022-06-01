const initialState = {
    tickers: [],
}

export const tickersReducer = (state = initialState, action) => {

    if(action.type === "start") {
        return {...state, tickers:[...action.payload]}
    }
}

export const getTickersAction = (payload) => {

    return ({type:"start", payload});
};