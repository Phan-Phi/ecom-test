import { Pagination as MuiPagination } from "@mui/material";
import { UsePaginationProps } from "@mui/material/usePagination/usePagination";

interface PaginationProps extends UsePaginationProps {
  count: number;
  onMouseDown?: any;
}

export default function Pagination(props: PaginationProps) {
  const { onMouseDown } = props;

  return (
    <MuiPagination
      showFirstButton
      showLastButton
      sx={{
        "& .MuiPagination-ul": {
          justifyContent: "center",
        },
      }}
      onMouseDown={onMouseDown}
      {...props}
    />
  );
}
