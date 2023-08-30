import { Row, Typography, Card } from 'antd';
import PrivayTerms from '~/components/Common/SettingHeaders/privacy-trems'
const PrivacyPolicy = () => {

    const { Text } = Typography;
    return (
        <div className='flex justify-center items-center mb-10'>
            <Card className='bg-bgprimary' cover={<PrivayTerms checkscreen={false} />}>
                <Row gutter={16}>
                    <div className="p-4">
                        <Text className="text-base font-semibold tracking-[2%] leading-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                            eiusmod tempor incididunt ut labore et
                        </Text>
                    </div>
                </Row>
                <Row gutter={16}>
                    <div className="p-4">
                        <Text className="text-base font-semibold tracking-[2%] leading-[20px]">
                            aucibus interdum posuere lorem. Sit amet justo donec enim diam vulputate.
                            Iaculis at erat pellentesque adipiscing.
                            eiusmod tempor incididunt ut labore et

                        </Text>
                    </div>
                </Row>
                <Row gutter={16}>
                    <div className="p-4">
                        <Text className="text-base font-semibold tracking-[2%] leading-[20px]">
                            aucibus interdum posuere lorem. Sit amet justo donec enim diam vulputate.
                            Iaculis at erat pellentesque adipiscin
                            eiusmod tempor incididunt ut labore et

                        </Text>
                    </div>
                </Row>
                <Row gutter={16}>
                    <div className="p-4">
                        <Text className="text-base font-semibold tracking-[2%] leading-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                            eiusmod tempor incididunt ut labore et

                        </Text>
                    </div>
                </Row>
            </Card >
        </div >
    )
}

export default PrivacyPolicy