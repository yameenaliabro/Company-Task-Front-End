
import { Link } from "@remix-run/react"
import { Card, Typography, Form, Input, Button, message, Checkbox } from "antd"
import { SSO } from "~/components/Base"
import BgImage from "~/components/Base/images/bg-image"
import { useAuth } from "~/hooks"
import { type loginTypes } from "~/types"
const LoginPage = () => {
    const { login, } = useAuth()
    // const [form] = useForm()
    const onFinish = async (props: loginTypes) => {
        console.log("🚀 ~ file: login.tsx:12 ~ onFinish ~ props:", props)
        try {
            await login(props)
            message.success("your account is sucesfully created")
            // form.resetFields()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex justify-center items-center mb-10'>
            <Card className="bg-bgprimary" cover={<BgImage />}>

                <Typography.Title className='flex justify-center text-primary'
                    level={3}>Login  in to<span className="text-textheading ml-2">Bax RX</span>
                </Typography.Title>
                <SSO />
                <Form
                    labelCol={{ span: 6 }}
                    onFinish={onFinish}
                    // disabled={loading}
                    className='w-[358px] flex justify-center flex-col mr-3   absolute right-[4px]'
                // form={form}
                >
                    <label className="text-primary text-[18] font-medium">UserName</label>
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: 'please enter User!' }
                        ]}
                    >
                        <Input type='text' placeholder='enter a email username...' />
                    </Form.Item>
                    <label className="text-primary text-[18] font-medium">Password</label>
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: "please enter a password" }
                        ]}>
                        <Input.Password type='' placeholder='enter a password...' />
                    </Form.Item>
                    <Form.Item valuePropName="checked" className="flex flex-row">
                        <Checkbox className="text-primary">Remember me</Checkbox>
                        <Button type="link" className="ml-8">Forgot your password?</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' block >Log  in</Button>
                    </Form.Item>
                    <Form.Item className='flex flex-1'>
                        <Link to="/auth/signup" >Create a new Account?
                            <Button type='link' className='p-0 m-0' >Signup</Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default LoginPage