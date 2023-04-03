import {
  AppstoreOutlined,
  ImportOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Menu, Space } from "antd";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const history = useHistory();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          history.push(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/admin",
          },
          {
            label: "Users",
            key: "/users",
            icon: <UserOutlined />,
          },
          {
            label: "Products",
            key: "/products",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Create Product",
            key: "/createProduct",
            icon: <ShopOutlined />,
          },
          {
            label: "Logout",
            key: "/logout",
            icon: <ImportOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
