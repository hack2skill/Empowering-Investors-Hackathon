import { useMemo } from "react";
import styles from "./Property1Frame1000002308.module.css";
const Property1Frame1000002308 = ({
  arrowBack,
  property1Frame1000002308Position,
  property1Frame1000002308Top,
  property1Frame1000002308Left,
  arrowBackIconWidth,
  arrowBackIconHeight,
}) => {
  const property1Frame1000002308Style = useMemo(() => {
    return {
      position: property1Frame1000002308Position,
      top: property1Frame1000002308Top,
      left: property1Frame1000002308Left,
    };
  }, [
    property1Frame1000002308Position,
    property1Frame1000002308Top,
    property1Frame1000002308Left,
  ]);

  const arrowBackIconStyle = useMemo(() => {
    return {
      width: arrowBackIconWidth,
      height: arrowBackIconHeight,
    };
  }, [arrowBackIconWidth, arrowBackIconHeight]);

  return (
    <div
      className={styles.property1frame1000002308}
      style={property1Frame1000002308Style}
    >
      <img
        className={styles.arrowBackIcon}
        alt=""
        src={arrowBack}
        style={arrowBackIconStyle}
      />
      <div className={styles.goBack}>Go back</div>
    </div>
  );
};

export default Property1Frame1000002308;
