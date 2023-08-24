import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCard from "../components/ContainerCard";
import FormContainer from "../components/FormContainer";
import styles from "./Dashboard12.module.css";
const Dashboard12 = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/dashboard11");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/dashboard12");
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <ContainerCard
        imageDimensions="/group-10312.svg"
        carDimensions="/group-10612.svg"
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
            <img className={styles.icon} alt="" src="/icon3.svg" />
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
      <FormContainer
        groupAnalysisText="Analyze complete group"
        singleDayCallsAnalysisTex="Analyze single day calls"
        inputText="Enter URL:"
        urlInputText="Click to paste URL"
        dateInputLabel="Enter Date:"
        exchangeDateStockExchange="DD/MM/YYYY"
        frameDiv={false}
        frameDiv1={false}
        onFrameContainer13Click={onFrameContainer1Click}
        onFrameContainer15Click={onFrameContainer3Click}
        onFrameContainer18Click={onFrameContainer6Click}
      />
    </div>
  );
};

export default Dashboard12;
