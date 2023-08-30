import { Tabs } from "antd";
import Login from "./login";
import Signup from "./signup";

const { TabPane } = Tabs;

function AuthTabs() {
    return (
        <div className="flex justify-center mt-4">
            <Tabs defaultActiveKey="login" tabPosition="top">
                <TabPane tab="Login" key="login">
                    <Login />
                </TabPane>
                <TabPane tab="Sign Up" key="signup">
                    <Signup />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default AuthTabs;
