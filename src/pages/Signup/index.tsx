import { AuthForm } from "../../components/AuthForm";
import { AuthHeader } from "../../components/AuthHeader";
import { AuthType } from "../../configs/login";

export const Signup = () => {
  return (
    <>
      <AuthHeader
        linkName="Signin"
        heading="Create your account"
        paragraph="Don't have an account yet? "
        linkUrl="/signin"
      />
      <AuthForm type={AuthType.signup} />
    </>
  );
};
