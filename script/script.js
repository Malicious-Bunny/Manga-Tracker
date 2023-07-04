let Add= document.getElementById('Add');
let form= document.getElementById('DataForm');
let submit= document.getElementById('submit');
let myLibrary = [];
function Book(title, author, PageNo, read){
    this.title = title;
    this.author = author;
    this.PageNo = PageNo;
    this.read = read;
}
function AddBook(){
    let header= document.querySelector('header');
    let table= document.querySelector('table');
    let bgImg=document.getElementById('bgimg');
    header.classList.add('blur');
    table.classList.add('blur');
    bgImg.classList.add('blur');
    form.style.display = 'block';
    Add.classList.add('blur');
}
function UnBlur(){
    event.preventDefault();
    let header= document.querySelector('header');
    let table= document.querySelector('table');
    let bgImg=document.getElementById('bgimg');
    Add.classList.remove('blur');
    header.classList.remove('blur');
    table.classList.remove('blur');
    bgImg.classList.remove('blur');
    form.style.display = 'none';
    let title= document.getElementById('title').value;
    let author= document.getElementById('author').value;
    let PageNo= document.getElementById('page').value;
    let book= new Book(title,author,PageNo);
    myLibrary.push(book);
    console.log(myLibrary);
}
const changeRead=()=>{
    if(event.target.textContent=='Read'){
        event.target.textContent='Unread';
    }
    else{
        event.target.textContent='Read';
    }
}
const deleteBook=()=>{
    let row= event.target.parentNode.parentNode;
    let tbody= document.getElementById('tbody');
    tbody.removeChild(row);
}
function FillTable(){
   let tbody= document.getElementById('tbody');
    let row= document.createElement('tr');
    let title= document.createElement('td');
    let author= document.createElement('td');
    let PageNo= document.createElement('td');
    let readBtn= document.createElement('button');
    let deleteBtn= document.createElement('button');
    let readDt= document.createElement('td');
    let deleteDt= document.createElement('td');
    readBtn.textContent= 'Read';
    deleteBtn.textContent= 'Delete';
    readBtn.classList.add('read');
    deleteBtn.classList.add('del');
    readBtn.addEventListener('click',changeRead);
    deleteBtn.addEventListener('click',deleteBook);
    readDt.colSpan=3;
    deleteDt.colSpan=3;
    title.colSpan=3;
    author.colSpan=3;
    PageNo.colSpan=3;
    title.textContent= myLibrary[myLibrary.length-1].title;
    author.textContent= myLibrary[myLibrary.length-1].author;
    PageNo.textContent= myLibrary[myLibrary.length-1].PageNo;
    readDt.appendChild(readBtn);
    deleteDt.appendChild(deleteBtn);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(PageNo);
    row.appendChild(deleteDt);
    row.appendChild(readDt);
    tbody.appendChild(row);
}
Add.addEventListener('click',AddBook);
submit.addEventListener('click',UnBlur);
submit.addEventListener('click',FillTable);
