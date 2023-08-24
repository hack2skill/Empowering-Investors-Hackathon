import ContainerCard from "../components/ContainerCard";
import TraderCard from "../components/TraderCard";
import Property1Frame1000002308 from "../components/Property1Frame1000002308";
import styles from "./Dashboard15.module.css";
const Dashboard15 = () => {
  return (
    <div className={styles.dashboard}>
      <ContainerCard
        imageDimensions="/group-10315.svg"
        carDimensions="/group-10615.svg"
      />
      <div className={styles.date}>
        <img
          className={styles.flatColorIconscalendar}
          alt=""
          src="/flatcoloriconscalendar.svg"
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
            <img className={styles.frameChild} alt="" src="/group-140.svg" />
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
      <TraderCard />
      <Property1Frame1000002308
        arrowBack="/arrow-back.svg"
        property1Frame1000002308Position="absolute"
        property1Frame1000002308Top="22.13rem"
        property1Frame1000002308Left="26.88rem"
        arrowBackIconWidth="1rem"
        arrowBackIconHeight="1rem"
      />
    </div>
  );
};

export default Dashboard15;
