import BookDetails from "../components/books/bookDetails";
import Navbar from "../components/navbar/navbar";

export default function BookDetailsPage({data}:{data: any}){
  return (
    <>
    <Navbar />
    <BookDetails data={data}/>
    </>
  )
}