import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist({
//   key: "app-setting", // this key is using to store data in local storage
//   storage: localStorage, // configure which storage will be used to store the data
//   converter: JSON, // configure how values will be serialized/deserialized in storage
// });

export interface IAppSettingIntialState {
  loginModal: boolean;
}

export const appSettingIntialState = {
  loginModal: false,
};

export const appSettingStore = atom({
  key: "app-setting",
  default: appSettingIntialState,
  //   effects_UNSTABLE: [persistAtom],
});
