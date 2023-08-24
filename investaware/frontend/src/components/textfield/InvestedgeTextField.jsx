import { styled, TextField } from "@mui/material";

const CustomTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "inputStyles",
})(({ theme, inputStyles }) => ({
  ".MuiInputLabel-shrink": {
    top: 2,
  },
  ".MuiFormHelperText-root": {
    position: "absolute",
    bottom: "-1.7em",
  },
  "& label": {
    fontFamily: "Inter",
    fontSize: 14,
  },
  "& .MuiOutlinedInput-root": {
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: "1.429em",
    "& input": {
      padding: "10px 14px",
      height: "inherit",
    },
  },
  ...inputStyles,
}));

const InvestedgeTextField = (keys) => (
  <CustomTextField
    {...keys}
    forwardedref=""
    ref={keys.forwardedref}
    size="small"
    variant="outlined"
    // errorStyle={{ display: "table" }}
  />
);
export default InvestedgeTextField;
