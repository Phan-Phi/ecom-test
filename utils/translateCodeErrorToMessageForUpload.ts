import { ErrorCode } from "react-dropzone";

const ERROR_MESSAGE = {
  [ErrorCode.FileInvalidType]: "Định dạng file không đúng",
  [ErrorCode.FileTooLarge]: "Dung lượng file quá lớn",
  [ErrorCode.FileTooSmall]: "Dung lượng file quá nhỏ",
  [ErrorCode.TooManyFiles]: "Số lượng file quá lớn",
};

const translateCodeErrorToMessageForUpload = (code: string) => {
  if (Object.keys(ERROR_MESSAGE).includes(code)) {
    return ERROR_MESSAGE[code as ErrorCode];
  }

  return "Unknown Error";
};

export { translateCodeErrorToMessageForUpload };
