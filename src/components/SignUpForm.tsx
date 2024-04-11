import {
  emptyErrorMessage,
  maxLengthErrorMessage,
  minLengthErrorMessage,
  notValidErrorMessage,
  SignupBody,
} from "@niteshshetye/medium-common";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { AuthFormExtra } from "./AuthFormExtra";
import { fixedInputClass } from "../configs/login";
import { AuthAction } from "./AuthAction";
import * as Yup from "yup";
import { signup } from "../services/auth";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email(notValidErrorMessage("Email"))
    .max(150, maxLengthErrorMessage("Email", 150))
    .required(emptyErrorMessage("Email")),
  password: Yup.string()
    .min(6, minLengthErrorMessage("Password", 6))
    .max(20, maxLengthErrorMessage("Password", 20))
    .required(emptyErrorMessage("Password")),
  name: Yup.string()
    .min(2, minLengthErrorMessage("Name", 2))
    .max(100, maxLengthErrorMessage("Name", 100))
    .required(emptyErrorMessage("Name")),
});

export const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (
        values: SignupBody,
        action: FormikHelpers<SignupBody>
      ) => {
        function successCb() {
          action.setSubmitting(false);
        }

        await signup(values, successCb);
      }}
    >
      <Form>
        <div className="my-3 h-14">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Field
            className={fixedInputClass}
            id="name"
            type="text"
            name="name"
            placeholder="Enter full name"
          />
          <ErrorMessage
            component="span"
            className="text-xs text-red-500 flex items-center mt-1"
            name="name"
          />
        </div>

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
            component="span"
            className="text-xs text-red-500 flex items-center mt-1"
            name="email"
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
          text={"Sign Up"}
          handleSubmit={() => {}}
          loading={false}
          isDisabled={false}
        />
      </Form>
    </Formik>
  );
};
