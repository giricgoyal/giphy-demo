import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Rendition, { Props } from '../index'

describe('<Rendition />', () => {
    let container

    const defaultProps: Props = {
        data: {},
    }

    describe('When data is {}', () => {
        beforeEach(() => {
            ;({ container } = render(<Rendition {...defaultProps} />))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When url is sent in data', () => {
        beforeEach(() => {
            const props = {
                data: {
                    url: 'https://www.batman.com/portrait.gif',
                },
            }
            ;({ container } = render(<Rendition {...props} />))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When url is not sent in data', () => {
        beforeEach(() => {
            const props = {
                data: {
                    webp: 'https://www.batman.com/portrait.webp',
                    mp4: 'https://www.batman.com/portrait.mp4',
                },
            }
            ;({ container } = render(<Rendition {...props} />))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When neither url or webp is sent in data', () => {
        beforeEach(() => {
            const props = {
                data: {
                    mp4: 'https://www.batman.com/portrait.mp4',
                },
            }
            ;({ container } = render(<Rendition {...props} />))
        })

        test('should match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })
})
