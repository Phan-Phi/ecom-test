import axios from "axios";
import get from "lodash/get";
import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { Stack, styled, Typography, useTheme } from "@mui/material";

import IconNotiError from "components/Icon/IconNotiError";
import IconNotiComplete from "components/Icon/NotiComplete";

export type SnackbarKey = string | number;
export type SnackbarMessage = string | React.ReactNode;

export const useNotification = () => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const enqueueSnackbarWithSuccess = useCallback((message: string) => {
    enqueueSnackbar(message, {
      variant: "success",

      content: (key: SnackbarKey, message: SnackbarMessage) => {
        return (
          <StyledWrapperSuccess>
            <Typography sx={{ color: theme.palette.success2[800], paddingRight: "1rem" }}>
              {message}
            </Typography>

            <IconNotiComplete />
          </StyledWrapperSuccess>
        );
      },
    });
  }, []);

  const enqueueSnackbarWithError = useCallback((err: unknown) => {
    if (axios.isAxiosError(err)) {
      const message = get(err, "response.data.message");

      if (message) {
        enqueueSnackbar(message, {
          variant: "error",

          content: (key: SnackbarKey, message: SnackbarMessage) => {
            return (
              <StyledWrapperError>
                <Typography
                  sx={{ color: theme.palette.destructive[800], paddingRight: "1rem" }}
                >
                  {message}
                </Typography>

                <IconNotiError
                  onClick={() => {
                    closeSnackbar();
                  }}
                  sx={{ fontSize: "10px", cursor: "pointer" }}
                />
              </StyledWrapperError>
            );
          },
        });
      }
    }
  }, []);

  return {
    loading,
    setLoading,
    enqueueSnackbar,
    closeSnackbar,
    enqueueSnackbarWithSuccess,
    enqueueSnackbarWithError,
  };
};

const StyledWrapperError = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    borderRadius: "8px",
    background: theme.palette.destructive[200],
    border: `2px solid ${theme.palette.destructive[400]}`,
  };
});

const StyledWrapperSuccess = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "12px 16px",
    borderRadius: "8px",
    background: theme.palette.success2[200],
    border: `2px solid ${theme.palette.success2[400]}`,
  };
});
