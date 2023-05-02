import React, { useState } from "react";
import NavBar from "../NavBar";
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Table } from "antd";
const { Header, Sider, Content } = Layout;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

function Admin() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
      <NavBar />
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
            }}
          >
            <div>
              <div
                style={{
                  marginBottom: 16,
                }}
              >
                <Button
                  type="primary"
                  onClick={start}
                  disabled={!hasSelected}
                  loading={loading}
                >
                  Reload
                </Button>
                <span
                  style={{
                    marginLeft: 8,
                  }}
                >
                  {hasSelected
                    ? `Selected ${selectedRowKeys.length} items`
                    : ""}
                </span>
              </div>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
export default Admin;
