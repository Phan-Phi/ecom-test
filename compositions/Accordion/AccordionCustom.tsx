import {
  Stack,
  styled,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { ArrowDownSimpleOutlined } from "components";

type AccordionCustomProps = {
  children: React.ReactNode;
  title: string;
};

export default function AccordionCustom({ children, title }: AccordionCustomProps) {
  return (
    <StyledAccordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<StyledIcon />}>
        <StyledTitle>{title}</StyledTitle>
      </AccordionSummary>
      <StyledAccordionDetails>
        <Stack gap="2px">{children}</Stack>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
}

const StyledAccordion = styled(Accordion)(({ theme }) => {
  return {
    boxShadow: "none",

    ["& .MuiAccordionSummary-content"]: {
      margin: "0 !important",
    },

    ["& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded"]: {
      minHeight: "30px",

      [theme.breakpoints.down("md")]: {
        minHeight: "24px",
      },
    },

    ["& .MuiButtonBase-root"]: {
      padding: 0,
    },

    ["&::before"]: {
      height: 0,
    },
  };
});

const StyledIcon = styled(ArrowDownSimpleOutlined)(({ theme }) => {
  return {
    fill: "transparent",
    transform: "rotate(180deg)",
    stroke: theme.palette.neutral[500],
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraXSmall,
    color: theme.palette.neutral[900],
  };
});

const StyledAccordionDetails = styled(AccordionDetails)(() => {
  return {
    padding: 0,
  };
});
