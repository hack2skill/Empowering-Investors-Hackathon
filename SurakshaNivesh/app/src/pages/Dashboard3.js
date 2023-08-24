import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCardFormFilter2 from "../components/ContainerCardFormFilter2";
import FormContainer1 from "../components/FormContainer1";
import styles from "./Dashboard3.module.css";
const Dashboard3 = () => {
  const navigate = useNavigate();

  const onFrameContainer4Click = useCallback(() => {
    navigate("/dashboard5");
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <ContainerCardFormFilter2
        imageDimensions="/group-1033.svg"
        carDimensions="/group-1063.svg"
      />
      <div className={styles.date}>
        <img
          className={styles.flatColorIconscalendar}
          alt=""
          src="/flatcoloriconscalendar1.svg"
        />
        <b className={styles.searchInPump}>17 August’ 23</b>
      </div>
      <div className={styles.seperator} />
      <div className={styles.dashboardChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.iconParent}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
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
          <img className={styles.groupChild} alt="" src="/group-1081.svg" />
          <img className={styles.groupItem} alt="" src="/group-1091.svg" />
          <div className={styles.notificationGroup}>
            <div className={styles.notification1}>
              <div className={styles.notificationItem} />
            </div>
            <div className={styles.div}>+</div>
          </div>
        </div>
      </div>
      <b className={styles.tradingInfluencerCredibility}>
        Trading Influencer Credibility Score Checker
      </b>
      <div className={styles.traderInfluencerCredibilityWrapper}>
        <div className={styles.traderInfluencerCredibility}>
          Trader Influencer Credibility checker is an AI based score generator
          which rates influencers based on their previous trading calls and
          trading activities. This helps new investors to stop falling for
          scamsters.
        </div>
      </div>
      <FormContainer1
        propTop="18.44rem"
        propLeft="23.31rem"
        onFrameContainer16Click={onFrameContainer4Click}
      />
    </div>
  );
};

export default Dashboard3;
