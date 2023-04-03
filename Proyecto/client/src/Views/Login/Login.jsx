import { Formik } from "formik";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../Contexts/authContext";
import { useHistory } from "react-router-dom";
import { loginUsers, logoutUsers } from "../../Redux/actions";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();
  const userlogin = useSelector((state) => state.user);
  // const [loggedIn, setLoggedIn] = useState(false);

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      history.push("/shoppingBag");
    } catch (error) {
      alert("Login invalido");
    }
  };

  useEffect(() => {
    if (userlogin && userlogin.msg === "User logged") {
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "You are logged in!",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/shoppingBag");
        }
      });
    }
    if (userlogin && userlogin.error === "password incorrect") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password invalid!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(logoutUsers());
        }
      });
    }
    if (userlogin && userlogin.error === "user email not found") {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: "Email invalid!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(logoutUsers());
        }
      });
    }
    if (userlogin && userlogin.error === "user banned") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User banned!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(logoutUsers());
        }
      });
    }
  }, [userlogin]);

  return (
    <div className="w-full max-w-xs m-auto">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          let error = {};

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
          return error;
        }}
        onSubmit={async (values, props) => {
          try {
            dispatch(loginUsers(values));
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }

          props.resetForm();
        }}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              {/* {handlerAlert(userlogin)} */}
              <label htmlFor="name">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                name="email"
                placeholder="  Wil@email.com"
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
                type="text"
                id="password"
                name="password"
                placeholder=" **********"
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
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  px rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        )}
      </Formik>
      <button
        onClick={handleGoogle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Google
      </button>
    </div>
  );
};

export default Login;
