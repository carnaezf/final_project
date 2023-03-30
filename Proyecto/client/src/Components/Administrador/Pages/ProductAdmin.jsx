import React from "react";
import { Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    Product: "John",
    S: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const ProductAdmin = () => (
  <Table dataSource={data} className="w-full">
    <ColumnGroup>
      <Column title="Product" dataIndex="product" key="product" />
      <Column title="Description" dataIndex="Description" key="Description" />
    </ColumnGroup>
    <Column
      title="Selling Price"
      dataIndex="Selling Price"
      key="Selling Price"
    />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);

export default ProductAdmin;
