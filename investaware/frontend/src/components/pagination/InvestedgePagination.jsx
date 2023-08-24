import { Pagination } from "@mui/material";
import { styled } from "@mui/material/styles";
const CustomizedPagination = styled(Pagination, {
  shouldForwardProp: (props) => props !== "paginationStyles",
})(({ theme, paginationStyles }) => ({
  ".MuiPagination-ul .Mui-selected": {
    color: theme.palette.primary.main,
    outline: "none",
  },
  ".MuiPaginationItem-root": {
    outline: "none",
    "&:active": {
      outline: "none",
    },
    "&:focus": {
      outline: "none",
    },
  },
  ...paginationStyles,
}));
const InvestedgePagination = (keys) => (
  <CustomizedPagination {...keys} variant="outlined" shape="rounded" />
);
export default InvestedgePagination;
