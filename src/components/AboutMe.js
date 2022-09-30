import React from 'react'
import AirportSelfie from '../assets/airport-selfie.jpg'

const AboutMe = () => {
    return (
        <div className='AboutMe container'>
            <h2 className='section-title'>About Me</h2>
            <div className='section-body'>
                <div className='image-container'>
                    <img fluid='true' src={AirportSelfie} id='selfie' alt='Me at the Salt Lake City airport, December 2021' className='img-fluid mw-50'></img>
                </div>
                <p className='w-75' id='about-me-body'>
                    Hey there! My name is Samuel Ercanbrack, but most people call me Sam. I'm 21, born and raised in Utah, and
                    just starting out with web development!
                    <br></br><br></br>
                    I absolutely love technology and computers, and I've loved working with them ever since I was a kid.
                    I have quite a bit of experience in building PCs; I've helped build three and build one completely on my own.
                    Some other things I love are music, both listening and playing. AJR is currently my favorite band, and I play the piano and cello!
                    <br></br><br></br>
                    Thanks for reading a little about me! Check out some of my webdev projects in my Portfolio. I can't wait to show you more!
                    <br></br><br></br>
                    -Sam :D
                </p>
            </div>

        </div>
    );

}

export default AboutMe