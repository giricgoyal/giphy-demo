import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import GridItem from '../index'

describe('<GridItem />', () => {
    let container, getByTestId
    const onClickHander = jest.fn()

    beforeEach(() => {
        ;({ container, getByTestId } = render(
            <GridItem id="bugs-bunny" onClick={onClickHander}>
                <div>Bugs Bunny</div>
            </GridItem>,
        ))
    })

    test('should match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('onClick', () => {
        describe('when clicked', () => {
            beforeEach(() => {
                fireEvent.click(getByTestId('grid-item'))
            })

            test('should call the onClickHandler', () => {
                expect(onClickHander).toHaveBeenCalledWith('bugs-bunny')
            })
        })
    })
})
