import { Link } from '@remix-run/react'
import React, { useMemo } from 'react'
import { type MenuProps, Layout, Menu, } from "antd"
import { HomeOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'


function MainHeader() {
    const { Header } = Layout
    const menuItems: MenuProps["items"] = useMemo(() => ([
        {
            label: <Link to="/">Home</Link>, icon: <HomeOutlined />,
            key: "dashboard"
        },
        {
            label: <Link to="/dashboard/search">Search</Link>, icon: <SearchOutlined />,
            key: "dashboard/customer"
        },
        {
            label: <Link to="/setting">Setting</Link>, icon: <SettingOutlined />,
            key: "setting"
        }

    ]), [])
    return (
        <Header className='flex justify-around'>
            <Menu items={menuItems} />
        </Header>
    )
}

export default MainHeader