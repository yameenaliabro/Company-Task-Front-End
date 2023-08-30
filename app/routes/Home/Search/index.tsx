import { Card, Form, Input, Button } from "antd"
import CardBg from '~/components/Base/CardBg'
import { FieldTimeOutlined } from "@ant-design/icons"
import { SearchCard } from '~/components/Common'
import { useState } from "react"
import { UseGetDosage, UseGetDosageBySearch } from "~/apis/search"
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: searchdata } = UseGetDosageBySearch(searchTerm)
    const { data: getdata, } = UseGetDosage()
    console.log("🚀 ~ file: index.tsx:11 ~ Search ~ getdata:", getdata)
    console.log("🚀 ~ file: index.tsx:10 ~ Search ~ searchTerm:", searchTerm)
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
                        <Card className='w-[358px] h-[133px] m'></Card>
                    </Form.Item>
                </Form>
                <SearchCard />
                <div className="mt-1">
                    <div>
                        <div className="mt-4">
                            {searchdata && searchdata.map((item: any) => (
                                <Card className='w-[358px] h-[133px] m' key={item.id}>
                                    <p>Item Name: {item.drugname}</p>
                                    <p>Item Description: {item.zipcode}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Search