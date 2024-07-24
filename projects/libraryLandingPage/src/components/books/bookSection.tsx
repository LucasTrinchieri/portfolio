import { useState, useEffect } from "react"
import { getBooks } from "../../logic/fetch"
import { ApiResult } from "../../types/types"
import Book from "./book"
import Filters from "../filters/filters"
import NavButton from "../navButton"

export default function BookSection() {
  const [books, setBooks] = useState<ApiResult | undefined>({})
  const [filters, setFilters] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchBooks(params = ''){
      try{
        const books = await getBooks({params})
        setBooks(books)
      }catch{
        new Error('Error fetching books')
      }
    }
    fetchBooks(filters)
  }, [filters])

  const handleSubmit = (filters: Record<string, string>) => {
    const queryParams = new URLSearchParams(filters).toString()
    setFilters(queryParams)
  }

  const handlePageChange = (target: any) => {
    const actualPage = page
    const newPage = actualPage + parseInt(target.value)
    
    setPage(newPage)

    let newFilters = filters
    if (newFilters) {
      newFilters += `&page=${newPage}`
    }else{
      newFilters += `?page=${newPage}`
    }

    const queryParams = new URLSearchParams(newFilters).toString()
    setFilters(queryParams)
  }

  console.log(filters)

  return(
    <>
    <Filters onSubmit={handleSubmit} />
    <section className='book-section'>
      {
        books && books.results && books.results.length > 0 ? 
        books.results.map((book, index) => {
          return (
            <Book book={book} key={index}/>
          )
        })
        :
        <h1 className="no-results">There is no book with those properties</h1>
      }
    </section>
    <NavButton onPageChange={handlePageChange}/>
    <footer className="footer">
      <p className="message">¡Gracias por ver el contenido!</p>
      <p className="author">Lucas Trinchieri</p>
    </footer>
    </>
  )
}