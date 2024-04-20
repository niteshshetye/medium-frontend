import axios from "axios";
import { BaseURl, BlogUrl } from "../configs/api";
import { SnackBarType } from "../store/toaster";

const blogClient = axios.create({
  baseURL: BaseURl,
  headers: {
    "content-type": "application/json",
  },
});

export interface IBlog {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createAt: string;
  modifiedAt: string;
  deleted: boolean;
  authorId: string;
  author: {
    name: string;
  };
}

export async function fetchBlogs(
  token: string,
  successCb: (payload: IBlog[]) => void,
  errorCb: (message: string, type: SnackBarType) => void
) {
  try {
    const response = await blogClient.get(BlogUrl.list, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    successCb(response.data);
    console.log(response);
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
