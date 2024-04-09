import { useFormik } from "formik";
import { AuthType, fields } from "../configs/login";
import { AuthAction } from "./AuthAction";
import { AuthFormExtra } from "./AuthFormExtra";
import AuthInput from "./AuthInput";

interface AuthFormProps {
  type: AuthType;
}

const signin = {
  email: "",
  password: "",
};
const signup = {
  fullname: "",
  email: "",
  password: "",
  "confirm-password": "",
};

export const AuthForm = ({ type }: AuthFormProps) => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: type === AuthType.signin ? signin : signup,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="mt-8 space-y-6">
      <div>
        {fields[type].map((field) => {
          const value = values[field.name as "email" | "password"];
          return (
            <AuthInput
              handleChange={handleChange}
              key={field.id}
              value={value}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
              customClass={""}
            />
          );
        })}
      </div>
      <AuthFormExtra />
      <AuthAction
        handleSubmit={handleSubmit}
        type="submit"
        text="Login"
        loading={false}
        isDisabled={false}
      />
    </form>
  );
};
