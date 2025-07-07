const btnId = document.getElementById('btn');
const textId = document.getElementById('text');

btnId.addEventListener('click', () =>{
setTimeout(() =>{
    textId.textContent = 'ボタンをクリックしました';
  }, 2000);
});