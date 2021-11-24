import * as React from 'react'
import Container from 'react-bootstrap/Container'
import GiphyHome from '../giphy-home'
import Topbar from '../topbar'

export default function App(): React.ReactElement {
    return (
        <Container className="page">
            <Topbar />
            <GiphyHome />
        </Container>
    )
}
