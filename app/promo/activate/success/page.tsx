// import { Button } from '@/components/ui/button'
import SuccessCircles from '@/components/widgets/SuccessCircles'
import React from 'react'

const SubSuccess = () => {
    return (
        <div className='w-full page_wrapper h-full flex flex-col gap-6 items-center justify-center'>
            <SuccessCircles />
            <span className='text-center font-medium text-lg'>Теперь вам доступны все плюсы DM+</span>
        </div>
    )
}

export default SubSuccess