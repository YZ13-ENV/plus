import UserButton from '@/components/entities/user'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AppHeader = () => {
    return (
        <header className='w-full h-20 shrink-0 flex items-center justify-center'>
            <div className="w-full px-4 max-w-5xl flex items-center justify-between">
                <Link href='/' className="w-fit h-fit flex items-center gap-2">
                    <Image src='/dm.svg' width={36} height={36} alt='dm-logo' />
                    <div className="w-0.5 h-8 shrink-0 bg-neutral-700" />
                    <div className="w-fit h-fit flex items-center gap-1">
                        <Image src='/dm+.svg' width={36} height={36} alt='dm-logo' />
                        <span className='text-xl font-medium'>DM+</span>
                    </div>
                </Link>
                <div className="w-fit h-fit flex items-center gap-2">
                    <Link href='/promo/activate'><Button variant='secondary'>Есть промокод?</Button></Link>
                    <UserButton />
                </div>
            </div>
        </header>
    )
}

export default AppHeader