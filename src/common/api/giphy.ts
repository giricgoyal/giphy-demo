import axios from 'axios'
import { GIF_DATA, API_PARAMS } from '../../types'
import { GIPHY_API_KEY, GIPHY_URL_BASE } from './constants'

type AXIOS_RESPONSE = {
    data: GIF_DATA
}

export const getUrl = (path: string, resource = 'gifs'): string => `${GIPHY_URL_BASE}/${resource}/${path}`

const getData = (url: string, params: API_PARAMS): Promise<AXIOS_RESPONSE> => {
    return axios.get(url, {
        params: {
            api_key: GIPHY_API_KEY,
            ...params,
        },
    })
}

export const search = async ({ q, offset, limit }: API_PARAMS): Promise<GIF_DATA> => {
    try {
        const url = getUrl('search')
        const result: AXIOS_RESPONSE = await getData(url, {
            q,
            offset,
            limit,
        })

        return result.data
    } catch (error) {
        throw error
    }
}

export const trending = async ({ offset, limit }: API_PARAMS): Promise<GIF_DATA> => {
    try {
        const url = getUrl('trending')
        const result = await getData(url, {
            offset,
            limit,
        })

        return result.data
    } catch (error) {
        throw error
    }
}
