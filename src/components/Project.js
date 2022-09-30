import React from 'react'

const Project = (props) => {

    const handleOnClick = (url) => {
        window.open(url, "_blank")
    }

    return (
        <div className='w-100 project' id='project-div'>
            <h3 id='project-title'>{props.title}</h3>
            <button type='button' className='btn btn-light' id='repo-button' onClick={() => handleOnClick(props.github)}>GitHub</button>
            <button type='button' className='btn btn-dark' id='repo-button' onClick={() => handleOnClick(props.deployed)}>Deployed</button>
        </div>
    )
}

export default Project

