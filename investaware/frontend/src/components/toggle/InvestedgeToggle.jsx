import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

const CustomizedToggleButtonGroup = styled(ToggleButtonGroup, {
  shouldForwardProp: (props) => props !== "buttonStyles",
})(({ theme, buttonStyles }) => ({
  textTransform: "none",
  fontSize: 14,
  fontWeight: 500,
  fontFamily: "Inter",
  ".Mui-selected": {
    color: "#1982F8 !important",
    backgroundColor: "white !important",
    borderTop: "1px solid #1982F8",
    borderRight: "1px solid #1982F8",
    borderLeft: "1px solid #1982F8 !important",
    borderBottom: "1px solid #1982F8",
    "&:hover": {
      backgroundColor: "white !important",
    },
  },
  ...buttonStyles,
}));
const CustomizedToggleButton = styled(ToggleButton, {
  shouldForwardProp: (props) => props !== "buttonStyles",
})(({ theme, tabStyles }) => ({
  padding: "8px 1rem",
  height: "33px",
  textTransform: "none",
  fontSize: 14,
  fontWeight: 400,
  fontFamily: "Inter",
  ".Mui-selected": {
    color: theme.palette.primary.main,
  },
  "&:hover": {
    outline: "none",
  },
  "&:active": {
    outline: "none",
  },
  "&:focus": {
    outline: "none",
  },
  ...tabStyles,
}));
const InvestedgeToggleButton = (keys) => <CustomizedToggleButton {...keys} />;
const InvestedgeToggleButtonGroup = (keys) => (
  <CustomizedToggleButtonGroup {...keys}>
    {keys.tabs.map((tab) => (
      <InvestedgeToggleButton
        key={tab.value}
        sx={keys.sx ? { ...keys.sx } : {}}
        value={tab.value}
      >
        {tab.label}
      </InvestedgeToggleButton>
    ))}
  </CustomizedToggleButtonGroup>
);
export default InvestedgeToggleButtonGroup;
