import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerSidebarForm from "../components/ContainerSidebarForm";
import SearchFormContainer from "../components/SearchFormContainer";
import styles from "./Dashboard10.module.css";
const Dashboard10 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard7");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <ContainerSidebarForm
        imageDimensions="/group-10310.svg"
        carDimensions="/group-10610.svg"
        imageDimensionsText="/vector2.svg"
        imageDimensionsText2="/vector11.svg"
        imageDimensionsText3="/vector2.svg"
        imageDimensionsText4="/vector2.svg"
        imageDimensionsText5="/vector2.svg"
      />
      <div className={styles.date}>
        <img
          className={styles.flatColorIconscalendar}
          alt=""
          src="/flatcoloriconscalendar2.svg"
        />
        <b className={styles.searchInPump}>17 August’ 23</b>
      </div>
      <div className={styles.seperator} />
      <div className={styles.dashboardChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.iconParent}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
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
            <img className={styles.frameChild} alt="" src="/group-1402.svg" />
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
      <b className={styles.pumpAndDump}>Pump and Dump Scheme Detector</b>
      <div className={styles.pumpAndDumpSchemeDetectorWrapper}>
        <div className={styles.pumpAndDump1}>
          Pump and Dump scheme detector is a GenAI based validation tool, which
          through text mining, sentiment analysis, RL and fundamental analysis
          verification, detects whether a penny stock is promoted abnormally.
        </div>
      </div>
      <SearchFormContainer />
    </div>
  );
};

export default Dashboard10;
