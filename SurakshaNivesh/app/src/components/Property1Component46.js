import { useMemo } from "react";
import styles from "./Property1Component46.module.css";
const Property1Component46 = ({
  property1Component46Position,
  property1Component46Width,
  property1Component46Height,
  clickToPasteFontSize,
}) => {
  const property1Component46Style = useMemo(() => {
    return {
      position: property1Component46Position,
      width: property1Component46Width,
      height: property1Component46Height,
    };
  }, [
    property1Component46Position,
    property1Component46Width,
    property1Component46Height,
  ]);

  const clickToPaste1Style = useMemo(() => {
    return {
      fontSize: clickToPasteFontSize,
    };
  }, [clickToPasteFontSize]);

  return (
    <div
      className={styles.property1component46}
      style={property1Component46Style}
    >
      <div className={styles.clickToPaste} style={clickToPaste1Style}>
        Click to paste URL
      </div>
    </div>
  );
};

export default Property1Component46;
