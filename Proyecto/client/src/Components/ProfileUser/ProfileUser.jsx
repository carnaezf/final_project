import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Input, Button, Space, Typography, Table } from "antd";
import { getUserbyId } from "../../Redux/actions";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
import axios from "axios";

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
          axios.put(`http://localhost:3001/user/update`, edit);
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
          axios.put(`http://localhost:3001/user/update`, edit);
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
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Total Mount",
      dataIndex: "totalMount",
      key: "totalMount",
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
      title: "Products",
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
  ];

  useEffect(() => {
    dispatch(getUserbyId(user.id));
  }, [dispatch, reload]);

  return (
    <div>
      <NavBar />
      <div>
        {userId && (
          <div>
            <img src={userId.profilePicture} alt={userId.name} />
            <h1>NAME : {userId.name}</h1>
            <h1>LASTNAME : {userId.lastName}</h1>
            <h1>EMAIL : {userId.email ? userId.email : "-"}</h1>
            <h1>COUNTRY : {userId.country ? userId.country : "-"}</h1>
            <h1>PHONE : {userId.phone ? userId.phone : "-"}</h1>
            <h1>DNI : {userId.dni ? userId.dni : "-"}</h1>
            <Space direction="vertical" className="w-full">
              <Typography.Title level={5}>ORDERS</Typography.Title>
              <Table columns={columns} dataSource={userId.Orders} />
            </Space>
            <button
              className="button-home"
              onClick={() => {
                setModalEdit(!modalEdit);
              }}
            >
              Edit your profile
            </button>
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

            <button
              className="button-home"
              onClick={() => {
                setModalPassword(!modalPassword);
              }}
            >
              Change your password
            </button>

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
    </div>
  );
}

export default Profile;
