import { tickersReducer, getTickersAction } from "../redux/tickersReducer";

describe('test getTickerAction', () => {
    const initialState = {
        tickers: [],
    }

    test('[{},{},{}] payload', () => { 
        expect(getTickersAction([{},{},{}])).toStrictEqual({type:"start", payload:[{},{},{}]});
     })

     test('reducer test', () => {
        expect(tickersReducer(initialState, {type:"start", payload:[
            {
              "ticker": "AAPL",
              "exchange": "NASDAQ",
              "price": 279.29,
              "change": 64.52,
              "change_percent": 0.84,
              "dividend": 0.56,
              "yield": 1.34,
              "last_trade_time": "2021-04-30T11:53:21.000Z"
            },
            {"ticker":"GOOGL","exchange":"NASDAQ","price":237.08,"change":154.38,"change_percent":0.10,"dividend":0.46,"yield":1.18,"last_trade_time":"2021-04-30T11:53:21.000Z"},
            {"ticker":"MSFT","exchange":"NASDAQ","price":261.46,"change":161.45,"change_percent":0.41,"dividend":0.18,"yield":0.98,"last_trade_time":"2021-04-30T11:53:21.000Z"},
            {"ticker":"AMZN","exchange":"NASDAQ","price":260.34,"change":128.71,"change_percent":0.60,"dividend":0.07,"yield":0.42,"last_trade_time":"2021-04-30T11:53:21.000Z"},
            {"ticker":"FB","exchange":"NASDAQ","price":266.77,"change":171.92,"change_percent":0.75,"dividend":0.52,"yield":1.31,"last_trade_time":"2021-04-30T11:53:21.000Z"},
            {"ticker":"TSLA","exchange":"NASDAQ","price":272.13,"change":158.76,"change_percent":0.10,"dividend":0.96,"yield":1.00,"last_trade_time":"2021-04-30T11:53:21.000Z"}
          ]})).toStrictEqual({tickers:[
            {
              "ticker": "AAPL",
              "exchange": "NASDAQ",
              "price": 279.29,
              "change": 64.52,
              "change_percent": 0.84,
              "dividend": 0.56,
              "yield": 1.34,
              "last_trade_time": "2021-04-30T11:53:21.000Z"
            },
            {"ticker":"GOOGL","exchange":"NASDAQ","price":237.08,"change":154.38,"change_percent":0.10,"dividend":0.46,"yield":1.18,"last_trade_time":"2021-04-30T11:53:21.000Z"},
            {"ticker":"MSFT","exchange":"NASDAQ","price":261.46,"change":161.45,"change_percent":0.41,"dividend":0.18,"yield":0.98,"last_trade_time":"2021-04-30T11:53:21.000Z"},
            {"ticker":"AMZN","exchange":"NASDAQ","price":260.34,"change":128.71,"change_percent":0.60,"dividend":0.07,"yield":0.42,"last_trade_time":"2021-04-30T11:53:21.000Z"},
            {"ticker":"FB","exchange":"NASDAQ","price":266.77,"change":171.92,"change_percent":0.75,"dividend":0.52,"yield":1.31,"last_trade_time":"2021-04-30T11:53:21.000Z"},
            {"ticker":"TSLA","exchange":"NASDAQ","price":272.13,"change":158.76,"change_percent":0.10,"dividend":0.96,"yield":1.00,"last_trade_time":"2021-04-30T11:53:21.000Z"}
          ]})
     })
})