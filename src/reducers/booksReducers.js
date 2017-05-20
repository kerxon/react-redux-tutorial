'use strict';

//step 3 define reducers
export function booksReducers(state = {
  books: [
    {
      _id: 1,
      title: 'book title',
      description: 'book description',
      price: 33.00
    },{
      _id: 2,
      title: 'this is the book title',
      description: 'this is the book description',
      price: 43.00
    },{
      _id: 3,
      title: 'other book title',
      description: 'other book description',
      price: 53.00
    }]
  }, action) {

  switch(action.type){
    case "GET_BOOKS":
      return {...state, books: [...state.books]}
      break;

    case "POST_BOOK":
      // let books = state.books.concat(action.payload);
      // return books; or use spread operator->
      return {books: [...state.books, ...action.payload]}
      break;

    case "DELETE_BOOK":
      // create copy of current array of books
      const currentBookToDelete = [...state.books];
      // determine which index to delete
      const indexToDelete = currentBookToDelete.findIndex(
        function(book){
          return book._id == action.payload;
      })
      //use slice to remove book from array at specified index
      return { books: [...currentBookToDelete.slice(0, indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 1)] }
      break;

    case "UPDATE_BOOK":
      const currentBookToUpdate = [...state.books];
      const indexToUpdate = currentBookToUpdate.findIndex(
        function(book){
          return book._id === action.payload._id;
      })
      // spread not working here with babel preset-stage-0 ?
      // const newBookToUpdate = {
      //   ...currentBookToUpdate[indexToUpdate],
      //   title: action.payload.title
      // }
      const newBookToUpdate = currentBookToUpdate[indexToUpdate];
      newBookToUpdate.title = action.payload.title;

      // console.log("what is the newBookToUpdate? ", newBookToUpdate);
      return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
        ...currentBookToUpdate.slice(indexToUpdate + 1)
      ]}
  }
  return state;
}
