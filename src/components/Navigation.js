import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useState, useEffect } from 'react'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'

function Navigation() {
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        console.log(`Set current page to: ${currentPage}`)
    })

    const renderPage = () => {
        switch (currentPage) {
            case 'About Me': {
                return (
                    <AboutMe />
                )
            }
            case 'Portfolio': {
                return (
                    <Portfolio />
                )
            }
            case 'Contact': {
                return (
                    <Contact />
                )
            }
            case 'Resume': {
                return (
                    <Resume />
                )
            }
            default: {
                console.log('Error changing pages')
            }
        }
    }

    return (
        <><Navbar id='the-navbar' sticky='top' style={{
            backgroundColor: "#53A6C4",
            color: "white",
        }}>
            <Container>
                <Navbar.Brand className='title' id='title'>SAM ERCANBRACK</Navbar.Brand>
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
                {renderPage()}
            </div></>
    );

}

export default Navigation