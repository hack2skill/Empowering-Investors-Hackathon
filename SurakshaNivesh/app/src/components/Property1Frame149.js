import { useMemo } from "react";
import styles from "./Property1Frame149.module.css";
const Property1Frame149 = ({
  detectsUnusualMovementInP,
  stocksThroughTextMining,
  vector,
  property1Frame149Width,
  property1Frame149Height,
  property1Frame149FlexShrink,
  frameDivTop,
  frameDivLeft,
  frameDivPadding,
  vectorIconWidth,
  vectorIconHeight,
  checkCredibilityScoreTop,
  checkCredibilityScoreLeft,
  detectsUnusualMovementConTop,
  detectsUnusualMovementConLeft,
  detectsUnusualMovementConWhiteSpace,
}) => {
  const property1Frame149Style = useMemo(() => {
    return {
      width: property1Frame149Width,
      height: property1Frame149Height,
      flexShrink: property1Frame149FlexShrink,
    };
  }, [
    property1Frame149Width,
    property1Frame149Height,
    property1Frame149FlexShrink,
  ]);

  const frameDiv4Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      padding: frameDivPadding,
    };
  }, [frameDivTop, frameDivLeft, frameDivPadding]);

  const vectorIcon5Style = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const checkCredibilityScoreStyle = useMemo(() => {
    return {
      top: checkCredibilityScoreTop,
      left: checkCredibilityScoreLeft,
    };
  }, [checkCredibilityScoreTop, checkCredibilityScoreLeft]);

  const detectsUnusualMovementContainer2Style = useMemo(() => {
    return {
      top: detectsUnusualMovementConTop,
      left: detectsUnusualMovementConLeft,
      whiteSpace: detectsUnusualMovementConWhiteSpace,
    };
  }, [
    detectsUnusualMovementConTop,
    detectsUnusualMovementConLeft,
    detectsUnusualMovementConWhiteSpace,
  ]);

  return (
    <div className={styles.property1frame149} style={property1Frame149Style}>
      <div className={styles.vectorWrapper} style={frameDiv4Style}>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector7.svg"
          style={vectorIcon5Style}
        />
      </div>
      <b
        className={styles.checkCredibilityScore}
        style={checkCredibilityScoreStyle}
      >
        Check Credibility Score
      </b>
      <div
        className={styles.detectsUnusualMovementContainer}
        style={detectsUnusualMovementContainer2Style}
      >
        <p className={styles.detectsUnusualMovement}>
          {detectsUnusualMovementInP}
        </p>
        <p className={styles.detectsUnusualMovement}>
          {stocksThroughTextMining}
        </p>
      </div>
      <img className={styles.vectorIcon1} alt="" src={vector} />
    </div>
  );
};

export default Property1Frame149;
