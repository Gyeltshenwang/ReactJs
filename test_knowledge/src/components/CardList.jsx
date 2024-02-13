
import { useBookContext } from "../hook/hooks_book_context"
import ShowCard from "./ShowCard"
function CardList() {
    const {books} = useBookContext()
  return (
    <div>
        {books.map(book => <ShowCard key={book.id} book = {book} />)}
       
       {/*  this is the card components  */}
    </div>
  )
}

export default CardList