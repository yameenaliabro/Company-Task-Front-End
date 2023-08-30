import React from 'react'
import { Button, Divider } from "antd"
import { GoogleOutlined, AppleOutlined } from '@ant-design/icons';

const SSO = () => {
    return (
        <div>
            <div className="flex flex-row justify-around">
                <Button icon={<GoogleOutlined />} className='text-primary shadow-sm' disabled>Sign up With Google</Button>
                <Button icon={<AppleOutlined />} disabled></Button>
            </div>
            <div>
                <Divider>OR</Divider>
            </div>
        </div>
    )
}

export default SSO