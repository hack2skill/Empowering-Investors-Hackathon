import { useMemo } from "react";
import styles from "./Component1selectedActive.module.css";
const Component1selectedActive = ({
  vector,
  dashboard,
  component1selectedActivePosition,
  component1selectedActivePadding,
  rectangleIconWidth,
  rectangleIconHeight,
  frameDivWidth,
  vectorIconWidth,
  vectorIconHeight,
}) => {
  const component1selectedActiveStyle = useMemo(() => {
    return {
      position: component1selectedActivePosition,
      padding: component1selectedActivePadding,
    };
  }, [component1selectedActivePosition, component1selectedActivePadding]);

  const rectangleIconStyle = useMemo(() => {
    return {
      width: rectangleIconWidth,
      height: rectangleIconHeight,
    };
  }, [rectangleIconWidth, rectangleIconHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const vectorIcon1Style = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  return (
    <div
      className={styles.component1selectedActive}
      style={component1selectedActiveStyle}
    >
      <img
        className={styles.component1selectedActiveChild}
        alt=""
        src="/rectangle-170.svg"
        style={rectangleIconStyle}
      />
      <div className={styles.vectorParent} style={frameDivStyle}>
        <img
          className={styles.vectorIcon}
          alt=""
          src={vector}
          style={vectorIcon1Style}
        />
        <b className={styles.dashboard}>{dashboard}</b>
      </div>
    </div>
  );
};

export default Component1selectedActive;
