import {useEffect, useRef, useState} from 'react'
import {useFetch} from '../../hooks/useFetch'
import {useHistory} from "react-router-dom"
import './Create.css'

export default function Create(){
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genres, setGenres] = useState([])
    const [newGenre, setNewGenre] = useState('')
    const genreInput = useRef(null)
    const [topic, setTopic] = useState('')
    const history = useHistory

    const [postData, data, error] = useFetch('http://localhost:3000/books', "POST")

    const handleSubmit = (e) => {
        e.preventDefault()
        postData({title, author, genres, topic})
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const x = newGenre.trim()

        if (x && !genres.includes(x)){
            setGenres(prevGenre => [...prevGenre, x])
        }
        setNewGenre('')
        genreInput.current.focus()
    }

    useEffect(() => {
        if (data){
            history.push('/')
        }
    }, [data])

    return (
        <div className='create'>
            <h2 className='page-title'>Add New Book</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required></input>
                </label>
                <label>
                    <span>Author:</span>
                    <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} required></input>
                </label>
                <label>
                    <span>Genres:</span>
                    <div className='genres'>
                        <input
                        type="text"
                        onChange={(e) => setNewGenre(e.target.value)}
                        value={newGenre}
                        ref={genreInput}
                        />
                    </div>
                </label>
                <p>Current genres are: {genres.map(i => <em key={i}>{i}, </em>)}</p>
                <label>
                    <span>Topic:</span>
                    <textarea onChange={(e) => setTopic(e.target.value)} value={topic} required></textarea>
                </label>
                <button className='btn'>Send</button>
            </form>
        </div>
    )
}