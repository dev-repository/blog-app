import React from "react";
import { Menu, Button, Space} from "antd";
import { Icons } from "../../static/svg/Icons";

function RightMenu (){
    return(
        <Menu>
            {/* Icon Dark */}
            <Space>
            <Menu.Item>
                <Button icon={<Icons.SunIcon />} type="button"/>
            </Menu.Item>
            {/* 서치패이지 만들어야함. */}
            <Menu.Item>
                <Button icon={<Icons.SearchIcon />} type="button"/>
            </Menu.Item>
            {/* 로그인시 바껴야하는 곳 */}
            <Menu.Item>
                <Button style={{marginRight: '30px'}} type="primary" shape="round">
                   로그인
                </Button>
            </Menu.Item>
            </Space>
        </Menu>
     
    );
}

export default RightMenu;