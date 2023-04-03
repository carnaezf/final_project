import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../Contexts/authContext";
import { useHistory } from "react-router-dom";
import { loginUsers } from "../../Redux/actions";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();
  const userlogin = useSelector((state) => state.user);
  // const [loggedIn, setLoggedIn] = useState(false);
  console.log(userlogin, "userlogin");

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "Login with Google successful",
      });
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
      });
      history.push("/shoppingBag");
    }
    if (userlogin && userlogin.error === "password incorrect") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password invalid!",
      });
    }
    if (userlogin && userlogin.error === "user email not found") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email invalid!",
      });
    }
    if (userlogin && userlogin.error === "user banned") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User banned!",
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
          //console.log("Email Enviado");
          try {
            dispatch(loginUsers(values));
            // await login(values.email, values.password);
            // if (!userlogin.msg) {
            //   Swal.fire({
            //     title: "Waiting for confirmation...",
            //     didOpen: () => {
            //       Swal.showLoading();
            //     },
            //   });
            // }

            // alert("Login");
            // history.push("/shoppingBag");
          } catch (error) {
            // alert("Login invalido");
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
