import { useMemo } from "react";
import styles from "./Property1UploadSS.module.css";
const Property1UploadSS = ({
  videoURL,
  socialMediaURL,
  showFrameDiv,
  frameDivVisible,
  property1UploadSSPosition,
  property1UploadSSTop,
  property1UploadSSLeft,
  frameDivCursor,
  frameDivBackgroundColor,
  stockNameColor,
  frameDivCursor1,
  frameDivBackgroundColor1,
  videoURLColor,
  frameDivBackgroundColor2,
  frameDivCursor2,
  socialMediaURLColor,
  frameDivBackgroundColor3,
  frameDivCursor3,
  uploadScreenshotColor,
  onFrameContainer12Click,
  onFrameContainer13Click,
  onFrameContainer14Click,
  onFrameContainer15Click,
}) => {
  const property1UploadSSStyle = useMemo(() => {
    return {
      position: property1UploadSSPosition,
      top: property1UploadSSTop,
      left: property1UploadSSLeft,
    };
  }, [property1UploadSSPosition, property1UploadSSTop, property1UploadSSLeft]);

  const frameDiv6Style = useMemo(() => {
    return {
      cursor: frameDivCursor,
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivCursor, frameDivBackgroundColor]);

  const stockNameStyle = useMemo(() => {
    return {
      color: stockNameColor,
    };
  }, [stockNameColor]);

  const frameDiv7Style = useMemo(() => {
    return {
      cursor: frameDivCursor1,
      backgroundColor: frameDivBackgroundColor1,
    };
  }, [frameDivCursor1, frameDivBackgroundColor1]);

  const videoURLStyle = useMemo(() => {
    return {
      color: videoURLColor,
    };
  }, [videoURLColor]);

  const frameDiv8Style = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor2,
      cursor: frameDivCursor2,
    };
  }, [frameDivBackgroundColor2, frameDivCursor2]);

  const socialMediaURLStyle = useMemo(() => {
    return {
      color: socialMediaURLColor,
    };
  }, [socialMediaURLColor]);

  const frameDiv9Style = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor3,
      cursor: frameDivCursor3,
    };
  }, [frameDivBackgroundColor3, frameDivCursor3]);

  const uploadScreenshotStyle = useMemo(() => {
    return {
      color: uploadScreenshotColor,
    };
  }, [uploadScreenshotColor]);

  return (
    <div className={styles.property1uploadSs} style={property1UploadSSStyle}>
      {showFrameDiv && (
        <div
          className={styles.stockNameWrapper}
          style={frameDiv6Style}
          onClick={onFrameContainer12Click}
        >
          <div className={styles.stockName} style={stockNameStyle}>
            Stock Name
          </div>
        </div>
      )}
      <div
        className={styles.stockNameWrapper}
        style={frameDiv7Style}
        onClick={onFrameContainer13Click}
      >
        <div className={styles.stockName} style={videoURLStyle}>
          {videoURL}
        </div>
      </div>
      <div
        className={styles.stockNameWrapper}
        style={frameDiv8Style}
        onClick={onFrameContainer14Click}
      >
        <div className={styles.stockName} style={socialMediaURLStyle}>
          {socialMediaURL}
        </div>
      </div>
      {frameDivVisible && (
        <div
          className={styles.uploadScreenshotWrapper}
          style={frameDiv9Style}
          onClick={onFrameContainer15Click}
        >
          <div className={styles.stockName} style={uploadScreenshotStyle}>
            Upload Screenshot
          </div>
        </div>
      )}
    </div>
  );
};

export default Property1UploadSS;
