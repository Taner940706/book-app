import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useFetch} from '../../hooks/useFetch'

import './Book.css'

export default function Book(){
    const {id} = useParams()
    const url = 'http://localhost:3000/books/' + id
    const {error, isPending, data: book} = useFetch(url)
	const [list, setList] = useState(book);
	const navigate = useNavigate();

	const handleRemove = (id) =>{
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
}

const navigateToEditForm = () => {
    navigate('/edit/{id}');
  };

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
		<button type="button" onClick={() => handleRemove(book.id)}>
            Remove
          </button>
          <button onClick={navigateToEditForm}>Edit book</button>
                </>
            )}
        </div>
    )
}