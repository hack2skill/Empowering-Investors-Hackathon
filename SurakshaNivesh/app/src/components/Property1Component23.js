import { useMemo } from "react";
import styles from "./Property1Component23.module.css";
const Property1Component23 = ({
  property1Component23Position,
  property1Component23Width,
  property1Component23Height,
  clickToPasteFontSize,
}) => {
  const property1Component23Style = useMemo(() => {
    return {
      position: property1Component23Position,
      width: property1Component23Width,
      height: property1Component23Height,
    };
  }, [
    property1Component23Position,
    property1Component23Width,
    property1Component23Height,
  ]);

  const clickToPaste3Style = useMemo(() => {
    return {
      fontSize: clickToPasteFontSize,
    };
  }, [clickToPasteFontSize]);

  return (
    <div
      className={styles.property1component23}
      style={property1Component23Style}
    >
      <div className={styles.clickToPaste} style={clickToPaste3Style}>
        Click to paste URL
      </div>
    </div>
  );
};

export default Property1Component23;
