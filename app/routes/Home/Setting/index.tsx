import React from 'react'
import { Card, Layout, Tabs } from "antd"
const Setting = () => {
    const { Header } = Layout
    return (
        <Card>
            <Tabs>
                <Header className='bg-bgprimary'>Seeting</Header>
            </Tabs>
        </Card>
    )
}

export default Setting