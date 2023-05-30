import {useFetch} from '../../hooks/useFetch'

import './Home.css'

export default function Home(){
    const {data, isPending, error} = useFetch('http://localhost:3000/books')
    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && data.map(book => (
                <h2 key={book.id}>{book.title}</h2>
            ))}
        </div>
    )
}