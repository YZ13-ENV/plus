// import { Button } from '@/components/ui/button'
import SuccessCircles from '@/components/widgets/success-circles'

const SubSuccess = () => {
    return (
        <div className='w-full h-screen flex flex-col gap-6 items-center justify-center'>
            <SuccessCircles />
            <span className='text-center font-medium text-lg'>Теперь вам доступны все плюсы DM+</span>
        </div>
    )
}

export default SubSuccess