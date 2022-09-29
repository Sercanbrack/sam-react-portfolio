import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import {useState, useEffect} from 'react'

function Navigation() {
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        console.log(`Set current page to: ${currentPage}`)
    })

    const renderPage = () => {
        console.log('Page change handled.')
        switch (currentPage) {
            case 'About Me': {
                return (

                )
            }
        }
    }

    return (
        <><Navbar id='the-navbar' sticky='top' style={{
            backgroundColor: "#81B5B8",
            color: "white",
        }}>
            <Container>
                <Navbar.Brand className='title' id='title'>Sam Ercanbrack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" display='flex'>
                        <Nav id='nav-items' onClick={() => setCurrentPage('About Me')}>About Me</Nav>
                        <Nav id='nav-items' onClick={() => setCurrentPage('Portfolio')}>Portfolio</Nav>
                        <Nav id='nav-items' onClick={() => setCurrentPage('Contact')}>Contact</Nav>
                        <Nav id='nav-items' onClick={() => setCurrentPage('Resume')}>Resume</Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div>

        </div></>
      );

}

export default Navigation