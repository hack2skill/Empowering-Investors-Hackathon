import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TraderCard1.module.css";
const TraderCard1 = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/dashboard13");
  }, [navigate]);

  return (
    <div className={styles.component31}>
      <div className={styles.logostelegramParent}>
        <div className={styles.logostelegram}>
          <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector22.svg" />
        </div>
        <div className={styles.iitianTraderOfficialParent}>
          <b className={styles.iitianTraderOfficial}>IITian Trader Official</b>
          <div className={styles.iitiantraderofficial}>
            @iitiantraderofficial
          </div>
        </div>
      </div>
      <div className={styles.privateChannel}>Private Channel</div>
      <div className={styles.members}>7,96,123 Members</div>
      <div className={styles.members1}>7,96,123 Members</div>
      <div className={styles.members2}>7,96,123 Members</div>
      <div className={styles.messagesShared}>1,88,91,231 Messages shared</div>
      <div className={styles.paymentLinksShared}>
        12,77,127 payment links shared
      </div>
      <div className={styles.messagesViolatedSebi}>
        189 messages violated SEBI Rules
      </div>
      <div className={styles.vectorParent} onClick={onFrameContainer2Click}>
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
        <b className={styles.iitianTraderOfficial}>Inspect Calls</b>
      </div>
    </div>
  );
};

export default TraderCard1;
