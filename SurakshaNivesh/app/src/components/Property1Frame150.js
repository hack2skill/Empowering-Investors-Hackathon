import { useMemo } from "react";
import styles from "./Property1Frame150.module.css";
const Property1Frame150 = ({
  vector,
  detectsUnusualMovementInP,
  stocksThroughTextMining,
  vector1,
  property1Frame150Width,
  property1Frame150Height,
  property1Frame150FlexShrink,
  frameDivTop,
  frameDivLeft,
  frameDivPadding,
  vectorIconWidth,
  vectorIconHeight,
  fraudTradingCallTop,
  fraudTradingCallLeft,
  detectsUnusualMovementConTop,
  detectsUnusualMovementConLeft,
}) => {
  const property1Frame150Style = useMemo(() => {
    return {
      width: property1Frame150Width,
      height: property1Frame150Height,
      flexShrink: property1Frame150FlexShrink,
    };
  }, [
    property1Frame150Width,
    property1Frame150Height,
    property1Frame150FlexShrink,
  ]);

  const frameDiv3Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      padding: frameDivPadding,
    };
  }, [frameDivTop, frameDivLeft, frameDivPadding]);

  const vectorIcon4Style = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const fraudTradingCallStyle = useMemo(() => {
    return {
      top: fraudTradingCallTop,
      left: fraudTradingCallLeft,
    };
  }, [fraudTradingCallTop, fraudTradingCallLeft]);

  const detectsUnusualMovementContainer1Style = useMemo(() => {
    return {
      top: detectsUnusualMovementConTop,
      left: detectsUnusualMovementConLeft,
    };
  }, [detectsUnusualMovementConTop, detectsUnusualMovementConLeft]);

  return (
    <div className={styles.property1frame150} style={property1Frame150Style}>
      <div className={styles.vectorWrapper} style={frameDiv3Style}>
        <img
          className={styles.vectorIcon}
          alt=""
          src={vector}
          style={vectorIcon4Style}
        />
      </div>
      <b className={styles.fraudTradingCall} style={fraudTradingCallStyle}>
        Fraud Trading Call Detector
      </b>
      <div
        className={styles.detectsUnusualMovementContainer}
        style={detectsUnusualMovementContainer1Style}
      >
        <p className={styles.detectsUnusualMovement}>
          {detectsUnusualMovementInP}
        </p>
        <p className={styles.detectsUnusualMovement}>
          {stocksThroughTextMining}
        </p>
      </div>
      <img className={styles.vectorIcon1} alt="" src={vector1} />
    </div>
  );
};

export default Property1Frame150;
