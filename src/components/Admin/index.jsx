import React, { useState } from "react";
import NavBar from "../NavBar";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Table } from "antd";

const columns = [
  {
    title: "이름",
    dataIndex: "userName",
    align: "center",
    width: "20%",
  },
  {
    title: "아이디",
    dataIndex: "userId",
    align: "center",
    width: "20%",
  },
  {
    title: "비밀번호",
    dataIndex: "password",
    align: "center",
    width: "30%",
  },
  {
    title: "가입일",
    dataIndex: "joinDate",
    align: "center",
    width: "20%",
  },
  {
    title: "유저권한",
    dataIndex: "userType",
    align: "center",
    width: "10%",
  },
];

const articles = [
  {
    title: "제목",
    dataIndex: "title",
    width: "60%",
    align: "center",
  },
  {
    title: "작성자",
    dataIndex: "writer",
    width: "20%",
    align: "center",
  },
  {
    title: "작성일",
    dataIndex: "date",
    width: "20%",
    align: "center",
  },
];

function Admin() {
  const userInfo = JSON.parse(localStorage.getItem("users") || "[]");
  const articleInfo = JSON.parse(localStorage.getItem("writeForm") || "[]");

  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <NavBar />
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            onClick={onClick}
            selectedKeys={[current]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "회원 목록",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "글 목록",
              },
            ]}
          />
        </Sider>
        <Layout>
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
              ></div>
              {current === "1" ? (
                <Table
                  columns={columns}
                  dataSource={userInfo}
                  rowKey={"userId"}
                />
              ) : (
                <Table
                  columns={articles}
                  dataSource={articleInfo}
                  rowKey={"title"}
                />
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
export default Admin;
