import { useMemo } from "react";
import styles from "./Property1Component50.module.css";
const Property1Component50 = ({
  property1Component50Position,
  property1Component50Width,
  property1Component50Height,
  clickToPasteFontSize,
}) => {
  const property1Component50Style = useMemo(() => {
    return {
      position: property1Component50Position,
      width: property1Component50Width,
      height: property1Component50Height,
    };
  }, [
    property1Component50Position,
    property1Component50Width,
    property1Component50Height,
  ]);

  const clickToPaste5Style = useMemo(() => {
    return {
      fontSize: clickToPasteFontSize,
    };
  }, [clickToPasteFontSize]);

  return (
    <div
      className={styles.property1component50}
      style={property1Component50Style}
    >
      <div className={styles.clickToPaste} style={clickToPaste5Style}>
        Click to paste URL
      </div>
    </div>
  );
};

export default Property1Component50;
