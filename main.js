const readMoreBtn = document.querySelector('.btn');
const read = document.querySelector('.read');

readMoreBtn.addEventListener('click',()=>{
 read.classList.toggle('show-more');
 if (readMoreBtn.innerText == "Read More") {
    readMoreBtn.innerText = "Read Less";
} else {
    readMoreBtn.innerText = "Read More";
}
});


