import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Notification, { Props } from '../index'

describe('<Notification />', () => {
    let container
    const onCloseHandler = jest.fn()

    const defaultProps: Partial<Props> = {
        show: true,
        onClose: onCloseHandler,
    }

    describe('When show is true', () => {
        beforeEach(() => {
            ;({ container } = render(
                <Notification {...defaultProps}>
                    <div>I am Thor! God of thunder.</div>
                </Notification>,
            ))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When show is false', () => {
        beforeEach(() => {
            const props: Partial<Props> = {
                show: false,
            }

            ;({ container } = render(
                <Notification {...defaultProps} {...props}>
                    <div>I am Thor! God of thunder.</div>
                </Notification>,
            ))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })
})
