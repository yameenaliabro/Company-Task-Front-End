import { Card, Form, Input, Button, Typography, Row, Col } from "antd"
import CardBg from '~/components/Base/CardBg'
import { FieldTimeOutlined } from "@ant-design/icons"
import { SearchCard } from '~/components/Common'
import { useState } from "react"
import { UseGetDosageBySearch } from "~/apis/search"
import type { getDosageType } from "~/types/search"
const Search = () => {
    // const { mutateAsync: createhistory } = UseCreateHistory()
    const [searchTerm, setSearchTerm] = useState("");
    const searchdata = UseGetDosageBySearch(searchTerm)
    const medData = searchdata?.data?.data
    // const create = createhistory({ searchTerm, userId: "" })
    // console.log("🚀 ~ file: index.tsx:14 ~ Search ~ create :", create)

    return (
        <div>
            <Card className='bg-bgprimary'
                cover={<CardBg checkscreen={false} />}
            >
                <Form className='w-[358px] flex justify-center flex-col ml-[13px]'>
                    <Form.Item
                        rules={[
                            { required: true, message: "please enter a some Character!" }
                        ]}
                    >
                        <label className="text-primary text-[18] font-medium">Drug Name</label>
                        <Button type='link' icon={<FieldTimeOutlined className='text-card' />} className='ml-[150px] font-light' >My History</Button>
                        <Input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder='What drug  are you  looking for ?'
                            type='search'
                        />
                    </Form.Item>
                    <label className="text-primary text-[18] font-medium">Zip Code</label>
                    <Form.Item
                        name="search"
                        rules={[
                            {
                                required: true, message: "please enter the zip code "
                            }
                        ]}>
                        <Input.Search
                            type='search'
                            enterButton
                            placeholder='What are you ?'
                        />
                    </Form.Item>
                </Form>
                <SearchCard />
                <div className="mt-1">
                    <div className="m-5">
                        {medData?.map((item: getDosageType) => (
                            <Card className='w-[358px] h-[133px] rounded' key={item.id}>
                                <Row gutter={16}> {/* Adjust gutter as needed */}
                                    <Col span={12}>
                                        <div>
                                            <Typography.Title level={2} className="font-semibold text-16 leading-24 ">{item.drugname}</Typography.Title>
                                            <p>Some text in the</p>
                                            <span>{item.zipcode}</span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="flex flex-col">
                                            <Button type="primary" className="rounded-54 w-[76px] h-[35px]">$31.00</Button>
                                            <del className="font-medium text-10 leading-16">$150.49</del><br />
                                            <Typography.Text className="text-card font-medium text-13 leading-19">Save 79%</Typography.Text>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </div>
                </div>
            </Card >
        </div >
    )
}

export default Search