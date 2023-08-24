import { Popper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import React from "react";
import { Box } from "@mui/system";
const CustomizedPopper = styled(Popper, {
  shouldForwardProp: (props) => props !== "popperStyles",
})(({ theme, popperStyles }) => ({
  filter: "drop-shadow(0px 2px 8px rgba(99, 99, 99, 0.2))",
  mt: 1.5,
  height: "100px",
  '&[data-popper-placement*="bottom"] .popper-ref-arrow': {
    top: 0,
    right: 0,
    marginTop: "-0.9em",
    width: "3em",
    height: "1em",
    "&::before": {
      borderWidth: "0 1em 1em 1em",
      borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
    },
  },
  '&[data-popper-placement*="top"] .popper-ref-arrow': {
    bottom: 0,
    left: 0,
    marginBottom: "-0.9em",
    width: "3em",
    height: "1em",
    "&::before": {
      borderWidth: "1em 1em 0 1em",
      borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
    },
  },
  '&[data-popper-placement*="right"] .popper-ref-arrow': {
    left: 0,
    marginLeft: "-0.9em",
    height: "3em",
    width: "1em",
    "&::before": {
      borderWidth: "1em 1em 1em 0",
      borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
    },
  },
  '&[data-popper-placement*="left"] .popper-ref-arrow': {
    right: 0,
    marginRight: "-0.9em",
    height: "3em",
    width: "1em",
    "&::before": {
      borderWidth: "1em 0 1em 1em",
      borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
    },
  },
  ...popperStyles,
}));
const styles = {
  arrow: {
    position: "absolute",
    fontSize: 7,
    width: "3em",
    // filter: "drop-shadow(0px 2px 8px rgba(99, 99, 99, 0.2))",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
  },
};
const InvestedgePopperWithoutRef = (keys) => {
  return (
    <CustomizedPopper
      {...keys}
      transition
      modifiers={[
        {
          name: "offset",
          options: {
            offset: keys.offset,
          },
        },
      ]}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <div>
            {keys.arrow ? (
              <Box
                component="span"
                className="popper-ref-arrow"
                sx={styles.arrow}
              />
            ) : null}
            <Paper elevation={0}>{keys.children}</Paper>
          </div>
        </Fade>
      )}
    </CustomizedPopper>
  );
};
const InvestedgePopper = React.forwardRef((props, ref) => (
  <InvestedgePopperWithoutRef {...props} />
));
export default InvestedgePopper;
