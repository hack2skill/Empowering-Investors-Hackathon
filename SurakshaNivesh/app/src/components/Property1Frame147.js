import { useMemo } from "react";
import styles from "./Property1Frame147.module.css";
const Property1Frame147 = ({
  vector,
  property1Frame147Width,
  property1Frame147Height,
  property1Frame147FlexShrink,
  frameDivTop,
  frameDivLeft,
  frameDivPadding,
  vectorIconWidth,
  vectorIconHeight,
  pumpAndDumpTop,
  pumpAndDumpLeft,
  detectsUnusualMovementConTop,
  detectsUnusualMovementConLeft,
}) => {
  const property1Frame147Style = useMemo(() => {
    return {
      width: property1Frame147Width,
      height: property1Frame147Height,
      flexShrink: property1Frame147FlexShrink,
    };
  }, [
    property1Frame147Width,
    property1Frame147Height,
    property1Frame147FlexShrink,
  ]);

  const frameDiv2Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      padding: frameDivPadding,
    };
  }, [frameDivTop, frameDivLeft, frameDivPadding]);

  const vectorIcon3Style = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const pumpAndDumpStyle = useMemo(() => {
    return {
      top: pumpAndDumpTop,
      left: pumpAndDumpLeft,
    };
  }, [pumpAndDumpTop, pumpAndDumpLeft]);

  const detectsUnusualMovementContainerStyle = useMemo(() => {
    return {
      top: detectsUnusualMovementConTop,
      left: detectsUnusualMovementConLeft,
    };
  }, [detectsUnusualMovementConTop, detectsUnusualMovementConLeft]);

  return (
    <div className={styles.property1frame147} style={property1Frame147Style}>
      <div className={styles.vectorWrapper} style={frameDiv2Style}>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector3.svg"
          style={vectorIcon3Style}
        />
      </div>
      <b className={styles.pumpAndDump} style={pumpAndDumpStyle}>
        Pump and Dump Detector
      </b>
      <div
        className={styles.detectsUnusualMovementContainer}
        style={detectsUnusualMovementContainerStyle}
      >
        <p className={styles.detectsUnusualMovement}>
          Detects unusual movement in penny
        </p>
        <p className={styles.detectsUnusualMovement}>
          stocks through Text mining
        </p>
      </div>
      <img className={styles.vectorIcon1} alt="" src={vector} />
    </div>
  );
};

export default Property1Frame147;
