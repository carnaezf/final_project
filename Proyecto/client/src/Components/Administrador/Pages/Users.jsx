import { Space, Typography, Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Redux/actions";

const Users = () => {
  const dispatch = useDispatch();
  const usersAll = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
      title: "DNI",
      dataIndex: "dni",
      key: "dni",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Birth Date",
      dataIndex: "birthDate",
      key: "birthDate",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Action",
      key: "operation",
      render: () => <a>View</a>,
      render: () => <a>Ban</a>,
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
