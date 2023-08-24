import Property1Button from "../components/Property1Button";
import Component1selectedActive from "../components/Component1selectedActive";
import Property1inactive from "../components/Property1inactive";
import Property1Frame147 from "../components/Property1Frame147";
import Property1Frame150 from "../components/Property1Frame150";
import Property1Frame149 from "../components/Property1Frame149";
import Property1Frame148 from "../components/Property1Frame148";
import FraudDetectionContainer from "../components/FraudDetectionContainer";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <div className={styles.suraksha}>
            <span>Suraksha</span>
            <span className={styles.span}>.</span>
          </div>
        </div>
        <img className={styles.sidebarChild} alt="" src="/group-105.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-103.svg" />
          <b className={styles.name}>Yash Ramani</b>
          <div className={styles.wrapper}>
            <div className={styles.suraksha}>
              <span>{`❤️‍🩹 `}</span>
              <span className={styles.span1}>75%</span>
            </div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.groupItem} alt="" src="/group-106.svg" />
          <b className={styles.stockDataAndContainer}>
            <p className={styles.stockDataAnd}>Stock data and information</p>
            <p className={styles.stockDataAnd}>backed by Government</p>
          </b>
        </div>
        <Property1Button
          property1ButtonPosition="absolute"
          property1ButtonTop="47.38rem"
          property1ButtonLeft="3.19rem"
          vectorIconWidth="0.84rem"
          vectorIconHeight="0.67rem"
        />
        <div className={styles.menu}>
          <Component1selectedActive
            vector="/vector11.svg"
            dashboard="Dashboard"
            component1selectedActivePosition="unset"
            component1selectedActivePadding="0rem var(--padding-lg) 0rem 0rem"
            rectangleIconWidth="0.19rem"
            rectangleIconHeight="1.19rem"
            frameDivWidth="12.63rem"
            vectorIconWidth="1rem"
            vectorIconHeight="0.91rem"
          />
          <Property1inactive
            vector="/vector2.svg"
            dashboard="Pump and Dump"
            property1inactivePosition="unset"
            property1inactiveWidth="15.19rem"
            property1inactivePadding="0rem var(--padding-lg) 0rem 0rem"
            rectangleIconWidth="0.19rem"
            rectangleIconHeight="1.19rem"
            frameDivWidth="12.63rem"
            vectorIconWidth="1rem"
            vectorIconHeight="0.91rem"
          />
          <Property1inactive
            vector="/vector2.svg"
            dashboard="Trader Call Detector"
            property1inactivePosition="unset"
            property1inactiveWidth="15.19rem"
            property1inactivePadding="0rem var(--padding-lg) 0rem 0rem"
            rectangleIconWidth="0.19rem"
            rectangleIconHeight="1.19rem"
            frameDivWidth="12.63rem"
            vectorIconWidth="1rem"
            vectorIconHeight="0.91rem"
          />
          <Property1inactive
            vector="/vector2.svg"
            dashboard="Credibility Score "
            property1inactivePosition="unset"
            property1inactiveWidth="15.19rem"
            property1inactivePadding="0rem var(--padding-lg) 0rem 0rem"
            rectangleIconWidth="0.19rem"
            rectangleIconHeight="1.19rem"
            frameDivWidth="12.63rem"
            vectorIconWidth="1rem"
            vectorIconHeight="0.91rem"
          />
          <Property1inactive
            vector="/vector2.svg"
            dashboard="SEBI Norm checker"
            property1inactivePosition="unset"
            property1inactiveWidth="15.19rem"
            property1inactivePadding="0rem var(--padding-lg) 0rem 0rem"
            rectangleIconWidth="0.19rem"
            rectangleIconHeight="1.19rem"
            frameDivWidth="12.63rem"
            vectorIconWidth="1rem"
            vectorIconHeight="0.91rem"
          />
        </div>
      </div>
      <div className={styles.date}>
        <img
          className={styles.flatColorIconscalendar}
          alt=""
          src="/flatcoloriconscalendar.svg"
        />
        <b className={styles.searchInDashboard}>17 August’ 23</b>
      </div>
      <div className={styles.seperator} />
      <div className={styles.dashboardChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.iconParent}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.searchInDashboard}>Search in Dashboard</div>
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <div className={styles.notificationChild} />
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
          <div className={styles.container}>
            <b className={styles.searchInDashboard}>2</b>
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
          <b className={styles.searchInDashboard}>
            <p className={styles.stockDataAnd}>New Scammers</p>
            <p className={styles.p}>+1209</p>
          </b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.groupWrapper}>
            <img className={styles.frameChild} alt="" src="/group-140.svg" />
          </div>
          <img className={styles.groupInner} alt="" src="/group-108.svg" />
          <img className={styles.groupIcon} alt="" src="/group-109.svg" />
          <div className={styles.notificationGroup}>
            <div className={styles.notification1}>
              <div className={styles.notificationItem} />
            </div>
            <div className={styles.div1}>+</div>
          </div>
        </div>
      </div>
      <b className={styles.genaiFraudAnd}>GenAI Fraud and Scam Detectors</b>
      <b className={styles.recentlyDetectedFraud}>
        Recently Detected Fraud Schemes
      </b>
      <div className={styles.detectFraudCalls}>
        Detect fraud calls and pump-dump penny schemes in one click
      </div>
      <div className={styles.detectFraudCalls1}>
        Detect fraud calls and pump-dump penny schemes in on
      </div>
      <div className={styles.component36Parent}>
        <Property1Frame147
          vector="/vector13.svg"
          property1Frame147Width="25.5rem"
          property1Frame147Height="6.88rem"
          property1Frame147FlexShrink="0"
          frameDivTop="1.44rem"
          frameDivLeft="0.88rem"
          frameDivPadding="0.66rem 0.82rem"
          vectorIconWidth="1.92rem"
          vectorIconHeight="2.19rem"
          pumpAndDumpTop="1.31rem"
          pumpAndDumpLeft="5.5rem"
          detectsUnusualMovementConTop="2.94rem"
          detectsUnusualMovementConLeft="5.5rem"
        />
        <Property1Frame150
          vector="/vector14.svg"
          detectsUnusualMovementInP="ML algorithms to detect timestamp based "
          stocksThroughTextMining="trading calls shared by influencers"
          vector1="/vector15.svg"
          property1Frame150Width="25.5rem"
          property1Frame150Height="6.88rem"
          property1Frame150FlexShrink="0"
          frameDivTop="1.44rem"
          frameDivLeft="0.88rem"
          frameDivPadding="0.66rem 0.82rem"
          vectorIconWidth="1.92rem"
          vectorIconHeight="2.19rem"
          fraudTradingCallTop="1.31rem"
          fraudTradingCallLeft="5.5rem"
          detectsUnusualMovementConTop="2.94rem"
          detectsUnusualMovementConLeft="5.5rem"
        />
        <Property1Frame149
          detectsUnusualMovementInP="Tells how much credible is  a particular influencer"
          stocksThroughTextMining="based on their past shared calls"
          vector="/vector16.svg"
          property1Frame149Width="25.5rem"
          property1Frame149Height="6.88rem"
          property1Frame149FlexShrink="0"
          frameDivTop="1.44rem"
          frameDivLeft="0.88rem"
          frameDivPadding="0.66rem 0.82rem"
          vectorIconWidth="1.92rem"
          vectorIconHeight="2.19rem"
          checkCredibilityScoreTop="1.31rem"
          checkCredibilityScoreLeft="5.5rem"
          detectsUnusualMovementConTop="2.94rem"
          detectsUnusualMovementConLeft="5.5rem"
          detectsUnusualMovementConWhiteSpace="pre-wrap"
        />
        <Property1Frame148
          vector="/vector17.svg"
          fraudTradingCallDetector="SEBI Norm Violation"
          detectsUnusualMovementInP="Detects if any influencer has voilated SEBI norms"
          stocksThroughTextMining="through web scraping and text mining"
          vector1="/vector18.svg"
          property1Frame148Width="25.5rem"
          property1Frame148Height="6.88rem"
          property1Frame148FlexShrink="0"
          frameDivTop="1.44rem"
          frameDivLeft="0.88rem"
          frameDivPadding="0.66rem 0.82rem"
          vectorIconWidth="1.92rem"
          vectorIconHeight="2.19rem"
          fraudTradingCallTop="1.31rem"
          fraudTradingCallLeft="5.5rem"
          detectsUnusualMovementConTop="2.94rem"
          detectsUnusualMovementConLeft="5.5rem"
        />
      </div>
      <FraudDetectionContainer />
    </div>
  );
};

export default Dashboard;
