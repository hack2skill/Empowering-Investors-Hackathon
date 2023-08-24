import { useCallback } from "react";
import BreakoutNotSustainedContainer from "./BreakoutNotSustainedContainer";
import { useNavigate } from "react-router-dom";
import styles from "./TraderCallAnalyzerContainer1.module.css";
const TraderCallAnalyzerContainer1 = () => {
  const navigate = useNavigate();

  const onFrameContainer23Click = useCallback(() => {
    navigate("/dashboard14");
  }, [navigate]);

  return (
    <div className={styles.component40}>
      <div className={styles.individualCallAnalyzer}>
        Individual Call Analyzer
      </div>
      <BreakoutNotSustainedContainer
        dimensionCode="/check-circle2.svg"
        trendLabel="Neutral Trend"
        riskDescription="Non- Favourable Risk "
        rewardRatioValue="to Reward Ratio"
        dimensionCodeText="/check-circle2.svg"
        supportingInfoText="Nifty Supporting"
        stoplossErrorMessage="Stoploss was hit before target"
        strategyDescription="No accurate strategy"
        closingConditions="Closing below 20, 50 and 200"
        movingAveragesText="Exponential moving averages"
        volumeLabel="Low Volumes"
        breakoutStatusText="Breakout not sustained"
        componentCode="/check-circle2.svg"
        bullishTrendLabel="Bullish on 30 min TF"
        trendDescriptionText="Bearish on 1min, 5min,"
        timeframeLabels="15min timeframes"
        illogicalStoplossCode="Illogical Stoploss"
        propTop="15.94rem"
        propLeft="calc(50% - 379px)"
      />
      <div className={styles.stockNameRelianceIndsParent}>
        <div className={styles.stockNameRelianceContainer}>
          <span>Stock Name:</span>
          <span className={styles.relianceInds}> RELIANCE INDS</span>
        </div>
        <div className={styles.stockNameRelianceContainer}>
          <span>Suggested buying levels:</span>
          <span className={styles.relianceInds}> 2409</span>
        </div>
        <div className={styles.stockNameRelianceContainer}>
          <span>{`By influencer: `}</span>
          <span className={styles.relianceInds}>Ramesh</span>
        </div>
      </div>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-8932.svg" />
        <div className={styles.parent}>
          <div className={styles.div}>9/12</div>
          <div className={styles.negativeSignals}>Negative Signals</div>
        </div>
      </div>
      <div className={styles.lineAndBarChart} />
      <div className={styles.frameParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild2} />
        <div className={styles.rectangleFrame}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild5} />
        </div>
        <div className={styles.rectangleFrame}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleFrame}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper3}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper4}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper5}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.rectangleWrapper7}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper8}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper10}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper10}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper12}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper13}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.rectangleWrapper14}>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.frameChild20} />
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild4} />
        </div>
      </div>
      <div className={styles.oppositeOiTrend}>Opposite OI Trend</div>
      <div className={styles.fraudCall}>
        <span>80%</span>
        <span className={styles.span1}>{` `}</span>
        <span className={styles.fraudCall1}>FRAUD CALL</span>
      </div>
      <div className={styles.vectorParent} onClick={onFrameContainer23Click}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.clickHereFor}>Click Here for aggregate report</b>
      </div>
    </div>
  );
};

export default TraderCallAnalyzerContainer1;
