import { Skeleton as LoadingSkeleton } from "@mui/material";

interface Props {
  width: number | string;
  height: number;
}

export default function Skeleton({ width, height }: Props) {
  return <LoadingSkeleton width={width} height={height} />;
}
