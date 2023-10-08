import UserButton from '@/components/entities/user'
import Image from 'next/image'
import React from 'react'

const AppHeader = () => {
    return (
        <header className='w-full h-20 shrink-0 flex items-center justify-center'>
            <div className="w-full px-4 max-w-7xl flex items-center justify-between">
                <div className="w-fit h-fit flex items-center gap-2">
                    <Image src='/dm.svg' width={36} height={36} alt='dm-logo' />
                    <div className="w-0.5 h-8 shrink-0 bg-neutral-700" />
                    <div className="w-fit h-fit flex items-center gap-1">
                        <Image src='/dm+.svg' width={36} height={36} alt='dm-logo' />
                        <span className='text-xl font-medium'>DM+</span>
                    </div>
                </div>
                <div className="w-fit h-fit flex items-center gap-2">
                    <UserButton />
                </div>
            </div>
        </header>
    )
}

export default AppHeader