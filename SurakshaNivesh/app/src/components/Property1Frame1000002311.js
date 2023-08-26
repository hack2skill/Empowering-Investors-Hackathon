import { useMemo } from "react";
import styles from "./Property1Frame1000002311.module.css";
const Property1Frame1000002311 = ({
  property1Frame1000002311Position,
  property1Frame1000002311Top,
  property1Frame1000002311Left,
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
  const property1Frame1000002311Style = useMemo(() => {
    return {
      position: property1Frame1000002311Position,
      top: property1Frame1000002311Top,
      left: property1Frame1000002311Left,
    };
  }, [
    property1Frame1000002311Position,
    property1Frame1000002311Top,
    property1Frame1000002311Left,
  ]);

  const ellipseDiv6Style = useMemo(() => {
    return {
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivWidth, ellipseDivHeight]);

  const ellipseDiv7Style = useMemo(() => {
    return {
      width: ellipseDivWidth1,
      height: ellipseDivHeight1,
    };
  }, [ellipseDivWidth1, ellipseDivHeight1]);

  const ellipseDiv8Style = useMemo(() => {
    return {
      width: ellipseDivWidth2,
      height: ellipseDivHeight2,
    };
  }, [ellipseDivWidth2, ellipseDivHeight2]);

  const ellipseDiv9Style = useMemo(() => {
    return {
      width: ellipseDivWidth3,
      height: ellipseDivHeight3,
    };
  }, [ellipseDivWidth3, ellipseDivHeight3]);

  const ellipseDiv10Style = useMemo(() => {
    return {
      width: ellipseDivWidth4,
      height: ellipseDivHeight4,
    };
  }, [ellipseDivWidth4, ellipseDivHeight4]);

  const ellipseDiv11Style = useMemo(() => {
    return {
      width: ellipseDivWidth5,
      height: ellipseDivHeight5,
    };
  }, [ellipseDivWidth5, ellipseDivHeight5]);

  return (
    <div
      className={styles.property1frame1000002311}
      style={property1Frame1000002311Style}
    >
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv6Style} />
        <div className={styles.analysingPennyStock}>
          Analysing penny stock price and symbol
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv7Style} />
        <div className={styles.analysingPennyStock}>
          Looking for buying Volume trend
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv8Style} />
        <div className={styles.analysingPennyStock}>
          Looking for bulk orders or insider activity
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv9Style} />
        <div className={styles.analysingPennyStock}>
          Looking for bulk orders or insider activity
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv10Style} />
        <div className={styles.analysingPennyStock}>
          Applying ML algorithms to detect any anomalies
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} style={ellipseDiv11Style} />
        <div className={styles.analysingPennyStock}>
          Verifying Technical and fundamental analysis
        </div>
      </div>
    </div>
  );
};

export default Property1Frame1000002311;
