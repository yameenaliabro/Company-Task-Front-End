import { Link } from "@remix-run/react"
import { Card, Form, Input, Button, Typography } from "antd"
import { BGImage, SSO } from "~/components/Base"
import { useAuth } from '~/hooks'
import { type RegisternType } from "~/types"

const SignUpPage = () => {
    const { signup, loading, userdata } = useAuth()
    console.log("🚀 ~ file: signup.tsx:8 ~ SignUpPage ~ userdata :", userdata)


    const onFinish = async (props: RegisternType) => {
        console.log("🚀 ~ file: signup.tsx:12 ~ onFinish ~ props:", props)
        try {
            await signup(props)
        } catch (error) {
            console.log("🚀 ~ file: signup.tsx:13 ~ onFinish ~ error:", error)
        }
    }
    return (
        <div className='flex justify-center items-center'>
            <Card className="bg-bgprimary" cover={<BGImage />}>
                <Typography.Title className='flex justify-center text-primary mb-7' level={3}> Sign up to
                    <span className="text-textheading ml-2">Bax RX</span></Typography.Title>
                <SSO />
                <Form
                    labelCol={{ span: 6 }}
                    onFinish={onFinish}
                    className='!w-[358] flex flex-col'
                    disabled={loading}
                >
                    <label className="text-primary text-[18] font-medium">UserName</label>
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: "please enter a name" }
                        ]}>
                        <Input placeholder='enter a username...' />
                    </Form.Item>
                    <label className="text-primary text-[18] font-medium">Email</label>
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: "please enter a email address!" }
                        ]}>
                        <Input type='email'
                            placeholder='enter a email password...'
                        />
                    </Form.Item>
                    <label className="text-primary text-[18] font-medium">New Passowrd</label>
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: "please enter a password" },
                            { min: 6, message: "must be a six character!" }
                        ]}>
                        <Input.Password placeholder='New  password...' />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit' block loading={loading}>Sign Up</Button>
                    </Form.Item>
                    <Form.Item className='flex flex-1'>
                        <Link to="/auth/login" >Already have a  account?<Button type='link' className='m-0 p-0'>Login</Button></Link>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}

export default SignUpPage