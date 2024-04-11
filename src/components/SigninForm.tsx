import {
  emptyErrorMessage,
  maxLengthErrorMessage,
  minLengthErrorMessage,
  notValidErrorMessage,
  SigninBody,
} from "@niteshshetye/medium-common";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import * as Yup from "yup";
import { AuthFormExtra } from "./AuthFormExtra";
import { fixedInputClass } from "../configs/login";
import { AuthAction } from "./AuthAction";
import { signin } from "../services/auth";
import { authState } from "../store/auth";
import { useSetRecoilState } from "recoil";
import { SnackBarType, toasterState } from "../store/toaster";

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email(notValidErrorMessage("Email"))
    .max(150, maxLengthErrorMessage("Email", 150))
    .required(emptyErrorMessage("Email")),
  password: Yup.string()
    .min(6, minLengthErrorMessage("Password", 6))
    .max(20, maxLengthErrorMessage("Password", 20))
    .required(emptyErrorMessage("Password")),
});

export const SigninForm = () => {
  const setAuthState = useSetRecoilState(authState);

  const setToastState = useSetRecoilState(toasterState);

  function errorCb(message: string, type: SnackBarType) {
    setToastState({ message, type });
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      isValid
      validationSchema={SigninSchema}
      onSubmit={async (
        values: SigninBody,
        action: FormikHelpers<SigninBody>
      ) => {
        function successCb(payload: SigninBody) {
          setAuthState(payload);
          setToastState({
            message: "Logged in succesfully",
            type: SnackBarType.success,
          });
          action.setSubmitting(false);
        }

        await signin(values, successCb, errorCb);
      }}
    >
      {({ handleSubmit, isSubmitting }: FormikProps<SigninBody>) => (
        <Form>
          <div className="my-3 h-14">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Field
              className={fixedInputClass}
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="text-xs text-red-500 flex items-center mt-1"
            />
          </div>

          <div className="my-3 h-14">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <Field
              className={fixedInputClass}
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              component="span"
              className="text-xs text-red-500 flex items-center mt-1"
              name="password"
            />
          </div>

          <AuthFormExtra />

          <AuthAction
            type={"submit"}
            text={"Sign In"}
            handleSubmit={handleSubmit}
            loading={isSubmitting}
            isDisabled={false}
          />
        </Form>
      )}
    </Formik>
  );
};
