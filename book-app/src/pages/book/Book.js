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
            {book && (
                <>
                <h2 className='page-title'>{book.title}</h2>
                <p className='author'>{book.author}</p>
                <ul>
                    {book.genres.map(genre => <li key={genre}>{genre}</li>)}
                </ul>
                <p className='topic'>{book.topic}</p>
                </>
            )}
        </div>
    )
}