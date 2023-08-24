import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material";

const CustomDatepicker = styled(DatePicker, {
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
const InvestedgeDatepicker = (keys) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <CustomDatepicker {...keys} />
  </LocalizationProvider>
);
export default InvestedgeDatepicker;
