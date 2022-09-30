import React from 'react'
import Project from './Project'


const Portfolio = () => {

    const renderProject = async (title, github, link) => {
        return (
            Project(title, github, link)
        )
    }


    return (
        <div className='Portfolio container'>
            <h2 className='section-title'>Portfolio</h2>
            {renderProject('Mint', 'https://github.com/bunt88/Mint', '')}
            {renderProject('DnD Right Here', 'https://github.com/Sercanbrack/dnd-right-here', '')}
            {renderProject('MedTracker', 'https://github.com/ciaragauntt/MedTracker', '')}
            {renderProject('ReadME File Generator', 'https://github.com/Sercanbrack/module-9-challenge')}
            {renderProject('WebDev Blog', 'https://github.com/Sercanbrack/webdev-blog', 'https://my-webdev-blog.herokuapp.com/')}
            {renderProject('React Portfolio', 'https://github.com/Sercanbrack/sam-react-portfolio', '')}
            
        </div>
    );
    
}

export default Portfolio