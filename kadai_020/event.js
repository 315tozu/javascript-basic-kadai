const btnId = document.getElementById('btn');

const textWord = document.getElementById('text');

btnId.addEventListener('click', () =>{
  textWord.textContent = 'ボタンをクリックしました'
});