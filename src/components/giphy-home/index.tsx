import * as React from 'react'
import { ReactElement, useCallback, useState } from 'react'
import Container from 'react-bootstrap/Container'
import SearchBar from '../search-bar'
import Grid from '../grid'
import GridItem from '../grid/item'
import { search, trending } from '../../common/api/giphy'
import useFetch from '../../common/hooks/useFetch'
import { debounce } from 'lodash'
import Modal from '../modal'
import Renditions from '../renditions'
import { API_PARAMS, GIF_DATA } from '../../types'

const getData = async (params: API_PARAMS): Promise<GIF_DATA> => {
    const res = params.q ? await search(params) : await trending(params)
    return res
}

export default function GiphyHome(): ReactElement {
    const [searchTerm, setSearchTerm] = useState('')
    const [params, setParams] = useState({
        offset: 0,
        limit: 20,
    })
    const [selectedItem, setSelectedItem] = useState(null)
    const { loading, response, setResponse } = useFetch(getData, params, true)

    const updateFetchParams = useCallback((params) => {
        setParams((prev) => ({ ...prev, ...params }))
    }, [])

    const debouncedUpdateFetchParams = useCallback(debounce(updateFetchParams, 1000), [])

    const handleSearchChange = useCallback(
        (value) => {
            setSearchTerm(value)
            const params = {}
            setResponse([])
            params['offset'] = 0
            params['limit'] = 20
            debouncedUpdateFetchParams({ ...params, q: value })
        },
        [searchTerm],
    )

    const handleLoadMore = useCallback(() => {
        setParams((prev) => ({
            ...prev,
            offset: prev.offset + prev.limit,
        }))
    }, [])

    const handleItemClick = useCallback(
        (id) => {
            setSelectedItem(response.find((item) => item.id === id))
        },
        [response],
    )

    const handleModalClose = useCallback(() => {
        setSelectedItem(null)
    }, [])

    return (
        <>
            <Container className="giphy-home" data-testid="giphy-home">
                <SearchBar value={searchTerm} onChange={handleSearchChange} />
                <Grid
                    isLoading={loading}
                    title={searchTerm ? 'Search results' : 'Trending'}
                    headerIcon={searchTerm ? undefined : 'trending'}
                    columns={4}
                    onLoadMore={handleLoadMore}
                >
                    {response.map((datum) => (
                        <GridItem key={datum.id} id={datum.id} onClick={handleItemClick}>
                            <img src={datum.images['480w_still'].url} className="giphy-home__image" />
                        </GridItem>
                    ))}
                </Grid>
            </Container>
            <Modal
                data-testid="modal"
                isVisible={!!selectedItem}
                title={selectedItem?.title}
                onClose={handleModalClose}
            >
                <Renditions renditions={selectedItem?.images} />
            </Modal>
        </>
    )
}
