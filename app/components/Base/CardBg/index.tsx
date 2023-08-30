import { Typography, } from "antd"

function CardBg({ checkscreen }: { checkscreen: boolean }) {
    return (

        <div className=" h-[202px] rounded-radius  bg-mdcard ">
            {checkscreen ?
                <div className="w-[263px] h-[91px] top-[35px] left-[24px] gap-16px absolute " >
                    <Typography.Title level={3} className="w-[172px] h-[31] ">Welcome, jack</Typography.Title>
                    <Typography.Text className="[263px] h-[44px] font-normal  leading-3">Show this card to your phramacist to apply discount</Typography.Text>
                </div > :
                <div className="w-[300px] h-[91px] top-[50px] left-[24px] gap-16px absolute " >
                    <Typography.Title level={3} className="w-[230px] h-[31] ">What are  you Looking for today?</Typography.Title>
                </div >
            }
        </div >

    )
}

export default CardBg