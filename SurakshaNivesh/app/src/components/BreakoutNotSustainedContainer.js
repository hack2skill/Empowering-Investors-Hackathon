import { useMemo } from "react";
import styles from "./BreakoutNotSustainedContainer.module.css";
const BreakoutNotSustainedContainer = ({
  dimensionCode,
  trendLabel,
  riskDescription,
  rewardRatioValue,
  dimensionCodeText,
  supportingInfoText,
  stoplossErrorMessage,
  strategyDescription,
  closingConditions,
  movingAveragesText,
  volumeLabel,
  breakoutStatusText,
  componentCode,
  bullishTrendLabel,
  trendDescriptionText,
  timeframeLabels,
  illogicalStoplossCode,
  propTop,
  propLeft,
}) => {
  const frameDiv13Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.frameParent} style={frameDiv13Style}>
      <div className={styles.frameGroup}>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src={dimensionCode} />
          <div className={styles.neutralTrend}>{trendLabel}</div>
        </div>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src="/dangerous.svg" />
          <div className={styles.neutralTrend}>Abnormal Volumes</div>
        </div>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src="/dangerous.svg" />
          <div className={styles.neutralTrend}>
            <p className={styles.nonFavourableRisk}>{riskDescription}</p>
            <p className={styles.nonFavourableRisk}>{rewardRatioValue}</p>
          </div>
        </div>
        <div className={styles.checkCircleParent}>
          <img
            className={styles.checkCircleIcon}
            alt=""
            src={dimensionCodeText}
          />
          <div className={styles.neutralTrend}>{supportingInfoText}</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src="/dangerous.svg" />
          <div className={styles.neutralTrend}>{stoplossErrorMessage}</div>
        </div>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src="/dangerous.svg" />
          <div className={styles.neutralTrend}>{strategyDescription}</div>
        </div>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src="/dangerous.svg" />
          <div className={styles.neutralTrend}>
            <p className={styles.nonFavourableRisk}>{closingConditions}</p>
            <p className={styles.nonFavourableRisk}>{movingAveragesText}</p>
          </div>
        </div>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src="/dangerous.svg" />
          <div className={styles.neutralTrend}>{volumeLabel}</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src="/dangerous.svg" />
          <div className={styles.neutralTrend}>{breakoutStatusText}</div>
        </div>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src={componentCode} />
          <div className={styles.neutralTrend}>{bullishTrendLabel}</div>
        </div>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src="/dangerous.svg" />
          <div className={styles.neutralTrend}>
            <p className={styles.nonFavourableRisk}>{trendDescriptionText}</p>
            <p className={styles.nonFavourableRisk}>{timeframeLabels}</p>
          </div>
        </div>
        <div className={styles.checkCircleParent}>
          <img className={styles.checkCircleIcon} alt="" src="/dangerous.svg" />
          <div className={styles.neutralTrend}>{illogicalStoplossCode}</div>
        </div>
      </div>
    </div>
  );
};

export default BreakoutNotSustainedContainer;
