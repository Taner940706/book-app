import {useState} from 'react'
import './Create.css'

export default function Create(){
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genres, setGenres] = useState('')
    const [topic, setTopic] = useState('')

    return (
        <div className='create'>
            <h2 className='page-title'>Add New Book</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value="title" required></input>
                </label>
                <label>
                    <span>Author:</span>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value="author" required></input>
                </label>
                <label>
                    <span>Genres:</span>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value="genres" required></input>
                </label>
                <label>
                    <span>Topic:</span>
                    <textarea onChange={(e) => setTitle(e.target.value)} value="topic" required></textarea>
                </label>
                <button className='btn'>Send</button>
            </form>
        </div>
    )
}