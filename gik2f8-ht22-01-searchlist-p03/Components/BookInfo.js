
const BookInfo = (book) => {
  let html = `
  <div id="bookDetail" class="book__details absolute rounded p-2 w-1/6 top-10       
  flex flex-col text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-2	border-gray-900	">
      <img src="${book.coverImage}" alt="Bokomslag saknas"> 
  </div>
  `;

  return html;
}
