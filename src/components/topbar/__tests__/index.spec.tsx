import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Navbar from '../index'

describe('<Navbar />', () => {
    let container

    beforeEach(() => {
        ;({ container } = render(<Navbar />))
    })

    test('should match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
