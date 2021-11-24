import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Icon, { Props } from '../index'

describe('<Icon />', () => {
    let container, getByTestId
    const onClickHander = jest.fn()

    const defaultProps: Props = {
        className: 'some-class',
        'data-testid': 'icon',
        icon: 'cross',
        onClick: onClickHander,
    }

    beforeEach(() => {
        ;({ container, getByTestId } = render(<Icon {...defaultProps} />))
    })

    test('should match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('onClick', () => {
        describe('when clicked', () => {
            beforeEach(() => {
                fireEvent.click(getByTestId('icon'))
            })

            test('should call the onClickHandler', () => {
                expect(onClickHander).toHaveBeenCalled()
            })
        })
    })
})
