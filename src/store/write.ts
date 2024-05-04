import { atom } from "recoil";

export interface IWriteInitialState {
  title: string;
  content: string;
  loading: boolean;
}

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: IWriteInitialState) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const writeInitialState = {
  title: "",
  content: "",
  loading: false,
};

export const writeState = atom({
  key: "write",
  default: writeInitialState,
  effects_UNSTABLE: [localStorageEffect("write")],
});
