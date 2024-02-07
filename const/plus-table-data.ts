import { format } from '@/helpers/format'

export type SubscriptionTableData = {
  key: string
  name: string
  access: {
    forDefault: boolean
    forSubscriber: boolean
  }
}

// Не ломать эту консту, она выводит данные в таблицу привилегий на главной странице
export const table_data: SubscriptionTableData[] = [
  {
    key: format.generateId(10) as string,
    name: 'Возможность публиковать работы отложено',
    access: {
      forDefault: false,
      forSubscriber: true
    }
  }
]