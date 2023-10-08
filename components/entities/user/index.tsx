'use client'
import { Button } from '@/components/ui/button'
import { auth } from '@/utils/app'
import React, { useLayoutEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ExitIcon, PersonIcon } from '@radix-ui/react-icons'
import Avatar from '@/components/shared/Avatar'
import { usePathname, useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../store/store'
import { setSession } from '../session/session'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import SessionSection from './ui/SessionSection'
import { setSubscribeState } from './store'
const UserButton = () => {
    const [user] = useAuthState(auth)
    const router = useRouter()
    const isSub = useAppSelector(state => state.user.isSubscriber)
    const dispatch = useAppDispatch()
    const path = usePathname()
    const session = useAppSelector(state => state.watcher.session)
    const back_url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://plus.darkmaterial.space'
    const redirectToAuth = () => router.push(`https://auth.darkmaterial.space/auth/signin?back_url=${back_url}`)
    const checkIsSubscriber = async() => {
        if (user) {
            const res = await user.getIdTokenResult()
            const claims = res.claims
            if (claims && claims.isSubscriber) {
                dispatch(setSubscribeState(claims.isSubscriber as boolean || undefined ? claims.isSubscriber as boolean : false))
            }
            if (claims && !claims.isSubscriber) dispatch(setSubscribeState(false))
        }
    }
    const logOut = () => {
        dispatch(setSession({...session, uid: null}))
        auth.signOut()
    }
    useLayoutEffect(() => {
        checkIsSubscriber()
    },[user?.uid])
    if (!user) return (
        <Button onClick={redirectToAuth}><PersonIcon className='mr-1' width={15} height={15} />Войти</Button>
    )
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <Avatar src={user.photoURL} size={36} isSub={isSub} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className='w-full flex items-center gap-2'>
                    <Avatar src={user.photoURL} size={36} />
                    <div className="w-full h-fit flex flex-col justify-center">
                        <span className='text-neutral-200 line-clamp-1 font-semibold'>{user.displayName || 'Пользователь'}</span>
                        <span className='text-neutral-400 line-clamp-1 text-xs'>{user.email}</span>
                    </div>
                </DropdownMenuLabel>
                <hr className='border-neutral-700' />
                <DropdownMenuItem onClick={() => router.push('/profile')}><PersonIcon className='mr-2' />Профиль</DropdownMenuItem>
                { <SessionSection /> }
                <DropdownMenuItem onClick={logOut}><ExitIcon className='mr-2' />Выйти из профиля</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserButton