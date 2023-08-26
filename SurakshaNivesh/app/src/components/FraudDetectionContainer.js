import styles from "./FraudDetectionContainer.module.css";
const FraudDetectionContainer = () => {
  return (
    <div className={styles.lineParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.influencer}>{`Influencer `}</div>
      <div className={styles.credibilityScore}>Credibility Score</div>
      <div className={styles.reason}>Reason</div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameInner}
              alt=""
              src="/ellipse-200@2x.png"
            />
            <div className={styles.div}>29</div>
            <div className={styles.fakePnl}>Fake PnL</div>
          </div>
        </div>
        <div className={styles.ellipseGroup}>
          <img
            className={styles.frameInner}
            alt=""
            src="/ellipse-2001@2x.png"
          />
          <div className={styles.div}>11</div>
          <div className={styles.fakePnl}>Unsual claim</div>
        </div>
        <div className={styles.ellipseParent}>
          <img
            className={styles.frameInner}
            alt=""
            src="/ellipse-2002@2x.png"
          />
          <div className={styles.div}>13</div>
          <div className={styles.fakePnl}>Illogical SL</div>
        </div>
        <div className={styles.ellipseParent}>
          <img
            className={styles.frameInner}
            alt=""
            src="/ellipse-2003@2x.png"
          />
          <div className={styles.div}>8</div>
          <div className={styles.noSetup}>No setup</div>
        </div>
        <div className={styles.ellipseParent}>
          <img
            className={styles.frameInner}
            alt=""
            src="/ellipse-2004@2x.png"
          />
          <div className={styles.div}>15</div>
          <div className={styles.fakePnl}>Fake PnL</div>
        </div>
        <div className={styles.ellipseParent2}>
          <img
            className={styles.frameInner}
            alt=""
            src="/ellipse-2005@2x.png"
          />
          <div className={styles.div}>22</div>
          <div className={styles.fakePnl}>Fraud calls</div>
        </div>
      </div>
    </div>
  );
};

export default FraudDetectionContainer;
