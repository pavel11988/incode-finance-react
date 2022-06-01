import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import PropTypes from "prop-types";
import PriceChanger from "../PriceChanger/PriceChanger";

const TableTrade = ({ tickers }) => {
  const shortid = require("shortid");

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Ticker</TableCell>
            <TableCell align="center">Exchange</TableCell>
            <TableCell align="center">Last Trade Time</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickers !== 0 &&
            tickers.map(
              ({ ticker, exchange, price, last_trade_time, changePrice }) => (
                <TableRow key={shortid.generate()}>
                  <TableCell align="center">{ticker}</TableCell>
                  <TableCell align="center">{exchange}</TableCell>
                  <TableCell align="center">{last_trade_time}</TableCell>
                  <TableCell align="center">{price}</TableCell>
                  <TableCell align="center" width="100px">
                    <PriceChanger changePrice={changePrice} />
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

Table.propTypes = {
  tickers: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        ticker: PropTypes.string,
        exchange: PropTypes.string,
        price: PropTypes.number,
        change: PropTypes.number,
        change_percent: PropTypes.number,
        dividend: PropTypes.number,
        yield: PropTypes.number,
        last_trade_time: PropTypes.string,
        changePrice: PropTypes.number,
      })
    )
  ),
};

export default TableTrade;
