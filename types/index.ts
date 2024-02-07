export type SearchResult = ShotSearchResult | NoteSearchResult | EventSearchResult

export type PromoCode = {
    code: string
    expiredAt: number
    onlyFor?: string
    monthCount?: number
}
export type DocPromoCode = { doc_id: string } & PromoCode
export type ShotSearchResult = {
    type: 'shots'
    user: ShortUserData | null
    items: ShotData[]
}
export type NoteSearchResult = {
    type: 'notes'
    user: ShortUserData | null
    items: NoteType
}
export type EventSearchResult = {
    type: 'events'
    user: ShortUserData | null
    items: CalendarEvent
}

export type TextBlock = {
    type: 'text'
    text: string
    size: 0 | 1 | 2 | 3
    align: 'left' | 'center' | 'right',
    isBold: boolean
    isItalic: boolean
}

export type ImageBlock = {
    type: 'image',
    link: string
}

export type VideoBlock = {
    type: 'video',
    link: string
}

export type ShotGridBlock = {
    type: 'shotGrid',
    ids: string[]
}

export type CommentBlockNoAnswers = Omit<CommentBlock, 'answers'>

export type CommentBlock = {
    id: string
    authorId: string
    text: string
    createdAt: number
    answers: CommentBlockNoAnswers[]
}

export type Thumbnail = {
    width: string
    height: string
    link: string
}

export type ShotData = {
    enableMdSyntax?: boolean,
    isDraft: boolean
    authorId: string
    title: string
    rootBlock: ImageBlock | VideoBlock
    blocks: (TextBlock | ImageBlock | VideoBlock | ShotGridBlock)[]
    createdAt: number
    likes: string[]
    views: { uid: string, createdAt: number }[]
    comments: CommentBlock[]
    needFeedback: boolean
    tags: string[]
    thumbnail: Thumbnail | null
}

export type DocShotData = { doc_id: string } & ShotData

export type ShortUserData = {
    photoUrl: string
    displayName: string
    email: string
    isSubscriber: boolean
}

export type CalendarEvent = {
    key: string // as 'dd-MM-yyyy'
    title: string
    description: string
    startDate: number // converted toSeconds()
    endDate: number // converted toSeconds()
    pinnedItems?: [] // Думаю просто id с референсом на тип
}

export type DocCalendarEvent = { event_id: string } & CalendarEvent

export type NoteType = {
    title: string
    isPinned: boolean
    createdAt: number
    blocks: (HeadingBlock | NoteTextBlock | ListBlock | TaskListBlock)[]
    authorId: string
}

export type DocNoteType = { doc_id: string } & NoteType

export type NoteTextBlock = {
    type: 'text',
    text: string
}

export type HeadingBlock = {
    type: 'heading',
    text: string
}

export type TaskListItem = {
    checked: boolean
    text: string
}
export type ListItem = {
    text: string
}

export type TaskListBlock = {
    type: 'task-list'
    title: string
    list: TaskListItem[]
}

export type ListBlock = {
    type: 'list'
    title: string
    list: ListItem[]
}