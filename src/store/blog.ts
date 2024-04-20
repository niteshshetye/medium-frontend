import { atom } from "recoil";
import { IBlog } from "../services/blog";

export enum State {
  idle = 1,
  loading,
  error,
}

export interface IBlogInitialState {
  blogs: IBlog[];
  state: State;
}

export const blogInitialState: IBlogInitialState = {
  blogs: [],
  state: State.idle,
};

export const blogState = atom({
  key: "blogs",
  default: blogInitialState,
});
