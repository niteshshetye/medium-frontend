import { IAuthInitialState } from "./../store/auth";
import { SigninBody, SignupBody } from "@niteshshetye/medium-common";
import axios from "axios";
import { AuthUrl, BaseURl } from "../configs/api";
import { SnackBarType } from "../store/toaster";
import { AuthType } from "../configs/auth";

const authClient = axios.create({
  baseURL: BaseURl,
  headers: {
    "content-type": "application/json",
  },
});

export async function signin(
  payload: SigninBody,
  successCb: (payload: IAuthInitialState) => void,
  errorCb: (message: string, type: SnackBarType) => void
) {
  try {
    const response = await authClient.post(AuthUrl.signin, payload);
    successCb({ ...response.data, isLoggedIn: true, type: AuthType.signin });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response);
        errorCb(
          error.request?.data?.message || "Somthing went wrong",
          SnackBarType.error
        );
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
        errorCb(
          error.request?.data?.message || "Somthing went wrong",
          SnackBarType.error
        );
      }
    }

    if (error instanceof Error) {
      console.error("unexpected error: ", error.message);
      errorCb(error.message || "Somthing went wrong", SnackBarType.error);
    }
  }
}

export async function signup(
  payload: SignupBody,
  successCb: (payload: IAuthInitialState) => void,
  errorCb: (message: string, type: SnackBarType) => void
) {
  try {
    const response = await authClient.post(AuthUrl.signup, payload);

    successCb({ ...response.data, isLoggedIn: true, type: AuthType.signin });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response);
        errorCb(
          error.response?.data?.message || "Somthing went wrong",
          SnackBarType.error
        );
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
        errorCb(
          error.request?.data?.message || "Somthing went wrong",
          SnackBarType.error
        );
      }
    }

    if (error instanceof Error) {
      console.error("unexpected error: ", error.message);
      errorCb(error.message || "Somthing went wrong", SnackBarType.error);
    }
  }
}
