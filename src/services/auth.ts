import { SigninBody, SignupBody } from "@niteshshetye/medium-common";
import axios from "axios";
import { AuthUrl, BaseURl } from "../configs/api";

const authClient = axios.create({
  baseURL: BaseURl,
  headers: {
    "content-type": "application/json",
  },
});

export async function signin(payload: SigninBody, successCb: () => void) {
  try {
    const response = await authClient.post(AuthUrl.signin, payload);
    console.log(response);
    successCb();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
      }
    }

    if (error instanceof Error) {
      console.error("unexpected error: ", error.message);
    }
  }
}

export async function signup(payload: SignupBody, successCb: () => void) {
  try {
    const response = authClient.post(AuthUrl.signup, payload);
    console.log(response);
    successCb();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
      }
    }

    if (error instanceof Error) {
      console.error("unexpected error: ", error.message);
    }
  }
}
