import {useState, useParams} from 'react'
import './Edit.css'

export default function Edit(){
	const {id} = useParams()
    const url = 'http://localhost:3000/books/' + id
	const {data: book} = useFetch(url)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genres, setGenres] = useState('')
    const [topic, setTopic] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='create'>
            <h2 className='page-title'>Edit Book</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value="title" required>{book.title}</input>
                </label>
                <label>
                    <span>Author:</span>
                    <input type="text" onChange={(e) => setAuthor(e.target.value)} value="author" required>{book.author}</input>
                </label>
                <label>
                    <span>Genres:</span>
                    <input type="text" onChange={(e) => setGenres(e.target.value)} value="genres" required>{book.genres}</input>
                </label>
                <label>
                    <span>Topic:</span>
                    <textarea onChange={(e) => setTopic(e.target.value)} value="topic" required>{book.topic}</textarea>
                </label>
                <button className='btn'>Send</button>
            </form>
        </div>
    )
}