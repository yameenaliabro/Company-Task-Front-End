import { Tabs } from "antd";
import { SearchOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import MainHome from "./MainHome";
import { useState } from "react";
import Search from "./Search";
// import PrivacyPolicy from "./Setting/PrivacyPolicy";
// import TermsCondition from "./Setting/TermCondition";
// import EditProfile from "./Setting/EditProfile";
import Setting from "./Setting";

const { TabPane } = Tabs;

function HomeTabs() {
    const [activeTab, setActiveTab] = useState('home');
    const handleTabChange = (key: string) => {
        setActiveTab(key);
        console.log("🚀 ~ file: index.tsx:12 ~ handleTabChange ~ key:", key)
    };
    return (
        <div className="flex justify-center flex-row mt-10">
            <Tabs defaultActiveKey="home"
                tabPosition="bottom"
                tabBarGutter={160}
                onChange={handleTabChange}
                className="bg-bgprimary flex justify-center mb-[30px]"
            >
                <TabPane
                    tab={<HomeOutlined className={activeTab === 'home' ? "bg-card   p-4 rounded-10 textp  text-para ml-3px" : 'ml-3px'} />} key="home"
                >
                    <MainHome />
                </TabPane>
                <TabPane
                    tab={<SearchOutlined className={activeTab == 'search' ? "bg-card   p-4 rounded-10 text-para" : ''} />} key="search"
                >
                    <Search />

                </TabPane>
                <TabPane
                    tab={<SettingOutlined className={activeTab === 'setting' ? "bg-card  p-4 rounded-10 text-para" : ''} />} key="setting"
                >
                    <Setting />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default HomeTabs;
