import { useMemo } from "react";
import styles from "./Property1inactive.module.css";
const Property1inactive = ({
  vector,
  dashboard,
  property1inactivePosition,
  property1inactiveWidth,
  property1inactivePadding,
  rectangleIconWidth,
  rectangleIconHeight,
  frameDivWidth,
  vectorIconWidth,
  vectorIconHeight,
}) => {
  const property1inactiveStyle = useMemo(() => {
    return {
      position: property1inactivePosition,
      width: property1inactiveWidth,
      padding: property1inactivePadding,
    };
  }, [
    property1inactivePosition,
    property1inactiveWidth,
    property1inactivePadding,
  ]);

  const rectangleIcon1Style = useMemo(() => {
    return {
      width: rectangleIconWidth,
      height: rectangleIconHeight,
    };
  }, [rectangleIconWidth, rectangleIconHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const vectorIcon2Style = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  return (
    <div className={styles.property1inactive} style={property1inactiveStyle}>
      <img
        className={styles.property1inactiveChild}
        alt=""
        src="/rectangle-1701.svg"
        style={rectangleIcon1Style}
      />
      <div className={styles.vectorParent} style={frameDiv1Style}>
        <img
          className={styles.vectorIcon}
          alt=""
          src={vector}
          style={vectorIcon2Style}
        />
        <div className={styles.dashboard}>{dashboard}</div>
      </div>
    </div>
  );
};

export default Property1inactive;
