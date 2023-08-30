import { Form, Input, Card, DatePicker, Button } from 'antd';
import SettingHeader from '~/components/Common/SettingHeaders/setting-profile';

const EditProfile = () => {

    return (
        <div className='flex justify-center items-center mb-10'>
            <Card className='bg-bgprimary' cover={<SettingHeader checkscreen={false} />}>
                <Form
                    layout="vertical"
                    className='w-[358px] flex justify-center  flex-col '
                >
                    <label className="text-primary text-[18] font-medium ml-[10px]">First name</label>
                    <Form.Item name="firstname" className='flex justify-center' rules={[
                        { required: true, message: "please enter  First name" }
                    ]}>
                        <Input type='usename' placeholder='enter a First name' className='w-[342px]  h-[58px]' />
                    </Form.Item>

                    <label className="text-primary text-[18] font-medium ml-[10px]">Last name</label>
                    <Form.Item name="lastname" className='flex justify-center' rules={[
                        {
                            required: true,
                            message: "pleae enter last name"
                        }
                    ]} >
                        <Input type='text' placeholder='enter a last name' className='w-[342px]  h-[58px]' />
                    </Form.Item>
                    <label className="text-primary text-[18] font-medium ml-[10px]">Email</label>
                    <Form.Item name="email" className='flex justify-center' rules={[
                        { required: true, message: "please enter a email address " }
                    ]} >
                        <Input type='email' placeholder='enter a emai address' className='w-[342px]  h-[58px]' />
                    </Form.Item>
                    <label className="text-primary text-[18] font-medium ml-[10px]">Date of Birth</label>
                    <Form.Item name="dob" className='flex justify-center' rules={[
                        {
                            required: true,
                            message: "please enter a DOB"
                        }
                    ]}>
                        <DatePicker className='w-[342px]  h-[58px] ' />
                    </Form.Item>
                    <Form.Item className='mt-5'>
                        <Button type="primary" htmlType='submit' block>Save</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default EditProfile;
