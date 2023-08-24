import { useMemo } from "react";
import styles from "./Property1Component15.module.css";
const Property1Component15 = ({
  property1Component15Position,
  property1Component15Width,
  property1Component15Height,
  clickToPasteFontSize,
}) => {
  const property1Component15Style = useMemo(() => {
    return {
      position: property1Component15Position,
      width: property1Component15Width,
      height: property1Component15Height,
    };
  }, [
    property1Component15Position,
    property1Component15Width,
    property1Component15Height,
  ]);

  const clickToPaste4Style = useMemo(() => {
    return {
      fontSize: clickToPasteFontSize,
    };
  }, [clickToPasteFontSize]);

  return (
    <div
      className={styles.property1component15}
      style={property1Component15Style}
    >
      <div className={styles.clickToPaste} style={clickToPaste4Style}>
        Click to paste URL
      </div>
    </div>
  );
};

export default Property1Component15;
