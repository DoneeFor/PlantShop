const form = document.forms.form;
const closeButton = document.querySelectorAll('.closeAddPopup');
const popup = document.querySelector('.popup');
const button = document.querySelector('.about__form-button');

button.addEventListener('click', function(evt){
    popup.classList.add('popup_opened');
})

closeButton.forEach(element =>{
    element.addEventListener('click', function(element){
        popup.classList.remove('popup_opened');
    })
})

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
});    