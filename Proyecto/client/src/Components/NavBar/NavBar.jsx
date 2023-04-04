import { ShoppingBagContext } from "../../Contexts/ShoppingBagContext";

import React, { useState, useContext, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
import logo from "./Haal.png";

import { useAuth } from "../../Contexts/authContext";
import { async } from "@firebase/util";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginGoogle, logoutUsers } from "../../Redux/actions";

export default function NavBar(props) {
  const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext);
  const userlogin = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const quantity = shoppingBag.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const { logout } = useAuth();
  const history = useHistory();

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
    <div className="navbar  h-full w-full bg-neutral-400 dark:bg-zinc-700 bg-clip-padding dark:bg-clip-padding backdrop-filter dark:backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg bg-opacity-10 dark:bg-opacity-10">
      <div className="flex-1 ">
        <Link to={"/home"}>
          <img
            className="ml-[px] w-[11rem] text-white "
            src={logo}
            alt="Haal"
          ></img>
        </Link>
        <div className="dropdown mx-auto">
          <div className="flex mt-4 content-center ">
            <ul className="content-center mb-2">
              <Link to={"/accessories"}>
                <li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400  hover:animate-pulse">
                  Acessories
                </li>
              </Link>
              <Link to={"/shoes"}>
                <li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400  hover:animate-pulse">
                  Shoes
                </li>
              </Link>
              <Link to={"/clothing"}>
                <li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400  hover:animate-pulse">
                  Clothing
                </li>
              </Link>
              <Link to="/allproducts">
                <li className="btn font-roboto font-normal normal-case text-xl border-transparent hover:border-transparent text-current hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-400 hover:animate-pulse">
                  All Products
                </li>
              </Link>
              
            </ul>
          </div>
        </div>
      </div>

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
            <h1 className="text-lg font-roboto font-bold mt-4 mx-2 text-current dark:text-slate-100">
              Hi {user.displayName ? user.displayName : user.email}!
            </h1>
          ) : (
            <h1 className="text-lg font-roboto font-bold mt-4 mx-2 text-current dark:text-slate-100">
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
                {/* <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                  <Link to="/login"> Login </Link>
                </li>
                <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                  <Link to="/admin"> Admin </Link>
                </li>
                <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                  <Link to="/register"> Register </Link>
                </li>
                <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300">
                  <a onClick={handlerLogOut}> Logout </a>
                </li> */}
                {/* <li className="justify-between bg-purple-900 hover:bg-purple-700 text-slate-300"> <Link to='/createProduct'> Shopping Cart</Link></li>
        <li className="justify-between"> <Link to='/login-form'> Log </Link></li> */}
              </ul>
            </div>
          </label>
        </div>
      </div>
      {/* /****************************************** */}
    </div>
    // </div>
  );
}
