import axios from 'axios'
import { search, trending } from '../giphy'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('giphy', () => {
    describe('search()', () => {
        let result

        describe('When resolves', () => {
            beforeEach(async () => {
                mockedAxios.get.mockResolvedValue({
                    data: {
                        data: ['some mocked data'],
                    },
                })

                result = await search({
                    q: 'happy',
                    offset: 20,
                    limit: 10,
                })
            })

            test('should call the axios get', () => {
                expect(mockedAxios.get).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/search', {
                    params: { api_key: 'tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ', limit: 10, offset: 20, q: 'happy' },
                })
            })

            test('should return the correct data', () => {
                expect(result).toEqual({
                    data: ['some mocked data'],
                })
            })
        })

        describe('When rejects', () => {
            beforeEach(async () => {
                mockedAxios.get.mockRejectedValue('an error occured')
            })

            test('should throw error', async () => {
                await expect(
                    search({
                        q: 'happy',
                        offset: 20,
                        limit: 10,
                    }),
                ).rejects.toEqual('an error occured')
            })
        })
    })

    describe('trending()', () => {
        let result

        describe('When resolves', () => {
            beforeEach(async () => {
                mockedAxios.get.mockResolvedValue({
                    data: {
                        data: ['some mocked data'],
                    },
                })

                result = await trending({
                    offset: 20,
                    limit: 10,
                })
            })

            test('should call the axios get', () => {
                expect(mockedAxios.get).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/trending', {
                    params: { api_key: 'tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ', limit: 10, offset: 20 },
                })
            })

            test('should return the correct data', () => {
                expect(result).toEqual({
                    data: ['some mocked data'],
                })
            })
        })

        describe('When rejects', () => {
            beforeEach(async () => {
                mockedAxios.get.mockRejectedValue('an error occured')
            })

            test('should throw error', async () => {
                await expect(
                    trending({
                        offset: 20,
                        limit: 10,
                    }),
                ).rejects.toEqual('an error occured')
            })
        })
    })
})
