import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import TraderCardForm from "../components/TraderCardForm";
import styles from "./Dashboard19.module.css";
const Dashboard19 = () => {
  return (
    <div className={styles.dashboard}>
      <ContainerCardFormFilter
        imageDimensions="/group-10319.svg"
        carDimensions="/group-10619.svg"
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
            <img className={styles.icon} alt="" src="/icon7.svg" />
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
      <b className={styles.sebiNormChecker}>SEBI Norm Checker</b>
      <div className={styles.traderInfluencerCredibilityWrapper}>
        <div className={styles.traderInfluencerCredibility}>
          Trader Influencer Credibility checker is an AI based score generator
          which rates influencers based on their previous trading calls and
          trading activities. This helps new investors to stop falling for
          scamsters.
        </div>
      </div>
      <TraderCardForm />
    </div>
  );
};

export default Dashboard19;
