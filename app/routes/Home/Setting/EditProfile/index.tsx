import { Form, Input, Card, DatePicker } from 'antd';
import SettingHeader from '~/components/Common/SettingHeaders/setting-profile';

const EditProfile = () => {

    return (
        <div className='flex justify-center items-center mb-10'>
            <Card className='bg-bgprimary' cover={<SettingHeader checkscreen={false} />}>
                <Form
                    layout="vertical"
                    className='w-[358px] flex justify-center flex-col '
                >
                    <label className="text-primary text-[18] font-medium">First name</label>
                    <Form.Item name="displayName" rules={[
                        { required: true, message: "please enter a user name" }
                    ]}>
                        <Input type='usename' placeholder='enter a user name' />
                    </Form.Item>
                    <label className="text-primary text-[18] font-medium">Last name</label>
                    <Form.Item name="lastname" rules={[
                        {
                            required: true,
                            message: "pleae enter last name"
                        }
                    ]} >
                        <Input type='text' placeholder='enter a last name' />
                    </Form.Item>
                    <label className="text-primary text-[18] font-medium">Email</label>
                    <Form.Item name="email" rules={[
                        { required: true, message: "please enter a email address " }
                    ]} >
                        <Input type='email' placeholder='enter a emai address' />
                    </Form.Item>
                    <label className="text-primary text-[18] font-medium">Date of Birth</label>
                    <Form.Item name="dob" rules={[
                        {
                            required: true,
                            message: "please enter a DOB"
                        }
                    ]}>
                        <DatePicker />
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default EditProfile;
