import {Link} from 'react-router-dom'

import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar(){
    return (
        <div className='navbar'>
            <nav>
                <Link to="/">
                    <h1>Book App</h1>
                </Link>
                <Link to="/create">
                    <h1>Create Book</h1>
                </Link>
                <Searchbar />
            </nav>

        </div>
    )
}