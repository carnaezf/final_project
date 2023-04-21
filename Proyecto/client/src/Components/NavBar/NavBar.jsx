import { ShoppingBagContext } from "../../Contexts/ShoppingBagContext";

import React, { useState, useContext, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { AiFillShopping, AiOutlineMenu} from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
import logo from "./Haal.png";

import { useAuth } from "../../Contexts/authContext";
import { async } from "@firebase/util";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginGoogle, logoutUsers } from "../../Redux/actions";
import { themeContext} from "../../Contexts/themeContext"

export default function NavBar(props) {
  const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext);
  const userlogin = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const quantity = shoppingBag.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const { logout } = useAuth();
  const history = useHistory();

  const t = useContext(themeContext)
  
  const handlerLogOut = async () => {
    await logout();
    dispatch(logoutUsers());
    history.push("/home");
    // history.push("/home");
  };

  const { user } = useAuth();
  useEffect(() => {
    dispatch(loginGoogle(user));
  }, [user]);

  return (
    <div className="navbar  h-full w-full bg-neutral-400 dark:bg-zinc-700 bg-clip-padding dark:bg-clip-padding backdrop-filter dark:backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg bg-opacity-10 dark:bg-opacity-10 text-roboto">
      <div className="flex-1 ">
        {/* *************************LOGO*********************** */}
        <Link to={"/home"}> 
          <img
            className="ml-[px] w-[11rem] text-white "
            src={logo}
            alt="Haal"
          ></img>
        </Link>
                {/* *************************Categorias*********************** */}
        <div className="hidden md:dropdown mx-auto">
          <nav className="flex mt-4 content-center ">
            <ul className="content-center mb-2">
              <Link to={"/accessories"}>
                <li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400 hover:animate-pulse">
                  Acessories
                </li>
              </Link>
              <Link to={"/shoes"}>
                <li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400 hover:animate-pulse">
                  Shoes
                </li>
              </Link>
              <Link to={"/clothing"}>
                <li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400 hover:animate-pulse">
                  Clothing
                </li>
              </Link>
              <Link to="/allproducts">
                <li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400 hover:animate-pulse">
                  All Products
                </li>
              </Link>
              
            </ul>
          </nav>
        </div>
                {/* *************************Mobil Categorias*********************** */}
        <div className="dropdown   md:hidden ">
          <AiOutlineMenu tabIndex={0}  className="transition text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-600 justify-center w-full mt-[2px] text-xl" />
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52  normal-case md:hidden text-left	">
          <Link to={"/accessories"}>
                <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300 py-2 px-4 md:hidden">
                  Acessories
                </li>
              </Link>
              <Link to={"/shoes"}>
                <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300 py-2 px-4 ">
                  Shoes
                </li>
              </Link>
              <Link to={"/clothing"}>
                <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300 py-2 px-4 ">
                  Clothing
                </li>
              </Link>
              <Link to="/allproducts">
                <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300 py-2 px-4 " >
                  All Products
                </li>
              </Link>
          </ul>
          </div>
      </div>
        {/* *************************Dropdown*********************** */}
      <div className="flex-none gap-2">
        {/* <div className="form-control">
          <SearchBar className='flex justify-end' pagin={props.pagin}/>
        </div> */}

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <nav>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle dark:hover:border-purple-200"
              >
                <div className="indicator">
                  <Link
                    to="/shoppingBag"
                    className="w-10 rounded-full border-trasparent "
                  >
                    <AiFillShopping className="text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-600 justify-center w-full mt-2 mb-2 text-xl" />
                    <span className="transition rounded-full indicator-item mt-[9px] mr-[8px] border-none bg-purple-700 px-2 py-[4px] text-white text-[7pt] opacity-70 ">
                      {quantity}
                    </span>
                  </Link>
                </div>
              </label>
            </nav>
          </div>

          <div className="dropdown dropdown-end">
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="justify-between">
                {" "}
                <Link to="/login-form"> Login</Link>
              </li>
              <li className="justify-between">
                {" "}
                <Link to="/createProduct"> Check in</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-column dropdown dropdown-end ">
          {user ? (
            <h1 className="hidden md:text-lg font-roboto font-bold mt-4 mx-2 text-current dark:text-slate-100">
              Hi {user.displayName ? user.displayName : user.email}!
            </h1>
          ) : (
            <h1 className="hidden md:text-lg font-roboto font-bold mt-4 mx-2 text-current dark:text-slate-100">
              Hi {userlogin.name}!
            </h1>
          )}
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar mr-14 dark:hover:border-purple-200"
          >
            <div className="w-10 rounded-full border-trasparent ">
              <BsPersonFill className="transition text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-600 justify-center w-full mt-[11px] text-xl" />
            </div>
            <div>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-roboto normal-case"
              >
                {user || (userlogin && userlogin.msg === "User logged") ? (
                  <ul>
                    <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                      <a onClick={handlerLogOut}> Logout </a>
                    </li>
                    <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                      <Link to="/profile"> Profile </Link>
                    </li>
                    {userlogin.user === "admin" && (
                      <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                        <Link to="/admin"> Admin </Link>
                      </li>
                    )}
                    {userlogin.user === "moderator" && (
                      <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                        <Link to="/admin"> Admin </Link>
                      </li>
                    )}
                  </ul>
                ) : (
                  <ul>
                    <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                      <Link to="/login"> Login </Link>
                    </li>
                    <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                      <Link to="/register"> Register </Link>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
          </label>
        </div>
      </div>
      {/* /****************************************** */}
      <div>
      <button className=" md:absolute bottom-[1.8rem] left-[8rem] w-36 ml-4 mb-2">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={() => t()} />
            <svg
              className="swap-on fill-current w-6 h-6 fill-purple-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-6 h-6 fill-slate-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </button>
      </div>
    </div>
    // </div>
  );
}
