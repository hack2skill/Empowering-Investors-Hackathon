import { useMemo } from "react";
import styles from "./Property1Frame1000002303.module.css";
const Property1Frame1000002303 = ({
  property1Frame1000002303Position,
  property1Frame1000002303Top,
  property1Frame1000002303Left,
  ellipseDivWidth,
  ellipseDivHeight,
  ellipseDivWidth1,
  ellipseDivHeight1,
  ellipseDivWidth2,
  ellipseDivHeight2,
  ellipseDivWidth3,
  ellipseDivHeight3,
  ellipseDivWidth4,
  ellipseDivHeight4,
  ellipseDivWidth5,
  ellipseDivHeight5,
}) => {
  const property1Frame1000002303Style = useMemo(() => {
    return {
      position: property1Frame1000002303Position,
      top: property1Frame1000002303Top,
      left: property1Frame1000002303Left,
    };
  }, [
    property1Frame1000002303Position,
    property1Frame1000002303Top,
    property1Frame1000002303Left,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivWidth, ellipseDivHeight]);

  const ellipseDiv1Style = useMemo(() => {
    return {
      width: ellipseDivWidth1,
      height: ellipseDivHeight1,
    };
  }, [ellipseDivWidth1, ellipseDivHeight1]);

  const ellipseDiv2Style = useMemo(() => {
    return {
      width: ellipseDivWidth2,
      height: ellipseDivHeight2,
    };
  }, [ellipseDivWidth2, ellipseDivHeight2]);

  const ellipseDiv3Style = useMemo(() => {
    return {
      width: ellipseDivWidth3,
      height: ellipseDivHeight3,
    };
  }, [ellipseDivWidth3, ellipseDivHeight3]);

  const ellipseDiv4Style = useMemo(() => {
    return {
      width: ellipseDivWidth4,
      height: ellipseDivHeight4,
    };
  }, [ellipseDivWidth4, ellipseDivHeight4]);

  const ellipseDiv5Style = useMemo(() => {
    return {
      width: ellipseDivWidth5,
      height: ellipseDivHeight5,
    };
  }, [ellipseDivWidth5, ellipseDivHeight5]);

  return (
    <div
      className={styles.property1frame1000002303}
      style={property1Frame1000002303Style}
    >
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDivStyle} />
        <div className={styles.analysingPennyStock}>
          Analysing penny stock price and symbol
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv1Style} />
        <div className={styles.analysingPennyStock}>
          Looking for buying Volume trend
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv2Style} />
        <div className={styles.analysingPennyStock}>
          Looking for bulk orders or insider activity
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv3Style} />
        <div className={styles.analysingPennyStock}>
          Looking for bulk orders or insider activity
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv4Style} />
        <div className={styles.analysingPennyStock}>
          Applying ML algorithms to detect any anomalies
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv5Style} />
        <div className={styles.analysingPennyStock}>
          Verifying Technical and fundamental analysis
        </div>
      </div>
    </div>
  );
};

export default Property1Frame1000002303;
