import { Card, Form, Input, Button, } from "antd"
import CardBg from '~/components/Base/CardBg'
import { FieldTimeOutlined } from "@ant-design/icons"
import { SearchCard } from '~/components/Common'
import { UseGetDosage } from "~/apis/search"
import { useState } from "react"
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, } = UseGetDosage(searchTerm)
    console.log("🚀 ~ file: index.tsx:10 ~ Search ~ searchTerm:", searchTerm)
    console.log("🚀 ~ file: index.tsx:10 ~ Search ~ data:", data)
    return (
        <div>
            <Card className='bg-bgprimary'
                cover={<CardBg checkscreen={false} />}
            >
                <Form className='w-[358px]'>
                    <Form.Item
                        rules={[
                            { required: true, message: "please enter a some Character!" }
                        ]}
                    >
                        <label className="text-primary text-[18] font-medium">Drug Name</label>
                        <Button type='link' icon={<FieldTimeOutlined className='text-card' />} className='ml-[150px] font-light' >My History</Button>
                        <Input
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
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Form.Item>
                </Form>
                <SearchCard />
            </Card>
            {/* {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error loading data</div>
            ) : (
                <List
                    key={"1"}
                    dataSource={data}
                    renderItem={(item: any) => (
                        <List.Item key={item.id}>{item.drugname}</List.Item>
                    )}
                />
            )} */}
        </div>
    )
}

export default Search