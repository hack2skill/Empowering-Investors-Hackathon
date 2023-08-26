import BreakoutNotSustainedContainer from "./BreakoutNotSustainedContainer";
import Property1Frame1000002308 from "./Property1Frame1000002308";
import styles from "./TraderCallAnalyzerContainer.module.css";
const TraderCallAnalyzerContainer = () => {
  return (
    <div className={styles.component40}>
      <div className={styles.individualCallAnalyzer}>
        Individual Call Analyzer
      </div>
      <BreakoutNotSustainedContainer
        dimensionCode="/check-circle4.svg"
        trendLabel="Neutral Trend"
        riskDescription="Non- Favourable Risk "
        rewardRatioValue="to Reward Ratio"
        dimensionCodeText="/check-circle4.svg"
        supportingInfoText="Nifty Supporting"
        stoplossErrorMessage="Stoploss was hit before target"
        strategyDescription="No accurate strategy"
        closingConditions="Closing below 20, 50 and 200"
        movingAveragesText="Exponential moving averages"
        volumeLabel="Low Volumes"
        breakoutStatusText="Breakout not sustained"
        componentCode="/check-circle5.svg"
        bullishTrendLabel="Bullish on 30 min TF"
        trendDescriptionText="Bearish on 1min, 5min,"
        timeframeLabels="15min timeframes"
        illogicalStoplossCode="Illogical Stoploss"
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
      <Property1Frame1000002308
        arrowBack="/arrow-back4.svg"
        property1Frame1000002308Position="absolute"
        property1Frame1000002308Top="1.75rem"
        property1Frame1000002308Left="1.56rem"
        arrowBackIconWidth="1rem"
        arrowBackIconHeight="1rem"
      />
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.clickHereFor}>Click Here for aggregate report</b>
      </div>
    </div>
  );
};

export default TraderCallAnalyzerContainer;
