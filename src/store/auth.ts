import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "auth", // this key is using to store data in local storage
  storage: localStorage, // configure which storage will be used to store the data
  converter: JSON, // configure how values will be serialized/deserialized in storage
});

const authInitialState = {
  access_token: "",
  id: "",
  email: "",
  name: "",
};

export const authState = atom({
  key: "auth",
  default: authInitialState,
  effects_UNSTABLE: [persistAtom],
});
