import { useMemo } from "react";
import Property1Frame1000002311 from "./Property1Frame1000002311";
import styles from "./SurakshaAIContainer.module.css";
const SurakshaAIContainer = ({ propTop, propLeft }) => {
  const property1Frame1000002311Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.component40}>
      <div className={styles.surakshaAiIs}>
        Suraksha AI is generating results...
      </div>
      <Property1Frame1000002311
        property1Frame1000002311Position="absolute"
        property1Frame1000002311Top="5.25rem"
        property1Frame1000002311Left="7.5rem"
        ellipseDivWidth="0.88rem"
        ellipseDivHeight="0.88rem"
        ellipseDivWidth1="0.88rem"
        ellipseDivHeight1="0.88rem"
        ellipseDivWidth2="0.88rem"
        ellipseDivHeight2="0.88rem"
        ellipseDivWidth3="0.88rem"
        ellipseDivHeight3="0.88rem"
        ellipseDivWidth4="0.88rem"
        ellipseDivHeight4="0.88rem"
        ellipseDivWidth5="0.88rem"
        ellipseDivHeight5="0.88rem"
      />
    </div>
  );
};

export default SurakshaAIContainer;
