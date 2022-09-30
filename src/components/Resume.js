import React from 'react'
import ResumePDF from '../assets/Resume.pdf'

const Resume = () => {
    return (
        <div className='Resume container'>
            <h2 className='section-title'>Resume</h2>
            <a className='btn btn-dark' href={ResumePDF} download="sam_ercanbrack_resume">Download my Resume!</a>
        </div>
    );

}

export default Resume