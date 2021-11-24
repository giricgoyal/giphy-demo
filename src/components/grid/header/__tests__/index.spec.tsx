import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import GridHeader from '../index'

describe('<GridHeader />', () => {
    let container

    beforeEach(() => {
        ;({ container } = render(
            <GridHeader>
                <div>Name's Bond! James Bond!</div>
            </GridHeader>,
        ))
    })

    test('should match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
