import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1UploadSS from "./Property1UploadSS";
import Property1Component42 from "./Property1Component42";
import Property1Component46 from "./Property1Component46";
import styles from "./FormContainer3.module.css";
const FormContainer3 = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/dashboard3");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/dashboard4");
  }, [navigate]);

  return (
    <div className={styles.component31}>
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
        frameDivCursor1="unset"
        frameDivBackgroundColor1="#fff"
        videoURLColor="#1d56ff"
        frameDivBackgroundColor2="unset"
        frameDivCursor2="pointer"
        socialMediaURLColor="#414141"
        frameDivBackgroundColor3="unset"
        frameDivCursor3="pointer"
        uploadScreenshotColor="#414141"
        onFrameContainer14Click={onFrameContainer2Click}
        onFrameContainer15Click={onFrameContainer3Click}
      />
      <div className={styles.enterGroupUrlParent}>
        <div className={styles.enterGroupUrl}>Enter Group URL :</div>
        <Property1Component42
          property1Component42Position="unset"
          property1Component42Width="17.38rem"
          property1Component42Height="2.44rem"
          clickToPasteFontSize="0.66rem"
        />
      </div>
      <div className={styles.twitterListUrlParent}>
        <div className={styles.enterGroupUrl}>Twitter List URL:</div>
        <Property1Component46
          property1Component46Position="unset"
          property1Component46Width="17.38rem"
          property1Component46Height="2.44rem"
          clickToPasteFontSize="0.66rem"
        />
      </div>
      <div className={styles.vectorParent} onClick={onFrameContainer6Click}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.enterGroupUrl}>{`Search `}</b>
      </div>
      <div className={styles.or}>or</div>
    </div>
  );
};

export default FormContainer3;
