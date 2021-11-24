import * as React from 'react'
import { ReactElement } from 'react'
import Toast from 'react-bootstrap/Toast'

export type Props = {
    show?: boolean
    children: ReactElement
    onClose?: () => void
}

export default function Notification(props: Props): ReactElement {
    const { show, children, onClose } = props

    return (
        <Toast show={show} onClose={onClose} autohide className="notification" bg="danger">
            <Toast.Body>{children}</Toast.Body>
        </Toast>
    )
}
