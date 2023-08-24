import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
const CustomizedSlider = styled(Slider, {
  shouldForwardProp: (props) => props !== "sliderStyles",
})(({ theme, sliderStyles }) => ({
  width: "100%",
  marginTop: "1rem",
  height: 4,
  color: "#1982F8",
  opacity: 1,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    height: 4,
    borderRadius: 10,
    backgroundColor: "#E5E5E5",
    opacity: "0.5",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    boxShadow: "0px 2px 12px rgba(0, 0, 111, 0.24)",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "0px 2px 12px rgba(0, 0, 111, 0.24)",
      border: "0",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-mark": {
    backgroundColor: "transparent",
  },
  "& .MuiSlider-markLabel": {
    //styleName: Text/Mini Description;
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "11px",
    letterSpacing: "0.05em",
    textAlign: "center",

    transform: "translateX(0%)",
    color: "#939393",

    '&[data-index="1"]': {
      transform: "translateX(-100%)",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "grey",
    padding: 0,
    width: 25,
    height: 25,
    borderRadius: "4px",
    backgroundColor: "grey",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(0deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(0%, -100%) rotate(0deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(0deg)",
    },
  },
  ...sliderStyles,
}));
const InvestedgeSlider = (keys) => <CustomizedSlider {...keys} size="small" />;
export default InvestedgeSlider;
