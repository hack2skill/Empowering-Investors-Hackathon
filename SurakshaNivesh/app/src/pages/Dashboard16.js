import ContainerCard from "../components/ContainerCard";
import TraderCallInvestmentTipDetecto from "../components/TraderCallInvestmentTipDetecto";
import styles from "./Dashboard16.module.css";
const Dashboard16 = () => {
  return (
    <div className={styles.dashboard}>
      <ContainerCard
        imageDimensions="/group-10316.svg"
        carDimensions="/group-10616.svg"
      />
      <div className={styles.date}>
        <img
          className={styles.flatColorIconscalendar}
          alt=""
          src="/flatcoloriconscalendar7.svg"
        />
        <b className={styles.searchInPump}>17 August’ 23</b>
      </div>
      <div className={styles.seperator} />
      <div className={styles.dashboardChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.iconParent}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.searchInPump}>
              Search in Pump and Dump Detector
            </div>
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <div className={styles.notificationChild} />
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
          <div className={styles.wrapper}>
            <b className={styles.searchInPump}>2</b>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.antDesignalertFilledParent}>
          <img
            className={styles.antDesignalertFilledIcon}
            alt=""
            src="/antdesignalertfilled.svg"
          />
          <b className={styles.searchInPump}>
            <p className={styles.newScammers}>New Scammers</p>
            <p className={styles.p}>+1209</p>
          </b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.groupWrapper}>
            <img className={styles.frameChild} alt="" src="/group-1403.svg" />
          </div>
          <img className={styles.groupChild} alt="" src="/group-108.svg" />
          <img className={styles.groupItem} alt="" src="/group-109.svg" />
          <div className={styles.notificationGroup}>
            <div className={styles.notification1}>
              <div className={styles.notificationItem} />
            </div>
            <div className={styles.div}>+</div>
          </div>
        </div>
      </div>
      <b className={styles.traderCallAnd}>
        Trader Call and Investment Tip Detector
      </b>
      <div className={styles.traderCallAndInvestmentTipWrapper}>
        <div className={styles.traderCallAnd1}>
          Trader call and investment tip detector is a GenAI based validation
          tool, which through text mining, sentiment analysis, RL and
          fundamental analysis verification, detects whether a trading call is a
          trap or not , thus saving money of traders.
        </div>
      </div>
      <TraderCallInvestmentTipDetecto />
    </div>
  );
};

export default Dashboard16;
