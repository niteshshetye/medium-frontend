export enum AuthType {
  signup = "signup",
  signin = "signin",
}

export const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500 focus:z-10 sm:text-sm";

export const signinHeaders = {
  heading: "Login to your account",
  paragraph: "Don't have an account yet? ",
  buttonText: "Signup",
};

export const signupHeaders = {
  heading: "Create your account",
  paragraph: "Already have an account ",
  buttonText: "Signin",
};
