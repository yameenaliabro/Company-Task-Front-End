import React from 'react'
import { Card, Avatar, Typography, Image } from "antd"
import { UserOutlined, MailOutlined, InfoCircleOutlined } from "@ant-design/icons"
import { arrow } from '~/assets/Images'
const SettingCard = () => {
    return (
        //accouts
        <div>
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
                                <Image src={arrow} preview={false} className="relative left-[213px] top-[3px]" />
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
                                <Typography.Title level={3} className='font-medium text-13 leading-19 ml-3 mx-0 my-0'>Privacy Ploicy</Typography.Title>
                                <Image src={arrow} preview={false} className="relative left-[206px] top-[3px]" />
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
                                <Typography.Title level={3} className='font-medium text-13 leading-19 ml-3 mx-0 my-0'>Terms of Services</Typography.Title>
                                <Image src={arrow} preview={false} className="relative left-[206px] top-[3px]" />
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <div>
                        <Card className='w-[358px] h-[72px] border-red-50 mt-3 flex justify-center rounded-15 p-primary'>
                            <div className='flex flex-row'>
                                <Avatar src={<MailOutlined className='text-para' />} className='bg-card  mx-0 my-0' />
                                <div className='flex justify-between '>
                                    <Typography.Title level={3} className='font-medium text-13 leading-19 ml-3 mx-0 my-0'>Logout</Typography.Title>
                                    <Image src={arrow} preview={false} className="relative left-[206px] top-[3px]" />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingCard