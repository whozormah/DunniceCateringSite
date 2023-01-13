//hide and display FAQs

const faq = document.querySelectorAll('.faqs');
faq.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //change plus Icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'uil uil-angle-right-b'){
            icon.className = 'uil uil-angle-down';
        }
        else{
            icon.className = 'uil uil-angle-right-b';
        }
    })
})