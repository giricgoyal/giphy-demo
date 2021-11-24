import * as React from 'react'
import { ReactElement } from 'react'

export type Props = {
    data: {
        url?: string
        webp?: string
        mp4?: string
    }
}

export default function Rendition(props: Props): ReactElement {
    const { url, webp, mp4 } = props.data
    return (
        <>
            {(url || webp) && <img src={url || webp} />}
            {!url && !webp && mp4 && <video src={mp4} autoPlay loop />}
        </>
    )
}
