import BreakoutNotSustainedContainer from "./BreakoutNotSustainedContainer";
import Property1Frame1000002308 from "./Property1Frame1000002308";
import styles from "./TraderCallInvestmentTipDetecto.module.css";
const TraderCallInvestmentTipDetecto = () => {
  return (
    <div className={styles.component40}>
      <div className={styles.iitianTraderGroup}>
        IITIAN TRADER GROUP ANALYSIS
      </div>
      <BreakoutNotSustainedContainer
        dimensionCode="/check-circle3.svg"
        trendLabel="Neutral Trend"
        riskDescription="Non- Favourable Risk "
        rewardRatioValue="to Reward Ratio"
        dimensionCodeText="/check-circle3.svg"
        supportingInfoText="Nifty Supporting"
        stoplossErrorMessage="Stoploss was hit before target"
        strategyDescription="No accurate strategy"
        closingConditions="Closing below 20, 50 and 200"
        movingAveragesText="Exponential moving averages"
        volumeLabel="Low Volumes"
        breakoutStatusText="Breakout not sustained"
        componentCode="/check-circle3.svg"
        bullishTrendLabel="Bullish on 30 min TF"
        trendDescriptionText="Bearish on 1min, 5min,"
        timeframeLabels="15min timeframes"
        illogicalStoplossCode="Illogical Stoploss"
        propTop="15.94rem"
        propLeft="calc(50% - 379px)"
      />
      <div className={styles.lineAndBarChart} />
      <Property1Frame1000002308
        arrowBack="/arrow-back3.svg"
        property1Frame1000002308Position="absolute"
        property1Frame1000002308Top="1.75rem"
        property1Frame1000002308Left="1.56rem"
        arrowBackIconWidth="1rem"
        arrowBackIconHeight="1rem"
      />
      <div className={styles.callsPass7Parent}>
        <div className={styles.callsPassContainer}>
          <span>{`Calls Pass %: `}</span>
          <span className={styles.span}>7%</span>
        </div>
        <div className={styles.callsPassContainer}>
          <span>Call Fail %:</span>
          <span className={styles.capital}> 89%</span>
        </div>
        <div className={styles.callsPassContainer}>
          <span>{`Avg Drawdown: `}</span>
          <span className={styles.capital}>20% capital</span>
        </div>
        <div className={styles.callsPassContainer}>
          <span>{`Avg Profit: `}</span>
          <span className={styles.span}>1.5% capital</span>
        </div>
      </div>
      <div className={styles.component40Child} />
      <div className={styles.surakshaniveshSuggestsYouToWrapper}>
        <div className={styles.surakshaniveshSuggestsYou}>
          SurakshaNivesh Suggests you to avoid this trader influencer for calls
          and tips, since this is a suspected scam. The following points show
          how inaccurate his analysis is.
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.scammerReportedSuccesfully}>
          SCAMMER REPORTED SUCCESFULLY
        </b>
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.scammerReportedSuccesfully}>FRAUD DETECTED</b>
      </div>
    </div>
  );
};

export default TraderCallInvestmentTipDetecto;
