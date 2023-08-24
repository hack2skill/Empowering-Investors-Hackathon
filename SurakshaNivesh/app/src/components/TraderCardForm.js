import { useCallback } from "react";
import Property1Frame1000002308 from "./Property1Frame1000002308";
import styles from "./TraderCardForm.module.css";
const TraderCardForm = () => {
  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div className={styles.component59}>
      <div className={styles.logostelegramParent}>
        <div className={styles.logostelegram}>
          <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector23.svg" />
        </div>
        <div className={styles.iitianTraderOfficialParent}>
          <b className={styles.iitianTraderOfficial}>IITian Trader Official</b>
          <div className={styles.iitiantraderofficial}>
            @iitiantraderofficial
          </div>
        </div>
      </div>
      <div className={styles.privateChannel}>Private Channel</div>
      <div className={styles.sebiRulesViolated}>SEBI Rules violated</div>
      <div className={styles.div}>3</div>
      <div className={styles.sharingInvestmentTipsContainer}>
        <ul className={styles.sharingInvestmentTipsWithou}>
          <li className={styles.sharingInvestmentTips}>
            Sharing investment tips without being registered and not warning an
            educational purpose call
          </li>
          <li className={styles.sharingInvestmentTips}>
            Showing Fake PnL statement
          </li>
          <li>Live trading and giving calls without SEBI consent</li>
        </ul>
      </div>
      <Property1Frame1000002308
        arrowBack="/arrow-back5.svg"
        property1Frame1000002308Position="absolute"
        property1Frame1000002308Top="1.5rem"
        property1Frame1000002308Left="1.56rem"
        arrowBackIconWidth="1rem"
        arrowBackIconHeight="1rem"
      />
      <div className={styles.vectorParent} onClick={onFrameContainer2Click}>
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
        <b className={styles.iitianTraderOfficial}>Report To SEBI</b>
      </div>
    </div>
  );
};

export default TraderCardForm;
