import { Image } from "components";
import { Typography, Stack, Container, styled, Box } from "@mui/material";

const _404Page = () => {
  return (
    <WrapperContainer>
      <WrapperStack spacing={2}>
        <Box position="relative" width="50px" height="50px">
          <Image src="/img/404.png" alt="404" />
        </Box>
        <Text variant="h6">Trang bạn tìm kiếm không tồn tại.</Text>
      </WrapperStack>
    </WrapperContainer>
  );
};

export default _404Page;

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
