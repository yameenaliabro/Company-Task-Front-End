import { Tabs } from "antd";
import { SearchOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import MainHome from "./MainHome";
import { useState } from "react";
import Search from "./Search";

const { TabPane } = Tabs;

function HomeTabs() {
    const [activeTab, setActiveTab] = useState('search');
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
                    tab={<HomeOutlined />} key="home"
                    className={activeTab === 'home' ? "bg-card  rounded-10" : ''}
                >
                    <MainHome />
                </TabPane>
                <TabPane
                    tab={<SearchOutlined />} key="search"
                    className={activeTab == 'search' ? "bg-card  rounded-10" : ''}
                >
                    <Search />

                </TabPane>
                <TabPane
                    tab={<SettingOutlined />} key="setting"
                    className={activeTab === 'setting' ? "bg-card p-[10px] rounded-10" : ''}
                >
                    setting
                </TabPane>
            </Tabs>
        </div>
    );
}

export default HomeTabs;
