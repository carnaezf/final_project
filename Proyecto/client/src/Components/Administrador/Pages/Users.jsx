import { Space, Typography, Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, userban, doModerator } from "../../../Redux/actions";
import Swal from "sweetalert2";

const Users = () => {
  const dispatch = useDispatch();
  const usersAll = useSelector((state) => state.users);
  const [active, setActive] = useState(false);
  const [moderator, setModerator] = useState(false);

  const confirmBan = (value) => {
    Swal.fire({
      title: "Are you sure you want to do this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        handlerban(value);
      }
    });
  };

  const confirmModerator = (value) => {
    Swal.fire({
      title: "Are you sure you want to do this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        handlerModerator(value);
      }
    });
  };

  const handlerban = (value) => {
    dispatch(userban(value));
    setActive(!active);
  };
  const handlerModerator = (value) => {
    dispatch(doModerator(value));
    setModerator(!moderator);
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, active, moderator]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status",
      dataIndex: "isBanned",
      key: "isBanned",
      render: (text, record) => (
        <Space className={record.isBanned ? "text-red-500" : "text-green-500"}>
          {record.isBanned ? "No Active" : "Active"}
        </Space>
      ),
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Role",
      dataIndex: "isAdmin",
      key: "admin",
      render: (value, record) => (
        <>{record.isModerator ? "Moderator" : value ? "Admin" : "User"}</>
      ),
    },
    {
      title: "Action",
      key: "operation",
      render: (text, record) => (
        <Space>
          <Button
            className={record.isBanned ? "bg-green-500" : "bg-red-500"}
            onClick={() => confirmBan(record.userId)}
            disabled={record.isAdmin ? true : false}
          >
            {record.isBanned ? "Active" : "Ban"}
          </Button>
        </Space>
      ),
    },
    {
      title: "Do Moderator",
      key: "operation",
      render: (text, record) => (
        <Space>
          <Button
            className={record.isModerator ? "bg-red-500" : "bg-green-500"}
            onClick={() => confirmModerator(record.userId)}
            disabled={record.isAdmin ? true : false}
          >
            {record.isModerator ? "No Moderator" : "Moderator"}
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Space direction="vertical" className="w-full">
      <Typography.Title level={5}>Users</Typography.Title>
      <Table columns={columns} dataSource={usersAll} />
    </Space>
  );
};
export default Users;
