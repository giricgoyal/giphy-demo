import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Sidebar, { Props } from '../index'

describe('<Sidebar />', () => {
    let container, getAllByTestId
    const onSidebarItemClickHandler = jest.fn()

    const defaultProps: Props = {
        items: ['captain_america', 'black_widow', 'thor'],
        selectedItem: 'thor',
        onSidebarItemClick: onSidebarItemClickHandler,
    }

    beforeEach(() => {
        ;({ container, getAllByTestId } = render(<Sidebar {...defaultProps} />))
    })

    test('should match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('onSidebarItemClick', () => {
        describe('when an item is clicked', () => {
            beforeEach(() => {
                fireEvent.click(getAllByTestId('sidebar-item')[1])
            })

            test('should call the onSidebarItemClick', () => {
                expect(onSidebarItemClickHandler).toHaveBeenCalledWith('black_widow')
            })
        })
    })
})
