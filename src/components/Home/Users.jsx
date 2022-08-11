import React from "react";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";

const Users = () => {
  return (
    <>
      <Avatar.Group>
        <Avatar size={"large"} src="https://joeschmoe.io/api/v1/random" />
        <Avatar
          size={"large"}
          style={{
            backgroundColor: "#f56a00",
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            size={"large"}
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          size={"large"}
          style={{
            backgroundColor: "#1890ff",
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    </>
  );
};

export default Users;
