import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Renditions, { Props } from '../index'

describe('<Renditions />', () => {
    let container, getAllByTestId

    const defaultProps: Props = {
        renditions: {
            original: {
                url: 'https://www.avengers.com/angry-hulk.gif',
            },
            downsized: {
                webp: 'https://www.avengers.com/angry-hulk.webp',
            },
            hd: {
                mp4: 'https://www.avengers.com/angry-hulk.mp4',
            },
        },
    }

    beforeEach(() => {
        ;({ container, getAllByTestId } = render(<Renditions {...defaultProps} />))
    })

    test('should match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('When an item is selected', () => {
        beforeEach(() => {
            fireEvent.click(getAllByTestId('sidebar-item')[2])
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })
})
