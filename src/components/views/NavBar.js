import React from 'react'

function NavBar() {
    return (
        <div className='container'  style={{margin: '10px 50px',  padding: '0'}}>
            <div className='row'>
                <div className='col-md-10'>
                    <h1 className='AboutText'>D O N A L D</h1>
                </div>
                <div className='col-md-2'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li style={{marginLeft: '15px'}}><a href='#Projects'>Projects</a></li>
                        <li style={{marginLeft: '15px'}}><a href='#'>About</a></li>
                        <li style={{marginLeft: '15px'}}><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
