'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);



function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
};


function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));


  const elements = document.querySelectorAll(".book-list__item"); 

  for(let i = 0; i < elements.length; i++){ 

    elements[i].addEventListener("mousemove", (e) => {
      let book = getBookDetails(e.target.id)
      book.then(function (result){
        renderBookItem(result);

          let div = document.getElementById('bookDetail');
          let left = e.pageX + 30;
          let top = e.pageY + -50;
          div.style.left = left + 'px';
          div.style.top = top + 'px';
        
      })
    });


   

    elements[i].addEventListener("mouseleave", () => {
      const existElement = document.getElementById("bookDetail");
      existElement && existElement.remove();
    });


  
  
  }
}


    




function renderBookItem(book){

  const existElement = document.getElementById("bookDetail");
  const root = document.getElementById("root");

  existElement && existElement.remove();

  let html = BookInfo(book);
  
  root.insertAdjacentHTML("afterend", html);
  

}