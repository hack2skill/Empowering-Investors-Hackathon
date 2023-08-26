import { useMemo } from "react";
import styles from "./Property1Component42.module.css";
const Property1Component42 = ({
  property1Component42Position,
  property1Component42Width,
  property1Component42Height,
  clickToPasteFontSize,
}) => {
  const property1Component42Style = useMemo(() => {
    return {
      position: property1Component42Position,
      width: property1Component42Width,
      height: property1Component42Height,
    };
  }, [
    property1Component42Position,
    property1Component42Width,
    property1Component42Height,
  ]);

  const clickToPasteStyle = useMemo(() => {
    return {
      fontSize: clickToPasteFontSize,
    };
  }, [clickToPasteFontSize]);

  return (
    <div
      className={styles.property1component42}
      style={property1Component42Style}
    >
      <div className={styles.clickToPaste} style={clickToPasteStyle}>
        Click to paste URL
      </div>
    </div>
  );
};

export default Property1Component42;
