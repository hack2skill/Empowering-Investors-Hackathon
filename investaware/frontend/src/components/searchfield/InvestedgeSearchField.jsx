import { styled, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "../../assets/img/global_search_icon.svg";
const CustomTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "inputStyles",
})(({ theme, inputStyles }) => ({
  ".MuiInputLabel-shrink": {
    top: 2,
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

const InvestedgeSearchField = (keys) => (
  <CustomTextField
    {...keys}
    size="small"
    variant="outlined"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <img src={Search} alt="Search" />
        </InputAdornment>
      ),
    }}
  />
);
export default InvestedgeSearchField;
