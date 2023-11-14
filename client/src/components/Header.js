import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Header = () =>
    <header>
        <div className='flex'>
            <Link to="/" className='align-center link'>
                Home
            </Link>
        </div>
        
    </header>

export default withRouter(Header)
