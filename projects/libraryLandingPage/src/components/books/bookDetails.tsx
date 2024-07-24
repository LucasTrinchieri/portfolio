import { BookInfo } from "../../types/types";

const NO_DATA_ERROR_MESSAGE = {
  title: 'No title for this book',
  summary: 'No summary for this book',
  author: 'No author for this book'
}

export default function BookDetails({data}:{data: BookInfo}){  
  if (!data) {
    return <h1>No book data</h1>;
  }

  return (
    <>
    <section className="book-details">
      <img className='img' src={data.published_works && data.published_works[0].cover_art_url} alt={data.title} />
      <section className="info">
        <h1 className="title">{data.title ? data.title : NO_DATA_ERROR_MESSAGE.title}</h1>
        <p className="author"><strong>Autor: </strong>{data.author_first_names && data.author_last_names ? `${data.author_first_names[0]} ${data.author_last_names[0]}` : NO_DATA_ERROR_MESSAGE.author}</p>
        <strong>Resumen:</strong>
        <p className="descripcion">{data.summary ? data.summary : NO_DATA_ERROR_MESSAGE.summary}</p>
      </section>
    </section>
    </>
  );
}