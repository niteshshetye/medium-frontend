import { AuthType } from "../configs/auth";
import { SigninForm } from "./SigninForm";
import { SignupForm } from "./SignUpForm";

interface AuthFormProps {
  type: AuthType;
}

export const AuthForm = ({ type }: AuthFormProps) => {
  return (
    <div className="mt-8 space-y-6">
      <div>{type === AuthType.signin ? <SigninForm /> : <SignupForm />}</div>
    </div>
  );
};
