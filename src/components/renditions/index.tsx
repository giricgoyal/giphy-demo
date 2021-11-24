import * as React from 'react'
import { ReactElement, useState } from 'react'
import { GIF_IMAGES } from '../../types'
import Rendition from './rendition'
import RenditionsSidebar from './sidebar'

export type Props = {
    renditions: GIF_IMAGES
}

export default function Renditions(props: Props): ReactElement {
    const { renditions } = props
    const [selectedRendition, setSelectedRendition] = useState(Object.keys(renditions)[0])

    return (
        <div className="renditions">
            <RenditionsSidebar
                items={Object.keys(renditions)}
                selectedItem={selectedRendition}
                onSidebarItemClick={setSelectedRendition}
            />
            <div className="renditions__body">
                <Rendition data={renditions[selectedRendition]} />
            </div>
        </div>
    )
}
