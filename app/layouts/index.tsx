import { Layout } from 'antd'
import React, { type ReactNode } from 'react'
import MainHeader from './Header/index'
import AuthGuard from "../guard/AuthGuard"


interface DashboardLayoutProps {
    children: ReactNode
}

const Mainlayout = (props: DashboardLayoutProps) => {
    const { children } = props
    const { Content } = Layout
    return (
        <div>
            <Layout>
                <MainHeader />
                <Content>{children}</Content>
            </Layout>
        </div>
    )
}

const WithAuth = (props: DashboardLayoutProps) => {
    return (
        <AuthGuard>
            <Mainlayout {...props} />
        </AuthGuard>
    )
}

export default WithAuth