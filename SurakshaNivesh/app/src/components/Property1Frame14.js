import { useMemo } from "react";
import styles from "./Property1Frame14.module.css";
const Property1Frame14 = ({
  property1Frame14Position,
  property1Frame14Width,
  property1Frame14Height,
  enterPennyStockFontSize,
}) => {
  const property1Frame14Style = useMemo(() => {
    return {
      position: property1Frame14Position,
      width: property1Frame14Width,
      height: property1Frame14Height,
    };
  }, [property1Frame14Position, property1Frame14Width, property1Frame14Height]);

  const enterPennyStockStyle = useMemo(() => {
    return {
      fontSize: enterPennyStockFontSize,
    };
  }, [enterPennyStockFontSize]);

  return (
    <div className={styles.property1frame14} style={property1Frame14Style}>
      <div className={styles.enterPennyStock} style={enterPennyStockStyle}>
        Enter penny stock you want to enquire about
      </div>
    </div>
  );
};

export default Property1Frame14;
