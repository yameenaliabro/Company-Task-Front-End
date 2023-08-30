import React from 'react'
import { Input, Form } from "antd"
const SeacrDosagePage = () => {
    return (
        <Form>
            <Form.Item
                name="search"
                rules={[
                    { required: true, }
                ]}
            >
                <Input.Search
                    enterButton
                    type="text"
                />
            </Form.Item>
        </Form>

    )
}

export default SeacrDosagePage