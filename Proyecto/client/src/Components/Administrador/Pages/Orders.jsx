import { Space, Typography, Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../Redux/actions";

const Orders = () => {
  const dispatch = useDispatch();
  const ordersAll = useSelector((state) => state.orders);
 

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Images",
      dataIndex: "products",
      key: "products",
      render: (products) => (
        <>
          {products.map((product) => (
            <div key={product.id}>
              <img
                src={product.picture_url}
                alt={product.title}
                // className="max-w-xs h-auto"
                width="50"
                height="50"
              />
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Products",
      dataIndex: "products",
      key: "products",
      render: (products) => (
        <>
          {products.map((product) => (
            <div key={product.id}>
              <div>{product.title}</div>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "products",
      key: "products",
      render: (products) => (
        <>
          {products.map((product) => (
            <div key={product.id}>
              <div>{product.quantity}</div>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Unique Price",
      dataIndex: "products",
      key: "products",
      render: (products) => (
        <>
          {products.map((product) => (
            <div key={product.id}>
              <div>{product.unit_price}</div>
            </div>
          ))}
        </>
      ),
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
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <Space direction="vertical" className="w-full">
      <Typography.Title level={5}>Orders</Typography.Title>
      <Table columns={columns} dataSource={ordersAll} />
    </Space>
  );
};

export default Orders;
