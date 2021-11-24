import * as React from 'react'
import { ReactElement, useCallback } from 'react'

export type Props = {
    children: ReactElement
    id: string
    onClick: (string) => void
}

export default function GridItem(props: Props): ReactElement {
    const { children, id, onClick } = props

    const handleOnClick = useCallback(() => {
        onClick(id)
    }, [])

    return (
        <div className="grid__item cursor-pointer" data-testid="grid-item" onClick={handleOnClick}>
            {children}
        </div>
    )
}
