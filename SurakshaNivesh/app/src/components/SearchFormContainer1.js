import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1UploadSS from "./Property1UploadSS";
import styles from "./SearchFormContainer1.module.css";
const SearchFormContainer1 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard7");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/dashboard9");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/dashboard10");
  }, [navigate]);

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
        frameDivBackgroundColor2="unset"
        frameDivCursor2="pointer"
        socialMediaURLColor="#414141"
        frameDivBackgroundColor3="#fff"
        frameDivCursor3="unset"
        uploadScreenshotColor="#1d56ff"
        onFrameContainer12Click={onFrameContainerClick}
        onFrameContainer13Click={onFrameContainer1Click}
        onFrameContainer14Click={onFrameContainer2Click}
      />
      <div className={styles.vectorParent} onClick={onFrameContainer4Click}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.search}>{`Search `}</b>
      </div>
      <div className={styles.fileUploadBase}>
        <div className={styles.content}>
          <img
            className={styles.featuredIcon}
            alt=""
            src="/featured-icon.svg"
          />
          <div className={styles.content}>
            <div className={styles.action}>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <div className={styles.text}>Click to upload</div>
                </div>
              </div>
            </div>
            <div
              className={styles.textAndSupportingTextInner}
              onClick={onGroupContainer1Click}
            >
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.uploadParent}>
                    <img
                      className={styles.uploadIcon}
                      alt=""
                      src="/upload1.svg"
                    />
                    <div className={styles.clickToUpload}>Click to upload</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.supportingText}>
              File size is limited to 25 MB and 100,000 rows.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFormContainer1;
