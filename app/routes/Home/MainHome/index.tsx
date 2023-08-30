import CardBg from "~/components/Base/CardBg"
import { Typography, Card, Col, Row } from "antd"
import Container from "~/components/Base/Container"
const MainHome = () => {
    return (
        <div className="flex justify-center ">
            <Card className="bg-bgprimary mb-[30px]" bordered={false} cover={<CardBg checkscreen={true} />}>
                <Container>
                    <div className="flex justify-center items-center">
                        <Card className="w-[345px] h-[218.99px] bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-16 flex justify-center flex-col">
                            <div className="flex justify-center flex-col ">
                                <div className="flex justify-center  flex-col">
                                    <Typography.Title level={3} className="text-para flex flex-1">BaxRx</Typography.Title>
                                    <Typography.Text className="flex flex-1 leading-20 text-para mt-[0px] pb-[0px]">Prescription Discount Card</Typography.Text>
                                </div>

                                <Row className="flex flex-row justify-around  w-[326px] h-[44px] mt-10  ">
                                    <Col className="w-[67px] h-[44px] gap-8">
                                        <Typography.Text className="text-para font-semibold leading-16 font-sans" > Member ID</Typography.Text>
                                        <Typography.Text className="text-para font-semibold text-size leading-20 font-sans" >1645</Typography.Text>
                                    </Col>
                                    <Col className="w-[67px]  h-[44px] gap-8">
                                        <Typography.Text className="text-para font-semibold leading-16 font-sans">PCNS</Typography.Text>
                                        <Typography.Text className="text-para font-semibold text-size leading-20 font-sans" >HTSI</Typography.Text>
                                    </Col>
                                    <Col className="w-[67px] h-[44px] gap-8">
                                        <Typography.Text className="text-para font-semibold leading-16 font-sans" >Bin</Typography.Text>
                                        <Typography.Text className="text-para font-semibold text-size leading-20 font-sans" >123456</Typography.Text>
                                    </Col>
                                    <Col className="w-[67px] h-[44px] gap-8">
                                        <Typography.Text className="text-para font-semibold leading-16 font-sans" >Group</Typography.Text>
                                        <Typography.Text className="text-para font-semibold text-size leading-20 font-sans">6518</Typography.Text>
                                    </Col>
                                </Row>
                                <div className="w-[358px] h-[35px]  rounded-16 bg-fb  text-center !ml-[19px] relative mt-0">
                                    <Typography.Text className="font-sans font-semibold text-size leading-20 text-para text-center mt-2">Discount only. Not insurance.</Typography.Text>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Card>
        </div >
    )
}

export default MainHome