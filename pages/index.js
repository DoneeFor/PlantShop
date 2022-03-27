const form = document.forms.form;
const closeButton = document.querySelectorAll('.closeAddPopup');
const popup = document.querySelector('.popup');
const button = document.querySelector('.about__form-button');
const preloader = document.querySelector('.preloader');
const table = document.querySelector('.table');
const tablerow = document.querySelector('.table__info');

button.addEventListener('click', function(){
    popup.classList.add('popup_opened');
})

closeButton.forEach(element =>{
    element.addEventListener('click', function(){
        popup.classList.remove('popup_opened');
    })
})

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/todos?userId=5&completed=false')
    .then((res) => res.text())
    .then(data => {
        preloader.classList.add('preloader_onload');
        console.log(data);
        popup.classList.remove('popup_opened');
 
        document.querySelector('#id').innerText = data.id;
        document.querySelector('#title').innerText = data.title;
        table.classList.add('table_opened');  
    })
    .catch((err) => {
        console.log(err);
    })
});    