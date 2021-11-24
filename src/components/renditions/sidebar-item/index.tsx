import { startCase } from 'lodash'
import * as React from 'react'
import { ReactElement, useCallback } from 'react'

export type Props = {
    item: string
    isActive: boolean
    onSelect: (string) => void
}

export default function RenditionsSidebarItem(props: Props): ReactElement {
    const { item, isActive, onSelect } = props

    const handleItemClick = useCallback(() => {
        onSelect(item)
    }, [item])

    return (
        <div
            className={`renditions__sidebar__item ${isActive ? 'active' : ''}`}
            data-testid="sidebar-item"
            onClick={handleItemClick}
        >
            {startCase(item)}
        </div>
    )
}
