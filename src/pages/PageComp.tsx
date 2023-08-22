import { AiOutlineArrowRight } from 'react-icons/ai'
import pix from "../assets/1.svg"

interface iData {
    row?: boolean
}

const PageComp: React.FC<iData> = ({ row }) => {
    return (

        <div className={`
            flex w-[80%] justify-between  my-16 
            ${row ? "flex-row-reverse" : "flex-row"}
            `} >
            <img
                className='h-[400px]  '
                src={pix}
            />
            <div>
                <div
                    className='text-[#46B839] text-[12px] uppercase mb-[30px] '
                >ACCOUNT OPENING & SAVINGS</div>
                <div
                    className='text-[#183B56]
                        text-[35px] font-bold font-monH
                        leading-none mb-4
                        '
                >Account Opening & Savings</div>
                <div
                    className='text-[#183B56] font-mont '
                >
                    Open a Sparkle Account with no documents or bank queues. All can be done on your smartphone in under 5 minutes.
                    <br />
                    <br />
                    You can save money for rainy days using our Sparkle Stash feature which allows you save as you like, periodically, with investments, and with a group of people
                    <br />
                    Lorem ipsum dolor sit amet.

                </div>
                <div className='flex text-[#46B839] 
                    items-center mt-4
                    ' >
                    <span> Learn More</span>
                    <AiOutlineArrowRight className='ml-2 mt-1 ' />
                </div>
            </div>
        </div>

    )
}

export default PageComp