import { useLocation } from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
import BookList from '../../components/BookList'

import './Search.css'

export default function Search(){

    const queryString = useLocation().search
    const queryParams =  new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/books?q=' + query
    const {error, isPending, data} = useFetch(url)

    return (
        <div>
            <h2 className='page-title'>Book result with "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <BookList books={data} />}
        </div>
    )
}