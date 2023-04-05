import {
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, getProductsAdmin, getUsers } from "../../../Redux/actions";
import LineChart from "./Charts/Chart";
const Dashboard = () => {
  const products = useSelector((state) => state.productsAdmin);
  const users = useSelector((state) => state.users);
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAdmin());
    dispatch(getUsers());
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div className="w-full flex flex-col bg-slate-200 dark:bg-zinc-800" >
      <Typography.Title className="dark:text-slate-300" level={5}>Dashbaord</Typography.Title>
      <div className="flex w-full justify-center">
        <Space direction="horizontal" className="bg-slate-200 dark:bg-zinc-800">
          <DashboardCard class="bg-black"
            icon={
              <ShoppingCartOutlined className="dark:fill-white"
                style={{
                  color: "white",
                  backgroundColor: "#5b21b6",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Orders"
            value={orders.length}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "white",
                  backgroundColor: "#5b21b6",
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
                  color: "white",
                  backgroundColor: "#5b21b6",
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
      <div
        className="flex w-full max-w-screen-md max-h-screen-md mx-auto justify-center"
        style={{ maxHeight: "400px" }}
      >
        <LineChart />
      </div>
    </div>
  );
};
const DashboardCard = ({ title, value, icon }) => {
  return (
    <div>
      <Card className="dark:bg-zinc-700 border-transparent" style={{ marginLeft: "20px"}}>
        {icon}
        <Space direction="horizontal" className="text-slate-700 dark:text-slate-200">
          <Statistic  title={title} value={value} />
        </Space>
      </Card>
    </div>
  );
};
export default Dashboard;
