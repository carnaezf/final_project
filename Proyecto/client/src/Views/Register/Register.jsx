import { Formik } from "formik";
//import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUsers } from "../../Redux/actions";
import { useAuth } from "../../Contexts/authContext";
import { useHistory } from "react-router-dom";

// import { getAuth, updateProfile } from "firebase/auth";
// const auth = getAuth();
// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });

const Register = () => {
  //const [post, setPost]= useState({});
  const dispatch = useDispatch();

  const { signUp } = useAuth();
  const history = useHistory();

  return (
    <div className="w-full max-w-xs m-auto">
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          country: "",
        }}
        validate={(values) => {
          let error = {};
          if (!values.name) {
            error.name = "enter name";
          } else {
            if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
              error.name = "name without numbers or symbols";
            }
          }
          if (!values.lastName) {
            error.lastName = "enter last name";
          } else {
            if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
              error.lastName = "last name without numbers or symbols";
            }
          }
          if (!values.email) {
            error.email = "enter email";
          } else {
            if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              error.email = "invalid email";
            }
          }
          if (!values.password) {
            error.password = "invalid password";
          }
          if (!values.country) {
            error.country = "enter country";
          } else {
            if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.country)) {
              error.country = "country without numbers or symbols";
            }
          }
          return error;
        }}
        onSubmit={(values, props) => {
          //console.log("Email Enviado");
          console.log(values.password);
          dispatch(postUsers(values));
          signUp(values.email, values.password, values.name);
          props.resetForm();
          history.push("/login");
        }}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            {/* {console.log(props.errors)} */}
            {/* {console.log(props.touched)} */}
            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                name="name"
                placeholder=" ej: Wil"
                value={props.values.name}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {props.touched.name && props.errors.name && (
                <span className=" bg-red text-red-700">
                  {props.errors.name}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name">Last Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="lastName"
                name="lastName"
                placeholder=" ej: Smith"
                value={props.values.lastName}
                onChange={props.handleChange}
                onBlur={props.handleBlur} //validar fuera del input
              />
              {props.touched.lastName && props.errors.lastName && (
                <span className=" bg-red text-red-700">
                  {props.errors.lastName}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                name="email"
                placeholder=" ej: Wil@email.com"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur} //validar fuera del input
              />
              {props.touched.email && props.errors.email && (
                <span className=" bg-red text-red-700">
                  {props.errors.email}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name">Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                name="password"
                placeholder=" ej: Smith"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur} //validar fuera del input
              />
              {props.touched.password && props.errors.password && (
                <span className=" bg-red text-red-700">
                  {props.errors.password}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name">Country</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="country"
                name="country"
                placeholder=" ej: Argentina"
                value={props.values.country}
                onChange={props.handleChange}
                onBlur={props.handleBlur} //validar fuera del input
              />
              {props.touched.country && props.errors.country && (
                <span className=" bg-red text-red-700">
                  {props.errors.country}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
