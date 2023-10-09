'use client'
import { activateCodeAndDelete, checkCode } from '@/app/promo/activate/helpers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PromoCodeWithId } from '@/types'
import { auth } from '@/utils/app'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLoaderAlt } from 'react-icons/bi'

const PromoCodeForm = () => {
    const [user] = useAuthState(auth)
    const [code, setCode] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const getCheckCode = async() => {
        if (user) {

            setLoading(true)
            const existedCode: PromoCodeWithId | null = await checkCode(code)
            if (existedCode) {
                const res = await activateCodeAndDelete(existedCode.code, user.uid)
                console.log(res)
            }
            setLoading(false)
        }
    }
    return (
        <div className="w-full h-fit flex items-center gap-4">
            <Input value={code} onChange={e => setCode(e.target.value)} placeholder='Введите ваш промокод здесь...' />
            <Button disabled={loading || code.length < 6} onClick={getCheckCode}>{loading && <BiLoaderAlt className='animate-spin mr-2' size={19} />}Активировать</Button>
        </div>
    )
}

export default PromoCodeForm