import React from 'react'
import { act, fireEvent, render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import GiphyHome from '../index'
import * as apis from '../../../common/api/giphy'
import { setupIntersectionObserverMock } from '../../../mocks'

describe('<GiphyHome />', () => {
    let container, getByTestId
    let trendingSpy, searchSpy

    beforeEach(() => {
        setupIntersectionObserverMock()
        trendingSpy = jest.spyOn(apis, 'trending').mockImplementation(() =>
            Promise.resolve({
                data: [
                    {
                        id: '1',
                        images: {
                            original: {
                                url: 'https://www.superman.com/img.gif',
                            },
                            '480w_still': {
                                url: 'https://www.superman.com/img.gif',
                            },
                        },
                        title: 'test1',
                    },
                ],
            }),
        )
        searchSpy = jest.spyOn(apis, 'search').mockImplementation(() =>
            Promise.resolve({
                data: [
                    {
                        id: '1',
                        images: {
                            original: {
                                url: 'https://www.batman.com/img.gif',
                            },
                            '480w_still': {
                                url: 'https://www.batman.com/img.gif',
                            },
                        },
                        title: 'meh',
                    },
                ],
            }),
        )
        ;({ container, getByTestId } = render(<GiphyHome />))
    })

    test('should match snapshot', async () => {
        await waitFor(() => {
            expect(container).toMatchSnapshot()
        })
    })

    test('should call the trending api', async () => {
        await waitFor(() => {
            expect(trendingSpy).toHaveBeenCalledWith({
                offset: 0,
                limit: 20,
            })
        })
    })

    test('should not render the modal', () => {
        expect(screen.queryByTestId('modal-overlay')).toEqual(null)
        expect(screen.queryByTestId('modal')).toEqual(null)
    })

    describe('When search is used', () => {
        beforeEach(() => {
            act(() => {
                fireEvent.change(getByTestId('input'), {
                    target: {
                        value: 'Meh',
                    },
                })
            })
        })

        test('should call the search api', async () => {
            await waitFor(() => {
                expect(searchSpy).toHaveBeenCalledWith({
                    q: 'Meh',
                    offset: 0,
                    limit: 20,
                })
            })
        })

        test('should match snapshot', async () => {
            await waitFor(() => {
                expect(screen.getByTestId('giphy-home')).toMatchSnapshot()
            })
        })
    })

    describe('Modal', () => {
        describe('When an item is clicked', () => {
            beforeEach(() => {
                fireEvent.click(screen.getAllByTestId('grid-item')[0])
            })

            test('should match snapshot', async () => {
                await waitFor(() => {
                    expect(screen.getByTestId('modal')).toMatchSnapshot()
                })
            })

            describe('When modal is closed', () => {
                beforeEach(() => {
                    fireEvent.click(screen.getByTestId('modal-close'))
                })

                test('should not render the modal', () => {
                    expect(screen.queryByTestId('modal-overlay')).toEqual(null)
                    expect(screen.queryByTestId('modal')).toEqual(null)
                })
            })
        })
    })

    // describe.skip('When tending api resolves', () => {
    //     beforeEach(() => {
    //         trendingSpy.mockImplementation(() =>
    //             Promise.resolve({
    //                 data: [],
    //                 pagination: {},
    //             }),
    //         )
    //     })

    //     test('should match snapshot', () => {})
    // })
})
