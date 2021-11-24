import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../index'
import { setupIntersectionObserverMock } from '../../../mocks'

describe('<App />', () => {
    let container
    beforeEach(() => {
        setupIntersectionObserverMock()
        ;({ container } = render(<App />))
    })

    test('should match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
