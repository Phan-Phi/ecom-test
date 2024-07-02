import { Typography, TypographyProps, styled } from "@mui/material";

interface AccordionItemProps extends TypographyProps {
  name: string;
}

export default function AccordionItem(props: AccordionItemProps) {
  const { name, onClick, ...restProps } = props;

  return (
    <StyledAccordionItem onClick={onClick} {...restProps}>
      {name}
    </StyledAccordionItem>
  );
}

const StyledAccordionItem = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraXSmall,
    color: theme.palette.neutral[500],
    fontWeight: 400,
    cursor: "pointer",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
});
