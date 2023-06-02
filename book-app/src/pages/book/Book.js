import {useParams} from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'

import './Book.css'

export default function Book(){
    const {id} = useParams()
    const url = 'http://localhost:3000/books/' + id
    const {error, isPending, data: book} = useFetch(url)
    return(
        <div className='book'>
            {error && <p className='error'></p>}
            {isPending && <p className='loading'>Loading...</p>}
            {book && <h1>{book.title}</h1>}
        </div>
    )
}