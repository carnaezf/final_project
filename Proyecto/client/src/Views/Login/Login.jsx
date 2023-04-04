import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../Contexts/authContext";
import { useHistory } from "react-router-dom";
import { loginUsers, logoutUsers } from "../../Redux/actions";
import Swal from "sweetalert2";
import { useEffect } from "react";

import { Link } from "react-router-dom";


const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();
  const userlogin = useSelector((state) => state.user);
  // const [loggedIn, setLoggedIn] = useState(false);
  const nombre = useSelector(state => state.user)
  console.log(nombre)
  const { user } = useAuth() 
  console.log(user,"aqui")
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
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-slate-50">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <div class="text-3xl font-extrabold ...">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Welcome back to Haal
            </span>
          </div>
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
          console.log(values, "ver aca")
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
            }}>
            
            {(props) => (
              <form onSubmit={props.handleSubmit} className="mt-4">
              
                <div className="mb-4">
                  {/* {handlerAlert(userlogin)} */}
                  <label htmlFor="name" className="text-lg text-current">Email</label>
                  <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="  Wil@email.com"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur} //validar fuera del input
                  />
                  {props.touched.email && props.errors.email && (<span className=" bg-red text-red-700">{props.errors.email}</span>)}
                </div>

                <div className="mb-4">
                  <label htmlFor="name" className="text-lg text-current">Password</label>
                  <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                    type="text"
                    id="password"
                    name="password"
                    placeholder=" **********"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur} //validar fuera del input
                  />
                  {props.touched.password && props.errors.password && (<span className=" bg-red text-red-700">{props.errors.password}</span>)}
                </div>

                <div className="mt-8 flex flex-col gap-y-4">
                  <button type="submit" className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Sing in</button>
                  <button onClick={handleGoogle} className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex rounded-xl py-3 border-2 border-gray-100 items-center justify-center gap-2 ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                      <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                      <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                      <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                    </svg>
                    Sing in with Google
                  </button>
                  <Link to="/home" className="flex mt-8 justify-between text-violet-500 text-lg font-medium no-underline hover:underline">return home</Link>
                </div>
            
            
              </form>
            )}
          </Formik>

        </div>

      </div>

      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-slate-50 ">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce " />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>


    </div>
  );
};

export default Login;
