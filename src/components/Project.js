import React from 'react'

const Project = (title, github, link) => {
    return (
    <div className='w-100 project' id='project'>
        <h3 id='project-title'>{title}</h3>
    </div>
    )
}

export default Project

