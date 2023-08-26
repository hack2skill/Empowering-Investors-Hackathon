import { useMemo } from "react";
import styles from "./Property1Component54.module.css";
const Property1Component54 = ({
  property1Component54Position,
  property1Component54Width,
  property1Component54Height,
  dDMMYYYYFontSize,
}) => {
  const property1Component54Style = useMemo(() => {
    return {
      position: property1Component54Position,
      width: property1Component54Width,
      height: property1Component54Height,
    };
  }, [
    property1Component54Position,
    property1Component54Width,
    property1Component54Height,
  ]);

  const dDMMYYYYStyle = useMemo(() => {
    return {
      fontSize: dDMMYYYYFontSize,
    };
  }, [dDMMYYYYFontSize]);

  return (
    <div
      className={styles.property1component54}
      style={property1Component54Style}
    >
      <div className={styles.ddmmyyyy} style={dDMMYYYYStyle}>
        DD/MM/YYYY
      </div>
    </div>
  );
};

export default Property1Component54;
