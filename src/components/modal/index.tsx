import * as React from 'react'
import { ReactElement, useEffect } from 'react'
import Icon from '../icon'

export type Props = {
    children?: ReactElement
    title?: string
    isVisible?: boolean
    onClose?: () => void
}

export default function Modal(props: Props): ReactElement {
    const { children, isVisible, title, onClose } = props

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isVisible])

    if (!isVisible) {
        return null
    }

    return (
        <>
            <div className="modal-overlay" data-testid="modal-overlay"></div>
            <div className="modal" data-testid="modal">
                <div className="modal__header">
                    <div className="modal__header__title">{title}</div>
                    <Icon icon="cross" className="modal__header__close" data-testid="modal-close" onClick={onClose} />
                </div>
                <div className="modal__body">{children}</div>
            </div>
        </>
    )
}
