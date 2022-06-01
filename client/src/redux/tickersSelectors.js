const getAllTickers = (state) => {
    if (!state) { return []};
    if (state) {return state.tickers}
};

const tickersSelectors = {
    getAllTickers
} 

export default tickersSelectors;
