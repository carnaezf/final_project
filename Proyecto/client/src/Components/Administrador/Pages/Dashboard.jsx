import {
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getUsers } from "../../../Redux/actions";
const Dashboard = () => {
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <Typography.Title level={5}>Dashbaord</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Orders"
          value={1234}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Users"
          value={users.length}
        />
        <DashboardCard
          icon={
            <ShopOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Products"
          value={products.length}
        />
      </Space>
    </div>
  );
};
const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card style={{ marginLeft: "20px" }}>
      {icon}
      <Space direction="horizontal">
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};
export default Dashboard;
