import { useMemo } from "react";
import styles from "./Property1Frame148.module.css";
const Property1Frame148 = ({
  vector,
  fraudTradingCallDetector,
  detectsUnusualMovementInP,
  stocksThroughTextMining,
  vector1,
  property1Frame148Width,
  property1Frame148Height,
  property1Frame148FlexShrink,
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
  const property1Frame148Style = useMemo(() => {
    return {
      width: property1Frame148Width,
      height: property1Frame148Height,
      flexShrink: property1Frame148FlexShrink,
    };
  }, [
    property1Frame148Width,
    property1Frame148Height,
    property1Frame148FlexShrink,
  ]);

  const frameDiv5Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      padding: frameDivPadding,
    };
  }, [frameDivTop, frameDivLeft, frameDivPadding]);

  const vectorIcon6Style = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const fraudTradingCall1Style = useMemo(() => {
    return {
      top: fraudTradingCallTop,
      left: fraudTradingCallLeft,
    };
  }, [fraudTradingCallTop, fraudTradingCallLeft]);

  const detectsUnusualMovementContainer3Style = useMemo(() => {
    return {
      top: detectsUnusualMovementConTop,
      left: detectsUnusualMovementConLeft,
    };
  }, [detectsUnusualMovementConTop, detectsUnusualMovementConLeft]);

  return (
    <div className={styles.property1frame148} style={property1Frame148Style}>
      <div className={styles.vectorWrapper} style={frameDiv5Style}>
        <img
          className={styles.vectorIcon}
          alt=""
          src={vector}
          style={vectorIcon6Style}
        />
      </div>
      <b className={styles.fraudTradingCall} style={fraudTradingCall1Style}>
        {fraudTradingCallDetector}
      </b>
      <div
        className={styles.detectsUnusualMovementContainer}
        style={detectsUnusualMovementContainer3Style}
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

export default Property1Frame148;
