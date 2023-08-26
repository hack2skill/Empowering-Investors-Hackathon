import { useMemo } from "react";
import styles from "./Property1Component12.module.css";
const Property1Component12 = ({
  property1Component12Position,
  property1Component12Width,
  property1Component12Height,
  clickToPasteFontSize,
}) => {
  const property1Component12Style = useMemo(() => {
    return {
      position: property1Component12Position,
      width: property1Component12Width,
      height: property1Component12Height,
    };
  }, [
    property1Component12Position,
    property1Component12Width,
    property1Component12Height,
  ]);

  const clickToPaste2Style = useMemo(() => {
    return {
      fontSize: clickToPasteFontSize,
    };
  }, [clickToPasteFontSize]);

  return (
    <div
      className={styles.property1component12}
      style={property1Component12Style}
    >
      <div className={styles.clickToPaste} style={clickToPaste2Style}>
        Click to paste URL
      </div>
    </div>
  );
};

export default Property1Component12;
