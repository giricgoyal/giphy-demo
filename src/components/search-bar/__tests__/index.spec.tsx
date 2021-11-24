import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import SearchBar, { Props } from '../index'

describe('<SearchBar />', () => {
    let container, getByTestId
    const onChangeHandler = jest.fn()

    const defaultProps: Props = {
        value: '',
        onChange: onChangeHandler,
    }

    describe('When value is empty', () => {
        beforeEach(() => {
            ;({ container } = render(<SearchBar {...defaultProps} />))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When value is provided', () => {
        let props: Props
        beforeEach(() => {
            props = {
                ...defaultProps,
                value: 'Happy',
            }
            ;({ container, getByTestId } = render(<SearchBar {...props} />))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })

        describe('onChange', () => {
            describe('When input value is changed', () => {
                beforeEach(() => {
                    fireEvent.change(getByTestId('input'), {
                        target: {
                            value: 'Meh',
                        },
                    })
                })

                test('Should call onChangeHandler with correct value', () => {
                    expect(onChangeHandler).toHaveBeenCalledWith('Meh')
                })
            })

            describe('When input clear icon is clicked', () => {
                beforeEach(() => {
                    fireEvent.click(getByTestId('clear'))
                })

                test('should call onChangeHandler with ""', () => {
                    expect(onChangeHandler).toHaveBeenCalledWith('')
                })
            })
        })
    })
})
