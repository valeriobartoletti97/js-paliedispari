
const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

/* PALINDROMA */
myPalindrome()
function myPalindrome(){
    btn.addEventListener('click',function(){
        let wordUser = (inputEl.value).toLowerCase();
        let newString = '';
        for(let i = wordUser.length - 1; i >= 0; i--){
            newString += wordUser[i];
        };
        if(newString === wordUser){
         resetForm('bg-danger','bg-success');
         printResult('bg-success','La parola è palindroma');
        } else {
         resetForm('bg-success','bg-danger')
         printResult('bg-danger','La parola non è palindroma. Riprova')
        };
     })
}
