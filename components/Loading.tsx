import React from "react";
import { styled, Box } from "@mui/material";

export default function Loading() {
  return (
    <Wrapper>
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    ["@keyframes loading6454"]: {
      "0%, 100%": {
        transform: "translateY(0)",
      },

      "50%": {
        transform: "translateY(-10px)",
      },
    },

    fontWeight: 600,
    fontSize: "18px",
    letterSpacing: "1em",
    fontFamily: "monospace",

    height: "50px",
    color: theme.palette.destructive["900"],
    width: "max-content",
    filter: "drop-shadow(0 0 10px)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    ["& span"]: {
      animation: "loading6454 1.75s ease infinite",
    },

    ["& span:nth-of-type(2)"]: {
      animationDelay: "0.25s",
    },

    ["& span:nth-of-type(3)"]: {
      animationDelay: "0.5s",
    },

    ["& span:nth-of-type(4)"]: {
      animationDelay: "0.75s",
    },

    ["& span:nth-of-type(5)"]: {
      animationDelay: "1s",
    },

    ["& span:nth-of-type(6)"]: {
      animationDelay: "1.25s",
    },

    ["& span:nth-of-type(7)"]: {
      animationDelay: "1.5s",
    },
  };
});
