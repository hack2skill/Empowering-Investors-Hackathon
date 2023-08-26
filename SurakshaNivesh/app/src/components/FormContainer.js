import { useMemo } from "react";
import Property1UploadSS from "./Property1UploadSS";
import Property1Component50 from "./Property1Component50";
import Property1Component54 from "./Property1Component54";
import styles from "./FormContainer.module.css";
const FormContainer = ({
  groupAnalysisText,
  singleDayCallsAnalysisTex,
  inputText,
  urlInputText,
  dateInputLabel,
  exchangeDateStockExchange,
  frameDiv,
  frameDiv1,
  propTop,
  propLeft,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propCursor,
  propColor1,
  propTop1,
  propLeft1,
  propLeft2,
  onFrameContainer13Click,
  onFrameContainer14Click,
  onFrameContainer15Click,
  onFrameContainer18Click,
}) => {
  const component311Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const property1UploadSSStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv6Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const stockNameStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const frameDiv8Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      cursor: propCursor,
    };
  }, [propBackgroundColor1, propCursor]);

  const socialMediaURLStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const frameDiv11Style = useMemo(() => {
    return {
      top: propTop1,
      left: propLeft1,
    };
  }, [propTop1, propLeft1]);

  const frameDiv12Style = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div className={styles.component31} style={component311Style}>
      <Property1UploadSS
        videoURL="Analyze complete group"
        socialMediaURL="Analyze single day calls"
        showFrameDiv={false}
        frameDivVisible={false}
        property1UploadSSPosition="absolute"
        property1UploadSSTop="1.88rem"
        property1UploadSSLeft="calc(50% - 198px)"
        frameDivCursor="unset"
        frameDivBackgroundColor="unset"
        stockNameColor="#414141"
        frameDivCursor1="pointer"
        frameDivBackgroundColor1="unset"
        videoURLColor="#414141"
        frameDivBackgroundColor2="#fff"
        frameDivCursor2="unset"
        socialMediaURLColor="#1d56ff"
        frameDivBackgroundColor3="unset"
        frameDivCursor3="pointer"
        uploadScreenshotColor="#414141"
        onFrameContainer13Click={onFrameContainer1Click}
        onFrameContainer15Click={onFrameContainer3Click}
      />
      <div className={styles.enterUrlParent} style={frameDiv11Style}>
        <div className={styles.enterUrl}>{inputText}</div>
        <Property1Component50
          property1Component50Position="unset"
          property1Component50Width="17.38rem"
          property1Component50Height="2.44rem"
          clickToPasteFontSize="0.66rem"
        />
      </div>
      <div className={styles.enterDateParent} style={frameDiv12Style}>
        <div className={styles.enterUrl}>{dateInputLabel}</div>
        <Property1Component54
          property1Component54Position="unset"
          property1Component54Width="17.38rem"
          property1Component54Height="2.44rem"
          dDMMYYYYFontSize="0.66rem"
        />
      </div>
      <div className={styles.vectorParent} onClick={onFrameContainer18Click}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.enterUrl}>{`Search `}</b>
      </div>
    </div>
  );
};

export default FormContainer;
