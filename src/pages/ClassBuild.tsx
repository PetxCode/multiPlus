import React, { useState, useEffect } from 'react'

const App = () => {
    const [image, setImage] = useState<Array<string>>([])
    const [avatar, setAvatar] = useState<Array<string>>([])

    const getRandomColor = () => {
        return `#${((1 << 24) * Math.random() | 0).toString(16)}`
    }

    const onHandleImages = (e: any) => {
        const file = e.target.files
        console.log("reading data outside: ", file)

        let data: string[] = []

        for (let i of file) {
            setAvatar(i)
            const save: any = URL.createObjectURL(i)
            data.push(save)
        }
        setAvatar(file)
        setImage([...image, ...data])

    }

    const [inputData, setInputData] = useState<{ text: string }[]>([{ text: "" }])


    const addMoreInput = () => {
        setInputData([...inputData, { text: "" }])
    }

    const removeMoreInput = (i: number) => {
        let data = [...inputData]
        data.splice(i, 1)
        setInputData(data)
    }

    const handleInputText = (e: any, i: number) => {
        const { value, name }: any = e.target
        let data: any[] = [...inputData]
        data[i][name] = value
        setInputData(data)
    }

    return (
        <div className='w-full h-[100vh] flex flex-wrap items-center flex-col pt-8 ' >

            <div >Card</div>
            <input
                className='hidden'
                type='file'
                accept='image/png, image/jpg, image/jpeg'
                id="william"
                multiple

                onChange={onHandleImages}
            />
            <label className='bg-purple-700 text-white py-2 px-8 rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all mt-3 '
                htmlFor='william'
            >upload images</label>

            <div className=' mt-[20px] w-[90%] min-h-[20vh] flex flex-wrap justify-center ' >
                {
                    image?.map((props: any) => (
                        <div className='w-[100px] h-[100px] rounded m-1 border flex items-center justify-center '
                            style={{ backgroundColor: `${getRandomColor()}` }}
                        >

                            <img
                                className='w-[90px] h-[90px] rounded object-cover'
                                src={props}
                            />
                        </div>

                    ))
                }
            </div>

            <div>form</div>

            <div

                className='w-[450px] min-h-[200px] border rounded p-4  m-2 ' >

                {
                    inputData?.map((props, i) => (

                        <div key={i} className='flex my-2' >
                            <input
                                name='text'
                                className='w-full h-[40px] border pl-2 rounded '
                                placeholder='enter'

                                // value={inputData}
                                onChange={(e) => {
                                    handleInputText(e, i)
                                }}
                            />
                            <div className='w-[50px] h-[40px] text-white bg-green-500 flex justify-center items-center hover:cursor-pointer duration-300 transition-all mx-1 '
                                onClick={addMoreInput}
                            >+</div>
                            <div className='w-[50px] h-[40px] text-white bg-red-500 flex justify-center items-center hover:cursor-pointer duration-300 transition-all mx-1 '
                                onClick={() => { removeMoreInput(i) }}
                            >-</div>
                        </div>

                    ))
                }
            </div>
        </div >
    )
}

export default App