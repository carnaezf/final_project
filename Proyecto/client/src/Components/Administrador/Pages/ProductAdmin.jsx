import { Space, Typography, Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAdmin, productban } from "../../../Redux/actions";
import Swal from "sweetalert2";

const ProductAdmin = () => {
  const dispatch = useDispatch();
  const productsAll = useSelector((state) => state.productsAdmin);
  const [active, setActive] = useState(false);

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

  const handlerban = (value) => {
    dispatch(productban(value));
    setActive(!active);
  };
  useEffect(() => {
    dispatch(getProductsAdmin());
  }, [dispatch, active]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Selling Price",
      dataIndex: "sellingPrice",
      key: "sellingPrice",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (availability) =>
        availability?.map((item, index) =>
          Object.entries(item).map(([size, quantity]) => (
            <div key={index}>
              <p>
                {size}: {quantity}
              </p>
            </div>
          ))
        ),
    },
    ,
    {
      title: "Average Rating",
      dataIndex: "average_rating",
      key: "average_rating",
    },
    {
      title: "Status",
      dataIndex: "show",
      key: "show",
      render: (text, record) => (
        <Space className={record.show ? "text-green-500" : "text-red-500"}>
          {record.show ? "Active" : "No Active"}
        </Space>
      ),
    },
    {
      title: "Breadcrumbs",
      dataIndex: "breadcrumbs",
      key: "breadcrumbs",
    },
    {
      title: "Action",
      key: "operation",
      render: (text, record) => (
        <Space>
          <Button
            className={record.show ? "bg-red-500" : "bg-green-500"}
            onClick={() => confirmBan(record.id)}
          >
            {record.show ? "No active" : "Active"}
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Space direction="vertical" className="w-full">
      <Typography.Title level={5}>Users</Typography.Title>
      <Table columns={columns} dataSource={productsAll} />
    </Space>
  );
};
export default ProductAdmin;
