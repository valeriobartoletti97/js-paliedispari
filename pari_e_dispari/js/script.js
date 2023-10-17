const btnSuccess = document.querySelector('.btn-success');
const inputEl = document.getElementById('data');
const alertEvenOdd = document.querySelector('.bg-danger');
const selectNumber = document.querySelector('.bg-success');
const finalResult = document.getElementById('final-result');

/* PARI E DISPARI */
playEvenOdd()
function playEvenOdd(){
    btnSuccess.addEventListener('click', function(){
        let evenOdd = (inputEl.value).toLowerCase();
        if(evenOdd === 'pari' || evenOdd === 'dispari'){
            const btnUserNumber = document.querySelector('.btn-dark');
            alertEvenOdd.classList.add('d-none');
            selectNumber.classList.remove('d-none');
            btnUserNumber.addEventListener('click',function(){
                const numberEl = document.getElementById('user-number');
                let numberChosen = parseInt(numberEl.value);
                if(numberChosen < 6 && numberChosen > 0){
                    if((evenOdd === 'pari' && isEven(numberChosen + (getRndInteger(1,5)))) || ((evenOdd === 'dispari' && !isEven(numberChosen + (getRndInteger(1,5)))))){
                        classAndText('bg-success', 'Complimenti hai vinto!')
                    } else {
                        classAndText('bg-danger', 'Oh no.. hai perso!')
                    }
                    finalResult.classList.remove('d-none');
                } else{
                    classAndText('bg-danger', 'Sicuro sia un numero da 1 a 5? Riprova...')
                }
            })
        } else{
            selectNumber.classList.add('d-none');
            alertEvenOdd.classList.remove('d-none');
        }
    });
}

/*  functions  */
function classAndText(myClass,myText){
    finalResult.className = myClass;
    finalResult.innerText = myText;
}