import { Button } from '@/components/ui/button'
import PromoCodeForm from '@/components/widgets/PromoCodeForm'
import Link from 'next/link'
import { BiLeftArrowAlt } from 'react-icons/bi'

const PromoActivatePage = () => {
    return (
        <div className='relative w-full h-screen flex flex-col items-center justify-center'>
            <Button className='absolute left-6 gap-2 top-6' asChild variant='outline'>
                <Link href='/'><BiLeftArrowAlt /> Вернуться</Link>
            </Button>
            <div className="max-w-xl w-full h-full flex items-center justify-center gap-4 flex-col">
                <div className="w-full h-full flex gap-2 items-center justify-center">
                    <h1 className='text-center font-bold text-6xl'>
                        <span className='text-muted-foreground'>Darkmaterial</span> Plus
                    </h1>
                </div>
            </div>
            <div className='max-w-xl w-full p-6'>
                <PromoCodeForm />
            </div>
        </div>
    )
}

export default PromoActivatePage