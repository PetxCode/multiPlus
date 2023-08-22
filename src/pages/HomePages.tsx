
import PageComp from './PageComp'


const HomePages = () => {
    return (
        <div className='w-full min-h-[100vh] bg-[#FCFDFF] flex flex-col items-center ' >
            <PageComp />
            <PageComp row />
            <PageComp />
            <PageComp row />
        </div>
    )
}

export default HomePages