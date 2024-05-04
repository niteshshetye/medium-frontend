import { atom, selector } from "recoil";
// import { recoilPersist } from "recoil-persist";
import { AuthType } from "../configs/auth";

// const { persistAtom } = recoilPersist({
//   key: "auth", // this key is using to store data in local storage
//   storage: localStorage, // configure which storage will be used to store the data
//   converter: JSON, // configure how values will be serialized/deserialized in storage
// });

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: IAuthInitialState) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export interface IAuthInitialState {
  access_token: string;
  id: string;
  email: string;
  name: string;
  isLoggedIn: boolean;
  type: AuthType;
}

export const authInitialState = {
  access_token: "",
  id: "",
  email: "",
  name: "",
  isLoggedIn: false,
  type: AuthType.signin,
};

export const authState = atom({
  key: "auth",
  default: authInitialState,
  effects_UNSTABLE: [localStorageEffect("auth")],
});

export const userState = selector({
  key: "userState",
  get: ({ get }) => {
    const details = get<IAuthInitialState>(authState);

    return {
      email: details.email,
      name: details.name,
    };
  },
});

export const tokenState = selector({
  key: "tokenState",
  get: ({ get }) => {
    const state = get<IAuthInitialState>(authState);

    return state.access_token;
  },
});

export const loggedInState = selector({
  key: "loggedInState",
  get: ({ get }) => {
    const state = get<IAuthInitialState>(authState);

    return state.isLoggedIn;
  },
});

export const authModalTypeState = selector({
  key: "authModalState",
  get: ({ get }) => {
    const state = get<IAuthInitialState>(authState);

    return state.type;
  },
});
