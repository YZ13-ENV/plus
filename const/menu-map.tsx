import { BiCog } from 'react-icons/bi'
import { TiDocumentText } from "react-icons/ti";
import { MenuMapProps } from 'ui'

export const menu: MenuMapProps = [
    {
        type: 'wrapper',
        items: [
            {
                type: 'user'
            },
            {
                type: 'links',
                items: [
                    // {
                    //     link: '/docs',
                    //     icon: TiDocumentText,
                    //     text: 'Документация'
                    // },
                    // {
                    //     link: '/account',
                    //     icon: BiCog,
                    //     text: 'Настройки'
                    // }
                ]
            }
        ]
    },
]