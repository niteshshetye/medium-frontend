import { AuthForm } from "../../components/AuthForm";
import { AuthHeader } from "../../components/AuthHeader";
import { AuthType } from "../../configs/login";

export const Signin = () => {
  return (
    <>
      <AuthHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <AuthForm type={AuthType.signin} />
    </>
  );
};
