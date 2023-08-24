import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
const CustomizedButton = styled(Button, {
  shouldForwardProp: (props) => props !== "buttonStyles",
})(({ theme, buttonStyles }) => ({
  textTransform: "none",
  fontSize: 14,
  fontFamily: "Inter",
  backgroundColor: theme.palette.primary,
  //   "&:hover": {
  //     outline: "none",
  //     border: "none",
  //   },
  //   "&:active": {
  //     outline: "none",
  //     border: "none",
  //   },
  //   "&:focus": {
  //     outline: "none",
  //     border: "none",
  //   },
  ...buttonStyles,
}));
const InvestedgeButtonHollow = (keys) => (
  <CustomizedButton {...keys} size="small" variant="outlined" />
);
export default InvestedgeButtonHollow;
