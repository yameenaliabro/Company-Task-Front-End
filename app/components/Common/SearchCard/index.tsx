import React, { useCallback, useState } from 'react'
import { Card, Typography, Button } from "antd"
import { EditOutlined } from "@ant-design/icons"
import EditModal from '../EditModal'
const SearchCard = () => {
    const [openmodal, setopenmodal] = useState(false)
    const handleCancel = useCallback(() => {
        setopenmodal(false)
    }, [])

    const showModal = useCallback(() => {
        setopenmodal(true)
    }, [])
    const handleOk = () => {
        setopenmodal(false);
    };
    return (
        <div className='ml-[13px]'>
            <Card
                className='w-[358px] h-[99px] p-5'>
                <div className='w-[342px] h-[22px]'>
                    <Typography.Text className='font-semibold text-primary font-sans  leading-20'>DEXTROAMPHETAMINE- AMPHET ER</Typography.Text>
                </div>
                <div className='flex  w-[326px] h-[32px] flex-row'>
                    <Typography.Text className='font-semibold text-size leading-20 text-primary mt-2'>Capsule ER 24H | 30 MG | 30</Typography.Text>
                    <Button type='link' icon={<EditOutlined className='ml-20' />} onClick={showModal}></Button>
                </div>
            </Card>
            <EditModal
                handleCancel={handleCancel}
                isModalVisible={openmodal}
                handleok={handleOk}
            />
        </div >
    )
}

export default SearchCard