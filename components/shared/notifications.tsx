'use client'
import { auth } from '@/utils/app'
import { Notifications } from 'ui'

const NotificationsWrapper = () => {
  return <Notifications auth={auth} />
}

export default NotificationsWrapper