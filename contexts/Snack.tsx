import { IconButton } from "@mui/material";
import React, { useRef, useCallback } from "react";
import { SnackbarProvider, SnackbarKey } from "notistack";
import { CloseCircleFilled } from "components";

type SnackProps = {
  children: React.ReactNode;
};

const Snack = ({ children }: SnackProps) => {
  const notistackRef = useRef<SnackbarProvider | null>(null);

  const dismissNotistackHandler = useCallback((key: SnackbarKey) => {
    return () => {
      if (notistackRef.current == undefined) {
        return;
      }

      notistackRef.current.closeSnackbar(key);
    };
  }, []);
  return (
    <SnackbarProvider
      ref={(ref) => {
        notistackRef.current = ref;
      }}
      preventDuplicate={false}
      autoHideDuration={4000}
      action={(key) => {
        return (
          <IconButton onClick={dismissNotistackHandler(key)}>
            <CloseCircleFilled sx={{ color: "common.white" }} />
          </IconButton>
        );
      }}
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default Snack;
