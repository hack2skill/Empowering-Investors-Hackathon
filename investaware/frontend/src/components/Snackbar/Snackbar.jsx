import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { CloseSnackbar } from "../../actions/actions";
const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function SnackbarCustomized() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.snackbarProps);
  const handleclose = () => {
    dispatch(CloseSnackbar());
  };
  return (
    <Snackbar
      open={data.open}
      autoHideDuration={data.infinite ? null : 6000}
      onClose={handleclose}
      sx={{ width: "30%" }}
    >
      <Alert
        onClose={handleclose}
        severity={data.severity}
        sx={{ width: "100%" }}
      >
        {data.message}
      </Alert>
    </Snackbar>
  );
}
