var elOpenModalBtn = document.querySelector(".site-header__bottom-link");
var elOpenModal = document.querySelector(".modal");
var elCloseModal = document.querySelector(".modal__btn");
var elOpenItem = document.querySelector(".articles__item--active");
var elAddItem = document.querySelectorAll(".articles__item");

elOpenModalBtn.addEventListener("click", function(){
    elOpenModal.classList.add("modal-open");
});

elCloseModal.addEventListener("click", function(){
    elOpenModal.classList.remove("modal-open");
});


elAddItem.forEach(function(item) {

    item.addEventListener("click", function(){

        elAddItem.forEach(function(item){
            item.classList.remove("articles__item--active")
        })

        item.classList.add("articles__item--active")
    })

});