//libs, hooks, redux
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickers } from "../../redux/tickersActions";
import tickersSelectors from "../../redux/tickersSelectors";

//components, styled components
import Table from "../Table/Table";
import { AppContainer, AppTitle } from "./App.styled";

function App() {
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  const [prevTickers, setPrevTickers] = useState([]);

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchTickers());
    }
    isFirstRender.current = false;
  }, [dispatch]);

  const newTickers = useSelector(tickersSelectors.getAllTickers);

  useEffect(() => {
    setPrevTickers(newTickers);
    if (prevTickers.length !== 0) {
      newTickers.map(
        (newTicker) =>
          (newTicker.changePrice =
            newTicker.price -
            prevTickers.find((prevTicker) => prevTicker.name === newTicker.name)
              .price)
      );
    }
  }, [newTickers]);

  return (
    <AppContainer>
      <AppTitle>Finance React Test Task</AppTitle>
      <Table tickers={newTickers} />
    </AppContainer>
  );
}

export default App;
