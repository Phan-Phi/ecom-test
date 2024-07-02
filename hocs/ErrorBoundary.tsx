import React from "react";
import { Image, Stack } from "components";
import { ErrorBoundary } from "react-error-boundary";
import { Box, Container, styled, Typography } from "@mui/material";

type ErrorBoundaryWrapperProps = {
  children?: React.ReactNode;
};

const ErrorBoundaryWrapper = ({ children }: ErrorBoundaryWrapperProps) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

function ErrorFallback() {
  return (
    <WrapperContainer>
      <WrapperStack spacing={2}>
        <Box position="relative" width={50} height={50}>
          <Image src="/img/500.png" alt="500" />
        </Box>

        <Text variant="h6">
          Hệ thông hiện đã có lỗi,
          <br /> xin vui lòng thử lại sau.
        </Text>
      </WrapperStack>
    </WrapperContainer>
  );
}

export default ErrorBoundaryWrapper;

const WrapperContainer = styled(Container)(({ theme }) => {
  return {
    margin: "7.5rem auto",
  };
});

const WrapperStack = styled(Stack)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  };
});

const Text = styled(Typography)(({ theme }) => {
  return {
    textAlign: "center",
  };
});
