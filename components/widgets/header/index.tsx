import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import UserCircle from '@/components/shared/user-circle'
import Notifications from '@/components/shared/notifications'
import { ProjectsGrid } from 'ui'
import { cdn } from 'api'

const Header = () => {
    return (
        <header className='w-full h-20 shrink-0 flex items-center justify-center'>
            <div className="w-full px-4 flex items-center justify-between">
                <Link href='/' className="w-fit h-fit flex items-center gap-3">
                    <Image src={cdn('/dm/icons/dm-star-dark.svg')} width={36} height={36} alt='dm-logo' />
                    <span className='text-3xl font-semibold'>Plus</span>
                </Link>
                <div className="w-fit h-fit flex items-center gap-2">
                    <Link href='/promo/activate'><Button variant='secondary'>Есть промокод?</Button></Link>
                    <Notifications />
                    <ProjectsGrid />
                    <UserCircle />
                </div>
            </div>
        </header>
    )
}

export default Header