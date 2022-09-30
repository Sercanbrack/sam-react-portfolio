import React from 'react'
import GitHub from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import StackOverflow from '../assets/stackoverflow.png'

const Footer = () => {

    const handleOnClick = (url) => {
        window.open(url, "_blank")
    }

    return (
        <footer className='Footer fixed-bottom' id='footer'>
            <span>Thank you for visiting! Last updated September 2022</span>
            <div id='logo-container'>
                <img
                    src={GitHub}
                    alt='the github logo'
                    onClick={() => handleOnClick('https://github.com/Sercanbrack')}
                    style={{ maxWidth: '50px' }}
                    fluid='true'
                    className='img-fluid'
                    id='logo'
                ></img>
                <img
                    src={LinkedIn}
                    alt='the linkedin logo'
                    onClick={() => handleOnClick('https://www.linkedin.com/in/samuel-ercanbrack-b41bb21a2/')}
                    style={{ maxWidth: '50px' }}
                    className='img-fluid'
                    id='logo'
                ></img>
                <img
                    src={StackOverflow}
                    alt='the stackoverflow logo'
                    onClick={() => handleOnClick('https://stackoverflow.com/users/20131540/sercanbrack')}
                    style={{ maxWidth: '50px' }}
                    className='img-fluid'
                    id='logo'
                ></img>
            </div>
        </footer>
    );

}

export default Footer