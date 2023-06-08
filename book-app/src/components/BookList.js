import {Link} from 'react-router-dom'
import './BookList.css'

export default function BookList({books}){

    if (books.length === 0){
        return <div className='error'>No books found!</div>
    }

    return (
        <div className='book-list'>
            {books.map(book => (
                <div key={book.id} className="card">
                    <h3>{book.title}</h3>
                    <p>{book.genres}</p>
                    <p>{book.author}</p>
                    <div>{book.description.substring(0,10)} ... </div>
                    <Link to={`/books/${book.id}`}>Read this</Link>
                    </div>
            ))}
        </div>
    )
}