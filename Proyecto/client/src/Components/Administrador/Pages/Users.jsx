import { Space, Typography, Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, userban } from "../../../Redux/actions";
const Users = () => {
  const dispatch = useDispatch();
  const usersAll = useSelector((state) => state.users);
  const [active, setActive] = useState(false);
  const handlerban = (value) => {
    dispatch(userban(value));
    setActive(!active);
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, active]);
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
      title: "Admin",
      dataIndex: "isAdmin",
      key: "admin",
      render: (value) => (value ? "Admin" : "User"),
    },
    {
      title: "Action",
      key: "operation",
      render: (text, record) => (
        <Space>
          <Button
            className={record.isBanned ? "bg-green-500" : "bg-red-500"}
            onClick={() => handlerban(record.userId)}
          >
            {record.isBanned ? "Active" : "Ban"}
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
