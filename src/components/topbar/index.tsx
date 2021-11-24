import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Topbar(): React.ReactElement {
    return (
        <Navbar data-testid="navbar">
            <Container>
                <Navbar.Brand href="#">GIPHY-DEMO</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
