import { styled, Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material";

type Mode = "light" | "dark";

interface StyledMuiTabsProps extends MuiTabsProps {
  mode?: Mode;
}

interface TabsProps<T> {
  value: T;
  children: React.ReactNode;
  onChange: (event: React.SyntheticEvent, newValue: T) => void;
}

type DefaultTabsProps<T> = StyledMuiTabsProps & TabsProps<T>;

export default function Tabs<T>({
  mode = "light",
  children,
  value,
  onChange,
}: DefaultTabsProps<T>) {
  return (
    <StyledMuiTabs value={value} onChange={onChange} mode={mode}>
      {children}
    </StyledMuiTabs>
  );
}

const StyledMuiTabs = styled(MuiTabs, {
  shouldForwardProp: (propName) => propName !== "mode",
})<StyledMuiTabsProps>(({ theme, mode }) => {
  return {
    "& .MuiTabs-flexContainer": {
      justifyContent: "flex-start",
    },
  };
});
