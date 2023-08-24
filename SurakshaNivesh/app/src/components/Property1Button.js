import { useMemo } from "react";
import styles from "./Property1Button.module.css";
const Property1Button = ({
  property1ButtonPosition,
  property1ButtonTop,
  property1ButtonLeft,
  vectorIconWidth,
  vectorIconHeight,
}) => {
  const property1ButtonStyle = useMemo(() => {
    return {
      position: property1ButtonPosition,
      top: property1ButtonTop,
      left: property1ButtonLeft,
    };
  }, [property1ButtonPosition, property1ButtonTop, property1ButtonLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  return (
    <div className={styles.property1button} style={property1ButtonStyle}>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector.svg"
        style={vectorIconStyle}
      />
      <b className={styles.ctaWithIcon}>CTA With Icon</b>
    </div>
  );
};

export default Property1Button;
