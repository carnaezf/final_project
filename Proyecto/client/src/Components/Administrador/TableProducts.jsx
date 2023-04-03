import { Space, Typography, Table, Modal, Input, Form, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, updateProduct } from '../../Redux/actions';

const Products = () => {
  const dispatch = useDispatch();
  const productsAll = useSelector((state) => state.products);
  const updateState = useSelector((state) => state.updateState);
  const [editingProduct, setEditingProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm()

  const showModal = (record) => {
    console.log('testing');
    setEditingProduct(record);
    setOpen(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(editingProduct);
    console.log(editingProduct);
  }, [form, editingProduct])

  const save = () => {
    console.log(form.getFieldsValue());
    dispatch(updateProduct(form.getFieldsValue()));
  }

  const columns = [
    {
      title: "Name",
      dataIndex: 'name',
      key: 'name',
      width: '21%',
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: '21%',
    },
    {
      title: "SellingPrice",
      dataIndex: "sellingPrice",
      key: "sellingPrice",
      width: '21%',
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "Category",
      width: '21%',
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: '21%',
      render: (text, record, index) => (
        <button onClick={() => showModal(record)}>Editar</button>
      )
    },
  ];

  return (
    <Space direction="vertical" className="w-full">
      <Typography.Title level={5}>Products</Typography.Title>
      <Table columns={columns} dataSource={productsAll} />
      <Modal
        title={"Editando " + editingProduct?.name}
        open={open}
        footer={
          <Button type="primary" block onClick={save} loading={updateState === 'loading' ? true : false}>Save</Button>
        }
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={editingProduct}
          autoComplete="off"
        >
          <Form.Item
            name="id"
            hidden={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  )

};


export default Products;
