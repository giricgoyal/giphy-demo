import * as React from 'react'
import { ReactElement } from 'react'
import * as Icons from '../../icons'

export type ValidIcons = 'cross' | 'search' | 'trending'

const icons: { [icon in ValidIcons]: HTMLElement } = {
    cross: Icons.crossIcon,
    search: Icons.searchIcon,
    trending: Icons.trendingIcon,
}

export type Props = {
    className?: string
    'data-testid'?: string
    icon: ValidIcons
    onClick?: () => void
}

export default function Icon(props: Props): ReactElement {
    const { className, 'data-testid': dataTestId, icon, onClick } = props
    const iconData = icons[icon]
    const href = `#${iconData.id}`

    return (
        <svg className={`${className} icon`} data-testid={dataTestId} onClick={onClick}>
            <use xlinkHref={href} />
        </svg>
    )
}
