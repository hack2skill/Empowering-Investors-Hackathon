import { MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
const CustomizedMenuItem = styled(MenuItem, {
  shouldForwardProp: (props) => props !== "menuitemstyles",
})(({ theme, menuitemstyles }) => ({
  listStyleType: "none",
  fontSize: 14,
  fontFamily: "Inter",
  "&:hover": {
    color: theme.palette.primary,
  },
  ...menuitemstyles,
}));
const InvestedgeMenuItem = (keys) => <CustomizedMenuItem {...keys} />;
export default InvestedgeMenuItem;
