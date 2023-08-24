import { styled, Autocomplete } from "@mui/material";

const CustomAutocomplete = styled(Autocomplete, {
  shouldForwardProp: (props) => props !== "inputStyles",
})(({ theme, inputStyles }) => ({
  ".MuiInputLabel-shrink": {
    top: 2,
  },
  "& label": {
    fontFamily: "Inter",
    fontSize: 14,
  },

  ".MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: "1.429em",
    paddingTop: "8px",
    paddingBottom: "7px",
  },
  ...inputStyles,
}));

const InvestedgeAutocomplete = (keys) => (
  <CustomAutocomplete {...keys} size="small" />
);
export default InvestedgeAutocomplete;
