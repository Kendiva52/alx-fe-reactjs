import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Submitting:", values);
        alert("User registered successfully (Formik + Yup)!");
        resetForm();
      }}
    >
      {() => (
        <Form className="p-4 border rounded-md w-96">
          <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>

          <div className="mb-2">
            <label>Username</label>
            <Field name="username" type="text" className="border w-full p-2" />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-2">
            <label>Email</label>
            <Field name="email" type="email" className="border w-full p-2" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-2">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              className="border w-full p-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
