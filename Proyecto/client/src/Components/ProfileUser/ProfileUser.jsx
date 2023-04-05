import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Input, Button, Space, Typography, Table } from "antd";
import { getUserbyId } from "../../Redux/actions";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "../Footer/Footer";

function Profile() {
  let user = useSelector((state) => state.user);
  const userId = useSelector((state) => state.userId);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [reload, setReload] = useState(false);

  const [edit, setEdit] = useState({
    id: user.id,
    name: "",
    lastName: "",
    password: "",
    profilePicture: "",
  });

  const dispatch = useDispatch();

  const handleUpdate = function () {
    Swal.fire({
      title: "Are you sure you want to do this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes!",
      cancelButtonText: "Cancel",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.put(`/user/update`, edit);
          Swal.fire("Change successfully", "", "success").then(() => {
            setModalPassword(!modalPassword);
          });
        }
      })
      .then(() => {
        setReload(!reload);
      });
  };

  const userUpdate = function () {
    Swal.fire({
      title: "Are you sure you want to do this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes!",
      cancelButtonText: "Cancel",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.put(`/user/update`, edit);
          Swal.fire({
            title: `Change successfully`,
            icon: "success",
            button: "Aceptar",
          }).then(() => {
            setModalEdit(!modalEdit);
          });
        }
      })
      .then(() => {
        setReload(!reload);
      });
  };

  const dataEdit = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "idOrder",
      key: "idOrder",
    },
    {
      title: "Products",
      dataIndex: "products",
      key: "products",
      render: (products) => (
        <div>
          {products.map((product) => {
            return (
              <div>
                <img
                  src={product.picture_url}
                  alt={product.title}
                  width="50"
                  height="50"
                />
              </div>
            );
          })}
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "products",
      key: "products",
      render: (products) => (
        <div>
          {products.map((product) => {
            return (
              <div>
                <Space direction="vertical" className="w-full">
                  <h1>{product.title}</h1>
                </Space>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "products",
      key: "products",
      render: (products) => (
        <div>
          {products.map((product) => {
            return (
              <div>
                <Space direction="vertical" className="w-full">
                  <h1>{product.unit_price}</h1>
                </Space>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "products",
      key: "products",
      render: (products) => (
        <div>
          {products.map((product) => {
            return (
              <div>
                <Space direction="vertical" className="w-full">
                  <h1>{product.quantity}</h1>
                </Space>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Total Mount",
      dataIndex: "totalMount",
      key: "totalMount",
    },
  ];

  useEffect(() => {
    dispatch(getUserbyId(user.id));
  }, [dispatch, reload]);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTHemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  /****************************Modo nocturno y claro */
  return (
    <div className="flex flex-col bg-slate-200 dark:bg-zinc-800 font-roboto dark:text-slate-200">
      <div class="fixed top-0 z-50 w-full">
        {/* *****Nav***** */}
        <NavBar />
        <button className="absolute bottom-[1.8rem] left-[8rem] w-36 ml-4 mb-2">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTHemeSwitch} />
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
      <div className="flex mx-auto">
        {userId && (
          <div className="flex flex-col">
            <div className="mx-auto">
              <img
                className="drop-shadow-md ml-[0rem] mt-[10rem] max-w-[14rem]"
                src={userId.profilePicture}
                alt={userId.name}
              />
              <div className="flex flex-col  mt-[-13.5rem] ml-[14rem] text-left">
                <h1 className="ml-4 flex font-bold text-purple-600">
                  NAME :{" "}
                  <p className="font-light text-slate-900 dark:text-slate-300">
                    {userId.name}
                  </p>
                </h1>
                <h1 className="ml-4 flex font-bold text-purple-600">
                  LASTNAME :{" "}
                  <p className="font-light  text-slate-900 dark:text-slate-300">
                    {userId.lastName}
                  </p>
                </h1>
                <h1 className="ml-4 flex font-bold text-purple-600">
                  EMAIL :{" "}
                  <p className="font-light text-slate-900 dark:text-slate-300">
                    {userId.email ? userId.email : "-"}
                  </p>
                </h1>
                <h1 className="ml-4 flex font-bold text-purple-600">
                  COUNTRY :{" "}
                  <p className="font-light text-slate-900 dark:text-slate-300">
                    {userId.country ? userId.country : "-"}
                  </p>
                </h1>
                <h1 className="ml-4 flex font-bold text-purple-600">
                  PHONE :{" "}
                  <p className="font-light text-slate-900 dark:text-slate-300">
                    {userId.phone ? userId.phone : "-"}
                  </p>
                </h1>
                <h1 className="ml-4 flex font-bold text-purple-600">
                  DNI :{" "}
                  <p className="font-light text-slate-900 dark:text-slate-300">
                    {userId.dni ? userId.dni : "-"}
                  </p>
                </h1>
                <button
                  className="ml-4 transition  duration-150  font-roboto font-thin dark:text-slate-300 hover:bg-slate-700
                      hover:text-slate-200 dark:bg-transparent dark:hover:bg-white  dark:hover:text-black py-2 px- border border-slate-700 dark:border-slate-200 rounded hover:border-transparent rounded hover:font-bold text-sm"
                  onClick={() => {
                    setModalEdit(!modalEdit);
                  }}
                >
                  Edit your profile
                </button>
                <button
                  className="ml-4 transition  duration-150  font-roboto font-thin dark:text-slate-300
                      hover:text-slate-400   dark:hover:text-black py-2 px-    rounded dark:hover:text-slate-500 text-sm"
                  onClick={() => {
                    setModalPassword(!modalPassword);
                  }}
                >
                  Change your password
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Space direction="vertical" className="w-full ">
              <Typography.Title className="dark:text-slate-300" level={5}>
                ORDERS
              </Typography.Title>
              <Table columns={columns} dataSource={userId.Orders} />
            </Space>
            <Modal
              title="Editar usuario"
              visible={modalEdit}
              onCancel={() => setModalEdit(!modalEdit)}
              footer={[
                <Button key="cancel" onClick={() => setModalEdit(!modalEdit)}>
                  Close
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  onClick={() => userUpdate()}
                >
                  Save
                </Button>,
              ]}
            >
              <Form>
                <Form.Item label="Name">
                  <Input
                    placeholder="Type your name"
                    name="name"
                    onChange={dataEdit}
                  />
                </Form.Item>
                <Form.Item label="LasName">
                  <Input
                    placeholder="Type your lasname"
                    name="lastName"
                    onChange={dataEdit}
                  />
                </Form.Item>
                <Form.Item label="Profile Picture">
                  <Input
                    placeholder="Type your profile picture"
                    name="profilePicture"
                    onChange={dataEdit}
                  />
                </Form.Item>
              </Form>
            </Modal>

            <Modal
              title="Cambiar contraseÃ±a"
              visible={modalPassword}
              onCancel={() => setModalPassword(!modalPassword)}
              footer={[
                <Button
                  key="back"
                  onClick={() => setModalPassword(!modalPassword)}
                >
                  Close
                </Button>,
                <Button key="submit" type="primary" onClick={handleUpdate}>
                  Save
                </Button>,
              ]}
            >
              <Form>
                <Form.Item label="Password">
                  <Input.Password
                    placeholder="Enter your password"
                    name="password"
                    onChange={dataEdit}
                  />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        )}
      </div>
      <Space>
        <div>
          <Footer />
        </div>
      </Space>
    </div>
  );
}

export default Profile;
