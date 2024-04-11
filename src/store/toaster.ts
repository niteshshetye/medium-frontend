import { atom } from "recoil";

export enum SnackBarType {
  idle = 1,
  success,
  warn,
  error,
}

const intialState = {
  message: "",
  type: SnackBarType.idle,
};

export const toasterState = atom({
  key: "toaster",
  default: intialState,
});
