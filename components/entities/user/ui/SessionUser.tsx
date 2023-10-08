import Avatar from '@/components/shared/Avatar'
import { getHost } from '@/helpers/getHost'
import { ShortUserData } from '@/types'
import React, { useLayoutEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { Session, setSession } from '../../session/session'
import { CheckIcon } from '@radix-ui/react-icons'
import { BiLoaderAlt } from 'react-icons/bi'
type Props = {
    setExpand: React.Dispatch<React.SetStateAction<boolean>>
    uid: string
}
const SessionUser = ({ uid, setExpand }: Props) => {
    const session = useAppSelector(state => state.watcher.session)
    const [loading, setLoading] = useState<boolean>(false)
    const isSelected = session.uid === uid
    const dispatch = useAppDispatch()
    const [userData, setUserData] = useState<ShortUserData | null>(null)
    const updateSession = () => {
        const updatedSession: Session = {
            ...session,
            uid: uid
        }
        dispatch(setSession(updatedSession))
    }
    const fetchData = async() => {
        try {
            const userRes = await fetch(`${getHost()}/users/shortData?userId=${uid}`, { method: 'GET', next: { revalidate: 3600 } })
            const user: { short: ShortUserData } | null = await userRes.json()
            setUserData(user ? user?.short : null)
        } catch(e) {

        }
    }
    const changeUser = () => {
        if (session.uid !== uid) {
            setLoading(true)
            updateSession()
            setTimeout(() => {
                setLoading(false)
                setTimeout(() => {
                    setExpand(false)
                }, 1000);
            }, 2000);
        }
    }
    useLayoutEffect(() => {
        fetchData()
    },[uid])
    if (!userData) return (
        <div className="w-full h-14 flex items-center gap-2">
            <div className='w-8 h-8 shrink-0 rounded-full bg-neutral-800' />
            <div className="w-full h-full flex flex-col justify-center gap-1">
                <div className="w-1/2 h-4 rounded-full bg-neutral-800" />
                <div className="w-full h-4 rounded-full bg-neutral-800" />
            </div>
        </div>
    )
    return (
        <div onClick={changeUser} className="flex items-center w-full gap-2 h-fit">
            <div className="relative shrink-0">
                <Avatar src={userData?.photoUrl || '/EmptyUser.svg'} size={32} />
                {
                    loading ?
                    <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 rounded-full">
                        <BiLoaderAlt size={32} className='animate-spin' />
                    </div>
                    : isSelected && 
                    <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 bg-green-600 rounded-full">
                        <CheckIcon className='text-white' width={18} height={18} />
                    </div>
                }
            </div>
            <div className="flex flex-col w-full h-full">
                <span className='font-semibold text-sm text-neutral-200'>{userData?.displayName}</span>
                <span className='text-xs text-neutral-400'>{userData?.email}</span>
            </div>
        </div>
    )
}

export default SessionUser