import React from 'react'

type Props = {
    cover?: React.ReactNode
    content?: React.ReactNode
    title: React.ReactNode
}
const AdviceCard = ({ content, cover, title }: Props) => {
    return (
        <div className="h-full relative w-1/4 rounded-2xl flex gap-2 flex-col bg-neutral-900">
            <div className="p-3 z-10 backdrop-blur-sm rounded-2xl">
                { title }
            </div>
            <div className="w-full z-10 h-full flex items-center justify-center">{ content }</div>
            <div className="absolute w-full h-full rounded-2xl overflow-hidden">{ cover }</div>
        </div>
    )
}

export default AdviceCard