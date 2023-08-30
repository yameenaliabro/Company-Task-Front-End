import { Image } from "antd"
import { bg1, bg2 } from '~/assets/Images'
const BgImage = () => {
    return (
        <div>
            <div className='absolute top-0 lef-0 !w-full'>
                <Image preview={false} src={bg1} className="w-full" />
            </div>
            <div>
                <Image preview={false} src={bg2} className=" !relative" />
            </div>
        </div>
    )
}
export default BgImage