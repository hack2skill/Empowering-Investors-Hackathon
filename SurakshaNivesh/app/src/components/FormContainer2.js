import { useMemo } from "react";
import Property1UploadSS from "./Property1UploadSS";
import Property1Component23 from "./Property1Component23";
import Property1Component15 from "./Property1Component15";
import styles from "./FormContainer2.module.css";
const FormContainer2 = ({
  socialMediaUrl,
  mediaUrl,
  propCursor,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propCursor1,
  propColor1,
  propTextAlign,
  propTop,
  propLeft,
  onFrameContainer12Click,
  onFrameContainer13Click,
  onFrameContainer14Click,
  onFrameContainer15Click,
  onFrameContainer18Click,
}) => {
  const frameDiv7Style = useMemo(() => {
    return {
      cursor: propCursor,
      backgroundColor: propBackgroundColor,
    };
  }, [propCursor, propBackgroundColor]);

  const videoURLStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const frameDiv8Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      cursor: propCursor1,
    };
  }, [propBackgroundColor1, propCursor1]);

  const socialMediaURLStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const telegramGroupURLStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const frameDiv10Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.component31}>
      <Property1UploadSS
        videoURL="Video URL"
        socialMediaURL="Social Media URL"
        showFrameDiv
        frameDivVisible
        property1UploadSSPosition="absolute"
        property1UploadSSTop="1.88rem"
        property1UploadSSLeft="calc(50% - 262px)"
        frameDivCursor="pointer"
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
        onFrameContainer12Click={onFrameContainerClick}
        onFrameContainer13Click={onFrameContainer1Click}
        onFrameContainer15Click={onFrameContainer3Click}
      />
      <div className={styles.telegramGroupUrlParent}>
        <div className={styles.telegramGroupUrl} style={telegramGroupURLStyle}>
          {socialMediaUrl}
        </div>
        <Property1Component23
          property1Component23Position="unset"
          property1Component23Width="17.38rem"
          property1Component23Height="2.44rem"
          clickToPasteFontSize="0.66rem"
        />
      </div>
      <div className={styles.or}>or</div>
      <div
        className={styles.twitterHandletweetUrlParent}
        style={frameDiv10Style}
      >
        <div className={styles.telegramGroupUrl}>{mediaUrl}</div>
        <Property1Component15
          property1Component15Position="unset"
          property1Component15Width="17.38rem"
          property1Component15Height="2.44rem"
          clickToPasteFontSize="0.66rem"
        />
      </div>
      <div className={styles.vectorParent} onClick={onFrameContainer18Click}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.telegramGroupUrl}>{`Search `}</b>
      </div>
    </div>
  );
};

export default FormContainer2;
