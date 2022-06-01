import { ReactComponent as ArrowUp } from "../../images/icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../images/icons/arrow-down.svg";
import { ReactComponent as ArrowNull } from "../../images/icons/arrow-dot.svg";

import {
  ChangeContainer,
  ChangeUp,
  ChangeDown,
  ChangeNull,
  ChangeLoading,
} from "./PriceChanger.styled";

const PriceChanger = ({ changePrice }) => {
  const PRICE_UP = changePrice > 0;
  const PRICE_DOWN = changePrice < 0;
  const PRICE_NOT_CHANGED = changePrice === 0;
  const PRICE_LOADING = changePrice === undefined || !changePrice;

  function roundPrice(changePrice) {
    return Math.round(changePrice * 100) / 100;
  }

  return (
    <ChangeContainer>
      {PRICE_UP && (
        <ChangeUp>
          {<ArrowUp fill={"#399f39"} />}
          {roundPrice(changePrice)}
        </ChangeUp>
      )}
      {PRICE_DOWN && (
        <ChangeDown>
          {<ArrowDown fill={"#d02e2e"} />}
          {roundPrice(changePrice)}
        </ChangeDown>
      )}
      {PRICE_NOT_CHANGED && (
        <ChangeNull>
          {<ArrowNull fill={"#99c337"} />}
          {roundPrice(changePrice)}
        </ChangeNull>
      )}

      {PRICE_NOT_CHANGED && (
        <ChangeNull>
          {<ArrowNull fill={"#99c337"} />}
          {roundPrice(changePrice)}
        </ChangeNull>
      )}

      {PRICE_LOADING && <ChangeLoading>Loading...</ChangeLoading>}
    </ChangeContainer>
  );
};

export default PriceChanger;
