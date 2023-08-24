import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TraderCard.module.css";
const TraderCard = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/dashboard15");
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
      <div className={styles.callsTipsShared}>Calls/ Tips Shared:</div>
      <div className={styles.buyRelianceAt}>
        Buy Reliance at 2409, shared at 9:17 Am, 22/08/23
      </div>
      <div className={styles.sellBhelAt}>
        Sell BHEL at 129, shared at 12:31 Pm, 22/08/23
      </div>
      <div className={styles.buyOngcAt}>
        Buy ONGC at 156, shared at 10:24 Am, 21/08/23
      </div>
      <div className={styles.sellSailAt}>
        Sell SAIL at 129, shared at 1:45 Pm, 20/08/23
      </div>
      <div className={styles.sellGnfcAt}>
        Sell GNFC at 523, shared at 12:21 Pm, 20/08/23
      </div>
      <div className={styles.vectorParent} onClick={onFrameContainer2Click}>
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
        <b className={styles.iitianTraderOfficial}>Detailed Analysis</b>
      </div>
    </div>
  );
};

export default TraderCard;
