import { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react'
import { GIF_DATA, GIF_LIST, API_PARAMS } from '../../types'

function useFetch(
    api: (params: API_PARAMS) => Promise<GIF_DATA>,
    params: API_PARAMS,
    mergeResponse: boolean,
): {
    loading: boolean
    error: string
    response: GIF_LIST
    setResponse: Dispatch<SetStateAction<GIF_LIST>>
    setError: Dispatch<SetStateAction<string>>
} {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [response, setResponse] = useState([])

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true)
            await setError('')
            const { data } = await api(params)
            await setResponse((prev) => (mergeResponse ? [...prev, ...data] : data))
            setLoading(false)
        } catch (err) {
            setError(err)
        }
    }, [api, params])

    useEffect(() => {
        sendQuery()
    }, [api, params, sendQuery])

    return { loading, error, response, setResponse, setError }
}

export default useFetch
