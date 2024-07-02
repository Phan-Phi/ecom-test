import { Box, Typography, styled } from "@mui/material";

export default function NotifyNoResult() {
  return (
    <StyledWrapperNotify>
      <Typography textAlign="center">Không có sản phẩm</Typography>
    </StyledWrapperNotify>
  );
}

const StyledWrapperNotify = styled(Box)(() => {
  return {
    width: "100%",
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});
