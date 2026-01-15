import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormSignUp({ onSubmit }) {
  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("Nama wajib diisi"),
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email wajib diisi"),
    password: Yup.string().required("Password wajib diisi"),
  });

  return (
    <>
      <div className="mt-16">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            terms: false,
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await onSubmit(values);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* NAME */}
              <div className="mb-6">
                <Field name="name">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="name"
                      label="Full Name"
                      placeholder="Enter your full name"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-6">
                <Field name="email">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="email"
                      type="email"
                      label="Email Address"
                      placeholder="Enter your email"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-6">
                <Field name="password">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="Create a password"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* BUTTON */}
              <Button type="submit">
                {isSubmitting ? "Loading..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/login" className="text-primary text-sm font-bold">
          Sign In Here
        </Link>
      </div>
    </>
  );
}

export default FormSignUp;
