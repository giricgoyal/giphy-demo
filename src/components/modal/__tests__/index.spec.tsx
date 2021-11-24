import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Modal, { Props } from '../index'

describe('<Modal />', () => {
    let container
    const onCloseHandler = jest.fn()

    const defaultProps: Partial<Props> = {
        title: 'Some modal',
        onClose: onCloseHandler,
    }

    describe('When isVisible is false', () => {
        let classListRemoveSpy
        beforeEach(() => {
            classListRemoveSpy = jest.spyOn(document.body.classList, 'remove')
            ;({ container } = render(
                <Modal {...defaultProps}>
                    <div>I am Thor! God of thunder.</div>
                </Modal>,
            ))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })

        test('should call the document.body.classList.add with overflow-hidden', () => {
            expect(classListRemoveSpy).toHaveBeenCalledWith('overflow-hidden')
        })
    })

    describe('When isVisible is true', () => {
        let classListAddSpy

        beforeEach(() => {
            classListAddSpy = jest.spyOn(document.body.classList, 'add')

            const props: Props = {
                ...defaultProps,
                isVisible: true,
            }

            ;({ container } = render(
                <Modal {...props}>
                    <div>I am Thor! God of thunder.</div>
                </Modal>,
            ))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })

        test('should call the document.body.classList.remove with overflow-hidden', () => {
            expect(classListAddSpy).toHaveBeenCalledWith('overflow-hidden')
        })

        describe('onClose', () => {
            describe('When clicked', () => {
                beforeEach(() => {
                    fireEvent.click(screen.getByTestId('modal-close'))
                })

                test('Should call the onCloseHandler', () => {
                    expect(onCloseHandler).toHaveBeenCalledTimes(1)
                })
            })
        })
    })
})
