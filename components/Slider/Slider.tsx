import { Box, Slider as MuiSlider, styled, useTheme } from "@mui/material";

const Slider = () => {
  const theme = useTheme();

  return (
    <MuiSlider
      valueLabelDisplay="on"
      slots={{
        rail: (props) => {
          const { ownerState, ...restProps } = props;
          return (
            <StyledRail {...restProps}>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 16">
                <path
                  d="M0 8c0-1.112.888-2.02 2-2.047L248.001.187a7.815 7.815 0 110 15.625L1.999 10.048A2.047 2.047 0 010 8z"
                  fill={theme.palette.neutral[600]}
                />
              </svg>
            </StyledRail>
          );
        },
        track: (props) => {
          const { ownerState, style, ...restProps } = props;
          return (
            <StyledTrack {...restProps}>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 16">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset={style.width}
                      style={{
                        stopColor: theme.palette.secondary.main,
                        stopOpacity: 1,
                      }}
                    />
                    <stop
                      offset={style.width}
                      style={{
                        stopColor: theme.palette.neutral[600],
                        stopOpacity: 1,
                      }}
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 8c0-1.112.888-2.02 2-2.047L248.001.187a7.815 7.815 0 110 15.625L1.999 10.048A2.047 2.047 0 010 8z"
                  fill="url(#gradient)"
                />
              </svg>
            </StyledTrack>
          );
        },
        thumb: (props) => {
          const { ownerState, style, ...restProps } = props;

          return (
            <StyledThumb left={style.left}>
              <Box
                sx={{
                  position: "absolute",
                  width: 20,
                  height: 20,
                  backgroundColor: theme.palette.secondary.main,
                  pointerEvents: "none",
                  userSelect: "none",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                }}
                {...restProps}
              />
            </StyledThumb>
          );
        },
      }}
    />
  );
};

const StyledThumb = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    width: 28,
    height: 28,
    borderRadius: "50%",
    backgroundColor: theme.palette.common.white,
    top: "50%",
    transform: "translate(-50%, -50%)",
    ["& .MuiSlider-valueLabel"]: {
      ...theme.typography.caption2Bold,
      color: theme.palette.neutral[800],
      backgroundColor: theme.palette.common.black,
      borderRadius: 8,
      ["&::before"]: {
        borderRadius: "25%",
        width: 12,
        height: 12,
        bottom: 2,
      },
    },
  };
});

const StyledRail = styled(Box)(() => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };
});

const StyledTrack = styled(Box)(() => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };
});

export default Slider;
