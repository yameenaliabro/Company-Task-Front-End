import { Card, Tabs } from "antd"
import SettingCard from "../../../components/Common/SettingCard"
import SettingHeader from "../../../components/Common/SettingHeaders/setting-profile"
import EditProfile from "./EditProfile"
import TermsCondition from "./TermCondition"
import PrivacyPolicy from "./PrivacyPolicy"
const Setting = () => {
    const { TabPane } = Tabs
    return (
        <div>
            <Tabs defaultActiveKey="setting" tabPosition="top">
                <TabPane tab="Setting" key="setting">
                    <Card className='bg-bgprimary h-[650px] flex justify-center items-center flex-col' cover={<SettingHeader checkscreen={true} />} >
                        <div>
                            <SettingCard />
                        </div>
                    </Card>
                </TabPane>
                <TabPane tab="Edit Profile " key="Edit Profile">
                    <EditProfile />
                </TabPane>
                <TabPane tab="Terms & Conditions " key="Terms & Conditions">
                    <TermsCondition />
                </TabPane>
                <TabPane tab="Privacy Policy " key="Privacy Policy">
                    <PrivacyPolicy />
                </TabPane>
            </Tabs>
        </div>

    )
}

export default Setting 