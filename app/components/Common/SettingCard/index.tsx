import React from 'react'
import { Card, Avatar, Typography } from "antd"
import { UserOutlined } from "@ant-design/icons"
const SettingCard = () => {
    return (
        <Card>
            <div>
                <Avatar src={<UserOutlined />} />
                <Typography.Title className='font-normal text-13'></Typography.Title>

            </div>
        </Card>
    )
}

export default SettingCard