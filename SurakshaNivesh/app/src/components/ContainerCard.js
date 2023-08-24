import Property1Button from "./Property1Button";
import Property1inactive from "./Property1inactive";
import Component1selectedActive from "./Component1selectedActive";
import styles from "./ContainerCard.module.css";
const ContainerCard = ({ imageDimensions, carDimensions }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.suraksha}>
          <span>Suraksha</span>
          <span className={styles.span}>.</span>
        </div>
      </div>
      <img className={styles.sidebarChild} alt="" src="/group-105.svg" />
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src={imageDimensions} />
        <b className={styles.name}>Yash Ramani</b>
        <div className={styles.wrapper}>
          <div className={styles.suraksha}>
            <span>{`❤️‍🩹 `}</span>
            <span className={styles.span1}>75%</span>
          </div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.groupItem} alt="" src={carDimensions} />
        <b className={styles.weHave3500Container}>
          <p className={styles.readyToHelp}>We have 3500+ experts</p>
          <p className={styles.readyToHelp}>{`ready to help you 💜 `}</p>
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
        <Property1inactive
          vector="/vector2.svg"
          dashboard="Dashboard"
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
        <Component1selectedActive
          vector="/vector11.svg"
          dashboard="Trader Call Detector"
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
  );
};

export default ContainerCard;
