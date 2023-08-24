import { useMemo } from "react";
import Property1Component42 from "./Property1Component42";
import Property1Component46 from "./Property1Component46";
import styles from "./FormContainer1.module.css";
const FormContainer1 = ({ propTop, propLeft, onFrameContainer16Click }) => {
  const component31Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.component31} style={component31Style}>
      <div className={styles.enterInfluencersTwitterHanParent}>
        <div className={styles.enterInfluencersTwitter}>
          Enter Influencer’s Twitter Handle:
        </div>
        <Property1Component42
          property1Component42Position="unset"
          property1Component42Width="17.38rem"
          property1Component42Height="2.44rem"
          clickToPasteFontSize="0.66rem"
        />
      </div>
      <div className={styles.enterYoutubeUrlParent}>
        <div className={styles.enterInfluencersTwitter}>Enter Youtube URL:</div>
        <Property1Component46
          property1Component46Position="unset"
          property1Component46Width="17.38rem"
          property1Component46Height="2.44rem"
          clickToPasteFontSize="0.66rem"
        />
      </div>
      <div className={styles.enterTelegramUrlParent}>
        <div className={styles.enterInfluencersTwitter}>
          Enter Telegram URL:
        </div>
        <Property1Component46
          property1Component46Position="unset"
          property1Component46Width="17.38rem"
          property1Component46Height="2.44rem"
          clickToPasteFontSize="0.66rem"
        />
      </div>
      <div className={styles.enterInstagramUrlParent}>
        <div className={styles.enterInfluencersTwitter}>
          Enter Instagram URL:
        </div>
        <Property1Component46
          property1Component46Position="unset"
          property1Component46Width="17.38rem"
          property1Component46Height="2.44rem"
          clickToPasteFontSize="0.66rem"
        />
      </div>
      <div className={styles.vectorParent} onClick={onFrameContainer16Click}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.enterInfluencersTwitter}>{`Search `}</b>
      </div>
    </div>
  );
};

export default FormContainer1;
