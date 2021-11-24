import * as React from 'react'
import { ReactElement } from 'react'
import RenditionsSidebarItem from '../sidebar-item'

export type Props = {
    items: Array<string>
    selectedItem: string
    onSidebarItemClick: (string) => void
}

export default function RenditionsSidebar(props: Props): ReactElement {
    const { items, selectedItem, onSidebarItemClick } = props

    return (
        <div className="renditions__sidebar" data-testid="sidebar">
            {items.map((item) => (
                <RenditionsSidebarItem
                    key={item}
                    item={item}
                    isActive={selectedItem === item}
                    onSelect={onSidebarItemClick}
                ></RenditionsSidebarItem>
            ))}
        </div>
    )
}
