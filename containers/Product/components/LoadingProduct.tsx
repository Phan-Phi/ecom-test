import { useMemo } from "react";
import { Grid } from "@mui/material";
import { CardPlaceholder } from "components";

const EmptyArr = [1, 2, 3, 4, 5, 6, 7, 8];

export default function LoadingProduct() {
  const renderPlaceHolder = useMemo(() => {
    return EmptyArr.map((item, index) => {
      return (
        <Grid key={index} item xs={6} md={3}>
          <CardPlaceholder />
        </Grid>
      );
    });
  }, []);

  return (
    <Grid container spacing="12px">
      {renderPlaceHolder}
    </Grid>
  );
}
