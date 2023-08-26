import styles from "./Frame.module.css";
const Frame = () => {
  return (
    <div className={styles.groupParent}>
      <img className={styles.frameChild} alt="" src="/group-8932.svg" />
      <div className={styles.parent}>
        <div className={styles.div}>9/12</div>
        <div className={styles.negativeSignals}>Negative Signals</div>
      </div>
    </div>
  );
};

export default Frame;
