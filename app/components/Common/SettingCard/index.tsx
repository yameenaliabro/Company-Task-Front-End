import React, { useState } from 'react'
import { Card, Avatar, Typography, Image, Modal, Button, } from "antd"
import { UserOutlined, MailOutlined, InfoCircleOutlined, PoweroffOutlined, RedEnvelopeOutlined, InfoOutlined } from "@ant-design/icons"
import { arrow } from '../../../assets/Images'
import { useAuth } from '../../../hooks'
const SettingCard = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { signout } = useAuth()
    const handleLogout = () => {
        signout()
    };

    return (
        //accouts
        <div className='flex justify-center flex-col '>
            <Card className='w-[358px] h-[72px] border-red-50 mt-3 flex justify-center rounded-15 p-primary'>
                <div className='flex flex-row m-0 p-0'>
                    <Avatar src={<UserOutlined className='text-para' />} className='bg-card  mx-0 my-0' />
                    <div className='flex flex-col gap-x-0 gap-y-0'>
                        <Typography.Title level={3} className='font-medium text-13 leading-19 ml-3'>Account</Typography.Title>
                        <Typography.Text className='font-normal leading-16 text-center text-10 ml-3 '>jackkelly21228@gmail.com</Typography.Text>
                    </div>
                </div>
                {/* helps & Spport */}
            </Card>
            <div>
                <div>
                    <Card className='w-[358px] h-[72px] border-red-50 mt-3 flex justify-center rounded-15 p-primary'>
                        <div className='flex flex-row'>
                            <Avatar src={<InfoCircleOutlined className='text-para' />} className='bg-card  mx-0 my-0' />
                            <div className='flex justify-between '>
                                <Typography.Title level={3} className='font-medium text-13 leading-19 ml-3 mx-0 my-0'>Helps & Sport</Typography.Title>
                                <Image src={arrow} preview={false} className="relative left-[171px] top-[3px]" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                <div>
                    <Card className='w-[358px] h-[72px] border-red-50 mt-3 flex justify-center rounded-15 p-primary'>
                        <div className='flex flex-row'>
                            <Avatar src={<MailOutlined className='text-para' />} className='bg-card  mx-0 my-0' />
                            <div className='flex justify-between '>
                                <Typography.Title level={3} className='font-medium text-13 leading-19 ml-3 mx-0 my-0'>About Us</Typography.Title>
                                <Image src={arrow} preview={false} className="relative left-[200px] top-[3px]" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                <div>

                    <Card className='w-[358px] h-[72px] border-red-50 mt-3 flex justify-center rounded-15 p-primary'>
                        <div className='flex flex-row'>
                            <Avatar src={<InfoOutlined className='text-para' />} className='bg-card  mx-0 my-0' />
                            <div className='flex justify-between '>
                                <Typography.Title level={3} className='font-medium text-13 leading-19 ml-3 mx-0 my-0'>Privacy Ploicy</Typography.Title>
                                <Image src={arrow} preview={false} className="relative left-[165px] top-[3px]" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                <div>
                    <Card className='w-[358px] h-[72px] border-red-50 mt-3 flex justify-center rounded-15 p-primary'>
                        <div className='flex flex-row'>
                            <Avatar src={<RedEnvelopeOutlined className='text-para' />} className='bg-card  mx-0 my-0' />
                            <div className='flex justify-between '>
                                <Typography.Title level={3} className='font-medium text-13 leading-19 ml-3 mx-0 my-0'>Terms & Condition</Typography.Title>
                                <Image src={arrow} preview={false} className="relative left-[141px] top-[3px]" />
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <div>
                        <Card className='w-[358px] h-[72px] border-red-50 mt-3 flex justify-center rounded-15 p-primary'>
                            <div className='flex flex-row'>
                                <Avatar src={<PoweroffOutlined className='text-para' />} className='bg-card  mx-0 my-0' />
                                <div className='flex justify-between '>
                                    <Typography.Title level={3} className='font-medium text-13 leading-19 ml-3 mx-0 my-0 cursor-pointer' onClick={() => setModalVisible(true)}>LogOut</Typography.Title>
                                    <Image src={arrow} preview={false} className="relative left-[200px] top-[3px]" onClick={() => setModalVisible(true)} />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <Modal
                    title="Confirmation"
                    visible={modalVisible}
                    onCancel={() => setModalVisible(false)}
                    footer={[
                        <Button key="cancel" onClick={() => setModalVisible(false)}>
                            Cancel
                        </Button>,
                        <Button key="signOut" type="primary" onClick={handleLogout}>
                            Sign Out
                        </Button>,
                    ]}
                >
                    <p>Are you sure you want to sign out?</p>
                </Modal>
            </div>

        </div>
    )
}

export default SettingCard