import {useState, useParams} from 'react'

import './Edit.css'



export default function Edit(){

	const {id} = useParams()

    const url = 'http://localhost:3000/books/' + id

	const {data: book} = useFetch(url)

    const [title, setTitle] = useState('')

    const [author, setAuthor] = useState('')

    const [genres, setGenres] = useState([])

	const [newGenre, setNewGenre] = useState('')

    const genreInput = useRef(null)

    const [topic, setTopic] = useState('')

const history = useHistory

const [postData, data, error] = useFetch(url, "POST")



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

        <div className='edit'>

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

                    <textarea onChange={(e) => setTopic(e.target.value)} value="topic" required>{book.topic}</textarea>

                </label>

                <button className='btn'>Send</button>

            </form>

        </div>

    )

}