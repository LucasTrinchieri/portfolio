import { BookInfo } from "../../types/types"
import { Link } from "../link"

export default function Book({book}: {book: BookInfo}){
  const img_url = book.published_works && book.published_works[0].cover_art_url
  return(
    <Link 
      to='/book-details'
      className="book"
      state={book}
    >
      <img src={img_url} alt={book.title} className="img" />
    </Link>
  )
}