import { Box, Modal } from "@mui/material";
import ProductModalContent from "containers/Product/components/ProductModalContent";

interface Props {
  open: boolean;
  handleClose: () => void;
  dataModal: any;
}

export default function ProductModal({ open, handleClose, dataModal }: Props) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      disableAutoFocus={true}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <ProductModalContent handleClose={handleClose} data={dataModal} />
      </Box>
    </Modal>
  );
}
