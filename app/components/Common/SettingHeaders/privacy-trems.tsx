import { Image, Typography } from "antd"
import { headerawrrow } from "~/assets/Images"
function PrivayTerms({ checkscreen }: { checkscreen: boolean }) {
    return (

        <div className="w-[460px] h-[130px]  bg-mdcard ">
            {checkscreen ?
                <div className="w-[300px] h-[91px] top-[50px] left-[24px] gap-16px absolute  flex justify-between flex-row" >
                    <Image src={headerawrrow} className="w-[30px] h-[30px] " preview={false} />
                    <Typography.Title level={3} className="w-[230px] h-[31] ml-[108px]">Terms & Condition</Typography.Title>
                </div> :
                <div className="w-[300px] h-[91px] top-[50px] left-[24px] gap-16px absolute  flex justify-between flex-row" >
                    <Image src={headerawrrow} className="w-[30px] h-[30px] " preview={false} />
                    <Typography.Title level={3} className="w-[230px] h-[31] ml-[108px]">Privacy Policy</Typography.Title>
                </div>
            }
        </div >

    )
}

export default PrivayTerms