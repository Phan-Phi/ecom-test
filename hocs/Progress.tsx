import React from "react";
import NextProgress from "next-progress";
import { useTheme } from "@mui/material";

const Progress = () => {
  const theme = useTheme();

  return (
    <NextProgress
      delay={200}
      disableSameRoute
      color={theme.palette.primary.main}
      options={{ showSpinner: false }}
    />
  );
};

export default Progress;
