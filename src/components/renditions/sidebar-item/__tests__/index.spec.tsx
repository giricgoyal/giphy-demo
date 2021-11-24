import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import SidebarItem, { Props } from '../index'

describe('<SidebarItem />', () => {
    let container, getByTestId
    const onSelectHandler = jest.fn()

    const defaultProps: Props = {
        item: 'captain_america',
        isActive: false,
        onSelect: onSelectHandler,
    }

    describe('When isActive is false', () => {
        beforeEach(() => {
            ;({ container } = render(<SidebarItem {...defaultProps} />))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When isActive is true', () => {
        beforeEach(() => {
            const props = {
                ...defaultProps,
                isActive: true,
            }
            ;({ container, getByTestId } = render(<SidebarItem {...props} />))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })

        describe('onSelect', () => {
            describe('when clicked', () => {
                beforeEach(() => {
                    fireEvent.click(getByTestId('sidebar-item'))
                })

                test('should call the onSelectHandler', () => {
                    expect(onSelectHandler).toHaveBeenCalledWith('captain_america')
                })
            })
        })
    })
})
