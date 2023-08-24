import { Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import React from "react";
import { Box } from "@mui/system";
const CustomizedModal = styled(Modal, {
  shouldForwardProp: (props) => props !== "modalStyles",
})(({ theme, modalStyles }) => ({
  ...modalStyles,
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
  border: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "2rem",
  minWidth: "55vw",
};
const InvestedgeModal = (keys, ind) => {
  return (
    <CustomizedModal
      {...keys}
      handleclose=""
      key={ind}
      aria-labelledby={keys.ariaLabelledBy}
      aria-describedby={keys.ariaDescribedBy}
      open={keys.open}
      onClose={keys.handleclose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={keys.open}>
        <Box
          className="max-h-[90%] productunderstading-scrollablediv overflow-auto rounded-md"
          sx={keys.sx ? { ...style, ...keys.sx } : { ...style }}
        >
          {keys.children}
        </Box>
      </Fade>
    </CustomizedModal>
  );
};
export default InvestedgeModal;
