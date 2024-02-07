import { db } from '@/utils/app'
import { doc, getDoc } from 'firebase/firestore'

export type SubscriptionTableData = {
  key: string
  name: string
  access: {
    forDefault: boolean
    forSubscriber: boolean
  }
}

const ref = doc(db, '/dm/global/configs/plus')
export const table_data = async() => (await getDoc(ref)).get('features') as SubscriptionTableData[] | null
// Не ломать эту консту, она выводит данные в таблицу привилегий на главной странице
