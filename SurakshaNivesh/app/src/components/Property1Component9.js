import { useMemo } from "react";
import styles from "./Property1Component9.module.css";
const Property1Component9 = ({
  property1Component9Position,
  property1Component9Width,
  property1Component9Height,
  enterPennyStockFontSize,
}) => {
  const property1Component9Style = useMemo(() => {
    return {
      position: property1Component9Position,
      width: property1Component9Width,
      height: property1Component9Height,
    };
  }, [
    property1Component9Position,
    property1Component9Width,
    property1Component9Height,
  ]);

  const enterPennyStock1Style = useMemo(() => {
    return {
      fontSize: enterPennyStockFontSize,
    };
  }, [enterPennyStockFontSize]);

  return (
    <div
      className={styles.property1component9}
      style={property1Component9Style}
    >
      <div className={styles.enterPennyStock} style={enterPennyStock1Style}>
        Click to paste URL
      </div>
    </div>
  );
};

export default Property1Component9;
