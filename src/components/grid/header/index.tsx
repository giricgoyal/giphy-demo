import * as React from 'react'
import { ReactElement } from 'react'

type Props = {
    children: ReactElement | Array<ReactElement>
}

export default function GridHeader(props: Props): ReactElement {
    const { children } = props
    return <div className="grid__header">{children}</div>
}
