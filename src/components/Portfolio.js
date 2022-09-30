import React from 'react'
import Project from './Project'


const Portfolio = () => {


    return (
        <div className='Portfolio container'>
            <h2 className='section-title'>Portfolio</h2>
            <br></br><br></br>
            <Project title='Mint' github='https://github.com/bunt88/Mint'></Project>
            <Project title='DnD Right Here' github='https://github.com/Sercanbrack/dnd-right-here'></Project>
            <Project title='MedTracker' github='https://github.com/ciaragauntt/MedTracker'></Project>
            <Project title='ReadME File Generator' github='https://github.com/Sercanbrack/module-9-challenge'></Project>
            <Project title='WebDev Blog' github='https://github.com/Sercanbrack/webdev-blog' deployed='https://my-webdev-blog.herokuapp.com/'></Project>
            <Project title='My React Portfolio' github='https://github.com/Sercanbrack/sam-react-portfolio'></Project>
            
        </div>
    );
    
}

export default Portfolio