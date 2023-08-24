import { Box, styled, Tab, Tabs } from "@mui/material";
import React from "react";

const CustomizedTabs = styled(Tabs, {
  shouldForwardProp: (props) => props !== "tabsStyles",
})(({ theme, tabsStyles }) => ({
  textTransform: "none",
  fontSize: 14,
  fontWeight: 500,
  fontFamily: "Inter",
  "&.Mui-selected": {
    outline: "none",
  },
  "&.Mui-focusVisible": {
    outline: "none",
  },
  ".MuiTabs-scrollButtons": {
    height: "40px",
  },
  ".MuiTabs-scrollButtons:nth-of-type(1)": {
    justifyContent: "flex-start",
  },
  ".MuiTabs-scrollButtons:nth-of-type(2)": {
    justifyContent: "flex-end",
  },
  ".MuiTabs-scrollButtons.Mui-disabled": {
    opacity: 0.3,
  },
  ...tabsStyles,
}));
const CustomizedTab = styled(Tab, {
  shouldForwardProp: (props) => props !== "tabsStyles",
})(({ theme, tabStyles }) => ({
  textTransform: "none",
  fontSize: 14,
  fontWeight: 500,
  fontFamily: "Inter",
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
const InvestedgeTab = (keys) => <CustomizedTab {...keys} />;
const InvestedgeTabs = (keys) => (
  <Box>
    <CustomizedTabs
      {...keys}
      handletabchange=""
      value={keys.tabvalue}
      onChange={keys.handletabchange}
    >
      {keys.tabs.map((tab, ind) => (
        <InvestedgeTab key={ind} label={tab.label} />
      ))}
    </CustomizedTabs>
  </Box>
);
export default InvestedgeTabs;
