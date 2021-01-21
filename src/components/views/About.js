import React from 'react'
import img from '/Users/donald/Documents/Codes/portfolio/src/assets/images/hero.svg'

function About() {
    return (
        <div style={{border: '1px solid #000'}}>
            <div style ={{margin: '150px 50px'}} className='text-center'>
                <h1 className='AboutText'>I'm Donald, a Front-end Developer</h1>
                <h4 className='AboutText'>I bring designs to life through coding and I love what I do</h4>
                <img src={img} alt='serenre' style={{margin: '50px auto'}} />
            </div>
        </div>
    )
}

export default About
