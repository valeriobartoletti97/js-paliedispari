
const btn = document.querySelector('button')
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert')

/* PALINDROMA */

btn.addEventListener('click',function(){
   let wordUser = (inputEl.value).toLowerCase();
   console.log(wordUser)
   console.log(wordUser.length)
   let newString = ''
   for(let i = wordUser.length - 1; i >= 0; i--){
       console.log(wordUser[i])
       newString += wordUser[i]
   }
   console.log(newString)
})


let stringa = 'casa'

