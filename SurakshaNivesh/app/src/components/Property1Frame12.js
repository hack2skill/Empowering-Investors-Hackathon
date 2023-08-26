import { useMemo } from "react";
import styles from "./Property1Frame12.module.css";
const Property1Frame12 = ({
  property1Frame12Position,
  property1Frame12Width,
  property1Frame12Height,
  enterExchangeNameFontSize,
}) => {
  const property1Frame12Style = useMemo(() => {
    return {
      position: property1Frame12Position,
      width: property1Frame12Width,
      height: property1Frame12Height,
    };
  }, [property1Frame12Position, property1Frame12Width, property1Frame12Height]);

  const enterExchangeNameStyle = useMemo(() => {
    return {
      fontSize: enterExchangeNameFontSize,
    };
  }, [enterExchangeNameFontSize]);

  return (
    <div className={styles.property1frame12} style={property1Frame12Style}>
      <div className={styles.enterExchangeName} style={enterExchangeNameStyle}>
        Enter exchange name (NSE/BSE)
      </div>
    </div>
  );
};

export default Property1Frame12;
