import {
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import { useSelector } from "react-redux";

const TotalProducts = () => {
  const products = useSelector((state) => state.products);
  const totalProducts = products.length;

  return totalProducts;
};

const TotalUsers = () => {
  const users = useSelector((state) => state.users);
  const totalUsers = users.length;
  return totalUsers;
};

const Dashboard = () => {
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
          value={TotalUsers()}
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
          value={TotalProducts()}
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
