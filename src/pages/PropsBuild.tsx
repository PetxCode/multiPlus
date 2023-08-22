import React from 'react'
import pix from "../assets/1.jpg"
import moment from "moment"

const PropsBuild = () => {
    return (
        <div className='w-full flex items-center flex-col pt-8 ' >
            <div className='w-[300px]  ' >
                <div className='bg-white w-full border rounded p-1 font-mont text-[13px] mt-3 ' >

                    <div className='flex mb-2 '>
                        <img
                            src={pix}
                            className='w-[50px] h-[50px] rounded-[50%] object-cover bg-slate-100 mr-2 '
                        />
                        <div >
                            <div className='font-monH' >name</div>
                            <div className='text-[12px]'>{moment(Date.now()).fromNow()}</div>
                        </div>
                    </div>
                    <hr />
                    <div className='my-4 ' >This is a luxury typeface duo created by Fenotype with a combination of elegant sans serif font and an eloquent brush script, that look divine when paired together. In addition there are textured “print” versions of them both</div>
                    <div
                        className='w-full h-[250px] bg-slate-50 rounded 
                        border grid gap-1 grid-flow-col
                        '
                    >
                        <div className='bg-red-500  ' >1</div>
                        <div className='bg-green-500  ' >2</div>
                        <div className='bg-purple-500  ' >3</div>
                        <div className='bg-teal-500  ' >4</div>
                        <div className='bg-blue-500  ' >5</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PropsBuild