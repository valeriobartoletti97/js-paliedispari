
const btnSuccess = document.querySelector('.btn-success');
const inputEl = document.getElementById('data');
const alertEvenOdd = document.querySelector('.bg-danger');
/* PARI E DISPARI */

btnSuccess.addEventListener('click', function(){
    let evenOdd = (inputEl.value).toLowerCase();
    if(evenOdd === 'pari' || evenOdd === 'dispari'){
        alertEvenOdd.classList.add('d-none');
        let numberEl = document.getElementById('user-number');
        let numberUser = parseInt(numberEl.value);
        const selectNumber = document.querySelector('.bg-success');
        selectNumber.classList.remove('d-none')
       

    } else{
        alertEvenOdd.classList.remove('d-none');
    }
});
