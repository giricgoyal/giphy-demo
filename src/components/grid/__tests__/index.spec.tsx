import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Grid, { Props } from '../index'
import { setupIntersectionObserverMock } from '../../../mocks'

describe('<Grid />', () => {
    let container

    const defaultProps: Props = {
        isLoading: true,
        columns: 3,
        headerIcon: 'cross',
    }

    beforeEach(() => {
        setupIntersectionObserverMock()
    })

    describe('When isLoading is true', () => {
        beforeEach(() => {
            ;({ container } = render(<Grid {...defaultProps}></Grid>))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When isLoading is false', () => {
        beforeEach(() => {
            const props: Props = {
                ...defaultProps,
                isLoading: false,
            }

            ;({ container } = render(
                <Grid {...props}>
                    <div>No time to die</div>
                    <div>Spectre</div>
                    <div>Casino Royale</div>
                    <div>The man with the golden gun</div>
                    <div>Dr. No</div>
                    <div>For your eyes only</div>
                    <div>License to kill</div>
                </Grid>,
            ))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })
})
