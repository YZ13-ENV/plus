import PromoCodeForm from '@/components/widgets/PromoCodeForm'
import Image from 'next/image'
import React from 'react'

const PromoActivatePage = () => {
    return (
        <div className='w-full page_wrapper h-full flex items-center justify-center'>
            <div className="max-w-xl w-full h-96 flex items-center justify-center gap-4 flex-col">
                <div className="w-full h-full flex gap-2 items-center justify-center">
                    <div className="relative">
                        <Image src='/dm+.svg' className='absolute blur-lg scale-110' width={128} height={128} alt='dm+_logo' />
                        <Image src='/dm+.svg' className='z-10' width={128} height={128} alt='dm+_logo' />
                    </div>
                    <h1 className='text-center font-bold text-9xl'>DM+</h1>
                </div>
                <h2 className='text-2xl font-semibold'>Активируйте промокод</h2>
                <PromoCodeForm />
            </div>
        </div>
    )
}

export default PromoActivatePage